import { Post } from '../types/post'
import fm from 'front-matter'

const files = import.meta.glob('/posts/**/*.md', { as: 'raw', eager: true }) as Record<string, string>

// Normalize a path like /posts/hello-world.md -> hello-world
const pathToSlug = (path: string): string => {
  const file = path.split('/').pop() || ''
  return file.replace(/\.md$/, '')
}

export function getPostSlugs(): string[] {
  return Object.keys(files).map(pathToSlug)
}

export function getPostBySlug(slug: string): Post {
  const entry = Object.entries(files).find(([path]) => path.endsWith(`${slug}.md`))
  if (!entry) throw new Error(`Post not found for slug: ${slug}`)
  const [_path, raw] = entry
  const parsed = fm<Record<string, any>>(raw)
  return { ...(parsed.attributes || {}), slug, content: parsed.body } as Post
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}



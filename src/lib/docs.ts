import { Doc } from '../types/doc'

const files = import.meta.glob('/docs/**/*.md', { as: 'raw', eager: true }) as Record<string, string>

// Normalize a path like /docs/04-entity-&-operations.md -> entity-operations
// docs/index.md is the landing page and gets the empty slug (/docs)
const pathToSlug = (path: string): string => {
  const file = (path.split('/').pop() || '').replace(/\.md$/, '')
  if (file === 'index') return ''
  return file
    .replace(/^\d+-/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const pathToOrder = (path: string): number => {
  const file = path.split('/').pop() || ''
  if (file === 'index.md') return 0
  const match = file.match(/^(\d+)/)
  return match ? parseInt(match[1], 10) : 99
}

const extractTitle = (content: string, slug: string): string => {
  if (slug === '') return 'Overview'
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : slug
}

const toDoc = ([path, raw]: [string, string]): Doc => {
  const slug = pathToSlug(path)
  return { slug, title: extractTitle(raw, slug), content: raw, order: pathToOrder(path) }
}

export function getAllDocs(): Doc[] {
  return Object.entries(files)
    .map(toDoc)
    .sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string): Doc | null {
  return getAllDocs().find((doc) => doc.slug === slug) || null
}

export function docPath(slug: string): string {
  return slug ? `/docs/${slug}` : '/docs'
}

// Heading ids follow docutils' make_id so anchors from the old Read the Docs
// site (e.g. #time-weight, #split-share) keep working. Like Sphinx, repeated
// headings fall back to id1, id2, ...
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\x00-\x7f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^[-0-9]+|-+$/g, '')
}

type HastNode = {
  type: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

const textOf = (node: HastNode): string =>
  node.type === 'text' ? node.value || '' : (node.children || []).map(textOf).join('')

export function rehypeHeadingIds() {
  return (tree: HastNode) => {
    const used = new Set<string>()
    let counter = 0
    const visit = (node: HastNode) => {
      if (node.type === 'element' && /^h[1-6]$/.test(node.tagName || '')) {
        let id = headingId(textOf(node))
        while (!id || used.has(id)) id = `id${++counter}`
        used.add(id)
        node.properties = { ...node.properties, id }
      }
      node.children?.forEach(visit)
    }
    visit(tree)
  }
}

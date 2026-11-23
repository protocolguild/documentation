import { FC, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts'
import StandaloneNavbar from '../components/StandaloneNavbar'

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })

const BlogMinimal: FC = () => {
  const posts = useMemo(() => getAllPosts(), [])
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    if (terms.length === 0) return posts
    return posts.filter((post) => {
      const haystack =
        `${post.title} ${post.excerpt || ''} ${post.content}`.toLowerCase()
      return terms.every((term) => haystack.includes(term))
    })
  }, [posts, query])

  return (
    <main className="bg-white min-h-screen">
      <StandaloneNavbar />
      <div className="mx-auto w-full max-w-[720px] px-4 pb-24">
        <h1 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)] mb-6">
          Blog
        </h1>

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts"
          aria-label="Search posts"
          className="w-full mb-2 px-0 py-2 bg-transparent border-0 border-b border-[var(--gray-dark)] text-base text-[var(--gray-dark)] placeholder:text-[var(--gray-mid)] focus:outline-none rounded-none"
        />
        <p className="text-sm text-[var(--gray-mid)] mb-6 h-5">
          {query.trim()
            ? `${filtered.length} of ${posts.length} posts`
            : `${posts.length} posts`}
        </p>

        <ul className="list-none p-0 m-0">
          {filtered.map((post) => (
            <li key={post.slug} className="border-t border-gray-200 last:border-b">
              <Link
                to={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-4 no-underline group"
              >
                <span className="text-base sm:text-lg leading-snug text-[var(--gray-dark)] group-hover:underline">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="text-sm text-[var(--gray-mid)] whitespace-nowrap tabular-nums"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="py-8 text-[var(--gray-mid)]">No posts match “{query}”.</p>
        )}
      </div>
    </main>
  )
}

export default BlogMinimal

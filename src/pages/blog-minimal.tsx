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
      <div className="mx-auto w-full max-w-[720px] px-4 pt-6 pb-24">
        <div className="relative mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--gray-mid)] pointer-events-none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts"
            aria-label="Search posts"
            className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-lg text-base text-[var(--gray-dark)] placeholder:text-[var(--gray-mid)] focus:outline-none focus:border-[var(--gray-dark)]"
          />
        </div>
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

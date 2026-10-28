import { FC, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Helmet } from 'react-helmet-async'
import { getAllDocs, getDocBySlug, docPath, rehypeHeadingIds } from '../lib/docs'
import DocSidebar from '../components/DocSidebar'
import StandaloneNavbar from '../components/StandaloneNavbar'

const DocPage: FC = () => {
  const params = useParams()
  const slug = params.slug || ''
  const allDocs = useMemo(() => getAllDocs(), [])
  const doc = useMemo(() => getDocBySlug(slug), [slug])

  if (!doc) return <Navigate to="/docs" replace />

  const currentIndex = allDocs.findIndex((d) => d.slug === slug)
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null
  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>{`${doc.title} | Protocol Guild Docs`}</title>
        <link rel="canonical" href={`${origin}${docPath(doc.slug)}`} />
        <meta property="og:title" content={`${doc.title} | Protocol Guild Docs`} />
        <meta property="og:url" content={`${origin}${docPath(doc.slug)}`} />
      </Helmet>
      <StandaloneNavbar />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar */}
        <aside className="md:w-56 shrink-0">
          <div className="md:sticky md:top-8">
            <DocSidebar docs={allDocs} currentSlug={doc.slug} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <article className="prose prose-neutral prose-lg max-w-none break-words prose-a:break-words prose-code:break-words prose-pre:overflow-x-auto prose-h1:mb-4 prose-h1:mt-0 prose-h2:mt-8 prose-h2:mb-4 prose-headings:scroll-mt-8 prose-img:inline-block">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHeadingIds]}
              components={{
                a: ({ node, href, ...props }) =>
                  href && href.startsWith('/') ? (
                    <Link to={href} {...props} />
                  ) : (
                    <a href={href} {...props} />
                  ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto">
                    <table
                      {...props}
                      className={`table-auto border-collapse w-full ${props.className || ''}`.trim()}
                    />
                  </div>
                ),
                th: (props) => (
                  <th
                    {...props}
                    className={`px-3 py-2 border-b text-left ${props.className || ''}`.trim()}
                  />
                ),
                td: (props) => (
                  <td
                    {...props}
                    className={`px-3 py-2 border-b align-top ${props.className || ''}`.trim()}
                  />
                ),
              }}
            >
              {doc.content}
            </ReactMarkdown>
          </article>

          {/* Prev / Next navigation */}
          <div className="flex justify-between gap-4 mt-16 pt-8 border-t border-[var(--gray-light)]">
            <div>
              {prevDoc && (
                <Link to={docPath(prevDoc.slug)} className="flex flex-col text-sm no-underline group">
                  <span className="text-[var(--gray-mid)] mb-1">← Previous</span>
                  <span className="text-[var(--gray-dark)] font-medium group-hover:text-[var(--brand-primary)] transition-colors">
                    {prevDoc.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextDoc && (
                <Link to={docPath(nextDoc.slug)} className="flex flex-col text-sm no-underline group">
                  <span className="text-[var(--gray-mid)] mb-1">Next →</span>
                  <span className="text-[var(--gray-dark)] font-medium group-hover:text-[var(--brand-primary)] transition-colors">
                    {nextDoc.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DocPage

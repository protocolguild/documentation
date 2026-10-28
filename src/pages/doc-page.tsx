import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Helmet } from 'react-helmet-async'
import { getAllDocs, getDocBySlug, docPath, rehypeHeadingIds } from '../lib/docs'
import DocSidebar, { DocHeading } from '../components/DocSidebar'
import StandaloneNavbar from '../components/StandaloneNavbar'
import HeadingAnchor from '../components/HeadingAnchor'

const DocPage: FC = () => {
  const params = useParams()
  const slug = params.slug || ''
  const allDocs = useMemo(() => getAllDocs(), [])
  const doc = useMemo(() => getDocBySlug(slug), [slug])
  const articleRef = useRef<HTMLElement>(null)
  const [headings, setHeadings] = useState<DocHeading[]>([])

  // Read section headings from the rendered page so sidebar links use the same ids
  useEffect(() => {
    const nodes = articleRef.current?.querySelectorAll<HTMLHeadingElement>('h2[id]') || []
    setHeadings(Array.from(nodes).map((h) => ({ id: h.id, text: h.textContent || '' })))
  }, [doc])

  if (!doc) return <Navigate to="/docs" replace />

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
          <div className="md:sticky md:top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto">
            <DocSidebar docs={allDocs} currentSlug={doc.slug} headings={headings} />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <article ref={articleRef} className="prose prose-neutral prose-sm md:prose-base max-w-3xl leading-[1.6] prose-p:leading-[1.6] prose-li:leading-[1.6] break-words prose-a:break-words prose-code:break-words prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-headings:scroll-mt-8 prose-h1:text-3xl prose-h1:mt-0 prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-2 prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-p:my-3 prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-table:text-sm prose-img:inline-block">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHeadingIds]}
              components={{
                h2: ({ id, children }) => <HeadingAnchor as="h2" id={id}>{children}</HeadingAnchor>,
                h3: ({ id, children }) => <HeadingAnchor as="h3" id={id}>{children}</HeadingAnchor>,
                h4: ({ id, children }) => <HeadingAnchor as="h4" id={id}>{children}</HeadingAnchor>,
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
        </div>
      </div>
    </main>
  )
}

export default DocPage

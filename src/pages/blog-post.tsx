import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import Grid from '../components/Grid'
import { getPostBySlug } from '../lib/posts'
import type { Post } from '../types/post'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import StandaloneNavbar from '../components/StandaloneNavbar'
import { Helmet } from 'react-helmet-async'

const BlogPost: FC = () => {
  const params = useParams()
  const slug = params.slug || ''

  const post: Post | null = useMemo(() => {
    try {
      return getPostBySlug(slug)
    } catch {
      return null
    }
  }, [slug])
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const canonicalUrl = post
    ? `${origin}/blog/${post.slug}`
    : `${origin}/blog/${slug}`
  const metaTitle = post
    ? `${post.title} | Protocol Guild`
    : 'Article not found | Protocol Guild'
  const metaDescription =
    post?.excerpt || 'Read the latest from Protocol Guild.'
  const metaImage = post?.coverImage
    ? post.coverImage.startsWith('http')
      ? post.coverImage
      : `${origin}${post.coverImage}`
    : `${origin}/og-image.png`
  const formattedDate = post
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : null
  return (
    <main>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content={post ? 'article' : 'website'} />
        <meta
          property="og:title"
          content={post ? post.title : 'Protocol Guild'}
        />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={canonicalUrl} />
        {post?.date ? (
          <meta
            property="article:published_time"
            content={new Date(post.date).toISOString()}
          />
        ) : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={post ? post.title : 'Protocol Guild'}
        />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>
      <StandaloneNavbar />

      <Section background="white">
        <Section.Row align="start">
          <Grid columns={12} className="pt-0 pb-16">
            <Grid.Item span={12} className="flex flex-col gap-6 min-w-0">
              {post ? (
                <>
                  {post.coverImage ? (
                    <div className="not-prose w-full h-[500px] overflow-hidden border rounded-xl md:rounded-2xl shadow-sm bg-[var(--gray-light)]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="block w-full h-full object-cover object-center"
                      />
                    </div>
                  ) : null}
                  <div className="w-full text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl hyphens-auto sm:hyphens-none text-balance">
                      {post.title}
                    </h1>
                    {formattedDate ? (
                      <p className="text-xl mt-2 text-[var(--gray-dark)]">
                        {formattedDate}
                      </p>
                    ) : null}
                  </div>
                  <article className="prose prose-neutral prose-lg w-full max-w-none md:max-w-3xl mx-auto px-4 md:px-0 break-words prose-a:break-words prose-code:break-words prose-pre:overflow-x-auto prose-h1:mb-4 prose-h1:mt-0 prose-h2:mt-0 prose-h2:mb-6 ">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        table: ({ node, ...props }) => (
                          <div className="overflow-x-auto">
                            <table
                              {...props}
                              className={`table-auto border-collapse w-full ${
                                props.className || ''
                              }`.trim()}
                            />
                          </div>
                        ),
                        th: (props) => (
                          <th
                            {...props}
                            className={`px-3 py-2 border-b text-left ${
                              props.className || ''
                            }`.trim()}
                          />
                        ),
                        td: (props) => (
                          <td
                            {...props}
                            className={`px-3 py-2 border-b align-top ${
                              props.className || ''
                            }`.trim()}
                          />
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </article>
                </>
              ) : (
                <p className="text-[var(--gray-dark)]">
                  This article could not be found.
                </p>
              )}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default BlogPost

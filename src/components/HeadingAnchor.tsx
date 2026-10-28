import { FC, ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'

interface HeadingAnchorProps {
  as: 'h2' | 'h3' | 'h4'
  id?: string
  children?: ReactNode
}

// Heading with a link icon on hover; clicking puts #id in the URL and copies the full link
const HeadingAnchor: FC<HeadingAnchorProps> = ({ as: Tag, id, children }) => {
  const [copied, setCopied] = useState(false)

  if (!id) return <Tag>{children}</Tag>

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Tag id={id} className="group relative">
      {children}
      <Link
        to={`#${id}`}
        onClick={copyLink}
        aria-label="Copy link to this section"
        title={copied ? 'Link copied' : 'Copy link to this section'}
        className="ml-2 inline-flex align-middle no-underline text-[var(--gray-mid)] hover:text-[var(--brand-primary)] opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )}
      </Link>
    </Tag>
  )
}

export default HeadingAnchor

import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Doc } from '../types/doc'
import { docPath } from '../lib/docs'

export interface DocHeading {
  id: string
  text: string
}

interface DocSidebarProps {
  docs: Doc[]
  currentSlug: string
  headings: DocHeading[]
}

const DocSidebar: FC<DocSidebarProps> = ({ docs, currentSlug, headings }) => {
  const { hash } = useLocation()
  const currentHash = decodeURIComponent(hash.slice(1))

  return (
    <nav className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-3">
        Documentation
      </p>
      {docs.map((doc) => {
        const isActive = currentSlug === doc.slug
        return (
          <div key={doc.slug} className="flex flex-col">
            <Link
              to={docPath(doc.slug)}
              className={`text-sm px-3 py-2 rounded-lg transition-colors no-underline ${
                isActive
                  ? 'bg-[var(--gray-lightest)] text-[var(--gray-dark)] font-semibold'
                  : 'text-[var(--gray-mid-dark)] hover:bg-[var(--gray-lightest)] hover:text-[var(--gray-dark)]'
              }`}
            >
              {doc.title}
            </Link>

            {/* Sections of the current page */}
            {isActive && headings.length > 0 && (
              <div className="flex flex-col mt-1 mb-2 ml-3 border-l border-[var(--gray-light)]">
                {headings.map((heading) => (
                  <Link
                    key={heading.id}
                    to={`${docPath(doc.slug)}#${heading.id}`}
                    className={`text-[13px] leading-snug pl-3 py-1.5 -ml-px border-l no-underline transition-colors ${
                      currentHash === heading.id
                        ? 'border-[var(--brand-primary)] text-[var(--gray-dark)] font-medium'
                        : 'border-transparent text-[var(--gray-mid-dark)] hover:text-[var(--gray-dark)]'
                    }`}
                  >
                    {heading.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default DocSidebar

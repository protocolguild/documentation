import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Doc } from '../types/doc'
import { docPath } from '../lib/docs'

interface DocSidebarProps {
  docs: Doc[]
  currentSlug: string
}

const DocSidebar: FC<DocSidebarProps> = ({ docs, currentSlug }) => {
  return (
    <nav className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-3">
        Documentation
      </p>
      {docs.map((doc) => {
        const isActive = currentSlug === doc.slug
        return (
          <Link
            key={doc.slug}
            to={docPath(doc.slug)}
            className={`text-sm px-3 py-2 rounded-lg transition-colors no-underline ${
              isActive
                ? 'bg-[var(--gray-lightest)] text-[var(--gray-dark)] font-semibold'
                : 'text-[var(--gray-mid-dark)] hover:bg-[var(--gray-lightest)] hover:text-[var(--gray-dark)]'
            }`}
          >
            {doc.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default DocSidebar

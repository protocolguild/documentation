import { FC, useState } from 'react'
import megapotLogo from '../assets/images/donors/megapot.svg'

const AnnouncementBanner: FC = () => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="w-full bg-[var(--brand-primary)] px-4 py-4 flex items-center justify-center gap-3 relative">
      <a
        href="https://megapot.io/fund/pg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-semibold text-[var(--gray-dark)] hover:opacity-80 transition-opacity text-center no-underline"
      >
        <span className="flex items-center gap-2 justify-center flex-wrap">
          <img src={megapotLogo} alt="Megapot" className="h-5 w-auto inline-block" />
          Protocol Guild has partnered with Megapot 🎉 Support Ethereum maintainers while you enter the lottery for your chance to win <span className="underline">Play →</span>
        </span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--gray-dark)] hover:opacity-60 transition-opacity bg-transparent border-none p-1 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}

export default AnnouncementBanner

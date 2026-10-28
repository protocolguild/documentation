import { FC } from 'react'
import megapotLogo from '../assets/images/donors/megapot.svg'

interface Opportunity {
  id: string
  logoAlt: string
  title: string
  description: string
  cta: string
  href: string
  tag: string
}

const opportunities: Opportunity[] = [
  {
    id: 'megapot',
    logoAlt: 'Megapot',
    title: 'Megapot',
    description:
      'Enter the Megapot onchain lottery and a portion of every ticket goes directly to Protocol Guild. Win big while supporting Ethereum\'s core developers.',
    cta: 'Enter the contest',
    href: 'https://megapot.io/fund/pg',
    tag: 'Onchain lottery',
  },
]


const InAppContributions: FC = () => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]">
        Use Ethereum apps, fund core development.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {opportunities.map((opp) => (
        <a
          key={opp.id}
          href={opp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-[var(--gray-light)] bg-white overflow-hidden flex flex-col no-underline hover:shadow-md transition-shadow"
        >
          {/* Top accent bar */}
          <div className="h-1 bg-[var(--brand-primary)]" />

          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Logo + tag row */}
            <div className="flex items-center justify-between">
              <div className="h-7 flex items-center">
                <img src={megapotLogo} alt="Megapot" className="h-full w-auto" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8f8fd] text-[#0e7fa8] border border-[#9de0f5]">
                {opp.tag}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--gray-mid)] leading-relaxed flex-1">
              {opp.description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--gray-dark)] group-hover:opacity-70 transition-opacity pt-2 border-t border-[var(--gray-light)]">
              {opp.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
)

export default InAppContributions

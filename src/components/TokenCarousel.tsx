import { FC } from 'react'
import baseLogo from '../assets/images/base.svg'
import optimismLogo from '../assets/images/optimism.svg'
import polygonLogo from '../assets/images/polygon.svg'
import realLogo from '../assets/images/real.svg'
import scrollLogo from '../assets/images/scroll.svg'
import shapeLogo from '../assets/images/shape.svg'
import zksyncLogo from '../assets/images/zksync.svg'
import zoraLogo from '../assets/images/zora.svg'
import arbitrumLogo from '../assets/images/arbitrum.svg'
import styles from './TokenCarousel.module.css'

console.log('Logos loaded:', {
  baseLogo,
  optimismLogo,
  polygonLogo,
  realLogo,
  scrollLogo,
  shapeLogo,
  zksyncLogo,
  zoraLogo,
  arbitrumLogo
})

interface TokenCarouselProps {
  theme?: 'light' | 'dark'
}

const chains = [
  { name: 'Arbitrum', logo: arbitrumLogo },
  { name: 'Base', logo: baseLogo },
  { name: 'Optimism', logo: optimismLogo },
  { name: 'Polygon', logo: polygonLogo },
  { name: 're.al', logo: realLogo },
  { name: 'Scroll', logo: scrollLogo },
  { name: 'Shape', logo: shapeLogo },
  { name: 'zkSync', logo: zksyncLogo },
  { name: 'Zora', logo: zoraLogo },
]

const TokenCarousel: FC<TokenCarouselProps> = ({ theme = 'light' }) => {
  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center">
      <div className="absolute h-full left-0 bg-gradient-to-r from-[var(--gray-dark)] via-[var(--gray-dark)] via-[20%] via-opacity-100 to-opacity-0 z-10 pointer-events-none w-[20%]" />
      <div className="absolute h-full right-0 bg-gradient-to-l from-[var(--gray-dark)] via-[var(--gray-dark)] via-[20%] via-opacity-100 to-opacity-0 z-10 pointer-events-none w-[20%]" />
      <div className={`flex whitespace-nowrap min-w-max ${styles.scroll}`}>
        {[...chains, ...chains].map((chain, index) => (
          <div
            key={`${chain.name}-${index}`}
            className="inline-flex items-center justify-center px-6"
          >
            <img
              src={chain.logo}
              alt={chain.name}
              className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokenCarousel 
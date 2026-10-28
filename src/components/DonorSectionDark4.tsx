// Component imports
import pgIcon from '../assets/images/pg-icon-dark.svg'
import ethereumLogo from '../assets/images/ethereum.svg'
import baseLogo from '../assets/images/base.svg'
import optimismLogo from '../assets/images/optimism.svg'
import polygonLogo from '../assets/images/polygon.svg'
import scrollLogo from '../assets/images/scroll.svg'
import shapeLogo from '../assets/images/shape.svg'
import zksyncLogo from '../assets/images/zksync.svg'
import zoraLogo from '../assets/images/zora.svg'
import arbitrumLogo from '../assets/images/arbitrum.svg'
const partners = [
  // Add partner logos here if needed
]

const donors = [
  { name: 'Ethereum', logo: ethereumLogo },
  { name: 'Arbitrum', logo: arbitrumLogo },
  { name: 'Base', logo: baseLogo },
  { name: 'Optimism', logo: optimismLogo },
  { name: 'Polygon', logo: polygonLogo },
  { name: 'Scroll', logo: scrollLogo },
  { name: 'Shape', logo: shapeLogo },
  { name: 'zkSync', logo: zksyncLogo },
  { name: 'Zora', logo: zoraLogo },
]

interface DonorSectionProps {
  className?: string
  theme?: 'dark' | 'light'
  type?: 'Donors' | 'Partners'
  featured?: boolean
}

const DonorSection = ({ className = '', theme = 'light', type = 'Donors', featured = false }: DonorSectionProps) => {
  const logos = type === 'Donors' ? donors : partners

  return (
    <div className={`donors ${className} pt-4 pb-0`}>
      {type === 'Donors' ? (
        <div className="p-8">
          <div className="flex flex-wrap justify-center gap-6">
            {logos.map((donor) => (
              <div 
                key={donor.name}
                className="flex items-center justify-center h-10 md:h-15 mb-4"
              >
                <img 
                  src={donor.logo} 
                  alt={donor.name}
                  className="h-[60px] w-auto max-w-[158px]"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="donor-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {logos.map(donor => (
            <div 
              key={donor.name}
              className="flex items-center justify-center h-10 md:h-15 mb-4"
            >
              <img 
                src={theme === 'light' ? donor.logoWhite || donor.logo : donor.logo} 
                alt={donor.name}
                className="h-[60px] w-auto max-w-[158px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DonorSection

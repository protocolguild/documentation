// Component imports
import pgIcon from '../assets/images/pg-icon.svg'
// 1% Partners
import etherfiSvg from '../assets/images/donors/etherfi.svg'
import etherfiWhiteSvg from '../assets/images/donors/etherfi-white.svg'
import taikoSvg from '../assets/images/donors/taiko.svg'
import taikoWhiteSvg from '../assets/images/donors/taiko-white.svg'
import eigenlayerSvg from '../assets/images/donors/eigenlayer.svg'
import eigenlayerWhiteSvg from '../assets/images/donors/eigenlayer-white.svg'
import pwnSvg from '../assets/images/donors/pwn.svg'
import pwnWhiteSvg from '../assets/images/donors/pwn-white.svg'
import pufferSvg from '../assets/images/donors/puffer.svg'
import pufferWhiteSvg from '../assets/images/donors/puffer-white.svg'

// Donors
import layerzeroSvg from '../assets/images/donors/layerzero.svg'
import layerzeroWhiteSvg from '../assets/images/donors/layerzero-white.svg'
import starknetSvg from '../assets/images/donors/starknet.svg'
import starknetWhiteSvg from '../assets/images/donors/starknet-white.svg'
import ensSvg from '../assets/images/donors/ens.svg'
import ensWhiteSvg from '../assets/images/donors/ens-white.svg'
import optimismSvg from '../assets/images/donors/optimism.svg'
import optimismWhiteSvg from '../assets/images/donors/optimism-white.svg'
import zksyncSvg from '../assets/images/donors/zksync.svg'
import zksyncWhiteSvg from '../assets/images/donors/zksync-white.svg'
import scrollSvg from '../assets/images/donors/scroll.svg'
import scrollWhiteSvg from '../assets/images/donors/scroll-white.svg'
import octantSvg from '../assets/images/donors/octant.svg'
import octantWhiteSvg from '../assets/images/donors/octant-white.svg'
import safeSvg from '../assets/images/donors/safe.svg'
import safeWhiteSvg from '../assets/images/donors/safe-white.svg'
import bitwiseSvg from '../assets/images/donors/bitwise.svg'
import bitwiseWhiteSvg from '../assets/images/donors/bitwise-white.svg'
import gitcoinSvg from '../assets/images/donors/gitcoin.svg'
import gitcoinWhiteSvg from '../assets/images/donors/gitcoin-white.svg'
import arbitrumSvg from '../assets/images/donors/arbitrum.svg'
import arbitrumWhiteSvg from '../assets/images/donors/arbitrum-white.svg'
import lidoSvg from '../assets/images/donors/lido.svg'
import lidoWhiteSvg from '../assets/images/donors/lido-white.svg'
import uniswapSvg from '../assets/images/donors/uniswap.svg'
import uniswapWhiteSvg from '../assets/images/donors/uniswap-white.svg'
import molochSvg from '../assets/images/donors/molochdao.svg'
import molochWhiteSvg from '../assets/images/donors/molochdao-white.svg'
import nounsSvg from '../assets/images/donors/nouns.svg'
import nounsWhiteSvg from '../assets/images/donors/nouns-white.svg'
import lambdaClassSvg from '../assets/images/donors/lambdaclass.svg'
import lambdaClassWhiteSvg from '../assets/images/donors/lambdaclass-white.svg'
import tetranodeSvg from '../assets/images/donors/tetranode.svg'
import tetranodeWhiteSvg from '../assets/images/donors/tetranode-white.svg'
import anthonySassanoSvg from '../assets/images/donors/anthonysassano.svg'
import anthonySassanoWhiteSvg from '../assets/images/donors/anthonysassano-white.svg'
import dripsSvg from '../assets/images/donors/drips.svg'
import dripsWhiteSvg from '../assets/images/donors/drips-white.svg'
import statefulWorksSvg from '../assets/images/donors/statefulworks.svg'
import statefulWorksWhiteSvg from '../assets/images/donors/statefulworks-white.svg'
import vanEckSvg from '../assets/images/donors/vaneck.svg'
import vanEckWhiteSvg from '../assets/images/donors/vaneck-white.svg'

/*

VanEck
*/

const partners = [
  { name: 'Ether.fi', logo: etherfiSvg, logoWhite: etherfiWhiteSvg, url: 'https://ether.fi' },
  { name: 'Taiko', logo: taikoSvg, logoWhite: taikoWhiteSvg, url: 'https://taiko.xyz' },
  { name: 'EigenLayer', logo: eigenlayerSvg, logoWhite: eigenlayerWhiteSvg, url: 'https://eigenlayer.xyz' },
  { name: 'PWN Dao', logo: pwnSvg, logoWhite: pwnWhiteSvg, url: 'https://pwn.xyz/' },
  { name: 'Puffer', logo: pufferSvg, logoWhite: pufferWhiteSvg, url: 'https://puffer.fi' }
]

const donors = [
  { name: 'LayerZero', logo: layerzeroSvg, logoWhite: layerzeroWhiteSvg, url: 'https://layerzero.network' },
  { name: 'Optimism', logo: optimismSvg, logoWhite: optimismWhiteSvg, url: 'https://optimism.io' },
  { name: 'ZKSync', logo: zksyncSvg, logoWhite: zksyncWhiteSvg, url: 'https://zksync.io' },
  { name: 'Scroll', logo: scrollSvg, logoWhite: scrollWhiteSvg, url: 'https://scroll.io' },
  { name: 'Starknet', logo: starknetSvg, logoWhite: starknetWhiteSvg, url: 'https://starknet.io' },
  { name: 'ENS', logo: ensSvg, logoWhite: ensWhiteSvg, url: 'https://ens.domains' },
  { name: 'Octant', logo: octantSvg, logoWhite: octantWhiteSvg, url: 'https://octant.io' },
  { name: 'SAFE DAO', logo: safeSvg, logoWhite: safeWhiteSvg, url: 'https://docs.safe.global/safenet/protocol/safe-dao' },
  { name: 'Bitwise', logo: bitwiseSvg, logoWhite: bitwiseWhiteSvg, url: 'https://bitwiseinvestments.com/' },
  { name: 'Gitcoin', logo: gitcoinSvg, logoWhite: gitcoinWhiteSvg, url: 'https://gitcoin.co' },
  { name: 'Arbitrum', logo: arbitrumSvg, logoWhite: arbitrumWhiteSvg, url: 'https://arbitrum.io/community' },
  { name: 'Lido', logo: lidoSvg, logoWhite: lidoWhiteSvg, url: 'https://lido.fi' },
  { name: 'Uniswap', logo: uniswapSvg, logoWhite: uniswapWhiteSvg, url: 'https://uniswap.org' },
  { name: 'MolochDAO', logo: molochSvg, logoWhite: molochWhiteSvg, url: 'https://molochdao.com' },
  { name: 'NounsDAO', logo: nounsSvg, logoWhite: nounsWhiteSvg, url: 'https://nouns.wtf' },
  { name: 'Lambda Class', logo: lambdaClassSvg, logoWhite: lambdaClassWhiteSvg, url: 'https://lambdaclass.com' },
  { name: 'Tetranode', logo: tetranodeSvg, logoWhite: tetranodeWhiteSvg, url: 'https://x.com/Tetranode' },
  { name: 'Anthony Sassano', logo: anthonySassanoSvg, logoWhite: anthonySassanoWhiteSvg, url: 'https://x.com/sassal0x' },
  { name: 'Drips', logo: dripsSvg, logoWhite: dripsWhiteSvg, url: 'https://drips.network' },
  { name: 'Stateful Works', logo: statefulWorksSvg, logoWhite: statefulWorksWhiteSvg, url: 'https://x.com/StatefulWorks' },
  { name: 'VanEck', logo: vanEckSvg, logoWhite: vanEckWhiteSvg, url: 'https://www.vaneck.com/us/en/insights/digital-assets/' }
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
    <div className={`donors ${className} ${`border-t ${theme === 'light' ? 'border-[#fff]' : 'border-[var(--gray-dark)]'}`} pt-4 pb-8`}>
      {!featured && <p className={`text-[15px] font-medium mb-6 ${theme === 'light' ? 'text-[var(--white)]' : 'text-[var(--gray-dark)]'}`}>{type === 'Donors' ? 'DONORS' : '1% PLEDGE PARTNERS'}</p>}
      {featured && (
        <div className="flex flex-row justify-between items-center w-full mb-6">
          <p className={`text-[15px] font-medium ${theme === 'light' ? 'text-[var(--white)]' : 'text-[var(--gray-dark)]'}`}>{type === 'Donors' ? 'DONORS' : '1% PLEDGE PARTNERS'}</p>
          <img className="h-6 md:h-7" src={pgIcon} alt="PG Icon" />
        </div>
      )}

      {featured && type === 'Partners' ? (
        <div className="silver-gradient silver-shimmer rounded-xl p-8">
          <div className="donor-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {logos.map(donor => (
              <a 
                key={donor.name}
                href={donor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 md:h-14"
              >
                <img 
                  src={donor.logo} 
                  alt={donor.name}
                  className="h-full w-auto max-w-[140px]"
                />
              </a>
            ))}
          </div>
        </div>
      ) : type === 'Donors' ? (
        <div className="flex flex-col gap-8 w-full overflow-hidden group">
          <div className="relative w-full h-16 overflow-hidden flex items-center">
            <div className="absolute h-full left-0 w-[10%] z-10 pointer-events-none bg-gradient-to-r from-[var(--gray-dark)] via-[var(--gray-dark)] to-transparent" />
            <div className="absolute h-full right-0 w-[10%] z-10 pointer-events-none bg-gradient-to-l from-[var(--gray-dark)] via-[var(--gray-dark)] to-transparent" />
            <div className="flex whitespace-nowrap min-w-max donor-scroll group-hover:animate-pause">
              {[...logos.slice(0, Math.ceil(logos.length / 2)), ...logos.slice(0, Math.ceil(logos.length / 2))].map((donor, index) => (
                <a
                  key={`${donor.name}-${index}`}
                  href={donor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 h-10 md:h-12"
                >
                  <img 
                    src={theme === 'light' ? donor.logoWhite : donor.logo} 
                    alt={donor.name}
                    className="h-full w-auto max-w-[120px]"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="relative w-full h-16 overflow-hidden flex items-center">
            <div className="absolute h-full left-0 w-[10%] z-10 pointer-events-none bg-gradient-to-r from-[var(--gray-dark)] via-[var(--gray-dark)] to-transparent" />
            <div className="absolute h-full right-0 w-[10%] z-10 pointer-events-none bg-gradient-to-l from-[var(--gray-dark)] via-[var(--gray-dark)] to-transparent" />
            <div className="flex whitespace-nowrap min-w-max donor-scroll-reverse group-hover:animate-pause">
              {[...logos.slice(Math.ceil(logos.length / 2)), ...logos.slice(Math.ceil(logos.length / 2))].map((donor, index) => (
                <a
                  key={`${donor.name}-${index}`}
                  href={donor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 h-10 md:h-12"
                >
                  <img 
                    src={theme === 'light' ? donor.logoWhite || donor.logo : donor.logo} 
                    alt={donor.name}
                    className="h-full w-auto max-w-[120px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="donor-logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {logos.map(donor => (
            <a 
              key={donor.name}
              href={donor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 md:h-14"
            >
              <img 
                src={theme === 'light' ? donor.logoWhite || donor.logo : donor.logo} 
                alt={donor.name}
                className="h-full w-auto max-w-[140px]"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default DonorSection
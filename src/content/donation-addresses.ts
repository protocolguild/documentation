import ethereumLogo from '../assets/images/ethereum.svg'
import arbitrumLogo from '../assets/images/arbitrum.svg'
import baseLogo from '../assets/images/base.svg'
import optimismLogo from '../assets/images/optimism.svg'
import polygonLogo from '../assets/images/polygon.svg'
import scrollLogo from '../assets/images/scroll.svg'
import shapeLogo from '../assets/images/shape.svg'
import zksyncLogo from '../assets/images/zksync.svg'
import zoraLogo from '../assets/images/zora.svg'
import robinhoodLogo from '../assets/images/robinhood.svg'

// Mirrors docs/03-donate.md: the 1-year vesting contract where one exists,
// otherwise the chain's multisig / donation address.
export type DestinationType = '1-year vesting contract' | 'Multisig' | 'Donation address'

export interface DonationChain {
  id: string
  name: string
  chainId: number
  nativeSymbol: string
  logo?: string
  ens?: string
  address: string
  type: DestinationType
  explorerUrl: string
}

const MULTISIG = '0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79'

export const donationChains: DonationChain[] = [
  {
    id: 'mainnet',
    name: 'Ethereum',
    chainId: 1,
    nativeSymbol: 'ETH',
    logo: ethereumLogo,
    ens: 'theprotocolguild.eth',
    address: '0x4EA88fa76848a8BBAB72613d4171df1eBcf68399',
    type: '1-year vesting contract',
    explorerUrl: 'https://explorer.splits.org/accounts/0x4EA88fa76848a8BBAB72613d4171df1eBcf68399/',
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    chainId: 42161,
    nativeSymbol: 'ETH',
    logo: arbitrumLogo,
    address: '0x8ee2AcfEbd311c1cF8d74448E207B4960EaCf599',
    type: '1-year vesting contract',
    explorerUrl: 'https://explorer.splits.org/accounts/0x8ee2AcfEbd311c1cF8d74448E207B4960EaCf599/?chainId=42161',
  },
  {
    id: 'base',
    name: 'Base',
    chainId: 8453,
    nativeSymbol: 'ETH',
    logo: baseLogo,
    address: '0xffaaCCFe120f3fC47f42102cF4F28e837cd49A20',
    type: '1-year vesting contract',
    explorerUrl: 'https://explorer.splits.org/accounts/0xffaaCCFe120f3fC47f42102cF4F28e837cd49A20/?chainId=8453',
  },
  {
    id: 'optimism',
    name: 'Optimism',
    chainId: 10,
    nativeSymbol: 'ETH',
    logo: optimismLogo,
    address: '0x7a489D5Fedd52f561b73EC8B0a164c0BD36036A2',
    type: '1-year vesting contract',
    explorerUrl: 'https://explorer.splits.org/accounts/0x7a489D5Fedd52f561b73EC8B0a164c0BD36036A2/?chainId=10',
  },
  {
    id: 'polygon',
    name: 'Polygon',
    chainId: 137,
    nativeSymbol: 'POL',
    logo: polygonLogo,
    address: MULTISIG,
    type: 'Multisig',
    explorerUrl: `https://app.safe.global/balances?safe=matic:${MULTISIG}`,
  },
  {
    id: 'robinhood',
    name: 'Robinhood',
    chainId: 4663,
    nativeSymbol: 'ETH',
    logo: robinhoodLogo,
    address: '0x2Dc2234a0C2E8a5e378130567B50d160637f946A',
    type: 'Donation address',
    explorerUrl: 'https://robinhoodchain.blockscout.com/address/0x2Dc2234a0C2E8a5e378130567B50d160637f946A',
  },
  {
    id: 'scroll',
    name: 'Scroll',
    chainId: 534352,
    nativeSymbol: 'ETH',
    logo: scrollLogo,
    address: MULTISIG,
    type: 'Multisig',
    explorerUrl: `https://app.safe.global/balances?safe=scr:${MULTISIG}`,
  },
  {
    id: 'shape',
    name: 'Shape',
    chainId: 360,
    nativeSymbol: 'ETH',
    logo: shapeLogo,
    address: '0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8',
    type: 'Multisig',
    explorerUrl: 'https://safe.shape.network/balances?safe=shape:0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8',
  },
  {
    id: 'zksync',
    name: 'ZKsync',
    chainId: 324,
    nativeSymbol: 'ETH',
    logo: zksyncLogo,
    address: '0x9fb5F754f5222449F98b904a34494cB21AADFdf8',
    type: 'Multisig',
    explorerUrl: 'https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8',
  },
  {
    id: 'zora',
    name: 'Zora',
    chainId: 7777777,
    nativeSymbol: 'ETH',
    logo: zoraLogo,
    address: '0x32e3C7fD24e175701A35c224f2238d18439C7dBC',
    type: 'Multisig',
    explorerUrl: 'https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC',
  },
]

import { FC } from 'react'

interface DonorLogoProps {
  name: string
  logo: string
  url: string
}

const DonorLogo: FC<DonorLogoProps> = ({ name, logo, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="donor-logo">
      <img src={logo} alt={`${name} logo`} />
    </a>
  )
}

export default DonorLogo 
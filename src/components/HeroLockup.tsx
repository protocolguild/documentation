import { FC } from 'react'
import lockupLight from '../assets/images/hero-logo.png'
import lockupDark from '../assets/images/lockup-left-dark.svg'
import lockupColor from '../assets/images/hero-logo.png'

interface HeroLockupProps {
  className?: string
  theme?: 'light' | 'dark' | 'color'
  style?: React.CSSProperties
}

const HeroLockup: FC<HeroLockupProps> = ({ 
  className,
  theme = 'light',
  style
}) => {
  const getLockupSrc = () => {
    switch (theme) {
      case 'light':
        return lockupLight
      case 'dark':
        return lockupDark
      case 'color':
        return lockupColor
      default:
        return lockupLight
    }
  }

  return (
    <img 
      src={getLockupSrc()} 
      alt="Protocol Guild" 
      className={className}
      style={style}
    />
  )
}

export default HeroLockup

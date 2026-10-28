import { FC, ReactNode } from 'react'
import Footer from './Footer'
interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app min-h-screen bg-white">
      {children}
      <Footer />
    </div>
  )
}

export default Layout 

import { FC, ReactNode } from 'react'
import Section from './Section'
import Grid from './Grid'
import Navbar from './Navbar'

interface HeroHeaderProps {
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
  theme?: 'light' | 'brand' | 'dark'
  showNavbar?: boolean
  contentWidthClassName?: string
  paddingTopClassName?: string
  paddingBottomClassName?: string
  className?: string
}

const HeroHeader: FC<HeroHeaderProps> = ({
  children,
  imageSrc,
  imageAlt = 'Ethereum chains',
  theme = 'light',
  showNavbar = true,
  contentWidthClassName = 'w-full md:w-[65%]',
  paddingTopClassName = 'pt-[175px] lg:pt-[200px]',
  paddingBottomClassName = 'pb-[70px] lg:pb-[192px]',
  className = '',
}) => {
  return (
    <Section
      background="white"
      className={`flex flex-col relative overflow-hidden ${className}`.trim()}
    >
      {/* Image is positioned at the Section level (w-full) so it reaches the viewport edge */}
      {imageSrc && (
        <div className="absolute top-0 right-0 w-full h-full z-0 flex justify-end pointer-events-none">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-auto object-contain opacity-0 md:opacity-100"
          />
        </div>
      )}

      <Section.Row className="relative z-1">
        <Grid>
          <Grid.Item span={12} className="relative flex">
            <div
              className={`relative z-10 flex flex-col items-start ${paddingTopClassName} ${paddingBottomClassName} ${contentWidthClassName}`.trim()}
            >
              {children}
            </div>

            {showNavbar && (
              <Grid className="absolute top-0 left-0 w-full z-10">
                <Grid.Item span={12} className={contentWidthClassName}>
                  <Navbar theme={theme} />
                </Grid.Item>
              </Grid>
            )}
          </Grid.Item>
        </Grid>
      </Section.Row>
    </Section>
  )
}

export default HeroHeader

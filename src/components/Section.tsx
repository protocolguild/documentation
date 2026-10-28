import { FC, ReactNode } from 'react'
import React from 'react'
import Grid from './Grid'

interface SectionRowProps {
  children: ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  fullWidth?: boolean
}

const SectionRow: FC<SectionRowProps> = ({ 
  children, 
  className = '',
  align = 'center',
  fullWidth = false
}) => {
  // Ensure children are wrapped with column span classes if not already
  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const elementChild = child as React.ReactElement<{ className?: string }>;
      // If child already has a col-span class, return as is
      if (elementChild.props.className?.includes('col-span-')) {
        return elementChild;
      }
      // Default to full width if no col-span class
      return React.cloneElement(elementChild, {
        className: `${elementChild.props.className || ''} col-span-3`.trim()
      });
    }
    // Wrap text nodes or other non-element children in a full-width div
    return <div className="col-span-3">{child}</div>;
  });

  const alignmentClasses = {
    start: 'md:items-start',
    center: 'md:items-center',
    end: 'md:items-end'
  }

  const innerContent = fullWidth ? (
    <div className="w-full md:w-auto">
      <div className="w-full max-w-[1200px] mx-auto">
        {children}
      </div>
    </div>
  ) : (
    <div className={`w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col items-start gap-4 md:gap-6 ${alignmentClasses[align]}`}>
      {wrappedChildren}
    </div>
  )

  return (
    <div className={className}>
      {innerContent}
    </div>
  );
}

interface SectionProps {
  children: ReactNode | ReactNode[]
  className?: string
  background?: 'white' | 'purple' | 'gray-light' | 'gray-mid' | 'gray-dark' | 'light-blue' | 'black' | 'footer' | 'brand-primary' | 'brand-secondary' | 'brand-tertiary'
  style?: React.CSSProperties
  divider?: string
  line?: boolean
}

interface SectionComponent extends FC<SectionProps> {
  Row: FC<SectionRowProps>
}

const Section: SectionComponent = ({ 
  children, 
  className = '', 
  background = 'white',
  style,
  divider,
  line
}) => {
  // Map background props to Tailwind classes
  const backgroundClasses = {
    white: 'bg-white text-[var(--gray-dark)]',
    purple: 'bg-[var(--primary-purple)] text-white',
    'gray-light': 'bg-[var(--gray-light)] text-[var(--dark-purple)]',
    'gray-mid': 'bg-[var(--gray-mid)] text-[var(--bg-white)]',
    'gray-dark': 'bg-[var(--gray-dark)] text-[var(--bg-white)]',
    'light-blue': 'bg-[var(--bg-light-gray)]',
    black: 'bg-black text-white',
    'brand-tertiary': 'bg-[var(--brand-tertiary)] text-[var(--gray-dark)]',
    'brand-primary': 'bg-[var(--brand-primary)] text-white',
    'brand-secondary': 'bg-[var(--brand-secondary)] text-white',
    footer: 'bg-[var(--gray-mid)] text-white'
  }

  const content = (
    <>
      {divider && (
        <Section.Row>
          <Grid>
            {line ? (
              <Grid.Item span={12}>
                <Grid.Item span={6} className="flex flex-col md:hidden">
                  <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0 0H95L100 0L95 12H0V0Z" fill={divider} />
                  </svg>
                </Grid.Item>
                <Grid.Item span={12} className="hidden md:block w-full">
                  <div className="flex w-full">
                    <div className="w-1/2">
                      <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                        <path d="M0 0H95L100 0L95 12H0V0Z" fill={divider} />
                      </svg>
                    </div>
                    <div className="w-1/2" style={{ marginLeft: '-3px' }}>
                      <div className="h-[1px]" style={{ backgroundColor: divider }}></div>
                    </div>
                  </div>
                </Grid.Item>
              </Grid.Item>
            ) : (
              <Grid.Item span={6} className="flex flex-col">
                <svg width="100%" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 0H95L100 0L95 12H0V0Z" fill={divider} />
                </svg>
              </Grid.Item>
            )}
          </Grid>
        </Section.Row>
      )}
      {children}
    </>
  )

  return (
    <section className={`w-full flex flex-col relative ${backgroundClasses[background]} ${className}`} style={style}>
      {content}
    </section>
  )
}

Section.Row = SectionRow
export default Section
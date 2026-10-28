import { FC, ReactNode } from 'react'
import React from 'react'

interface GridProps {
  children: ReactNode
  className?: string
  gap?: 4 | 6 | 8 | 10 | 12  // Tailwind gap sizes
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12  // Common grid column counts
}

interface GridItemProps {
  children: ReactNode
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
}

const GridItem: FC<GridItemProps> = ({ 
  children, 
  span = 4, // Default to 4 columns in a 12-column grid (3 items per row)
  className = ''
}) => {
  return (
    <div className={`col-span-full md:col-span-${span} ${className}`.trim()}>
      {children}
    </div>
  )
}

const Grid: FC<GridProps> & { Item: FC<GridItemProps> } = ({ 
  children,
  className = '',
  gap = 6,
  columns = 12 // Default to 12 columns
}) => {
  // Ensure all direct children are GridItems
  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === GridItem) {
        return child
      }
      return <GridItem>{child}</GridItem>
    }
    return <GridItem>{child}</GridItem>
  })

  const gapClass = `gap-${gap}`
  const columnsClass = `md:grid-cols-${columns}`
  const baseClasses = 'w-full grid grid-cols-1 items-start'

  return (
    <div className={`${baseClasses} ${columnsClass} ${gapClass} ${className}`.trim()}>
      {wrappedChildren}
    </div>
  )
}

Grid.Item = GridItem
export default Grid 
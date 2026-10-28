import { FC } from 'react'

interface DividerBarProps {
  className?: string
}

const DividerBar: FC<DividerBarProps> = ({ className = '' }) => {
  return (
    <div className="w-full -mt-16 -mx-6 md:-mx-8">
      <div className={`h-3 bg-white ${className}`} />
    </div>
  )
}

export default DividerBar 
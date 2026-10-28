import { FC } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  color?: string
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, color }) => {
  return (
    <div className="flex flex-col items-start gap-3 text-left border-t pt-4" style={{ borderColor: color || 'var(--white)' }}>
      <h3 className="text-xl font-semibold" style={{ color: color || '#322D66' }}>{title}</h3>
      <p className="text-md leading-[23px] tracking-[-0.84px]" style={{ color: color || '#322D66' }}>{description}</p>
    </div>
  )
}

export default FeatureCard 
import { cn } from '@/utils/cn'

interface ColorSwatchProps {
  name: string
  value: string
  hex: string
  className?: string
}

export const ColorSwatch = ({
  name,
  value,
  hex,
  className,
}: ColorSwatchProps) => {
  return (
    <div className="space-y-3">
      <div className={cn('h-24', className)} style={{ backgroundColor: hex }} />
      <div className="space-y-1">
        <div className="text-xs text-black/40 uppercase tracking-wider">
          {name}
        </div>
        <div className="text-base font-bold">{value}</div>
        <div className="text-sm text-black/60">{hex}</div>
      </div>
    </div>
  )
}

interface ColorGroupProps {
  title: string
  children: React.ReactNode
}

export const ColorGroup = ({ title, children }: ColorGroupProps) => {
  return (
    <div className="mb-16">
      <div className="bg-black/5 px-8 py-4 rounded-full inline-block mb-8">
        <h2 className="text-2xl font-medium">{title}</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {children}
      </div>
    </div>
  )
}

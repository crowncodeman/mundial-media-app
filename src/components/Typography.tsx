import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

// Heading variants using CVA
const headingVariants = cva('font-anton', {
  variants: {
    level: {
      h1: 'text-heading-1',
      h2: 'text-heading-2 uppercase',
      h3: 'text-heading-3',
      h4: 'text-heading-4',
      h5: 'text-heading-5',
      h6: 'text-heading-6',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
})

// Body text variants
const bodyVariants = cva('font-poppins', {
  variants: {
    size: {
      lg: 'text-text-lg',
      md: 'text-text-md',
      regular: 'text-text-regular',
      sm: 'text-text-sm',
      xs: 'text-text-xs',
    },
    weight: {
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
      light: 'font-light',
    },
  },
  defaultVariants: {
    size: 'regular',
    weight: 'normal',
  },
})

// Caption variants
const captionVariants = cva('font-poppins uppercase tracking-wider', {
  variants: {
    size: {
      lg: 'text-text-lg',
      md: 'text-text-md',
      regular: 'text-text-regular',
      sm: 'text-text-sm',
      xs: 'text-text-xs',
    },
  },
  defaultVariants: {
    size: 'regular',
  },
})

// Heading component props
interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

// Heading component
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, level, as, ...props }, ref) => {
    const Component = as || level || 'h1'

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Heading.displayName = 'Heading'

// Body text component props
interface BodyTextProps extends VariantProps<typeof bodyVariants> {
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
}

// Body text component
export const BodyText = forwardRef<HTMLParagraphElement, BodyTextProps>(
  (
    { children, className, size, weight, as: Component = 'p', ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(bodyVariants({ size, weight }), className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
BodyText.displayName = 'BodyText'

// Caption component props
interface CaptionProps extends VariantProps<typeof captionVariants> {
  children: ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
}

// Caption component
export const Caption = forwardRef<HTMLParagraphElement, CaptionProps>(
  ({ children, className, size, as: Component = 'p', ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(captionVariants({ size }), 'font-bold', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Caption.displayName = 'Caption'

// Export all variants for external use
export { headingVariants, bodyVariants, captionVariants }

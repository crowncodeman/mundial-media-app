import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  // Base styles for all buttons with responsive sizing
  'inline-flex items-center justify-center font-poppins font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 h-9 px-6 text-sm gap-1.5 lg:h-11 lg:px-8 lg:text-base lg:gap-2',
  {
    variants: {
      variant: {
        primary:
          'bg-transparent text-neutral-500 border border-neutral-500 hover:bg-neutral-500 hover:text-neutral-100 active:bg-neutral-500 active:text-neutral-100',
        secondary:
          'bg-secondary-100 text-neutral-500 hover:bg-secondary-300 active:bg-secondary-400',
        tertiary:
          'bg-neutral-400 text-neutral-100 hover:bg-neutral-300 hover:text-neutral-100 active:bg-neutral-500 active:text-neutral-100',
        link: 'text-neutral-500 underline underline-offset-4 hover:text-neutral-400 active:text-neutral-500',
      },
      rounded: {
        full: 'rounded-full',
        medium: 'rounded-lg',
      },
      icon: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      icon: false,
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, leadingIcon, trailingIcon, children, ...props },
    ref
  ) => {
    const hasIcon = !!leadingIcon || !!trailingIcon
    const rounded = variant === 'tertiary' ? 'medium' : 'full'

    return (
      <button
        className={cn(
          buttonVariants({ variant, icon: hasIcon }),
          rounded === 'full' ? 'rounded-full' : 'rounded-lg',
          className
        )}
        ref={ref}
        {...props}
      >
        {leadingIcon && (
          <span
            className={cn(
              'inline-flex',
              (variant === 'tertiary' || variant === 'link') &&
                '[&>svg]:w-4 [&>svg]:h-4',
              variant === 'tertiary' && 'disabled:[&>svg]:text-neutral-100'
            )}
          >
            {leadingIcon}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span
            className={cn(
              'inline-flex',
              (variant === 'tertiary' || variant === 'link') &&
                '[&>svg]:w-4 [&>svg]:h-4',
              variant === 'tertiary' && 'disabled:[&>svg]:text-neutral-100'
            )}
          >
            {trailingIcon}
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

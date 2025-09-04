'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const radioVariants = cva('rounded-full border transition-all duration-200', {
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

const radioInnerVariants = cva(
  'rounded-full bg-neutral-500 transition-all duration-200',
  {
    variants: {
      size: {
        small: 'w-[8px] h-[8px]', // 16px total - 2px border - 6px gap (3px each side) = 8px
        medium: 'w-[12px] h-[12px]', // 20px total - 2px border - 6px gap (3px each side) = 12px
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
)

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, label, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          'flex items-center gap-3 cursor-pointer',
          disabled && 'cursor-not-allowed opacity-40'
        )}
      >
        <div className="relative inline-flex items-center justify-center">
          <input
            type="radio"
            className="sr-only peer"
            ref={ref}
            disabled={disabled}
            {...props}
          />
          <div
            className={cn(
              radioVariants({ size }),
              'border-neutral-300 bg-white',
              'peer-checked:border-neutral-500',
              'peer-hover:border-neutral-400',
              'peer-disabled:border-neutral-300 peer-disabled:bg-secondary-100',
              className
            )}
          />
          <div
            className={cn(
              radioInnerVariants({ size }),
              'absolute opacity-0 scale-0',
              'peer-checked:opacity-100 peer-checked:scale-100',
              'peer-disabled:bg-neutral-300'
            )}
          />
        </div>
        {label && (
          <span
            className={cn(
              'font-poppins text-neutral-500',
              size === 'small' ? 'text-sm' : 'text-base',
              disabled && 'text-neutral-300'
            )}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)
Radio.displayName = 'Radio'

export { Radio, radioVariants }

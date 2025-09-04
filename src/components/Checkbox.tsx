'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import {
  type DetailedHTMLProps,
  forwardRef,
  type InputHTMLAttributes,
} from 'react'
import { cn } from '@/utils/cn'

const checkboxVariants = cva('border transition-all duration-200', {
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

const checkmarkVariants = cva('text-white', {
  variants: {
    size: {
      small: 'w-3 h-3',
      medium: 'w-3.5 h-3.5',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export interface CheckboxProps
  extends Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'type' | 'size'
    >,
    VariantProps<typeof checkboxVariants> {
  label?: React.ReactNode
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            disabled={disabled}
            {...props}
          />
          <div
            className={cn(
              checkboxVariants({ size }),
              'border-neutral-300 bg-white flex items-center justify-center',
              'peer-checked:bg-neutral-500 peer-checked:border-neutral-500',
              'peer-hover:border-neutral-400',
              'peer-disabled:border-neutral-200 peer-disabled:bg-neutral-200 peer-disabled:cursor-not-allowed',
              'peer-checked:peer-disabled:bg-neutral-200 peer-checked:peer-disabled:border-neutral-200',
              className
            )}
          />
          <svg
            className={cn(
              checkmarkVariants({ size }),
              'absolute pointer-events-none opacity-0 scale-0 transition-all',
              'peer-checked:opacity-100 peer-checked:scale-100',
              'peer-disabled:peer-checked:opacity-100'
            )}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <title>Checkmark</title>
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="peer-disabled:stroke-neutral-300 stroke-white"
            />
          </svg>
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
Checkbox.displayName = 'Checkbox'

export { Checkbox, checkboxVariants }

'use client'

import { cva } from 'class-variance-authority'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const inputVariants = cva(
  'w-full h-10 font-poppins text-base border-b border-t-0 border-l-0 border-r-0 transition-all duration-200 placeholder:text-neutral-300'
)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  error?: string
  id?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, disabled, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 11)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block font-poppins text-sm text-neutral-500 mb-1.5 uppercase tracking-wider',
              disabled && 'text-neutral-300'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            inputVariants(),
            'bg-white border-neutral-300 text-neutral-500 px-0 pb-2',
            'hover:border-neutral-400',
            'focus:border-neutral-500 focus:outline-none',
            'disabled:bg-transparent disabled:border-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-4 font-poppins text-sm text-danger-400 italic">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input, inputVariants }

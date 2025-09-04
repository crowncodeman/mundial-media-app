'use client'

import { cva } from 'class-variance-authority'
import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const textAreaVariants = cva(
  'w-full min-h-[120px] font-poppins text-base border-b border-t-0 border-l-0 border-r-0 transition-all duration-200 placeholder:text-neutral-300 resize-none'
)

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  id?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, disabled, id, ...props }, ref) => {
    const textAreaId =
      id || `textarea-${Math.random().toString(36).slice(2, 11)}`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textAreaId}
            className={cn(
              'block font-poppins text-sm text-neutral-500 mb-1.5 uppercase tracking-wider',
              disabled && 'text-neutral-300'
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textAreaId}
          disabled={disabled}
          className={cn(
            textAreaVariants(),
            'bg-white border-neutral-300 text-neutral-500 px-0 py-4',
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
TextArea.displayName = 'TextArea'

export { TextArea, textAreaVariants }

'use client'

import { cva } from 'class-variance-authority'
import {
  forwardRef,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChevronDown } from './Icon'
import { cn } from '@/utils/cn'

const selectVariants = cva(
  'w-full h-10 font-poppins text-base border-b border-t-0 border-l-0 border-r-0 transition-all duration-200 cursor-pointer'
)

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: React.ReactNode
  placeholder?: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
  id?: string
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      className,
      label,
      placeholder = 'Select...',
      options,
      value,
      onChange,
      disabled,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || '')
    const dropdownRef = useRef<HTMLDivElement>(null)
    const selectId = id || `select-${Math.random().toString(36).slice(2, 11)}`

    const selectedOption = options.find(
      (opt: SelectOption) => opt.value === selectedValue
    )

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue)
      onChange?.(optionValue)
      setIsOpen(false)
    }

    return (
      <div className="w-full" ref={ref}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'block font-poppins text-sm text-neutral-500 mb-1.5 uppercase tracking-wider',
              disabled && 'text-neutral-300'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative" ref={dropdownRef}>
          {/* biome-ignore lint/a11y/useSemanticElements: Custom select requires div for styling */}
          <div
            id={selectId}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={`${selectId}-listbox`}
            tabIndex={disabled ? -1 : 0}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={(e) => {
              if (disabled) return
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsOpen(!isOpen)
              }
            }}
            className={cn(
              selectVariants(),
              'bg-white border-neutral-300 text-neutral-500 px-0 pb-2 flex items-center justify-between',
              'hover:border-neutral-400',
              isOpen && 'border-neutral-500',
              'disabled:bg-transparent disabled:border-neutral-200 disabled:text-neutral-300 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          >
            <span
              className={cn(
                selectedOption ? 'text-neutral-500' : 'text-neutral-300'
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform',
                isOpen && 'rotate-180'
              )}
            />
          </div>

          {/* Custom Dropdown */}
          {isOpen && !disabled && (
            /* biome-ignore lint/a11y/useSemanticElements: Custom select requires div for styling */
            <div
              id={`${selectId}-listbox`}
              role="listbox"
              className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg z-50"
            >
              {options.map((option: SelectOption) => (
                /* biome-ignore lint/a11y/useSemanticElements: Custom select requires div for styling */
                <div
                  key={option.value}
                  role="option"
                  aria-selected={selectedValue === option.value}
                  tabIndex={0}
                  onClick={() => handleSelect(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleSelect(option.value)
                    }
                  }}
                  className={cn(
                    'px-4 py-3 cursor-pointer transition-all text-base',
                    'hover:underline',
                    selectedValue === option.value && 'bg-neutral-100'
                  )}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-4 font-poppins text-sm text-danger-400 italic">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select, selectVariants }

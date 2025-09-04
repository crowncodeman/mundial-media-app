'use client'

import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from './Icon'
import { cn } from '@/utils/cn'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  disabled?: boolean
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    { currentPage, totalPages, onPageChange, className, disabled = false },
    ref
  ) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const handlePrevious = () => {
      if (currentPage > 1 && !disabled) {
        onPageChange(currentPage - 1)
      }
    }

    const handleNext = () => {
      if (currentPage < totalPages && !disabled) {
        onPageChange(currentPage + 1)
      }
    }

    const handlePageClick = (page: number) => {
      if (!disabled && page !== currentPage) {
        onPageChange(page)
      }
    }

    return (
      <div ref={ref} className={cn('flex items-center', className)}>
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1 || disabled}
          className={cn(
            'flex items-center justify-center w-11 h-11 transition-all',
            'border border-secondary-300',
            'text-neutral-500 hover:bg-neutral-100',
            'disabled:text-neutral-300 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            type="button"
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={disabled}
            className={cn(
              'w-11 h-11 flex items-center justify-center font-poppins text-base transition-all',
              'border border-l-0 border-secondary-300',
              page === currentPage
                ? 'bg-secondary-400 text-neutral-500 hover:bg-secondary-400'
                : 'text-neutral-500 hover:bg-neutral-100',
              'disabled:text-neutral-300 disabled:cursor-not-allowed disabled:hover:bg-transparent'
            )}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages || disabled}
          className={cn(
            'flex items-center justify-center w-11 h-11 transition-all',
            'border border-l-0 border-secondary-300',
            'text-neutral-500 hover:bg-neutral-100',
            'disabled:text-neutral-300 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    )
  }
)
Pagination.displayName = 'Pagination'

export default Pagination

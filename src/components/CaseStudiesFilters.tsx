'use client'

import { useState } from 'react'
import { ChevronDown } from './Icon'

const categories = [
  'All Categories',
  'Technology',
  'Travel',
  'News',
  'Business',
  'Beauty',
  'Education',
  'Fashion',
  'Health & Fitness',
]

const timeFilters = ['All Time', 'This Year', 'Last 6 Months', 'Last Month']

const CaseStudiesFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedTime, setSelectedTime] = useState('All Time')
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false)

  return (
    <div className="flex gap-8">
      {/* Category Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setCategoryDropdownOpen(!categoryDropdownOpen)
            setTimeDropdownOpen(false)
          }}
          className="flex items-center gap-1 font-poppins text-sm uppercase tracking-[0.28px] text-neutral-900 hover:opacity-70 transition-opacity"
        >
          <span>{selectedCategory}</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        {categoryDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-neutral-200 min-w-[200px] z-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category)
                  setCategoryDropdownOpen(false)
                }}
                className="block w-full text-left px-4 py-3 font-poppins text-sm tracking-[0.28px] text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Time Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setTimeDropdownOpen(!timeDropdownOpen)
            setCategoryDropdownOpen(false)
          }}
          className="flex items-center gap-1 font-poppins text-sm uppercase tracking-[0.28px] text-neutral-900 hover:opacity-70 transition-opacity"
        >
          <span>{selectedTime}</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        {timeDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-neutral-200 min-w-[150px] z-10">
            {timeFilters.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => {
                  setSelectedTime(time)
                  setTimeDropdownOpen(false)
                }}
                className="block w-full text-left px-4 py-3 font-poppins text-sm tracking-[0.28px] text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CaseStudiesFilters

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { cn, container } from '@/utils/cn'

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navLinks = [
    { href: '/about', label: 'About' },
    {
      href: '#',
      label: 'Solutions',
      dropdown: [
        { href: '#', label: 'Publishers' },
        { href: '#', label: 'Advertisers' },
      ],
    },
    { href: '/technology', label: 'Technology' },
    {
      href: '#',
      label: 'Our Brands',
      dropdown: [
        { href: '#', label: '433FUTBOL' },
        { href: '#', label: 'Next Gen Latina' },
      ],
    },
    {
      href: '#',
      label: 'Resources',
      dropdown: [
        { href: '/case-studies', label: 'Case Studies' },
        { href: '#', label: 'Blogs' },
        { href: '#', label: 'Ad Unit Demos' },
      ],
    },
  ]

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        mobileMenuOpen &&
        !target.closest('#mobile-menu') &&
        !target.closest('#mobile-menu-button')
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  // Render desktop navigation
  const renderDesktopNav = () => {
    return (
      <div className="hidden lg:flex lg:gap-x-12">
        {navLinks.map((link) => {
          if (link.dropdown) {
            const isOpen = hoveredItem === link.label
            return (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current)
                    }
                    setHoveredItem(link.label)
                  }}
                  onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setHoveredItem(null)
                    }, 100)
                  }}
                  className={cn(
                    'flex items-center justify-center',
                    'pt-1 pb-1',
                    'text-text-sm font-normal uppercase tracking-wider text-neutral-500',
                    'border-b border-transparent',
                    'hover:border-secondary-400 hover:font-medium',
                    'transition-all'
                  )}
                >
                  {link.label}
                </button>
                <div
                  role="menu"
                  className={cn(
                    'absolute left-0 top-full mt-3 z-50 transition-all duration-200 ease-out min-w-[120px]',
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  )}
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current)
                    }
                    setHoveredItem(link.label)
                  }}
                  onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setHoveredItem(null)
                    }, 100)
                  }}
                >
                  <div className="overflow-hidden bg-neutral-100 shadow-lg">
                    <div className="flex flex-col gap-8 p-6">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-text-sm font-normal leading-none tracking-[0.28px] text-neutral-500 transition-colors hover:text-neutral-500/70 whitespace-nowrap"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'flex items-center justify-center',
                  'pt-1 pb-1',
                  'text-text-sm font-normal uppercase tracking-wider text-neutral-500',
                  'border-b border-transparent',
                  'hover:border-secondary-400 hover:font-medium',
                  'transition-all'
                )}
              >
                {link.label}
              </Link>
            )
          }
        })}
      </div>
    )
  }

  const renderMobileMenu = () => {
    return (
      <div
        className={cn(
          'absolute left-0 right-0 top-full overflow-hidden z-50',
          'lg:hidden',
          'bg-neutral-100',
          'transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="px-5 py-10 space-y-7">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="space-y-6">
                  <div className="font-anton text-neutral-500 text-xl capitalize tracking-tight leading-tight">
                    {link.label}
                  </div>
                  <div className="pl-4 space-y-6">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-neutral-500 text-text-sm font-poppins uppercase tracking-wider leading-none"
                      >
                        — {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-anton text-neutral-500 text-xl capitalize tracking-tight leading-tight"
                >
                  {link.label}
                </Link>
              )
            }
          })}
        </div>
      </div>
    )
  }

  return (
    <header className="relative bg-neutral-100 border-b border-secondary-100">
      <nav
        aria-label="Global"
        className={cn(
          container,
          'flex items-center justify-between px-5 py-3 lg:px-20 lg:py-4'
        )}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="h-9 w-[124px] lg:h-11 lg:w-auto">
            <span className="sr-only">Mundial Media</span>
            <Image
              src="/mundial-media-logo.svg"
              alt="Mundial Media"
              width={155}
              height={44}
              className="h-full w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            id="mobile-menu-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative size-6 flex items-center justify-center"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close menu' : 'Open main menu'}
            </span>
            {mobileMenuOpen ? (
              <Image
                src="/menu-close.svg"
                alt="Close"
                width={16}
                height={16}
                className="size-4"
              />
            ) : (
              <Image
                src="/menu.svg"
                alt="Menu"
                width={24}
                height={24}
                className="size-full"
              />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        {renderDesktopNav()}
      </nav>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </header>
  )
}

export default Header

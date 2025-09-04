'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from './Icon'
import { Button } from './Button'
import { cn, container } from '@/utils/cn'

export function Footer() {
  const footerLinks = {
    solutions: [
      { href: '/', label: 'Home' },
      { href: '#', label: 'Advertisers' },
      { href: '#', label: 'Publishers' },
      { href: '/technology', label: 'CadmusAI' },
    ],
    company: [
      { href: '/about', label: 'About' },
      { href: '#', label: 'Careers' },
      { href: '#', label: 'Press' },
      { href: '#', label: 'Blog' },
      { href: '/case-studies', label: 'Case Studies' },
    ],
    social: [
      { href: '#', label: 'facebook' },
      { href: '#', label: 'instagram' },
      { href: '#', label: 'x (twitter)' },
      {
        href: 'https://www.linkedin.com/company/mundialmedia/',
        label: 'linkedin',
      },
      { href: '#', label: 'youtube' },
    ],
  }

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookies Settings' },
  ]

  return (
    <footer className="relative bg-secondary-100">
      <div className={cn(container, 'px-5 py-10 lg:px-12 lg:py-20 xl:px-16')}>
        {/* CTA Section */}
        <div className="flex flex-col gap-10 mb-10 lg:relative lg:mb-20">
          <h2 className="font-anton text-[60px] lg:text-heading-2 leading-none lg:leading-[1.1] uppercase text-neutral-500 lg:pr-48">
            <span className="lg:hidden">
              Get Brand &<br />
              Advertiser Solutions
            </span>
            <span className="hidden lg:inline">
              Let&apos;s do
              <br />
              business together
            </span>
          </h2>
          <Link href="/contact">
            <Button
              className="w-fit lg:absolute lg:top-44 lg:right-0"
              variant="primary"
              trailingIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Say Hello
            </Button>
          </Link>
        </div>

        {/* Divider */}
        <div className="h-0 w-full border-t border-neutral-300 mb-10 lg:mb-20"></div>

        {/* Main Footer Content */}
        <div className="space-y-10 lg:space-y-0 lg:flex lg:justify-between lg:items-start lg:mb-20">
          {/* Logo */}
          <div className="flex items-center gap-3 lg:w-40 lg:flex-shrink-0">
            <Image
              src="/mundial-media-logo.svg"
              alt="Mundial Media"
              width={152}
              height={44}
              className="h-11 w-auto"
            />
          </div>

          {/* Links Grid */}
          <div className="space-y-10 lg:space-y-0 lg:flex lg:gap-24">
            {/* Solutions */}
            <div className="space-y-6 lg:space-y-12">
              <h3 className="font-anton text-heading-6 capitalize leading-none text-neutral-500 uppercase">
                Solutions
              </h3>
              <div className="space-y-6">
                {footerLinks.solutions.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-poppins text-text-sm leading-none tracking-wider text-neutral-500 uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="space-y-6 lg:space-y-12">
              <h3 className="font-anton text-heading-6 capitalize leading-none text-neutral-500 uppercase">
                Company
              </h3>
              <div className="space-y-6">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-poppins text-text-sm leading-none tracking-wider text-neutral-500 uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-6 lg:space-y-12">
              <h3 className="font-anton text-heading-6 capitalize leading-none text-neutral-500 uppercase">
                Social
              </h3>
              <div className="space-y-6">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block font-poppins text-text-sm leading-none tracking-wider text-neutral-500 uppercase"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="space-y-6 lg:space-y-12 lg:w-72">
              <h3 className="font-anton text-heading-6 capitalize leading-none text-neutral-500 uppercase">
                Subscribe
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-[36px] border border-neutral-500 px-5 py-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent font-poppins text-text-sm leading-none text-neutral-500 placeholder-neutral-500 placeholder-opacity-30 outline-none"
                  />
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500" />
                </div>
                <p className="font-poppins text-text-xs font-light leading-[1.3] text-neutral-500">
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="space-y-4 lg:space-y-0 lg:flex lg:justify-between lg:items-center">
          <p className="font-poppins text-text-xs font-light leading-[1.3] text-neutral-500">
            © {new Date().getFullYear()} Mundial Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-poppins text-text-xs font-light leading-[1.3] text-neutral-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

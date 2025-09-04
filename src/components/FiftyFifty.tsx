'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from './Icon'
import { Button } from './Button'

interface FiftyFiftyProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  ctaText?: string
  ctaHref?: string
  imageUrl?: string
  imageAlt?: string
  imageOnRight?: boolean
}

const FiftyFifty = ({
  eyebrow = 'All the Media You Need—One Partner.',
  headline = 'Gamified units, display, video, high-impact, CTV/OTT, and audio—we do it all.',
  subheadline = 'Plus, custom formats and in-language creative included. No extra fees.',
  ctaText = 'Learn more',
  ctaHref = '#',
  imageUrl = '/images/placeholder-710x900.jpg',
  imageAlt = '',
  imageOnRight = false,
}: FiftyFiftyProps) => {
  return (
    <section className="bg-secondary-100">
      <div className="flex flex-col lg:flex-row lg:min-h-[900px]">
        {/* Mobile: Image on top */}
        <div className="lg:hidden">
          <div className="relative h-[442px]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Desktop: Left side - Image (or right side if imageOnRight is true) */}
        <div
          className={`hidden lg:block lg:w-[710px] lg:relative lg:flex-shrink-0 ${
            imageOnRight ? 'lg:order-2' : ''
          }`}
        >
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1 lg:flex lg:items-center">
          <div className="px-5 py-10 lg:px-20 lg:py-20 max-w-[670px]">
            <div className="space-y-10 lg:space-y-12">
              {/* Text */}
              <div className="space-y-10 lg:space-y-12">
                <p className="font-poppins text-xs uppercase tracking-wider">
                  {eyebrow}
                </p>

                <div className="space-y-6">
                  <h2 className="font-anton text-[40px] lg:text-[48px] leading-[1.2] tracking-tight">
                    {headline}
                  </h2>

                  {subheadline && (
                    <p className="font-poppins font-medium text-[24px] lg:text-[32px] leading-[1.2]">
                      {subheadline}
                    </p>
                  )}
                </div>
              </div>

              {/* CTA */}
              <Link href={ctaHref}>
                <Button
                  variant="primary"
                  className="w-fit"
                  trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FiftyFifty

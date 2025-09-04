'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from './Icon'
import { Button } from './Button'

interface HeroProps {
  headline: string
  mobileHeadline?: string
  imageUrl: string
  mobileImageUrl?: string
  ctaText?: string
  ctaHref?: string
}

const Hero = ({
  headline,
  mobileHeadline,
  imageUrl,
  mobileImageUrl,
  ctaText = 'Get in Touch',
  ctaHref = '/contact',
}: HeroProps) => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:h-[432px]">
        {/* Hero Image Section */}
        <div className="w-full aspect-[343/184] lg:aspect-auto lg:w-1/2 relative">
          <Image
            src={mobileImageUrl || imageUrl}
            alt=""
            fill
            className="object-cover lg:hidden"
            priority
          />
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover hidden lg:block"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button type="button" className="relative w-20 h-20">
              <Image
                src="/images/icon-play-large.svg"
                alt="Play video"
                fill
                className="object-contain"
              />
            </button>
          </div>
        </div>

        <div className="bg-white lg:w-1/2 lg:flex lg:items-center">
          <div className="px-5 pt-10 pb-[42px] lg:px-12 lg:py-16 space-y-10 lg:space-y-12">
            <div className="space-y-4 lg:space-y-12">
              {/* Headline */}
              <h1 className="font-anton text-[40px] lg:text-[48px] leading-[1.2] text-black tracking-tight">
                <span className="lg:hidden">{mobileHeadline || headline}</span>
                <span className="hidden lg:block">{headline}</span>
              </h1>

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

export default Hero

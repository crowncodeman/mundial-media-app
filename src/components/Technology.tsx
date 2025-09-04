'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from './Icon'
import { Button } from './Button'
import { cn, container } from '@/utils/cn'

interface TechnologyProps {
  eyebrow?: string
  headline?: string
  description?: string[]
  ctaButtons?: {
    text: string
    href: string
  }[]
}

const Technology = ({
  eyebrow = 'Technology',
  headline = 'Cadmus AI: A Breakthrough in AI-Powered Contextual Advertising for Multicultural Audiences',
  description = [
    'Mundial Media, the leader in AI-driven multicultural advertising, today announced the launch of Cadmus 2.0, the next-generation evolution of its proprietary cookieless hyper-contextual engine.',
    'Cadmus AI is the first and only contextual intelligence platform specifically designed to reach all audiences with a unique focus on multicultural targeting. It leverages real-time AI analysis to deliver culturally resonant advertising at scale. Since its inception, Cadmus AI has processed over 28 billion words, 1.6 billion sentences, and 3 billion page layouts, generating over 2 billion actionable data points.',
  ],
  ctaButtons = [
    { text: 'For Publishers', href: '#' },
    { text: 'For Advertisers', href: '#' },
  ],
}: TechnologyProps) => {
  return (
    <section className="bg-neutral-500 text-neutral-100">
      <div className={cn(container, 'px-5 py-20 lg:px-12 lg:py-32')}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
          {/* Text Content */}
          <div className="max-w-[350px] lg:max-w-[600px] mx-auto lg:mx-0 text-left lg:flex-1">
            {/* Eyebrow */}
            <p className="font-poppins text-xs lg:text-sm uppercase tracking-[0.48px] lg:tracking-[0.56px] mb-10 lg:mb-12 text-neutral-100">
              {eyebrow}
            </p>

            {/* Headline */}
            <h2 className="font-anton text-[40px] lg:text-[60px] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] mb-6 lg:mb-10 text-neutral-100">
              {headline}
            </h2>

            {/* Description */}
            <div className="space-y-4 lg:space-y-6 mb-10 lg:mb-12">
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-poppins font-light text-base lg:text-lg leading-[1.5] text-neutral-100"
                >
                  {index === 0 && (
                    <>
                      <Link
                        href="https://www.mundialmedia.com/"
                        className="underline hover:opacity-80 transition-opacity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mundial Media
                      </Link>
                      {paragraph.replace('Mundial Media', '')}
                    </>
                  )}
                  {index !== 0 && paragraph}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
              {ctaButtons.map((button) => (
                <Link
                  key={button.text}
                  href={button.href}
                  className="flex-1 lg:flex-initial"
                >
                  <Button
                    variant="primary"
                    className="w-full lg:w-auto border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-500"
                    trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    {button.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Phone/Device Image - Desktop Only */}
          <div className="hidden lg:block lg:flex-shrink-0">
            <Image
              src="/images/placeholder-phone-technology.jpg"
              alt="Cadmus AI Technology Demo"
              width={400}
              height={800}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology

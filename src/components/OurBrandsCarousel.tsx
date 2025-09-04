'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from './Icon'
import { Button } from './Button'

interface Brand {
  id: string
  name: string
  description: string[]
  logoUrl: string
  imageUrl: string
  backgroundColor: string
  ctaText?: string
  ctaHref?: string
}

interface OurBrandsCarouselProps {
  eyebrow?: string
  headline?: string
  brands?: Brand[]
}

const defaultBrands: Brand[] = [
  {
    id: '1',
    name: '433 Futball',
    description: [
      "Born out of a passion for the beautiful game, 433 is the embodiment of football culture. By positioning ourselves inside the locker room, we've become part of the team and equal to the players. This gives us access to the best moments football has to offer, moments that – before 433 – have never been available to the fans.",
      "Ready to be part of the magic? Drop us a message to learn more about our services, we're here to connect you with the biggest football community in the world!",
    ],
    logoUrl: '/images/brand-433-logo.png',
    imageUrl: '/images/brand-433-image.jpg',
    backgroundColor: '#C3B89C',
    ctaText: 'Learn more',
    ctaHref: '/brands/433-futball',
  },
  {
    id: '2',
    name: 'Oh My Goal',
    description: [
      'Oh My Goal brings the passion and drama of football to millions of fans worldwide through engaging video content.',
      'Join the global football conversation and never miss a moment of the beautiful game.',
    ],
    logoUrl: '/images/brand-omg-logo.png',
    imageUrl: '/images/brand-omg-image.jpg',
    backgroundColor: '#A8B5D3',
    ctaText: 'Learn more',
    ctaHref: '/brands/oh-my-goal',
  },
  {
    id: '3',
    name: 'GAMR',
    description: [
      'GAMR is the ultimate destination for gaming culture and esports entertainment.',
      'Level up your gaming experience with exclusive content and community.',
    ],
    logoUrl: '/images/brand-gamr-logo.png',
    imageUrl: '/images/brand-gamr-image.jpg',
    backgroundColor: '#D3A8B5',
    ctaText: 'Learn more',
    ctaHref: '/brands/gamr',
  },
  {
    id: '4',
    name: 'NextGen Latinas',
    description: [
      "Born out of a passion for the beautiful game, 433 is the embodiment of football culture. By positioning ourselves inside the locker room, we've become part of the team and equal to the players. This gives us access to the best moments football has to offer, moments that – before 433 – have never been available to the fans.",
      "Ready to be part of the magic? Drop us a message to learn more about our services, we're here to connect you with the biggest football community in the world!",
    ],
    logoUrl: '/images/nextgen-latina-logo.png',
    imageUrl: '/images/brand-433-image.jpg',
    backgroundColor: '#F5A623',
    ctaText: 'Learn more',
    ctaHref: '/brands/nextgen-latinas',
  },
]

const OurBrandsCarousel = ({
  eyebrow = 'OUR BRANDS',
  headline = 'More from our ecosystem',
  brands = defaultBrands,
}: OurBrandsCarouselProps) => {
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay(autoplayOptions)]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-10 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="container">
          <div className="flex flex-col gap-10 lg:gap-12 items-center text-center lg:max-w-[413px] lg:mx-auto">
            <p className="font-poppins text-xs uppercase tracking-[0.48px] text-neutral-500">
              {eyebrow}
            </p>

            <h2 className="font-anton text-[40px] lg:text-[48px] leading-tight tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-500">
              {headline}
            </h2>
          </div>
        </div>

        <div className="w-full lg:max-w-[1280px] lg:mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_100%]"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative h-[419px] lg:h-[664px] w-full lg:w-[630px] lg:flex-shrink-0 overflow-hidden bg-[#ecece6]">
                      <Image
                        src={brand.imageUrl}
                        alt={brand.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 630px"
                      />
                    </div>

                    <div
                      className="px-5 py-10 lg:px-20 lg:py-20 flex-1"
                      style={{ backgroundColor: brand.backgroundColor }}
                    >
                      <div className="flex flex-col gap-10 lg:gap-12">
                        <div className="h-16 w-[159px] relative">
                          <Image
                            src={brand.logoUrl}
                            alt={`${brand.name} logo`}
                            fill
                            className="object-contain object-left"
                            sizes="159px"
                          />
                        </div>

                        <div className="flex flex-col gap-6 lg:gap-8">
                          <h3 className="font-anton text-[40px] lg:text-[48px] tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-500 leading-tight">
                            {brand.name}
                          </h3>

                          <div className="flex flex-col gap-4">
                            {brand.description.map((paragraph, index) => (
                              <p
                                key={`${brand.id}-desc-${index}`}
                                className="font-poppins text-base leading-[1.4] text-neutral-500"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>

                        {brand.ctaText && brand.ctaHref && (
                          <Link href={brand.ctaHref} className="inline-block">
                            <Button
                              variant="primary"
                              trailingIcon={
                                <ArrowUpRight className="w-4 h-4" />
                              }
                              className="w-fit"
                            >
                              {brand.ctaText}
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container lg:max-w-[1280px]">
          <div className="flex justify-center items-center gap-6">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-3 h-3 flex items-center justify-center text-neutral-900 hover:text-neutral-700 transition-colors disabled:text-neutral-300 disabled:cursor-not-allowed"
              aria-label="Previous brand"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>

            <div className="flex gap-2">
              {brands.map((brand, index) => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`w-1 h-1 rounded-full transition-all duration-200 ${
                    index === selectedIndex
                      ? 'bg-neutral-900'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-3 h-3 flex items-center justify-center text-neutral-900 hover:text-neutral-700 transition-colors disabled:text-neutral-300 disabled:cursor-not-allowed"
              aria-label="Next brand"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBrandsCarousel

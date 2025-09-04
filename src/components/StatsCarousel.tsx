'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from './Icon'

interface StatCard {
  id: string
  title: string
  description: string
  value: string
  bgColor: string
  textColor?: string
}

interface StatsCarouselProps {
  eyebrow?: string
  headline?: string
  stats?: StatCard[]
}

const defaultStats: StatCard[] = [
  {
    id: '1',
    title: 'Proprietary Technology',
    description: 'Hyper-contextual data points analyzed',
    value: '2B+',
    bgColor: 'bg-secondary-100',
  },
  {
    id: '2',
    title: 'Multicultural Reach',
    description: 'U.S. Monthly Uniques across Hispanic, Black, AAPI, LGBTQ',
    value: '35M+',
    bgColor: 'bg-secondary-400',
  },
  {
    id: '3',
    title: 'Premium Publisher Partners',
    description: 'In-Culture, Across All Verticals',
    value: '500+',
    bgColor: 'bg-primary-500',
  },
  {
    id: '4',
    title: 'Campaign Performance',
    description: 'Average CTR improvement for multicultural campaigns',
    value: '3.2x',
    bgColor: 'bg-secondary-100',
  },
  {
    id: '5',
    title: 'Languages Supported',
    description: 'Full localization and cultural adaptation',
    value: '15+',
    bgColor: 'bg-secondary-400',
  },
  {
    id: '6',
    title: 'Brand Safety',
    description: 'AI-powered contextual brand safety rate',
    value: '99%',
    bgColor: 'bg-primary-500',
  },
  {
    id: '7',
    title: 'Audience Insights',
    description: 'Real-time behavioral data points collected daily',
    value: '50M+',
    bgColor: 'bg-secondary-100',
  },
  {
    id: '8',
    title: 'Market Coverage',
    description: 'DMA coverage across the United States',
    value: '210',
    bgColor: 'bg-secondary-400',
  },
  {
    id: '9',
    title: 'Client Retention',
    description: 'Annual client retention rate',
    value: '94%',
    bgColor: 'bg-primary-500',
  },
  {
    id: '10',
    title: 'Campaign Optimization',
    description: 'Average time to optimize campaign performance',
    value: '48h',
    bgColor: 'bg-secondary-100',
  },
  {
    id: '11',
    title: 'Cultural Verticals',
    description: 'Specialized content categories and contexts',
    value: '150+',
    bgColor: 'bg-secondary-400',
  },
  {
    id: '12',
    title: 'Attribution Accuracy',
    description: 'Cross-device attribution accuracy rate',
    value: '87%',
    bgColor: 'bg-primary-500',
  },
]

const StatsCarousel = ({
  eyebrow = 'OUR DIFFERENTIATORS',
  headline = 'What sets us apart',
  stats = defaultStats,
}: StatsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 3,
    breakpoints: {
      '(max-width: 1024px)': { slidesToScroll: 1 },
    },
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="bg-neutral-100 py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto">
        {/* Top border line on desktop */}
        <div className="hidden lg:block h-px bg-neutral-500 w-full mb-8 mx-12"></div>

        {/* Flex container for reordering on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:px-12">
          {/* Header content - spans full width on mobile, left column on desktop */}
          <div className="mb-8 lg:mb-12 px-5 lg:px-0 order-1 lg:col-span-1">
            <p className="font-poppins text-xs uppercase tracking-wider text-neutral-500 mb-4 lg:mb-12">
              {eyebrow}
            </p>
            <h2 className="font-anton text-[32px] lg:text-[48px] leading-tight lg:leading-[1.2] text-neutral-500 lg:max-w-[522px]">
              {headline}
            </h2>
          </div>

          {/* Navigation - order 3 on mobile (bottom), order 1 + row-start-1 on desktop (top right) */}
          <div className="flex justify-start gap-0 mt-8 lg:mt-0 px-5 lg:px-0 order-3 lg:order-1 lg:row-start-1 lg:col-start-2 lg:flex-col">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-12 h-12 lg:w-11 lg:h-11 border border-neutral-500 border-r-0 lg:border-r lg:border-b-0 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="w-12 h-12 lg:w-11 lg:h-11 border border-neutral-500 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Carousel - order 2, spans full width */}
          <div
            className="overflow-hidden lg:px-0 order-2 lg:col-span-2"
            ref={emblaRef}
          >
            <div className="flex gap-4 lg:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex-[0_0_85%] max-w-[320px] lg:flex-[0_0_calc(33.333%-16px)] lg:max-w-none"
                >
                  <div
                    className={`${stat.bgColor} p-6 lg:p-10 h-[400px] lg:h-[500px] flex flex-col`}
                  >
                    <div className="mb-8 lg:flex lg:flex-col lg:gap-8 lg:h-[104px]">
                      <div className="h-px bg-neutral-500 w-full mb-6 lg:mb-0"></div>
                      <h3 className="font-poppins font-bold text-base lg:text-lg leading-[1.5] text-neutral-500 mb-4 lg:mb-0">
                        {stat.title}
                      </h3>
                      <p
                        className={`font-poppins text-base leading-relaxed lg:hidden ${
                          stat.textColor || 'text-neutral-500'
                        }`}
                      >
                        {stat.description}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="flex flex-col gap-2">
                        <div
                          className={`font-anton text-[80px] lg:text-[140px] leading-none lg:leading-[1.2] tracking-tight ${
                            stat.textColor || 'text-neutral-500'
                          }`}
                        >
                          {stat.value}
                        </div>
                        <p
                          className={`hidden lg:block font-poppins text-base leading-[1.4] ${
                            stat.textColor || 'text-neutral-500'
                          }`}
                        >
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsCarousel

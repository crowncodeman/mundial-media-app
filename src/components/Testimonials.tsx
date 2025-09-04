'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from './Icon'

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
}

interface TestimonialsProps {
  eyebrow?: string
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      '"We believe multiculturalism holds an awesome and important power for driving digital audience growth"',
    author: 'Dianne Russell',
    title: 'Designer at Apple Inc.',
  },
  {
    id: '2',
    quote:
      '"Mundial Media transformed our multicultural marketing strategy with data-driven insights and authentic connections"',
    author: 'John Martinez',
    title: 'CMO at Tech Corp',
  },
  {
    id: '3',
    quote:
      '"The best partner for reaching diverse audiences with precision and cultural authenticity"',
    author: 'Sarah Chen',
    title: 'Marketing Director at Global Brand',
  },
]

const Testimonials = ({
  eyebrow = 'TESTIMONIALS',
  testimonials = defaultTestimonials,
}: TestimonialsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="bg-secondary-100 py-10 lg:py-20 relative">
      <div className="container">
        <div className="flex flex-col gap-10 items-center justify-center lg:relative">
          <p className="font-poppins text-xs lg:text-[12px] uppercase tracking-[0.48px] text-neutral-500 text-center">
            {eyebrow}
          </p>

          <div className="w-full max-w-[1000px] lg:max-w-[630px]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] min-w-0 px-4 lg:px-0"
                  >
                    <div className="flex flex-col gap-8 items-center text-center">
                      <h3 className="font-anton text-[36px] leading-tight tracking-[-0.36px] text-neutral-500">
                        {testimonial.quote}
                      </h3>

                      <p className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                        ({testimonial.author} / {testimonial.title})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-0 lg:hidden">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-11 h-11 border border-neutral-700 border-r-0 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-11 h-11 border border-neutral-700 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="hidden lg:flex absolute left-20 top-1/2 -translate-y-1/2 w-11 h-11 border border-neutral-700 items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="hidden lg:flex absolute right-20 top-1/2 -translate-y-1/2 w-11 h-11 border border-neutral-700 items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

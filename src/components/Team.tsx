'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowUpRight } from './Icon'
import { Button } from './Button'
import Image from 'next/image'

interface TeamMember {
  id: string
  name: string
  title: string
  linkedIn?: string
  imageUrl: string
}

interface TeamProps {
  eyebrow?: string
  headline?: string
  ctaText?: string
  ctaHref?: string
  teamMembers?: TeamMember[]
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'TONY GONZALEZ',
    title: 'CEO AND CO-FOUNDER',
    linkedIn: 'https://www.linkedin.com/in/tonytgonzalez/',
    imageUrl: '/images/team-member-1.jpg',
  },
  {
    id: '2',
    name: 'RAMON CENDEJAS',
    title: 'CTO AND CO-FOUNDER',
    linkedIn: 'https://www.linkedin.com/in/ramoncendejas/',
    imageUrl: '/images/team-member-2.jpg',
  },
  {
    id: '3',
    name: 'PATRICIA LINARES',
    title: 'CO-FOUNDER',
    linkedIn: 'https://www.linkedin.com/in/patricia-linares-a0972493/',
    imageUrl: '/images/team-member-3.jpg',
  },
  {
    id: '4',
    name: 'ADRIAN RUIZ',
    title: 'CO-FOUNDER',
    linkedIn: 'https://www.linkedin.com/in/ruizadrian1/',
    imageUrl: '/images/team-member-4.jpg',
  },
]

const Team = ({
  eyebrow = 'TEAM',
  headline = 'Meet the Founders',
  ctaText = 'Join us',
  ctaHref = '/careers',
  teamMembers = defaultTeamMembers,
}: TeamProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    skipSnaps: false,
    containScroll: 'trimSnaps',
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile && emblaApi) {
      emblaApi.reInit()
    }
  }, [isMobile, emblaApi])

  const TeamMemberCard = ({
    member,
    variant = 'mobile',
  }: {
    member: TeamMember
    variant?: 'mobile' | 'desktop'
  }) => {
    const isMobileVariant = variant === 'mobile'

    return (
      <div className={isMobileVariant ? '' : 'flex flex-col gap-10'}>
        <div
          className={`relative overflow-hidden bg-neutral-200 ${
            isMobileVariant ? 'aspect-[311/358]' : 'h-[460px] w-full'
          }`}
        >
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
            sizes={isMobileVariant ? '100vw' : '(min-width: 1024px) 413px'}
          />
        </div>
        <div
          className={
            isMobileVariant ? 'mt-6 space-y-2' : 'flex flex-col gap-6 h-14'
          }
        >
          <h3
            className={`font-poppins uppercase text-neutral-500 ${
              isMobileVariant
                ? 'text-lg font-semibold tracking-[0.36px]'
                : 'text-[32px] font-normal tracking-[0.64px] leading-none'
            }`}
          >
            {member.name}
          </h3>
          <div
            className={`flex items-center text-neutral-500 ${
              isMobileVariant ? 'gap-4' : 'justify-between text-nowrap'
            }`}
          >
            <p className="font-poppins text-sm uppercase tracking-[0.28px] leading-none">
              {member.title}
            </p>
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500 leading-none"
              >
                (LINKEDIN)
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="mb-10 lg:mb-0 lg:col-span-4">
            <p className="font-poppins text-xs lg:text-sm uppercase tracking-[0.48px] lg:tracking-[0.56px] text-neutral-500 mb-10 lg:mb-12">
              {eyebrow}
            </p>

            <div className="flex flex-col gap-6">
              <h2 className="font-anton text-[40px] lg:text-[48px] leading-tight tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-500">
                {headline}
              </h2>

              <Button
                variant="primary"
                trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                className="w-fit"
                onClick={() => (window.location.href = ctaHref)}
              >
                {ctaText}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="lg:hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex-[0_0_100%] min-w-0 pr-4"
                    >
                      <TeamMemberCard member={member} variant="mobile" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-start gap-0 mt-10">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={prevBtnDisabled}
                  className="w-12 h-12 border border-neutral-500 border-r-0 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={nextBtnDisabled}
                  className="w-12 h-12 border border-neutral-500 flex items-center justify-center hover:bg-neutral-500 hover:text-neutral-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Next team member"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  variant="desktop"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

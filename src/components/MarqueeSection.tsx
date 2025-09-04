'use client'

import { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { ArrowUpRight } from './Icon'

const MarqueeSection = () => {
  // Pause state for each line
  const [topPaused, setTopPaused] = useState(false)
  const [middlePaused, setMiddlePaused] = useState(false)
  const [bottomPaused, setBottomPaused] = useState(false)

  const topLineItems = [
    'Education',
    'Automotive',
    'Health & Fitness',
    'Fashion',
    'Pets',
    'Technology',
    'Beauty',
  ]

  const middleLineItems = [
    'Entertainment',
    'Food & Drink',
    'Business',
    'Finance',
    'News',
    'Politics',
    'Sports',
  ]

  const bottomLineItems = [
    'Finance',
    'Politics',
    'Automotive',
    'Education',
    'Beauty',
    'Home & Garden',
    'Health & Fitness',
  ]

  return (
    <section className="bg-black py-10 lg:py-20 overflow-hidden">
      <div className="space-y-10 lg:space-y-12">
        {/* Header */}
        <div className="text-center px-5">
          <p className="font-poppins text-xs uppercase tracking-[0.48px] text-white">
            <span className="lg:hidden">350+</span>
            <span className="hidden lg:inline">500+</span> IN-CULTURE CERTIFIED
            PUBLISHERS
          </p>
        </div>

        <div className="space-y-5 lg:space-y-6">
          {/* Top line - scrolls left */}
          <div
            onMouseEnter={() => setTopPaused(true)}
            onMouseLeave={() => setTopPaused(false)}
          >
            <Marquee
              gradient={false}
              speed={30}
              play={!topPaused}
              className="text-white overflow-y-hidden"
              style={{ overflow: 'hidden' }}
            >
              {topLineItems.map((item, index) => (
                <MarqueeItem key={`${item}-${index}`} text={item} />
              ))}
            </Marquee>

            {/* Divider line */}
            <div className="h-px bg-white opacity-10 w-full mt-5 lg:mt-6"></div>
          </div>

          {/* Middle line - scrolls right */}
          <div
            onMouseEnter={() => setMiddlePaused(true)}
            onMouseLeave={() => setMiddlePaused(false)}
          >
            <Marquee
              gradient={false}
              speed={30}
              direction="right"
              play={!middlePaused}
              className="text-white overflow-y-hidden"
              style={{ overflow: 'hidden' }}
            >
              {middleLineItems.map((item, index) => (
                <MarqueeItem key={`${item}-${index}`} text={item} />
              ))}
            </Marquee>

            {/* Divider line */}
            <div className="h-px bg-white opacity-10 w-full mt-5 lg:mt-6"></div>
          </div>

          {/* Bottom line - scrolls left */}
          <div
            onMouseEnter={() => setBottomPaused(true)}
            onMouseLeave={() => setBottomPaused(false)}
          >
            <Marquee
              gradient={false}
              speed={30}
              play={!bottomPaused}
              className="text-white overflow-y-hidden"
              style={{ overflow: 'hidden' }}
            >
              {bottomLineItems.map((item, index) => (
                <MarqueeItem key={`${item}-${index}`} text={item} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

interface MarqueeItemProps {
  text: string
}

function MarqueeItem({ text }: MarqueeItemProps) {
  return (
    <div className="group flex items-center cursor-pointer mx-5 lg:mx-6">
      <span className="font-anton text-[40px] lg:text-[48px] leading-none uppercase whitespace-nowrap tracking-[-0.4px] lg:tracking-[-0.48px] opacity-10 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
      <span className="overflow-hidden transition-all duration-300 w-0 group-hover:w-10 lg:group-hover:w-12">
        <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </span>
    </div>
  )
}

export default MarqueeSection

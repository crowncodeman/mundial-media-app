import Hero from '@/components/Hero'
import Technology from '@/components/Technology'
import FiftyFifty from '@/components/FiftyFifty'
import StatsCarousel from '@/components/StatsCarousel'
import MarqueeSection from '@/components/MarqueeSection'
import CaseStudiesIndex from '@/components/CaseStudiesIndex'
// import { fetchData } from '@/lib/StoryBlok'

const HomePage = async () => {
  return (
    <>
      <Hero
        headline="Uniting Brands with Diverse Audiences via Cutting-Edge Contextual Technology"
        mobileHeadline="McDonald's Deals Awareness for Hispanic and Asian Audiences!"
        imageUrl="/images/hero-desktop.jpg"
        mobileImageUrl="/images/hero-mobile.jpg"
      />
      <Technology />
      <FiftyFifty />
      <StatsCarousel />
      <MarqueeSection />
      <CaseStudiesIndex />
    </>
  )
}

export default HomePage

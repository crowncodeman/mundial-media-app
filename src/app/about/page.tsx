import AboutHeader from '@/components/AboutHeader'
import AboutImageScroll from '@/components/AboutImageScroll'
import Mission from '@/components/Mission'
import OurBrandsCarousel from '@/components/OurBrandsCarousel'
import Solutions from '@/components/Solutions'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <AboutHeader />
      <AboutImageScroll />
      <Mission />
      <Team />
      <Solutions />
      <Testimonials />
      <OurBrandsCarousel />
    </main>
  )
}

export default AboutPage

import type { Metadata } from 'next'
import CaseStudiesFilters from '@/components/CaseStudiesFilters'
import CaseStudiesIndex from '@/components/CaseStudiesIndex'

export const metadata: Metadata = {
  title: 'Case Studies | Mundial Media',
  description:
    'Explore our portfolio of successful campaigns and partnerships that showcase our expertise in sports and entertainment marketing.',
}

const CaseStudiesPage = () => {
  return (
    <main className="flex-1">
      {/* Header Section */}
      <section className="bg-white">
        <div className="px-5 py-10 lg:py-20">
          <div className="container">
            <div className="space-y-10 lg:space-y-12">
              {/* Eyebrow */}
              <p className="font-poppins text-xs uppercase tracking-[0.48px] text-neutral-900">
                RESOURCES
              </p>

              {/* Title */}
              <h1 className="font-anton text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-900">
                Case Studies
              </h1>

              {/* Filters */}
              <CaseStudiesFilters />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <CaseStudiesIndex eyebrow="OUR WORK" headline="Featured Projects" />
    </main>
  )
}

export default CaseStudiesPage

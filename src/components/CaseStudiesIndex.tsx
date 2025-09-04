import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

interface CaseStudy {
  id: string
  category: string
  date: string
  title: string
  imageUrl: string
}

interface CaseStudiesIndexProps {
  eyebrow?: string
  caseStudies?: CaseStudy[]
  headline?: string
}

const defaultCaseStudies: CaseStudy[] = [
  {
    id: '1',
    category: 'TECHNOLOGY',
    date: 'MAY 20, 2025',
    title:
      'Diageo and Grupo Peñaflor trusted in contextual video formats to generate attention from their target',
    imageUrl: '/images/placeholder-case-study-1.jpg',
  },
  {
    id: '2',
    category: 'TRAVEL',
    date: 'MAY 20, 2025',
    title: 'United Airlines Reaches New Heights with CTV Advertising',
    imageUrl: '/images/placeholder-case-study-2.jpg',
  },
  {
    id: '3',
    category: 'TECHNOLOGY',
    date: 'MAY 20, 2025',
    title: 'ASUS Powers Up Vivobook S15 Awareness with Contextual Advertising',
    imageUrl: '/images/placeholder-case-study-3.jpg',
  },
]

const CaseStudiesIndex = ({
  eyebrow = 'CASE STUDIES',
  caseStudies = defaultCaseStudies,
}: CaseStudiesIndexProps) => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container">
        {/* Divider line */}
        <div className="h-px bg-neutral-500 w-full mb-10 lg:mb-8"></div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 lg:mb-20">
          <div className="space-y-8 lg:space-y-12 max-w-xl lg:max-w-[738px]">
            <p className="font-poppins text-xs uppercase tracking-[0.48px] text-neutral-500">
              {eyebrow}
            </p>
            <h2 className="font-anton text-[40px] lg:text-[48px] leading-tight tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-500">
              <span className="lg:block">Work we&apos;re</span>
              <span className="lg:block">proud of</span>
            </h2>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-[60px] lg:space-y-0 lg:block">
          {/* First Article - Mobile and Desktop */}
          {caseStudies[0] && (
            <article className="flex flex-col gap-8 lg:mb-20 lg:max-w-[847px]">
              <Link
                href={`/case-studies/${caseStudies[0].id}`}
                className="block relative group"
              >
                <div className="relative aspect-[350/218] lg:aspect-[847/527] overflow-hidden">
                  <Image
                    src={caseStudies[0].imageUrl}
                    alt={caseStudies[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    {caseStudies[0].category}
                  </span>
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    <span className="lg:hidden">{caseStudies[0].date}</span>
                    <span className="hidden lg:inline">(2017)</span>
                  </span>
                </div>

                <Link
                  href={`/case-studies/${caseStudies[0].id}`}
                  className="block group"
                >
                  <h3 className="font-poppins text-2xl lg:text-[32px] uppercase tracking-[0.24px] lg:tracking-[0.64px] leading-tight text-neutral-500 group-hover:opacity-70 transition-opacity">
                    {caseStudies[0].title}
                  </h3>
                </Link>
              </div>
            </article>
          )}

          {/* Second Article - Mobile and Desktop */}
          {caseStudies[1] && (
            <article className="flex flex-col gap-8 lg:ml-auto lg:max-w-[681px] lg:mb-20">
              <Link
                href={`/case-studies/${caseStudies[1].id}`}
                className="block relative group"
              >
                <div className="relative aspect-[350/218] lg:aspect-[681/424] overflow-hidden">
                  <Image
                    src={caseStudies[1].imageUrl}
                    alt={caseStudies[1].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    {caseStudies[1].category}
                  </span>
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    <span className="lg:hidden">{caseStudies[1].date}</span>
                    <span className="hidden lg:inline">(2014)</span>
                  </span>
                </div>

                <Link
                  href={`/case-studies/${caseStudies[1].id}`}
                  className="block group"
                >
                  <h3 className="font-poppins text-2xl lg:text-[32px] uppercase tracking-[0.24px] lg:tracking-[0.64px] leading-tight text-neutral-500 group-hover:opacity-70 transition-opacity">
                    {caseStudies[1].title}
                  </h3>
                </Link>
              </div>
            </article>
          )}

          {/* Third Article - Mobile stacked, Desktop side-by-side */}
          {caseStudies[2] && (
            <article className="flex flex-col gap-8 lg:flex-row lg:gap-8 lg:items-end">
              <Link
                href={`/case-studies/${caseStudies[2].id}`}
                className="block relative group lg:flex-shrink-0"
              >
                <div className="relative aspect-[350/218] lg:w-[424px] lg:h-[682px] lg:aspect-auto overflow-hidden">
                  <Image
                    src={caseStudies[2].imageUrl}
                    alt={caseStudies[2].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="space-y-8 lg:max-w-[460px]">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    {caseStudies[2].category}
                  </span>
                  <span className="font-poppins text-sm uppercase tracking-[0.28px] text-neutral-500">
                    <span className="lg:hidden">{caseStudies[2].date}</span>
                    <span className="hidden lg:inline">(2017)</span>
                  </span>
                </div>

                <Link
                  href={`/case-studies/${caseStudies[2].id}`}
                  className="block group"
                >
                  <h3 className="font-poppins text-2xl lg:text-[32px] uppercase tracking-[0.24px] lg:tracking-[0.64px] leading-tight text-neutral-500 group-hover:opacity-70 transition-opacity">
                    {caseStudies[2].title}
                  </h3>
                </Link>
              </div>
            </article>
          )}
        </div>

        {/* View More Button */}
        <div className="mt-10 lg:mt-20 flex justify-center">
          <Link href="/case-studies">
            <Button variant="primary" className="uppercase tracking-[0.28px]">
              VIEW MORE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesIndex

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { ArrowUpRight } from './Icon'

interface Solution {
  title: string
  description: string
  imageUrl: string
  ctaText?: string
  ctaHref?: string
}

interface SolutionsProps {
  eyebrow?: string
  headline?: string
  solutions?: Solution[]
}

const defaultSolutions: Solution[] = [
  {
    title: 'Publishers',
    description:
      'Monetize smarter with premium CPMs, seamless ad integration, and dedicated support — see why top publishers partner with Mundial Media.',
    imageUrl: '/images/solutions-publishers.jpg',
    ctaText: 'Learn more',
    ctaHref: '/solutions/publishers',
  },
  {
    title: 'Advertisers',
    description:
      'Reach diverse audiences with cultural precision, high-impact creative, and performance that delivers — see how brands grow with Mundial Media.',
    imageUrl: '/images/solutions-advertisers.jpg',
    ctaText: 'Learn more',
    ctaHref: '/solutions/advertisers',
  },
]

const Solutions = ({
  eyebrow = 'SOLUTIONS',
  headline = 'Where technology meets precision.',
  solutions = defaultSolutions,
}: SolutionsProps) => {
  return (
    <section className="bg-white py-10 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-10 lg:gap-0">
          <div className="flex flex-col gap-10 lg:gap-0">
            <div className="h-px bg-neutral-500 w-full"></div>

            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-8">
              <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-12">
                <p className="font-poppins text-xs lg:text-[12px] uppercase tracking-[0.48px] text-neutral-500">
                  {eyebrow}
                </p>

                <h2 className="font-anton text-[40px] lg:text-[48px] leading-tight tracking-[-0.4px] lg:tracking-[-0.48px] text-neutral-500">
                  {headline}
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:block lg:relative">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:mt-64">
              <div className="lg:col-span-5 lg:col-start-1">
                <div className="relative h-[383px] lg:h-[571px] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={solutions[0].imageUrl}
                    alt={solutions[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 522px"
                  />
                </div>

                <div className="flex flex-col gap-10 lg:gap-12 mt-10">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-anton text-[32px] lg:text-[36px] tracking-[-0.32px] lg:tracking-[-0.36px] text-neutral-500 leading-tight">
                      {solutions[0].title}
                    </h3>

                    <p className="font-poppins text-base leading-[1.4] text-neutral-500">
                      {solutions[0].description}
                    </p>
                  </div>

                  {solutions[0].ctaText && solutions[0].ctaHref && (
                    <Link href={solutions[0].ctaHref} className="inline-block">
                      <Button
                        variant="primary"
                        trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                        className="w-fit"
                      >
                        {solutions[0].ctaText}
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="h-px bg-neutral-500 w-full mt-10 lg:mt-12"></div>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 lg:-mt-56">
                <div className="relative h-[383px] lg:h-[571px] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={solutions[1].imageUrl}
                    alt={solutions[1].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 522px"
                  />
                </div>

                <div className="flex flex-col gap-10 lg:gap-12 mt-10">
                  <div className="flex flex-col gap-6">
                    <h3 className="font-anton text-[32px] lg:text-[36px] tracking-[-0.32px] lg:tracking-[-0.36px] text-neutral-500 leading-tight">
                      {solutions[1].title}
                    </h3>

                    <p className="font-poppins text-base leading-[1.4] text-neutral-500">
                      {solutions[1].description}
                    </p>
                  </div>

                  {solutions[1].ctaText && solutions[1].ctaHref && (
                    <Link href={solutions[1].ctaHref} className="inline-block">
                      <Button
                        variant="primary"
                        trailingIcon={<ArrowUpRight className="w-4 h-4" />}
                        className="w-fit"
                      >
                        {solutions[1].ctaText}
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="h-px bg-neutral-500 w-full mt-10 lg:mt-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions

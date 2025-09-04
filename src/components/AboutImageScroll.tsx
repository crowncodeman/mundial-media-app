import Image from 'next/image'

interface AboutImageScrollProps {
  images?: string[]
}

const defaultImages = [
  '/images/about-scroll-1.jpg',
  '/images/about-scroll-2.jpg',
  '/images/about-scroll-3.jpg',
  '/images/about-scroll-4.jpg',
  '/images/about-scroll-5.jpg',
  '/images/about-scroll-6.jpg',
]

const AboutImageScroll = ({
  images = defaultImages,
}: AboutImageScrollProps) => {
  // Duplicate images multiple times for seamless loop
  const allImages = [...images, ...images, ...images, ...images]

  // Calculate total width for animation
  const imageWidth = 280 // mobile width
  const gap = 16 // gap-4 = 1rem = 16px
  const totalWidth = (imageWidth + gap) * images.length

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-4 lg:gap-6 animate-infinite-scroll"
        style={{ width: `${totalWidth * 4}px` }}
      >
        {allImages.map((src, index) => {
          // Create a unique key based on the image position in the duplicated array
          const imageIndex = index % images.length
          const duplicateIndex = Math.floor(index / images.length)
          return (
            <div
              key={`image-${imageIndex}-duplicate-${duplicateIndex}`}
              className="flex-shrink-0 w-[280px] h-[200px] lg:w-[400px] lg:h-[300px] relative"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 400px"
                priority={index < 6}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutImageScroll

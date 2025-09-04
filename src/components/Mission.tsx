interface MissionProps {
  eyebrow?: string
  content?: string
}

const Mission = ({
  eyebrow = 'MISSION',
  content = 'Mundial Media is an NMSDC-certified, Hispanic-owned contextual marketing platform built to help brands authentically connect with diverse audiences. Born from the need for a more holistic, culturally grounded solution, we combine deep multicultural insights with a powerful data-driven engine — creating emotional connections that drive real performance.',
}: MissionProps) => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-poppins text-xs lg:text-sm uppercase tracking-[0.48px] lg:tracking-[0.56px] text-neutral-500 mb-10 lg:mb-0">
              {eyebrow}
            </p>
          </div>

          <div>
            <p className="font-poppins text-base lg:text-lg leading-[1.5] lg:leading-[1.5] text-neutral-500">
              {content}
            </p>
          </div>
        </div>

        <div className="h-px bg-neutral-500 w-full mt-10 lg:mt-20"></div>
      </div>
    </section>
  )
}

export default Mission

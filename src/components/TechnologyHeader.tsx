const TechnologyHeader = () => {
  return (
    <section className="relative">
      {/* Background and Content */}
      <div className="bg-white">
        <div className="px-5 py-10 lg:py-[90px]">
          <div className="container">
            <div className="space-y-10 lg:space-y-12 lg:text-center lg:max-w-[724px] lg:mx-auto">
              <p className="font-poppins text-xs uppercase tracking-[0.48px] text-neutral-900">
                TECHNOLOGY
              </p>

              <h1 className="font-anton text-heading-5 lg:text-heading-2 leading-[1.2] tracking-tight text-neutral-900">
                CADMUS AI – The First Hyper-Contextual Platform for
                Multicultural Audiences
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="relative w-full h-[300px] lg:h-[600px] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/technology-hero.jpg')" }}
      >
        {/* You can add an overlay or additional content here if needed */}
      </div>
    </section>
  )
}

export default TechnologyHeader

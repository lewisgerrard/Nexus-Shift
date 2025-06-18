import Image from "next/image"

export default function CaseStudies() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Case Studies</h1>

      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4">Chester Referees Association</h2>
        <div className="flex items-center justify-center h-[32rem]">
          <div className="relative w-full h-full">
            <Image
              src="/images/chester-referees-mockup.png"
              alt="Chester Referees Association Website Mockup"
              width={600}
              height={400}
              className="w-full h-full object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
        <p className="mt-4">A website designed and built for the Chester Referees Association.</p>
      </section>

      <section className="w-full max-w-5xl mt-12">
        <h2 className="text-3xl font-semibold mb-4">Diva Fitness</h2>
        <div className="flex items-center justify-center h-[32rem]">
          <div className="relative w-full h-full">
            <Image
              src="/images/diva-fitness-mockup.png"
              alt="Diva Fitness Website Mockup"
              width={600}
              height={400}
              className="w-full h-full object-contain object-center drop-shadow-2xl"
            />
          </div>
        </div>
        <p className="mt-4">A website designed and built for Diva Fitness, showcasing their classes and trainers.</p>
      </section>
    </main>
  )
}

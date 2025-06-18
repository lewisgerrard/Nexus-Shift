import Image from "next/image"

export default function CaseStudies() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Case Studies</h1>

      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4">Chester Referees Association</h2>
        <div className="flex justify-center items-center h-[32rem] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-2">
          <Image
            src="/images/chester-referees-mockup.png"
            alt="Chester Referees Association website mockup"
            width={800}
            height={600}
            className="max-w-4xl h-auto rounded-lg shadow-2xl object-cover object-center"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
        <p className="mt-4">A website designed and built for the Chester Referees Association.</p>
      </section>

      <section className="w-full max-w-5xl mt-12">
        <h2 className="text-3xl font-semibold mb-4">Diva Fitness</h2>
        <div className="flex justify-center items-center h-[32rem] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-2">
          <Image
            src="/images/diva-fitness-mockup.png"
            alt="Diva Fitness website mockup showing laptop and mobile views"
            width={800}
            height={600}
            className="max-w-4xl h-auto rounded-lg shadow-2xl object-cover object-center"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
        <p className="mt-4">A website designed and built for Diva Fitness, showcasing their classes and trainers.</p>
      </section>
    </main>
  )
}

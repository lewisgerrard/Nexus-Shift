const CaseStudiesPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Case Study 1 */}
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/3">
          <img src="https://via.placeholder.com/600x400" alt="Case Study 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Case Study Title 1</h2>
            <p className="text-gray-700">Brief description of the case study and its key outcomes.</p>
            <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/5">
          <img src="https://via.placeholder.com/600x400" alt="Case Study 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Case Study Title 2</h2>
            <p className="text-gray-700">Brief description of the case study and its key outcomes.</p>
            <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/3">
          <img src="https://via.placeholder.com/600x400" alt="Case Study 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Case Study Title 3</h2>
            <p className="text-gray-700">Brief description of the case study and its key outcomes.</p>
            <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="rounded-lg shadow-md overflow-hidden bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/5">
          <img src="https://via.placeholder.com/600x400" alt="Case Study 4" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Case Study Title 4</h2>
            <p className="text-gray-700">Brief description of the case study and its key outcomes.</p>
            <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesPage

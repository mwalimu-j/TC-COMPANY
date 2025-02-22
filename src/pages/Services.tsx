const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-blue-200 to-blue-500">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        We offer a wide range of high-quality construction services tailored to meet your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Floor Construction</h2>
          <p className="text-gray-600">
            We specialize in durable and high-quality floor construction to ensure long-lasting results.
          </p>
          <a
            href="/explore-more"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore More
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Wall Design</h2>
          <p className="text-gray-600">
            Innovative wall designs that enhance the aesthetics and durability of your space.
          </p>
          <a
            href="/explore-more"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore More
          </a>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Custom Projects</h2>
          <p className="text-gray-600">
            Tailored construction solutions to bring your unique vision to life.
          </p>
          <a
            href="/explore-more"
            className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore More
          </a>
        </div>
      </div>

      {/* Construction Budget Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg rounded-lg max-w-4xl mx-auto border border-blue-700">
        <h2 className="text-3xl font-semibold mb-4">Tailored Budgeting for Your Project</h2>
        <p className="text-lg leading-relaxed">
          Our construction budget is customized to align with your unique design preferences and expectations. 
          We are committed to ensuring your complete satisfaction by delivering high-quality services tailored to your vision. 
          Let us help you bring your dream project to life with a budget that suits your needs.
        </p>
        <a
          href="/explore-cost"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Explore Cost
        </a>
      </div>
    </section>
  );
};

export default Services;

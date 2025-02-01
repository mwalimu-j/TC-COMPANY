const Services = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We offer a wide range of high-quality construction services tailored to meet your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Floor Construction</h2>
            <p className="text-gray-600">We specialize in durable and high-quality floor construction to ensure long-lasting results.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Wall Design</h2>
            <p className="text-gray-600">Innovative wall designs that enhance the aesthetics and durability of your space.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Custom Projects</h2>
            <p className="text-gray-600">Tailored construction solutions to bring your unique vision to life.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
const Hero = () => {
    return (
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Carousel Component */}
        
        {/* Overlay with linear gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Welcome to Terraso Construction
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            We build durable and high-quality floor construction walls and designs that stand the test of time.
          </p>
          <a
            href="/services"
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Explore Our Services
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
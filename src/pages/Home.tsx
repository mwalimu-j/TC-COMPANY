import Hero from "../component/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#8B0000] to-[#FF6347] min-h-screen text-white">
      {/* Hero Section */}
      <Hero />

      {/* Additional Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Terraso Construction?</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We specialize in high-quality floor construction, durable walls, and innovative designs to meet all your construction needs. Our experienced team ensures precision and excellence in every project.
        </p>
      </section>
    </div>
  );
};

export default Home;

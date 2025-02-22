import { useState, useEffect } from "react";

const images = [
  "/image1.jpg", // Ensure images are in public/ folder
  "/image2.jpg",
  "/image3.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-blue-600 text-3xl md:text-5xl font-bold mb-4">
          Welcome to Terraso Construction
        </h1>
        <p className="text-blue-600 text-lg md:text-xl max-w-2xl">
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

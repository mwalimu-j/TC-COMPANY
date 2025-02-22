const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-green-700 to-green-500 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">About Terraso Construction Company</h1>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        At Terraso Construction Company, we specialize in delivering high-quality terrazzo flooring, wall designs, and construction solutions. With years of experience in the industry, we take pride in our craftsmanship, innovation, and commitment to customer satisfaction.
      </p>
      <h2 className="text-3xl font-semibold mt-8">Our Mission</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
        Our mission is to transform spaces with durable and stylish terrazzo designs that stand the test of time. We strive for excellence, ensuring every project meets the highest standards of quality, aesthetics, and sustainability.
      </p>
      <h2 className="text-3xl font-semibold mt-8">Our Values</h2>
      <ul className="text-lg leading-relaxed max-w-3xl mx-auto mt-4 list-disc list-inside">
        <li><strong>Quality & Excellence</strong> – We ensure top-notch craftsmanship in every project.</li>
        <li><strong>Innovation</strong> – We embrace modern techniques to enhance our designs.</li>
        <li><strong>Customer Satisfaction</strong> – We prioritize our clients' needs and work closely with them.</li>
        <li><strong>Integrity & Transparency</strong> – We operate with honesty and professionalism.</li>
      </ul>
      
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <a
          href="/services"
          className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300"
        >
          See Our Services
        </a>
        <a
          href="/contacts"
          className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-500 transition duration-300"
        >
          Reach Us
        </a>
      </div>
    </section>
  );
};

export default About;

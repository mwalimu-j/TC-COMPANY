const Contacts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-green-700 to-green-500 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Welcome to Terraso Construction Company – Let's Build Together!</h1>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        We value collaboration and excellence in every project we undertake. If you're looking for top-quality terrazzo flooring, wall designs, or any construction services, we’re here to bring your vision to life. Let’s work together to create durable and stylish solutions tailored to your needs.
      </p>
      <div className="mt-6">
        <p className="text-lg font-semibold">WhatsApp:</p>
        <a
          href="https://wa.me/254700598317"
          className="text-yellow-300 hover:underline text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          +254700598317
        </a>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Email:</p>
        <a
          href="mailto:webappgraphicdev1@gmail.com"
          className="text-yellow-300 hover:underline text-lg"
        >
          webappgraphicdev1@gmail.com
        </a>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Have Questions? We’re Here to Help!</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          If you have any inquiries about our services, pricing, or project processes, feel free to reach out. Our team is always ready to assist you with any concerns or provide more information about our company.
        </p>
      </div>
    </section>
  );
};

export default Contacts;

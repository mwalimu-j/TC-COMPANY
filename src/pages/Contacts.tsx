const Contacts = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Have questions or need assistance? Feel free to reach out to us through the following contact details.
        </p>
        <div className="mt-6">
          <p className="text-lg text-gray-800 font-semibold">WhatsApp:</p>
          <a
            href="https://wa.me/0700598317"
            className="text-blue-500 hover:underline text-lg"
          >
            0700598317
          </a>
        </div>
        <div className="mt-4">
          <p className="text-lg text-gray-800 font-semibold">Email:</p>
          <a
            href="mailto:mwalimujoshuakimanzi46@gmail.com"
            className="text-blue-500 hover:underline text-lg"
          >
            mwalimujoshuakimanzi46@gmail.com
          </a>
        </div>
      </section>
    );
  };
  
  export default Contacts;
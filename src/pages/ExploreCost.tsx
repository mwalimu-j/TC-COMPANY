const ExploreCost = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Explore Cost</h1>
      
      {/* Material Cost Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Material</th>
              <th className="border p-3">Cost (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-3">Marble Chips (Crushed Stones)</td><td className="border p-3">250-500 per bag</td></tr>
            <tr><td className="border p-3">Terrazzo Cement</td><td className="border p-3">1800-2000 per bag</td></tr>
            <tr><td className="border p-3">Colorants (Color Powder)</td><td className="border p-3">300 per kg</td></tr>
            <tr><td className="border p-3">Terrazzo Timber</td><td className="border p-3">1000 per bundle</td></tr>
            <tr><td className="border p-3">Terrazzo Strips</td><td className="border p-3">1200 per bundle</td></tr>
            <tr><td className="border p-3">Terrazzo Polish</td><td className="border p-3">500-1000 per litre</td></tr>
          </tbody>
        </table>
      </div>
      
      {/* Square Feet Cost Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Square Feet</th>
              <th className="border p-3">Cost with Materials (Ksh)</th>
              <th className="border p-3">Cost with Labour Only (Ksh)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-3">1 sq. ft</td><td className="border p-3">185.8</td><td className="border p-3">65.00</td></tr>
          </tbody>
        </table>
      </div>
      
      {/* Terrazzo Machines & Grinder Info */}
      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Terrazzo Machines & Grinders</h2>
        <p className="text-lg text-gray-600">
          The cost of renting a terrazzo machine or grinder for cleaning is Ksh. 2000.00 per day.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-8">
        <p className="text-lg text-gray-700 mb-4">Are you interested with our services? Reach out to us!</p>
        <a 
          href="/contacts" 
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out cursor-pointer"
        >
          Reach Us
          <span className="ml-2">➜</span>
        </a>
      </div>
    </section>
  );
};

export default ExploreCost;

const ExploreMore = () => {
    const floorImages = ["/floor1.jpg", "/floor2.jpg", "/floor3.jpg", "/floor4.jpg"];
    const wallImages = ["/wall1.jpg", "/wall2.jpg", "/wall3.jpg"];
    const furnitureImages = ["/top1.jpg", "/top2.jpg", "/top3.jpg"];
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Explore More Designs</h1>
        
        {/* Terrazzo Floor Designs */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Terrazzo Floor Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {floorImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img src={src} alt={`Floor Design ${index + 1}`} className="w-full h-60 object-cover" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Wall Designs */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Wall Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wallImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img src={src} alt={`Wall Design ${index + 1}`} className="w-full h-60 object-cover" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Furniture Designs */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Furniture Designs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {furnitureImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img src={src} alt={`Furniture Design ${index + 1}`} className="w-full h-60 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExploreMore;
  
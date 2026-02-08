export default function GalleryPage() {
  const galleryItems = [
    { title: "Modern Architecture", category: "Design" },
    { title: "Interior Spaces", category: "Interior" },
    { title: "Construction Progress", category: "Build" },
    { title: "Finished Projects", category: "Completed" },
    { title: "Landscape Design", category: "Exterior" },
    { title: "Detail Work", category: "Craftsmanship" },
    { title: "Urban Development", category: "Commercial" },
    { title: "Residential Homes", category: "Residential" },
    { title: "Renovation Work", category: "Renovation" }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Gallery
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Browse through our collection of architectural designs and completed projects
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-white text-7xl font-bold opacity-10">{index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="text-sm font-semibold mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Note: Images are placeholders. Replace with actual project photos for production.
          </p>
        </div>
      </div>
    </div>
  );
}

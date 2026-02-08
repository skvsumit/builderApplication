export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Villa",
      category: "Residential",
      description: "A contemporary 4-bedroom villa with sustainable design features"
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      description: "10,000 sq ft modern office space with open floor plan"
    },
    {
      title: "Luxury Apartment Complex",
      category: "Residential",
      description: "50-unit luxury apartment building with premium amenities"
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "Multi-tenant retail space with contemporary design"
    },
    {
      title: "Heritage Home Restoration",
      category: "Renovation",
      description: "Careful restoration of a century-old heritage property"
    },
    {
      title: "Eco-Friendly Residence",
      category: "Residential",
      description: "Net-zero energy home with innovative green technologies"
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Projects
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore our portfolio of successful architectural and construction projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">{index + 1}</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

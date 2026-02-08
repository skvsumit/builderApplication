import { FaHome, FaBuilding, FaPencilRuler, FaTools } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: FaPencilRuler,
      title: "Architectural Design",
      description: "Custom architectural designs for residential and commercial projects, focusing on functionality and aesthetics."
    },
    {
      icon: FaHome,
      title: "Residential Construction",
      description: "Complete home building services from foundation to finish, including renovations and additions."
    },
    {
      icon: FaBuilding,
      title: "Commercial Projects",
      description: "Professional construction services for offices, retail spaces, and commercial buildings."
    },
    {
      icon: FaTools,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Services
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We offer comprehensive architectural and construction services to bring your vision to life
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <service.icon className="text-5xl text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8 max-w-5xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold mb-2">Consultation</h4>
              <p className="text-sm text-gray-600">Discuss your vision and requirements</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-gray-600">Create detailed plans and 3D models</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold mb-2">Construction</h4>
              <p className="text-sm text-gray-600">Build with precision and quality</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold mb-2">Completion</h4>
              <p className="text-sm text-gray-600">Final inspection and handover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

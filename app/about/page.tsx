export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Us
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
              With years of experience in architectural design and construction, we've built
              a reputation for excellence, innovation, and client satisfaction. Our team of
              skilled architects and builders work together to transform your vision into reality.
            </p>
            <p className="text-lg text-gray-700">
              We believe that great architecture is about more than just buildings—it's about
              creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To deliver exceptional architectural and construction services that exceed our
              clients' expectations. We are committed to sustainable design practices, innovative
              solutions, and building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

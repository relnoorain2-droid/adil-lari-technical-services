import { imageConfig } from "@/lib/imageConfig";

export default function Services() {
  const services = [
    {
      title: "Cleaning Services",
      image: imageConfig.cleaningServices,
      icon: "fas fa-broom",
      description: "Comprehensive cleaning solutions for residential and commercial properties",
      features: [
        "Office Deep Cleaning",
        "Residential Cleaning",
        "Post-Construction Cleanup",
        "Carpet & Upholstery Cleaning",
        "Window Cleaning",
        "Sanitization Services"
      ],
      whatsappText: "I'm interested in Cleaning Services"
    },
    {
      title: "Floor & Wall Painting",
      image: imageConfig.paintingServices,
      icon: "fas fa-paint-roller",
      description: "Professional painting services for interior and exterior surfaces",
      features: [
        "Interior Wall Painting",
        "Exterior Building Painting",
        "Decorative Wall Finishes",
        "Color Consultation",
        "Surface Preparation",
        "Premium Paint Application"
      ],
      whatsappText: "I'm interested in Painting Services"
    },
    {
      title: "Plaster Work",
      image: imageConfig.plasterWork,
      icon: "fas fa-trowel",
      description: "Expert plastering services for smooth and durable wall finishes",
      features: [
        "Wall Plastering",
        "Ceiling Plastering",
        "Repair & Restoration",
        "Textured Finishes",
        "Crack Repairs",
        "Surface Smoothing"
      ],
      whatsappText: "I'm interested in Plaster Work"
    },
    {
      title: "Plumbing & Sanitary Installation",
      image: imageConfig.plumbingSanitary,
      icon: "fas fa-wrench",
      description: "Complete plumbing solutions and sanitary installations",
      features: [
        "Bathroom Installations",
        "Kitchen Plumbing",
        "Pipe Installation & Repair",
        "Fixture Installation",
        "Water Heater Services",
        "Emergency Plumbing"
      ],
      whatsappText: "I'm interested in Plumbing Services"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technical solutions for all your residential and commercial needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <i className={`${service.icon} text-primary text-xl`}></i>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <i className="fas fa-check text-accent mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href={`https://wa.me/971547965012?text=${encodeURIComponent(service.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Simple steps to get your project completed</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">Reach out via WhatsApp or phone to discuss your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">We evaluate your requirements and provide a detailed quote</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">Our professional team completes the work to perfection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Quality Check</h3>
              <p className="text-gray-600">Final inspection ensures everything meets our high standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/971547965012?text=Hi! I'd like to get a quote for your services" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              Get Free Quote
            </a>
            <a 
              href="tel:+971547965012" 
              className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <i className="fas fa-phone mr-3"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

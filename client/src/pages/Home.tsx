import { useEffect } from "react";
import { Link } from "wouter";
import { imageConfig } from "@/lib/imageConfig";
import { HeroSlider } from "@/components/HeroSlider";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          element.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="-mt-28">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Company Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img 
                src={imageConfig.aboutImage} 
                alt="Professional technical team discussing plans" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="reveal">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in Technical Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ADIL LARI TECHNICAL SERVICES has been serving Dubai and the UAE with premium technical solutions. Located in the heart of Deira, we bring years of expertise and commitment to every project.
              </p>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-award text-primary text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600 text-sm">Years of trusted service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-star text-primary text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                  <p className="text-gray-600 text-sm">Premium standards</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-primary text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">On-time completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical solutions for residential and commercial properties across Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cleaning Services */}
            <div className="reveal group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img 
                src={imageConfig.cleaningServices} 
                alt="Professional cleaning services in Dubai" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-broom text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cleaning Services</h3>
                <p className="text-gray-600 mb-4">Complete cleaning solutions for offices, homes, and commercial spaces with eco-friendly products.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in Cleaning Services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Painting Services */}
            <div className="reveal group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img 
                src={imageConfig.paintingServices} 
                alt="Professional painting and wall services" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-paint-roller text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Floor & Wall Painting</h3>
                <p className="text-gray-600 mb-4">Expert painting services for interior and exterior walls, floors, and decorative finishes.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in Painting Services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Plaster Work */}
            <div className="reveal group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img 
                src={imageConfig.plasterWork} 
                alt="Professional plaster work and wall preparation" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-trowel text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plaster Work</h3>
                <p className="text-gray-600 mb-4">Professional plastering services for smooth wall finishes and repair work with premium materials.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in Plaster Work" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>

            {/* Plumbing & Sanitary */}
            <div className="reveal group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <img 
                src={imageConfig.plumbingSanitary} 
                alt="Professional plumbing and sanitary installation" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fas fa-wrench text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plumbing & Sanitary</h3>
                <p className="text-gray-600 mb-4">Complete plumbing solutions and sanitary installations for bathrooms, kitchens, and commercial spaces.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in Plumbing Services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-primary mb-4">SPECIAL OFFERS</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AC Duct Cleaning Offer */}
            <div className="reveal group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={imageConfig.officeDeepCleaning}
                  alt="AC Duct Cleaning Service" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">AC Duct Cleaning</h3>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  30% off
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Professional AC duct cleaning service with advanced equipment and certified technicians.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in your AC Duct Cleaning 30% off offer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Get Offer
                </a>
              </div>
            </div>

            {/* Home Painting Offer */}
            <div className="reveal group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={imageConfig.paintingPlasterWork}
                  alt="Home Painting Service" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Home Painting</h3>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  30% off
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Complete home painting solutions with premium paints and professional finish guarantee.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in your Home Painting 30% off offer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Get Offer
                </a>
              </div>
            </div>

            {/* Kitchen Renovation Offer */}
            <div className="reveal group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={imageConfig.plumbingSanitary}
                  alt="Kitchen Renovation Service" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Kitchen Renovation</h3>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  30% off
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Complete kitchen renovation including plumbing, electrical, and finishing work.</p>
                <a 
                  href="https://wa.me/971547965012?text=I'm interested in your Kitchen Renovation 30% off offer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Get Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Catalog Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 animate-float">
              <i className="fab fa-whatsapp text-accent text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Browse Our Service Catalog</h2>
            <p className="text-xl text-green-100 mb-8">
              Explore our complete range of services, pricing, and packages directly on WhatsApp
            </p>
            <a 
              href="https://wa.me/971547965012?text=Hi! I'd like to see your service catalog" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              View WhatsApp Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Trusted by hundreds of clients across Dubai and UAE</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-tie text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Technicians</h3>
              <p className="text-gray-600">Certified and experienced professionals for every service</p>
            </div>

            <div className="reveal text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">On-Time Completion</h3>
              <p className="text-gray-600">We respect your time and deliver projects as promised</p>
            </div>

            <div className="reveal text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">Fair and transparent pricing with no hidden costs</p>
            </div>

            <div className="reveal text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dubai-wide Coverage</h3>
              <p className="text-gray-600">Serving all areas of Dubai and surrounding emirates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Transformations</h2>
            <p className="text-xl text-gray-600">See the difference our professional services make</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Before/After Comparison 1 */}
            <div className="reveal">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Before</span>
                    <img 
                      src={imageConfig.beforeAfter1Before} 
                      alt="Before cleaning transformation" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">After</span>
                    <img 
                      src={imageConfig.beforeAfter1After} 
                      alt="After cleaning transformation" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Deep Cleaning</h3>
                  <p className="text-gray-600">Complete office transformation with professional cleaning and maintenance services.</p>
                </div>
              </div>
            </div>

            {/* Before/After Comparison 2 */}
            <div className="reveal">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Before</span>
                    <img 
                      src={imageConfig.beforeAfter2Before} 
                      alt="Before painting and plaster work" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">After</span>
                    <img 
                      src={imageConfig.beforeAfter2After} 
                      alt="After painting and plaster work" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Painting & Plaster Work</h3>
                  <p className="text-gray-600">Professional wall preparation, plastering, and premium paint application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by businesses and homeowners across Dubai</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"Excellent service! They completely transformed our office space. Professional, punctual, and affordable. Highly recommended!"</p>
              <div className="flex items-center justify-center">
                <img 
                  src={imageConfig.testimonial1} 
                  alt="Ahmad Hassan testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Ahmad Hassan</h4>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"Amazing painting work! They helped us renovate our villa and the results exceeded our expectations. Very professional team."</p>
              <div className="flex items-center justify-center">
                <img 
                  src={imageConfig.testimonial2} 
                  alt="Sarah Al Mansouri testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Sarah Al Mansouri</h4>
                  <p className="text-gray-500 text-sm">Homeowner</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="reveal bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"Quick response for our plumbing emergency. Fair pricing and quality work. Will definitely use their services again!"</p>
              <div className="flex items-center justify-center">
                <img 
                  src={imageConfig.testimonial3} 
                  alt="Mohammed bin Rashid testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">Mohammed Rashid</h4>
                  <p className="text-gray-500 text-sm">Property Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white mb-6">Need Urgent Service?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us now for immediate assistance. We're available 24/7 for emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/971547965012" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                WhatsApp Now
              </a>
              <a 
                href="tel:+971547965012" 
                className="inline-flex items-center bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                <i className="fas fa-phone mr-3"></i>
                Call +971 54 796 5012
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

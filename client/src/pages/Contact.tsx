import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We will contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with our team today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600">Office No. 101-195, owned by Tayeb Mohammed Ibrahim<br />Deira, Al Khabeesi, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fab fa-whatsapp text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp / Mobile</h4>
                      <a 
                        href="https://wa.me/971547965012" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-green-600 transition-colors"
                      >
                        +971 54 796 5012
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href="mailto:laritechnicalservices@gmail.com" 
                        className="text-primary hover:text-blue-700 transition-colors"
                      >
                        laritechnicalservices@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-primary text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM<br />Friday - Saturday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Contact</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://wa.me/971547965012" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent hover:bg-green-600 text-white py-3 px-4 rounded-lg text-center font-semibold transition-colors"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                    </a>
                    <a 
                      href="tel:+971547965012" 
                      className="flex-1 bg-primary hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center font-semibold transition-colors"
                    >
                      <i className="fas fa-phone mr-2"></i>Call
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="painting">Painting & Wall Work</option>
                    <option value="plaster">Plaster Work</option>
                    <option value="plumbing">Plumbing & Sanitary</option>
                    <option value="maintenance">General Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">Or contact us directly:</p>
                  <a 
                    href="https://wa.me/971547965012" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    WhatsApp Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of Deira, Al Khabeesi, Dubai</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">Interactive map would be embedded here</p>
                <p className="text-gray-500 text-sm">Office No. 101-195, Deira, Al Khabeesi, UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { imageConfig } from "@/lib/imageConfig";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: imageConfig.cleaning1,
      title: "Office Cleaning",
      category: "Cleaning"
    },
    {
      src: imageConfig.cleaning2,
      title: "Deep Cleaning Service",
      category: "Cleaning"
    },
    {
      src: imageConfig.painting1,
      title: "Interior Painting",
      category: "Painting"
    },
    {
      src: imageConfig.painting2,
      title: "Wall Finishing",
      category: "Painting"
    },
    {
      src: imageConfig.plumbing1,
      title: "Bathroom Installation",
      category: "Plumbing"
    },
    {
      src: imageConfig.plumbing2,
      title: "Plumbing Services",
      category: "Plumbing"
    },
    {
      src: imageConfig.aboutImage,
      title: "Professional Team",
      category: "Team"
    },
    {
      src: imageConfig.beforeAfter1Before,
      title: "Before Renovation",
      category: "Before/After"
    },
    {
      src: imageConfig.beforeAfter1After,
      title: "After Renovation",
      category: "Before/After"
    }
  ];

  const categories = ["All", "Cleaning", "Painting", "Plumbing", "Before/After", "Team"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of completed projects and see the quality of our work
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <i className="fas fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <i className="fas fa-times text-gray-800"></i>
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Like What You See?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us bring the same level of quality and professionalism to your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/971547965012?text=Hi! I saw your gallery and I'm interested in your services" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

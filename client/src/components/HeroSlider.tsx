import { useState, useEffect } from "react";
import { imageConfig } from "@/lib/imageConfig";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: imageConfig.heroSlider1,
      title: "Professional Technical Services",
      subtitle: "Excellence in Every Project",
      description: "Trusted by hundreds of clients across Dubai and UAE for premium technical solutions"
    },
    {
      image: imageConfig.heroSlider2,
      title: "Expert Craftmanship",
      subtitle: "Quality You Can Trust",
      description: "Professional technicians delivering exceptional results with attention to detail"
    },
    {
      image: imageConfig.heroSlider3,
      title: "Modern Solutions",
      subtitle: "Advanced Technical Services",
      description: "Cutting-edge techniques and equipment for superior service delivery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="mb-4">
                <span className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent font-semibold text-sm uppercase tracking-wider">
                  Great Technology
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
                {slide.title}
                <span className="block text-accent text-3xl md:text-4xl mt-2 font-normal">
                  {slide.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
                {slide.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                  Request Call Back
                </button>
                <a 
                  href="https://wa.me/971547965012" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-block text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={() => goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
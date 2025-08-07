export const imageConfig = {
  logo: "https://imgur.com/HKsFAan.png",
  
  // Hero slider images
  heroSlider1: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg",
  heroSlider2: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
  heroSlider3: "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg",
  
  aboutImage: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg",
  
  // Service images - updated with new links
  cleaningServices: "https://images.pexels.com/photos/9462341/pexels-photo-9462341.jpeg",
  paintingServices: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg",
  plasterWork: "https://images.pexels.com/photos/5493658/pexels-photo-5493658.jpeg",
  plumbingSanitary: "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg",
  officeDeepCleaning: "https://images.pexels.com/photos/4097994/pexels-photo-4097994.jpeg",
  paintingPlasterWork: "https://images.pexels.com/photos/5583111/pexels-photo-5583111.jpeg",
  
  // Additional service images for variety
  cleaning1: "https://images.pexels.com/photos/9462341/pexels-photo-9462341.jpeg",
  cleaning2: "https://images.pexels.com/photos/4097994/pexels-photo-4097994.jpeg",
  painting1: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg",
  painting2: "https://images.pexels.com/photos/5583111/pexels-photo-5583111.jpeg",
  plumbing1: "https://images.pexels.com/photos/29301874/pexels-photo-29301874.jpeg",
  plumbing2: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
  
  // Before/After images
  beforeAfter1Before: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg",
  beforeAfter1After: "https://images.pexels.com/photos/9462341/pexels-photo-9462341.jpeg",
  beforeAfter2Before: "https://images.pexels.com/photos/5493658/pexels-photo-5493658.jpeg",
  beforeAfter2After: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg",
  
  // Testimonial images
  testimonial1: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  testimonial2: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  testimonial3: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
} as const;

export type ImageKey = keyof typeof imageConfig;

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/971547965012";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-accent hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}

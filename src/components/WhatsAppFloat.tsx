import { Button } from "./ui/button";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "0824443266"; 
    const message = "Hi! I'm interested in your automotive air conditioning services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="whatsapp-float h-14 w-14 rounded-full shadow-2xl bg-green-500 hover:bg-green-600" 
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
        className="h-7 w-7"
      />
    </Button>
  );
};
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual phone number
    const phoneNumber = "1234567890"; 
    const message = "Hi! I'm interested in your automotive air conditioning services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="ice"
      size="icon"
      className="whatsapp-float h-14 w-14 rounded-full shadow-2xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};
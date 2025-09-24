import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { ArcticParticles } from "@/components/ArcticParticles";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    // Smooth scroll to contact section
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated background particles */}
      <ArcticParticles />
      
      {/* Navigation */}
      <Navigation onContactClick={handleContactClick} />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onContactClick={handleContactClick} />
        
        {/* Partners Section */}
        <PartnersSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;

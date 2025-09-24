import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { ArcticParticles } from "@/components/ArcticParticles";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handleContactClick = () => {
    setShowContact(true);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated background particles */}
      <ArcticParticles />
      
      {/* Navigation */}
      <Navigation onContactClick={handleContactClick} onAboutClick={handleAboutClick} />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onContactClick={handleContactClick} />
        
        {/* About Section */}
        <AboutSection />
        
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
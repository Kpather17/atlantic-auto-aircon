import { Button } from "./ui/button";
import { InteractiveSnowflake } from "./InteractiveSnowflake";
import { Phone, Mail } from "lucide-react";
import acCompressorImage from "@/assets/ac-compressor-hero.jpg";

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const handleSnowflakeShatter = () => {
    onContactClick?.();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-hero-gradient/50 overflow-hidden pt-10">
      {/* Background glow effects */}
      <div className="hero-glow w-96 h-96 top-1/4 left-1/4" />
      <div className="hero-glow w-64 h-64 bottom-1/4 right-1/4" />
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Hero image */}
        <div className="mb-8">
          <img 
            src={acCompressorImage}
            alt="Automotive air conditioning compressor"
            className="mx-auto h-48 w-auto object-contain floating-element"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient-ice">Atlantic Auto</span>
          <br />
          <span className="text-foreground">Aircon</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-arctic-frost mb-12 max-w-3xl mx-auto">
          Expert Vehicle Air Conditioning Repair & Service
        </p>

        {/* Interactive elements */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={onContactClick}
              className="group"
            >
              <Phone className="mr-2 group-hover:animate-pulse" />
              Contact Us
            </Button>
            <Button 
              variant="frost" 
              size="xl"
              onClick={onContactClick}
            >
              <Mail className="mr-2" />
              Get Quote
            </Button>
          </div>

          {/* Interactive Snowflake */}
          <div className="relative">
            <InteractiveSnowflake onShatter={handleSnowflakeShatter} />
            <p className="text-sm text-arctic-frost mt-2 opacity-75">
              Click the snowflake ❄️
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a 
            href="https://facebook.com/yourpage" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-arctic-deep/50 rounded-full hover:bg-arctic-ice transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Follow us on Facebook"
          >
            <img 
              src="/facebook-icon.png" 
              alt="Facebook" 
              className="h-8 w-8"  // Increased size
            />
          </a>
          <a 
  href="https://instagram.com/yourprofile" 
  target="_blank"
  rel="noopener noreferrer"
  className="p-4 bg-arctic-deep/50 rounded-full hover:bg-arctic-ice transition-all duration-300 hover:scale-110 flex items-center justify-center"
  aria-label="Follow us on Instagram"
>
  <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
    <img 
      src="/instagram-icon.png" 
      alt="Instagram" 
      className="h-6 w-6"  // Slightly smaller to fit inside white circle
    />
  </div>
</a>
        </div>
      </div>
    </section>
  );
};
import { Button } from "./ui/button";
import { Car } from "lucide-react";

interface NavigationProps {
  onContactClick?: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-arctic-ice/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-arctic-electric/20 rounded-lg">
            <Car className="h-8 w-8 text-arctic-ice" />
          </div>
          <span className="text-xl font-bold text-gradient-ice">
            Atlantic Auto Aircon
          </span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-arctic-ice hover:text-foreground">
            About Us
          </Button>
          <Button 
            variant="frost" 
            onClick={onContactClick}
            className="hidden sm:inline-flex"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
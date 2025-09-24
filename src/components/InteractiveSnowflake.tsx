import { useState } from "react";
import { Snowflake } from "lucide-react";

interface InteractiveSnowflakeProps {
  onShatter?: () => void;
}

export const InteractiveSnowflake = ({ onShatter }: InteractiveSnowflakeProps) => {
  const [isShattered, setIsShattered] = useState(false);

  const handleClick = () => {
    if (!isShattered) {
      setIsShattered(true);
      setTimeout(() => {
        onShatter?.();
      }, 800);
    }
  };

  return (
    <div className="relative">
      <div 
        className={`snowflake-interactive floating-element ${isShattered ? 'opacity-0 scale-0' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Navigate to contact section"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <Snowflake 
          size={80} 
          className="text-arctic-ice drop-shadow-lg" 
        />
      </div>
      
      {/* Shatter effect particles */}
      {isShattered && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `shatter-${i} 1s ease-out forwards`,
              }}
            >
              <Snowflake 
                size={20} 
                className="text-arctic-ice/60" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Add shatter animations to the global CSS
const shatterStyles = `
  @keyframes shatter-0 {
    to { transform: translate(-50px, -50px) rotate(180deg) scale(0.3); opacity: 0; }
  }
  @keyframes shatter-1 {
    to { transform: translate(50px, -50px) rotate(-180deg) scale(0.3); opacity: 0; }
  }
  @keyframes shatter-2 {
    to { transform: translate(50px, 50px) rotate(180deg) scale(0.3); opacity: 0; }
  }
  @keyframes shatter-3 {
    to { transform: translate(-50px, 50px) rotate(-180deg) scale(0.3); opacity: 0; }
  }
  @keyframes shatter-4 {
    to { transform: translate(-70px, 0px) rotate(360deg) scale(0.2); opacity: 0; }
  }
  @keyframes shatter-5 {
    to { transform: translate(70px, 0px) rotate(-360deg) scale(0.2); opacity: 0; }
  }
  @keyframes shatter-6 {
    to { transform: translate(0px, -70px) rotate(180deg) scale(0.2); opacity: 0; }
  }
  @keyframes shatter-7 {
    to { transform: translate(0px, 70px) rotate(-180deg) scale(0.2); opacity: 0; }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shatterStyles;
  document.head.appendChild(style);
}
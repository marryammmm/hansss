import { useEffect, useState } from "react";
import logoImg from "@/assets/images/logo.jpg";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center animate-fadeIn">
        <div className="mb-8">
          <img
            src={logoImg}
            alt="Hans & Ellyn Logo"
            className="
              w-32 md:w-48 
              h-32 md:h-48 
              object-cover 
              mx-auto 
              rounded-full 
              shadow-lg 
              border-4 border-pink-300
              drop-shadow-[0_0_25px_rgba(255,182,193,0.9)]
            "
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
          Dear Hans Christian
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          With Love from Ellyn
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;

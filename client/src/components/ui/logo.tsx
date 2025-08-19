import { Link } from "wouter";
import logoImage from "@assets/TRCV full_1755598133347.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subTextSizes = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
  };

  return (
    <Link href="/" data-testid="logo-link">
      <div className={`flex items-center space-x-3 cursor-pointer ${className}`}>
        <img 
          src={logoImage} 
          alt="TRCV - The Red Carpet Ventures Logo" 
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
        {showText && (
          <div>
            <div className={`${textSizes[size]} font-bold text-gradient`}>TRCV</div>
            <div className={`${subTextSizes[size]} text-gray-600`}>The Red Carpet Ventures</div>
          </div>
        )}
      </div>
    </Link>
  );
}

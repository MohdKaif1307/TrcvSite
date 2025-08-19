import { Link } from "wouter";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
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
      <div className={`flex items-center space-x-2 cursor-pointer ${className}`}>
        <div className={`${sizeClasses[size]} bg-gradient-trcv rounded-lg flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-xl">T</span>
        </div>
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

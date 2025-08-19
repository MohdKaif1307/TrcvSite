import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CTAProps {
  title: string;
  description?: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTA({ 
  title, 
  description, 
  primaryText, 
  primaryHref, 
  secondaryText, 
  secondaryHref,
  className = "" 
}: CTAProps) {
  return (
    <section className={`text-center ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-8 max-w-4xl mx-auto">{description}</p>
      )}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href={primaryHref}>
          <Button 
            size="lg"
            className="bg-gradient-trcv hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-testid={`button-${primaryText.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {primaryText}
          </Button>
        </Link>
        {secondaryText && secondaryHref && (
          <Link href={secondaryHref}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-trcv-orange text-trcv-orange hover:bg-trcv-orange hover:text-white transition-all duration-300"
              data-testid={`button-${secondaryText.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {secondaryText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}

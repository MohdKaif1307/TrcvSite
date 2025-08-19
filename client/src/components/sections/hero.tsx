import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Corporate Event Planning Services in{" "}
              <span className="text-gradient">India</span> – TRCV
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforming Ideas into Impactful Corporate Events Across India. At TRCV, we specialize in designing and executing corporate events that exceed expectations. Whether it's a national conference, an annual meet, or a product launch, we bring innovation, creativity, and flawless coordination to every event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button 
                  size="lg" 
                  className="bg-gradient-trcv hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  data-testid="button-explore-services"
                >
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-trcv-orange text-trcv-orange hover:bg-trcv-orange hover:text-white transition-all duration-300"
                  data-testid="button-view-portfolio"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional corporate event with attendees and modern stage setup" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-trcv-orange">500+</div>
              <div className="text-gray-600">Events Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

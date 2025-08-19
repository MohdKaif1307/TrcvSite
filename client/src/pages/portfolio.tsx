import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { Link } from "wouter";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { MapPin } from "lucide-react";

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Corporate Event Portfolio in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our portfolio demonstrates the scale and creativity of TRCV's work across India. From international conferences in Delhi to high-profile product launches in Mumbai, TRCV has handled events of every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <Card 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={item.image} 
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-48 object-cover"
                  data-testid={`img-portfolio-${item.id}`}
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className={`w-4 h-4 text-${item.color} mr-2`} />
                    <span className="text-sm text-gray-600">{item.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`bg-${item.color} bg-opacity-10 text-${item.color} px-3 py-1 rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button 
                      variant="link" 
                      className={`p-0 text-${item.color} hover:text-trcv-purple font-semibold`}
                      data-testid={`button-view-case-study-${item.id}`}
                    >
                      View Case Study →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore detailed case studies of our most successful events and learn how TRCV delivered exceptional results for our clients.
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <Card className="bg-white p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop" 
                    alt="Annual Conference Delhi NCR case study" 
                    className="rounded-xl shadow-lg w-full h-auto"
                    data-testid="img-case-study-conference"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Annual Conference, Delhi NCR</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-600">Organize a large-scale annual conference for 1000+ delegates with complex logistics and AV requirements.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-600">Comprehensive planning including venue selection, delegate management, professional AV setup, and seamless coordination.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Results</h4>
                      <p className="text-gray-600">Successfully managed 1000+ attendees with 98% satisfaction rate and flawless execution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-white p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Rollout, Bengaluru</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-600">Coordinate a nationwide training program across 15 cities with consistent quality and engagement.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-600">Standardized training modules, local vendor partnerships, and centralized coordination system.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Results</h4>
                      <p className="text-gray-600">Delivered 15 workshops across India with consistent quality and high participant engagement.</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop" 
                    alt="Training Rollout Bengaluru case study" 
                    className="rounded-xl shadow-lg w-full h-auto"
                    data-testid="img-case-study-training"
                  />
                </div>
              </div>
            </Card>

            {/* Case Study 3 */}
            <Card className="bg-white p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop" 
                    alt="Product Launch Mumbai case study" 
                    className="rounded-xl shadow-lg w-full h-auto"
                    data-testid="img-case-study-launch"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Launch, Mumbai</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                      <p className="text-gray-600">Create a grand product launch with live streaming capabilities and high-end AV production.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Solution</h4>
                      <p className="text-gray-600">Premium venue, professional stage design, multi-camera setup, and nationwide live streaming.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Results</h4>
                      <p className="text-gray-600">Successful product launch with extensive media coverage and nationwide audience reach.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction across India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-600">Events Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100K+</div>
              <div className="text-gray-600">Attendees Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Add your success story with TRCV"
        description="Join our portfolio of successful events and let us create an unforgettable experience for your next corporate event."
        primaryText="Plan Your Event Today"
        primaryHref="/contact"
        secondaryText="View Our Services"
        secondaryHref="/services"
        className="py-20 bg-gradient-light"
      />
    </div>
  );
}

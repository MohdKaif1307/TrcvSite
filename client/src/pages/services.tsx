import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { Link } from "wouter";
import { SITE_CONFIG } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Event Planning & Corporate Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              TRCV provides a complete suite of corporate event planning services in India. From concept design to on-site management, we ensure flawless execution for every type of corporate event.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.services.map((service) => (
              <Card 
                key={service.id} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{service.title}</CardTitle>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button 
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-200`}
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Events Deep Dive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Event Planning Services in India</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TRCV specializes in delivering high-impact corporate events across India. We manage everything from planning to execution with precision and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" 
                alt="Professional corporate event setup" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-corporate-events"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Corporate Events</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-trcv-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Product Launches</h4>
                    <p className="text-gray-600">Create buzz and excitement around your new products with memorable launch events.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-trcv-purple rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Annual Meetings</h4>
                    <p className="text-gray-600">Professional annual general meetings and shareholder events.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-trcv-emerald rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Award Nights</h4>
                    <p className="text-gray-600">Elegant award ceremonies that celebrate achievements and recognize excellence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-trcv-amber rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Building Events</h4>
                    <p className="text-gray-600">Engaging activities that foster collaboration and strengthen team bonds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us for Corporate Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-trcv rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Planning</h4>
                <p className="text-gray-600 text-sm">Events aligned with your business goals and brand identity.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-trcv-purple to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Flawless Execution</h4>
                <p className="text-gray-600 text-sm">Professional management ensuring smooth event delivery.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-trcv-emerald to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Nationwide Reach</h4>
                <p className="text-gray-600 text-sm">Expert coordination across all major Indian cities.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to post-event analysis, we follow a structured process to ensure your event's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-trcv rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Understanding your objectives, requirements, and budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-trcv-purple to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed event planning including venue, logistics, and timeline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-trcv-emerald to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Professional on-site management and coordination.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-trcv-amber to-trcv-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">Post-event analysis and feedback for continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Ready to plan a corporate event?"
        description="Let TRCV handle every detail of your next corporate event with professionalism and creativity."
        primaryText="Contact TRCV Today"
        primaryHref="/contact"
        secondaryText="View Our Portfolio"
        secondaryHref="/portfolio"
        className="py-20 bg-gradient-light"
      />
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { SITE_CONFIG } from "@/lib/constants";
import { Trophy, Handshake, ServerCog, Heart } from "lucide-react";

export default function Testimonials() {
  const whyChooseItems = [
    { icon: Trophy, title: "Proven Success", description: "In corporate events, conferences, and trainings", color: "text-trcv-orange" },
    { icon: Handshake, title: "Trusted Partner", description: "By top brands and organizations nationwide", color: "text-trcv-purple" },
    { icon: ServerCog, title: "Expert Team", description: "With creative & logistical expertise", color: "text-trcv-emerald" },
    { icon: Heart, title: "Long-term Relations", description: "Built on trust & results", color: "text-trcv-amber" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              TRCV Client Testimonials & Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At TRCV, we measure our success by the experiences of our clients. Over the years, we've partnered with businesses across India to plan and execute impactful corporate events, conferences, trainings, and exhibitions. Here's what some of them have to say.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say About TRCV</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-trcv rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TRCV */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Businesses Across India Choose TRCV</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-trcv rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond testimonials, here are some quantified results we've delivered for our clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-orange mb-2">150%</div>
              <div className="text-gray-900 font-semibold mb-2">Engagement Increase</div>
              <div className="text-gray-600 text-sm">IT Company Annual Meet attendance and participation rates</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-purple mb-2">500K+</div>
              <div className="text-gray-900 font-semibold mb-2">Live Stream Views</div>
              <div className="text-gray-600 text-sm">Product launch event reached nationwide audience</div>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-emerald mb-2">95%</div>
              <div className="text-gray-900 font-semibold mb-2">Training Completion</div>
              <div className="text-gray-600 text-sm">High completion rates across 15 nationwide workshops</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-amber mb-2">300+</div>
              <div className="text-gray-900 font-semibold mb-2">Media Mentions</div>
              <div className="text-gray-600 text-sm">High-profile exhibition generated extensive coverage</div>
            </Card>
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-pink mb-2">40%</div>
              <div className="text-gray-900 font-semibold mb-2">Cost Savings</div>
              <div className="text-gray-600 text-sm">Optimized vendor management for corporate events</div>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center">
              <div className="text-3xl font-bold text-trcv-blue mb-2">24/7</div>
              <div className="text-gray-900 font-semibold mb-2">Support Coverage</div>
              <div className="text-gray-600 text-sm">Round-the-clock coordination for multi-day events</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Ready to Experience TRCV's Event Planning Expertise?"
        description="Join the growing list of businesses that trust TRCV with their most important events."
        primaryText="Contact Us Today"
        primaryHref="/contact"
        secondaryText="Explore Our Services"
        secondaryHref="/services"
        className="py-20 bg-gradient-light"
      />
    </div>
  );
}

import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SITE_CONFIG } from "@/lib/constants";
import { Building, GraduationCap, Mic, Users, CheckCircle, Trophy, Handshake, ServerCog, Heart } from "lucide-react";

export default function Home() {
  const whyChooseItems = [
    { icon: Trophy, title: "Proven Success", description: "In corporate events, conferences, and trainings" },
    { icon: Handshake, title: "Trusted Partner", description: "By top brands and organizations nationwide" },
    { icon: ServerCog, title: "Expert Team", description: "With creative & logistical expertise" },
    { icon: Heart, title: "Long-term Relations", description: "Built on trust & results" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* About TRCV */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-hero mb-4">About TRCV</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              TRCV is headquartered in Gurugram and serves clients across India. With years of expertise in corporate event planning, we've worked with companies of all sizes to create events that leave a mark. Our unique blend of strategy, creativity, and execution ensures every event tells a story that reflects your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Professional team meeting discussing event planning strategies" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-about-team"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-trcv-orange mb-3">Mission</h4>
                    <p className="text-gray-600">To design and deliver impactful corporate events that meet business objectives while inspiring participants.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-trcv-purple mb-3">Vision</h4>
                    <p className="text-gray-600">To be India's most innovative and reliable corporate event planning company.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Link href="/about">
            <Button 
              className="mx-auto block bg-gradient-trcv hover:shadow-lg transition-all duration-200"
              data-testid="button-learn-more-about"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete suite of services designed for corporates. Each service is tailored to your goals and delivered with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 rounded-xl bg-gradient-warm hover:shadow-xl hover-scale transition-all duration-300 group">
              <Building className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Corporate Events</h3>
              <p className="text-sm text-white/90">Annual meets, product launches, and celebrations</p>
            </Card>
            <Card className="text-center p-6 rounded-xl bg-gradient-cool hover:shadow-xl hover-scale transition-all duration-300 group">
              <GraduationCap className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Trainings & Workshops</h3>
              <p className="text-sm text-white/90">Skill-building and leadership development sessions</p>
            </Card>
            <Card className="text-center p-6 rounded-xl bg-gradient-vibrant hover:shadow-xl hover-scale transition-all duration-300 group">
              <Mic className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">AV Production</h3>
              <p className="text-sm text-white/90">Sound, light, and stage setups for impactful experiences</p>
            </Card>
            <Card className="text-center p-6 rounded-xl bg-gradient-trcv hover:shadow-xl hover-scale transition-all duration-300 group">
              <Users className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Exhibitions & Conferences</h3>
              <p className="text-sm text-white/90">Trade shows, seminars, and business summits</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                className="bg-gradient-trcv hover:shadow-lg transition-all duration-200"
                data-testid="button-view-all-services"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From international conferences in Delhi to high-profile product launches in Mumbai, TRCV has handled events of every scale. Our portfolio includes case studies of clients who trusted us with their flagship events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=300&fit=crop" 
                alt="Large corporate conference with attendees" 
                className="w-full h-48 object-cover"
                data-testid="img-portfolio-conference"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Conference, Delhi NCR</h3>
                <p className="text-gray-600 mb-4">Managed logistics, AV, and 1000+ delegates.</p>
                <span className="bg-trcv-orange bg-opacity-10 text-trcv-orange px-3 py-1 rounded-full text-sm">Conference</span>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=300&fit=crop" 
                alt="Training workshop with participants" 
                className="w-full h-48 object-cover"
                data-testid="img-portfolio-training"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training Rollout, Bengaluru</h3>
                <p className="text-gray-600 mb-4">Coordinated 15 workshops nationwide.</p>
                <span className="bg-trcv-purple bg-opacity-10 text-trcv-purple px-3 py-1 rounded-full text-sm">Training</span>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=300&fit=crop" 
                alt="Product launch event with stage and lighting" 
                className="w-full h-48 object-cover"
                data-testid="img-portfolio-launch"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Product Launch, Mumbai</h3>
                <p className="text-gray-600 mb-4">Grand launch with AV and live streaming.</p>
                <span className="bg-trcv-emerald bg-opacity-10 text-trcv-emerald px-3 py-1 rounded-full text-sm">Product Launch</span>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button 
                className="bg-gradient-trcv hover:shadow-lg transition-all duration-200"
                data-testid="button-view-full-portfolio"
              >
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "TRCV transformed our corporate annual meet into a world-class experience. Their attention to detail was remarkable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-trcv rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  HR
                </div>
                <div>
                  <div className="font-semibold text-gray-900">HR Head</div>
                  <div className="text-gray-600 text-sm">IT Company</div>
                </div>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Our product launch was a resounding success thanks to TRCV's event planning and AV expertise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-trcv-purple to-trcv-blue rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marketing Manager</div>
                  <div className="text-gray-600 text-sm">FMCG Brand</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button 
                className="bg-gradient-trcv hover:shadow-lg transition-all duration-200"
                data-testid="button-read-all-testimonials"
              >
                Read All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog Preview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our blog covering topics like corporate event trends, venue guides, and planning tips. We regularly publish India-specific insights to help businesses host better events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&h=300&fit=crop" 
                alt="Modern corporate venue interior" 
                className="w-full h-48 object-cover"
                data-testid="img-blog-venues"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-trcv-orange bg-opacity-10 text-trcv-orange px-3 py-1 rounded-full text-xs font-medium">Venue Guide</span>
                  <span className="text-gray-500 text-sm ml-3">Jan 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Top Corporate Venues 2025</h3>
                <p className="text-gray-600">Discover the best corporate venues across India for your next event.</p>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=300&fit=crop" 
                alt="Event planning workspace" 
                className="w-full h-48 object-cover"
                data-testid="img-blog-planning"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-trcv-purple bg-opacity-10 text-trcv-purple px-3 py-1 rounded-full text-xs font-medium">Planning Tips</span>
                  <span className="text-gray-500 text-sm ml-3">Jan 12, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Planning a Conference in India</h3>
                <p className="text-gray-600">A comprehensive guide to organizing successful conferences in India.</p>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=300&fit=crop" 
                alt="Hybrid event setup with technology" 
                className="w-full h-48 object-cover"
                data-testid="img-blog-hybrid"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-trcv-emerald bg-opacity-10 text-trcv-emerald px-3 py-1 rounded-full text-xs font-medium">Technology</span>
                  <span className="text-gray-500 text-sm ml-3">Jan 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hybrid Events in India</h3>
                <p className="text-gray-600">Explore the future of corporate events with hybrid solutions.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button 
                className="bg-gradient-trcv hover:shadow-lg transition-all duration-200"
                data-testid="button-visit-blog"
              >
                Visit Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose TRCV */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient-hero mb-4">Why Businesses Across India Choose TRCV</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover what makes TRCV the preferred choice for corporate event planning across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseItems.map((item, index) => {
              const gradients = ['bg-gradient-warm', 'bg-gradient-cool', 'bg-gradient-vibrant', 'bg-gradient-trcv'];
              return (
                <Card key={index} className="bg-white p-6 text-center hover:shadow-xl hover-scale transition-all duration-300 group">
                  <div className={`w-16 h-16 ${gradients[index]} rounded-full flex items-center justify-center mx-auto mb-4 hover-glow group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Plan your next event with TRCV"
        description="Whether it's a large-scale conference or a small executive training, we're here to make it seamless and memorable."
        primaryText="Contact Us Today"
        primaryHref="/contact"
        secondaryText="Explore Our Services"
        secondaryHref="/services"
        className="py-20 bg-gradient-hero"
      />
    </div>
  );
}

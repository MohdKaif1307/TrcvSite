import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { Link } from "wouter";
import { Building, GraduationCap, Mic, Users } from "lucide-react";

export default function About() {
  const expertiseItems = [
    {
      icon: Building,
      title: "Corporate Events",
      description: "Product launches, gala dinners, and employee engagements",
      color: "text-trcv-orange",
      bg: "from-orange-50 to-pink-50"
    },
    {
      icon: Users,
      title: "Conferences",
      description: "Exhibitions and conferences of all scales",
      color: "text-trcv-purple",
      bg: "from-purple-50 to-blue-50"
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      description: "Training and workshops for organizations",
      color: "text-trcv-emerald",
      bg: "from-emerald-50 to-blue-50"
    },
    {
      icon: Mic,
      title: "AV Production",
      description: "Professional-quality AV experiences",
      color: "text-trcv-amber",
      bg: "from-amber-50 to-orange-50"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About TRCV – Corporate Event Planning Experts in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At TRCV, every event is a chance to create meaningful connections. We are more than just event managers – we are partners in your success. Based in Gurugram, we provide services across India for companies seeking professional event planning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Professional team meeting discussing event planning strategies" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="img-about-team"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission & Vision</h2>
              <div className="space-y-6">
                <Card className="bg-white shadow-lg border-l-4 border-l-trcv-orange">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-trcv-orange mb-3">Mission</h3>
                    <p className="text-gray-600">To design and deliver impactful corporate events that meet business objectives while inspiring participants.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg border-l-4 border-l-trcv-purple">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-trcv-purple mb-3">Vision</h3>
                    <p className="text-gray-600">To be India's most innovative and reliable corporate event planning company.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We excel in planning diverse types of events across India with professional expertise and attention to detail.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseItems.map((item, index) => (
              <Card key={index} className={`text-center p-6 rounded-xl bg-gradient-to-br ${item.bg} hover:shadow-lg transition-shadow duration-300`}>
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About TRCV Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About TRCV - The Red Carpet Ventures</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h3>
                <p className="text-gray-600 leading-relaxed">
                  TRCV (The Red Carpet Ventures) is a premier corporate event planning company headquartered in Gurugram, serving clients across India. We have established ourselves as a trusted partner for businesses seeking exceptional event experiences that align with their strategic objectives.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe that every event is an opportunity to create lasting impressions and meaningful connections. Our approach combines strategic planning with creative execution, ensuring that each event not only meets but exceeds your expectations. From intimate corporate meetings to large-scale international conferences, we bring the same level of dedication and professionalism to every project.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced team consists of event planning professionals, creative designers, technical experts, and project managers who work together to deliver seamless experiences. We understand the nuances of corporate culture and the importance of brand representation in every detail of your event.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pan-India Presence</h3>
                <p className="text-gray-600 leading-relaxed">
                  While we are based in Gurugram, our reach extends across India. We have successfully executed events in major cities including Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Pune, and many more. Our extensive network of vendors and venues ensures consistent quality regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TRCV */}
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TRCV</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Clients trust us because we combine creative ideas with meticulous execution. Our vendor and venue partnerships ensure smooth coordination, while our attention to detail guarantees success every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience & Expertise</h3>
              <p className="text-gray-600">Years of experience in corporate event planning with a proven track record of successful events.</p>
            </Card>
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">End-to-End Solutions</h3>
              <p className="text-gray-600">From concept development to post-event analysis, we handle every aspect of your event.</p>
            </Card>
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Integration</h3>
              <p className="text-gray-600">Latest AV technology and digital solutions for hybrid and virtual events.</p>
            </Card>
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Vendor Network</h3>
              <p className="text-gray-600">Strong partnerships with venues, caterers, and service providers across India.</p>
            </Card>
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600">Tailored event solutions that align with your brand and business objectives.</p>
            </Card>
            <Card className="bg-white p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support team available throughout the planning process and during events.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Let's bring your next event to life"
        primaryText="Explore Our Services"
        primaryHref="/services"
        secondaryText="Contact Us"
        secondaryHref="/contact"
        className="py-20 bg-white"
      />
    </div>
  );
}

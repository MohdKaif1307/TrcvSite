import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import { SITE_CONFIG } from "@/lib/constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "wouter";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to know about TRCV's corporate event planning services in India. Find answers to common questions about our services, pricing, and process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {SITE_CONFIG.faqItems.map((faq) => (
              <Card key={faq.id} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-trcv-orange rounded-lg"
                  data-testid={`faq-toggle-${faq.id}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-trcv-orange flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-trcv-orange flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 animate-fade-in" data-testid={`faq-content-${faq.id}`}>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer.includes("Contact us") ? (
                        <>
                          {faq.answer.split("Contact us")[0]}
                          <Link href="/contact" className="text-trcv-orange hover:text-trcv-purple font-semibold">
                            Contact us
                          </Link>
                          {faq.answer.split("Contact us")[1]}
                        </>
                      ) : faq.answer.includes("Learn more about us") ? (
                        <>
                          {faq.answer.split("Learn more about us")[0]}
                          <Link href="/about" className="text-trcv-orange hover:text-trcv-purple font-semibold">
                            Learn more about us
                          </Link>
                          {faq.answer.split("Learn more about us")[1]}
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our additional resources or get in touch with our team for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-trcv-orange to-trcv-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">?</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Specific Questions</h3>
              <p className="text-gray-600 text-sm mb-4">Detailed questions about our specific event planning services and capabilities.</p>
              <Link href="/services">
                <span className="text-trcv-orange hover:text-trcv-purple font-semibold cursor-pointer" data-testid="link-service-questions">
                  Explore Services →
                </span>
              </Link>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-trcv-purple to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pricing & Packages</h3>
              <p className="text-gray-600 text-sm mb-4">Get detailed pricing information and custom package options for your events.</p>
              <Link href="/contact">
                <span className="text-trcv-purple hover:text-trcv-orange font-semibold cursor-pointer" data-testid="link-pricing-questions">
                  Get Quote →
                </span>
              </Link>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-trcv-emerald to-trcv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Event Planning Tips</h3>
              <p className="text-gray-600 text-sm mb-4">Learn best practices and tips for planning successful corporate events.</p>
              <Link href="/blog">
                <span className="text-trcv-emerald hover:text-trcv-orange font-semibold cursor-pointer" data-testid="link-planning-tips">
                  Read Blog →
                </span>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our expert team is here to help with any questions about your corporate event planning needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">Speak directly with our team</p>
              <p className="text-trcv-orange font-semibold">{SITE_CONFIG.phone}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-2">Send us your questions</p>
              <p className="text-trcv-purple font-semibold">{SITE_CONFIG.email}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 text-sm mb-2">Meet us in person</p>
              <p className="text-trcv-emerald font-semibold">Gurugram, Haryana</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA
        title="Still Have Questions?"
        description="Our team is always here to help. If your question isn't listed here, feel free to reach out."
        primaryText="Contact TRCV Today"
        primaryHref="/contact"
        secondaryText="View Our Services"
        secondaryHref="/services"
        className="py-20 bg-gradient-light"
      />
    </div>
  );
}

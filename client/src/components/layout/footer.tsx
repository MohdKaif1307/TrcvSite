import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 mb-4">
              India's trusted corporate event planning company, delivering seamless conferences, exhibitions, trainings, and AV production across the nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="social-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="social-twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="social-instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="social-facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-home">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-about">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-services">Our Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-portfolio">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-blog">Blog</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-corporate-events">Corporate Events</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-conferences">Conferences</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-training">Training & Workshops</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-av-production">AV Production</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-exhibitions">Exhibitions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-virtual-events">Virtual Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-trcv-orange mt-1 mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300">{SITE_CONFIG.address.split(',')[0]}</p>
                  <p className="text-gray-300">{SITE_CONFIG.address.split(',').slice(1).join(',').trim()}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-trcv-orange mr-3 flex-shrink-0" size={16} />
                <p className="text-gray-300">{SITE_CONFIG.phone}</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-trcv-orange mr-3 flex-shrink-0" size={16} />
                <p className="text-gray-300">{SITE_CONFIG.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TRCV - The Red Carpet Ventures. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-privacy">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-terms">Terms & Conditions</Link>
              <Link href="/contact" className="text-gray-400 hover:text-trcv-orange transition-colors duration-200" data-testid="footer-contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

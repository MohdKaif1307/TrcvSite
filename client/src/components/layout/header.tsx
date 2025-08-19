import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`font-medium transition-colors duration-200 cursor-pointer ${
                    isActivePage(item.href)
                      ? "text-trcv-orange"
                      : "text-gray-700 hover:text-trcv-orange"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Legal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-trcv-orange font-medium"
                  data-testid="nav-legal-dropdown"
                >
                  Legal <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/privacy" data-testid="nav-privacy">
                    Privacy Policy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/terms" data-testid="nav-terms">
                    Terms & Conditions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact">
              <Button 
                className="bg-gradient-trcv hover:shadow-lg transition-all duration-200"
                data-testid="button-get-quote"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`block px-3 py-2 font-medium cursor-pointer ${
                    isActivePage(item.href)
                      ? "text-trcv-orange"
                      : "text-gray-700 hover:text-trcv-orange"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            <Link href="/privacy">
              <span
                className="block px-3 py-2 text-gray-700 hover:text-trcv-orange font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-privacy"
              >
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span
                className="block px-3 py-2 text-gray-700 hover:text-trcv-orange font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="mobile-nav-terms"
              >
                Terms & Conditions
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

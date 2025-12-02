import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Recent Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://res.cloudinary.com/da0sfjp8x/image/upload/v1751908830/logo_jxhfbb.png"
              alt="WON K Logo"
              className="h-12 w-12 transition-transform group-hover:scale-110"
              loading="eager"
            />
            <span className="text-2xl font-bold gradient-text">WON K</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brand transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+94775294331"
              className="flex items-center space-x-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+94 77 529 4331</span>
            </a>
            <Link to="/contact">
              <Button className="gradient-bg shadow-brand hover:shadow-xl transition-all hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-base font-medium px-4 py-2 rounded-lg transition-colors",
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-border">
                <a
                  href="tel:+94775294331"
                  className="flex items-center space-x-2 text-sm text-foreground/70"
                >
                  <Phone className="h-4 w-4" />
                  <span>+94 77 529 4331</span>
                </a>
                <a
                  href="mailto:wonkmarketingagency@gmail.com"
                  className="flex items-center space-x-2 text-sm text-foreground/70"
                >
                  <Mail className="h-4 w-4" />
                  <span>wonkmarketingagency@gmail.com</span>
                </a>
                <Link to="/contact" className="pt-2">
                  <Button className="w-full gradient-bg shadow-brand">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

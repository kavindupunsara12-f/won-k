import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  MessageSquareCode,
  TrendingUp,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Fast, responsive websites and web applications built with modern technologies for Sri Lankan businesses.",
      link: "/services",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
      link: "/services",
    },
    {
      icon: MessageSquareCode,
      title: "AI Chatbots",
      description:
        "Intelligent chatbots for WhatsApp and websites that automate support and capture leads 24/7.",
      link: "/services",
    },
    {
      icon: TrendingUp,
      title: "Digital Consulting & SEO",
      description:
        "Strategic guidance and SEO optimization to improve your online visibility across Sri Lanka.",
      link: "/services",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with <2 second load times",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers serving Sri Lankan businesses",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "<2s", label: "Average Load Time" },
    { value: "24/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      name: "Piumi Wijesekara",
      role: "Owner, Miracle Cakes",
      content:
        "WONK Marketing really brought our Miracle Cake brand to life. The website looks beautiful, works smoothly, and the team was super easy to work with. Our customers already love it!",
      rating: 4,
    },
    {
      name: "Navindu Vithanage",
      role: "Owner, Sonic Sri Lanka Studio",
      content:
        "WONK Marketing did a fantastic job on our Sonic Sri Lanka Studio website. It’s clean, modern, and exactly what we wanted. The team was helpful and easy to work with throughout.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-brand-subtle">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <Badge className="gradient-bg w-fit">
                Trusted by businesses across Sri Lanka
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Digital Future with{" "}
                <span className="gradient-text">WON K</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Professional web development, mobile apps, and AI chatbots for
                Sri Lankan businesses. Fast, modern, and built to perform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gradient-bg shadow-brand group w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative aspect-square max-w-lg mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Modern workspace with laptop showing web development"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  loading="eager"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">2x</p>
                      <p className="text-sm text-muted-foreground">
                        Faster Performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-card border-y border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for businesses across Sri
              Lanka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand shadow-brand">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join dozens of successful Sri Lankan businesses that trust WON K for
            their digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
              >
                Get a Free Consultation
              </Button>
            </Link>
            <a href="tel:+94775294331">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Call +94 77 529 4331
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

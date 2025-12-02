import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  MessageSquareCode,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Web Development, Mobile Apps & AI Chatbots — Professional Services in Sri Lanka | WON K";
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Build fast, responsive, and modern websites tailored to your business needs. From landing pages to full-scale e-commerce platforms and progressive web apps, we create web solutions that drive results for businesses across Sri Lanka.",
      features: [
        "Responsive design for all devices",
        "E-commerce & CMS integration",
        "Progressive Web Apps (PWAs)",
        "Fast loading speeds (<2 seconds)",
        "SEO-optimized structure",
        "Ongoing maintenance & support",
      ],
      keywords: [
        "web development sri lanka",
        "website creator sri lanka",
        "business website sri lanka",
        "ecommerce website sri lanka",
        "responsive website sri lanka",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Transform your business ideas into powerful mobile applications for iOS and Android. Using cutting-edge technologies like Flutter and React Native, we deliver cross-platform apps that provide seamless user experiences for Sri Lankan audiences.",
      features: [
        "iOS & Android native apps",
        "Cross-platform development (Flutter, React Native)",
        "App Store & Google Play deployment",
        "User-friendly interfaces",
        "Push notifications & analytics",
        "Post-launch support & updates",
      ],
      keywords: [
        "mobile app development sri lanka",
        "app developers sri lanka",
        "android app sri lanka",
        "ios app sri lanka",
        "flutter developer sri lanka",
      ],
    },
    {
      icon: MessageSquareCode,
      title: "AI Chatbots for Business",
      description:
        "Revolutionize your customer support with intelligent AI chatbots. From WhatsApp automation to website chat support, our AI solutions help Sri Lankan businesses capture leads, answer questions 24/7, and improve customer satisfaction using platforms like Rasa, Dialogflow, and custom LLM integrations.",
      features: [
        "WhatsApp & website chatbots",
        "24/7 automated customer support",
        "Lead capture & qualification",
        "Natural language processing",
        "Multi-language support",
        "Integration with CRM & databases",
      ],
      keywords: [
        "ai chatbot sri lanka",
        "whatsapp chatbot sri lanka",
        "business chatbot sri lanka",
        "customer support chatbot sri lanka",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Consulting & SEO",
      description:
        "Maximize your online visibility and drive organic traffic with our comprehensive digital consulting services. We help businesses in Sri Lanka optimize their web presence, improve search rankings, and implement data-driven strategies for sustainable growth.",
      features: [
        "Local SEO optimization for Sri Lanka",
        "Technical SEO audits",
        "Content strategy & keyword research",
        "Google Analytics & tracking setup",
        "Conversion rate optimization",
        "Digital strategy consulting",
      ],
      keywords: [
        "seo sri lanka",
        "local seo sri lanka",
        "digital marketing consultancy sri lanka",
        "website optimization sri lanka",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-brand-subtle">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Digital Services</span>{" "}
            for Sri Lankan Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From stunning websites to intelligent chatbots, we provide
            comprehensive solutions to help your business thrive in the digital
            age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  } animate-slide-in-left`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-brand shadow-brand">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button className="gradient-bg shadow-brand group mt-4">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                <Card
                  className={`${
                    index % 2 === 1 ? "md:order-1" : ""
                  } animate-slide-in-right shadow-xl`}
                >
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does a website cost in Sri Lanka?",
                a: "Website costs vary based on complexity, features, and design requirements. A basic business website typically starts from LKR 50,000, while e-commerce and custom web applications range higher. Contact us for a detailed quote tailored to your needs.",
              },
              {
                q: "How long does it take to build a mobile app in Sri Lanka?",
                a: "Development timelines depend on app complexity. A simple mobile app typically takes 6-8 weeks, while feature-rich applications may require 12-16 weeks. We work in agile sprints to deliver progress regularly.",
              },
              {
                q: "What is the best chatbot solution for Sri Lankan businesses?",
                a: "The best solution depends on your use case. For customer support and lead capture, we recommend WhatsApp-integrated chatbots using Dialogflow or custom LLM solutions. We'll analyze your needs and recommend the most cost-effective approach.",
              },
              {
                q: "Do you provide ongoing support after project completion?",
                a: "Yes! We offer maintenance packages for all our services, including bug fixes, updates, security patches, and feature enhancements. Support is available across Sri Lanka with fast response times.",
              },
            ].map((faq) => (
              <Card key={faq.q} className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss your project and create a solution that drives real
            results for your Sri Lankan business.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-xl hover:scale-105 transition-transform"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

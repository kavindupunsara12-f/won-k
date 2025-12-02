import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Recent Web, Mobile & AI Projects — WON K Sri Lanka";
  }, []);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = ["All", "Web", "Mobile", "AI/Chatbots"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description:
        "Complete redesign and development of a high-traffic e-commerce platform for a leading Sri Lankan retailer. Improved conversion rates by 45% and reduced page load times by 60%.",
      results: [
        "45% increase in conversion rate",
        "60% faster page loads",
        "120% increase in mobile traffic",
      ],
      tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Restaurant Mobile App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      description:
        "Cross-platform mobile application for a popular Sri Lankan restaurant chain, featuring online ordering, table reservations, and loyalty rewards.",
      results: [
        "5,000+ downloads in first month",
        "40% of orders now through app",
        "4.8-star average rating",
      ],
      tech: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    },
    {
      id: 3,
      title: "Customer Support AI Chatbot",
      category: "AI/Chatbots",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      description:
        "WhatsApp and website chatbot for a telecommunications company in Sri Lanka, handling 1,000+ customer queries daily with 85% resolution rate.",
      results: [
        "70% reduction in support costs",
        "85% query resolution rate",
        "24/7 availability",
      ],
      tech: ["Dialogflow", "Node.js", "WhatsApp Business API", "MongoDB"],
    },
    {
      id: 4,
      title: "Corporate Website & CMS",
      category: "Web",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      description:
        "Modern corporate website with custom CMS for a financial services company. Features bilingual content, secure document portal, and integrated blog.",
      results: [
        "200% increase in inquiries",
        "95/100 Lighthouse score",
        "Bilingual support (EN/SI)",
      ],
      tech: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      description:
        "Comprehensive fitness and nutrition tracking mobile app for Sri Lankan fitness enthusiasts with workout plans, meal tracking, and progress analytics.",
      results: [
        "10,000+ active users",
        "4.7-star average rating",
        "Featured on App Store",
      ],
      tech: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    },
    {
      id: 6,
      title: "Real Estate Chatbot",
      category: "AI/Chatbots",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      description:
        "AI-powered property recommendation chatbot for a real estate agency, matching buyers with properties based on preferences and budget.",
      results: [
        "300+ qualified leads per month",
        "60% faster lead response time",
        "30% increase in viewings",
      ],
      tech: ["Rasa", "Python", "PostgreSQL", "React"],
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-brand-subtle">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Recent Work</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore successful projects we've delivered for businesses across Sri
            Lanka, from web platforms to AI solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-border bg-background sticky top-20 z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={
                  selectedFilter === filter
                    ? "gradient-bg shadow-brand"
                    : ""
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 gradient-bg">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge className="gradient-bg">
                  {selectedProject.category}
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string) => (
                      <li
                        key={result}
                        className="flex items-start space-x-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-brand text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Ready to start your project? Get in touch for a free consultation.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="shadow-xl hover:scale-105 transition-transform"
            onClick={() => (window.location.href = "/contact")}
          >
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;

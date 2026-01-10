import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Zap,
  Search,
  Smartphone,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces and seamless user experiences through research-driven design, prototyping, and iterative testing.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Design Systems",
      "Usability Testing",
    ],
    price: "From $3,000",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible web applications using modern technologies and best practices.",
    features: [
      "React & Next.js",
      "TypeScript",
      "API Development",
      "Database Design",
      "Cloud Deployment",
    ],
    price: "From $5,000",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications that provide native-like experiences on iOS and Android.",
    features: [
      "React Native",
      "iOS & Android",
      "Push Notifications",
      "Offline Support",
      "App Store Deployment",
    ],
    price: "From $8,000",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving load times and core web vitals for better user experience, SEO rankings, and conversion rates.",
    features: [
      "Core Web Vitals Audit",
      "Image Optimization",
      "Code Splitting",
      "Caching Strategies",
      "Performance Monitoring",
    ],
    price: "From $2,000",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Implementing technical SEO best practices and setting up analytics to track and improve your online presence.",
    features: [
      "Technical SEO Audit",
      "Schema Markup",
      "Google Analytics Setup",
      "Search Console Integration",
      "Performance Reporting",
    ],
    price: "From $1,500",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description:
      "Strategic guidance on technology choices, architecture decisions, and digital product strategy.",
    features: [
      "Technology Audit",
      "Architecture Review",
      "Team Training",
      "Code Review",
      "Technical Roadmap",
    ],
    price: "$200/hour",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4">
              How I Can Help
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              From concept to launch, I offer a range of services to help bring
              your digital products to life. Each engagement is tailored to your
              specific needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="group p-8 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>

                <h2 className="font-display text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-medium text-foreground">
                    {service.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              My Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and constraints through in-depth conversations.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a clear roadmap with milestones, deliverables, and timelines.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Building with regular check-ins, iterative feedback, and transparent communication.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Deploying to production with proper testing, documentation, and support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-display font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Ready to Start?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project and find the best way to work together.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

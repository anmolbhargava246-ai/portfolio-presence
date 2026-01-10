import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Zap,
  Search,
  Smartphone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const expertise = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces that delight users and drive engagement through research-backed design decisions.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, responsive, and accessible web applications using modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile experiences that feel native and perform beautifully.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving load times and core web vitals for better user experience and conversion rates.",
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description:
      "Implementing technical SEO and analytics to maximize your online visibility and insights.",
  },
  {
    icon: MessageSquare,
    title: "Strategic Consulting",
    description:
      "Providing guidance on technology choices, architecture, and digital product strategy.",
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
              Let's Connect
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4">
              How I Can Help
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              I partner with businesses to transform ideas into exceptional digital experiences. 
              Whether you need a complete product build or strategic guidance, 
              I'm here to help you succeed.
            </p>
            <Button variant="accent" size="lg" className="mt-8" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              What I Bring to the Table
            </h2>
            <p className="text-muted-foreground mt-4">
              A blend of design thinking and technical expertise to deliver solutions that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
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

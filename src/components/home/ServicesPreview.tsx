import { Link } from "react-router-dom";
import { Shield, Brain, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Trust & Safety Research for AI Products",
    description:
      "Understand how users calibrate trust, detect manipulation risks, and build appropriate reliance on AI-powered features.",
  },
  {
    icon: Brain,
    title: "Foundational Consumer Decision Research",
    description:
      "Uncover the cognitive drivers, biases, and mental models that shape how your users evaluate, choose, and commit.",
  },
  {
    icon: Gauge,
    title: "Usability Testing & UX Optimisation Sprints",
    description:
      "Rapid evaluative research to identify friction, validate flows, and deliver prioritised recommendations for your product team.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            How I Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Research That Moves Product Forward
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Strategic research for product teams who need clarity, not just data.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              See full service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

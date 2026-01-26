import { Link } from "react-router-dom";
import {
  Code2,
  Palette,
  Zap,
  Search,
  Smartphone,
  MessageSquare,
  ArrowRight,
  Compass,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const expertise = [
  {
    icon: Search,
    title: "User Research",
    description:
      "Conducting in-depth interviews, usability testing, and ethnographic studies to understand your users' needs and behaviors.",
  },
  {
    icon: Code2,
    title: "Behavioral Analysis",
    description:
      "Applying psychological frameworks to decode user decision-making and identify friction points in the experience.",
  },
  {
    icon: Palette,
    title: "Research Strategy",
    description:
      "Designing research plans that answer the right questions at the right time in your product development cycle.",
  },
  {
    icon: Zap,
    title: "Insight Synthesis",
    description:
      "Transforming raw data into clear, actionable recommendations that drive product decisions.",
  },
  {
    icon: Smartphone,
    title: "Journey Mapping",
    description:
      "Visualizing the complete user experience to identify opportunities for improvement and innovation.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Workshops",
    description:
      "Facilitating collaborative sessions that align teams around user needs and research findings.",
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
              I help product teams make confident decisions by uncovering what truly drives user behavior. 
              Through rigorous research grounded in behavioral science, 
              I turn ambiguity into actionable insights.
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

          {/* Process Steps with Connecting Line */}
          <div className="relative">
            {/* Horizontal connecting line - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {[
                {
                  icon: Search,
                  title: "Discovery",
                  description:
                    "Understanding your goals, requirements, and constraints through in-depth conversations.",
                },
                {
                  icon: Compass,
                  title: "Strategy",
                  description:
                    "Developing a clear roadmap with milestones, deliverables, and timelines.",
                },
                {
                  icon: Puzzle,
                  title: "Execution",
                  description:
                    "Building with regular check-ins, iterative feedback, and transparent communication.",
                },
                {
                  icon: Sparkles,
                  title: "Launch",
                  description:
                    "Deploying to production with proper testing, documentation, and support.",
                },
              ].map((item, index) => (
                <div key={item.title} className="text-center relative">
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-background border border-muted-foreground/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  
                  {/* Step number - subtle */}
                  <div className="text-xs font-medium text-muted-foreground/50 uppercase tracking-widest mb-2">
                    0{index + 1}
                  </div>
                  
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
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

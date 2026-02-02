import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Personal Loans FinTech",
    description:
      "Identified trust barriers and friction points in loan applications, leading to onboarding redesign and reprioritisation of the product roadmap.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Trust Research", "Usability Testing", "Decision Mapping"],
    href: "/projects/personal-loans",
  },
  {
    id: 2,
    title: "Creative Education, Saudi Arabia",
    description:
      "Uncovered unmet learner needs across creative domains, directly shaping curriculum strategy and institutional positioning for market entry.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Mixed Methods", "Strategy Research", "Stakeholder Alignment"],
    href: "/projects/creative-education",
  },
  {
    id: 3,
    title: "AI Assistant Trust Study",
    description:
      "Mapped mental models and trust calibration patterns, informing design principles for appropriate reliance on AI-powered tools.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    tags: ["Behavioural Research", "Mental Models", "Trust & Safety"],
    href: "/projects/ai-assistant",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="space-y-4">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Research That Drove Decisions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Featured Case Studies
            </h2>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-auto">
            <Link to="/projects">
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.href}
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="h-full bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 p-2 bg-background rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-5 w-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

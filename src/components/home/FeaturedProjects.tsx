import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience with real-time inventory and seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    href: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Data visualization tool for tracking business metrics and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    href: "/projects/analytics",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and intuitive banking application with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Plaid"],
    href: "/projects/banking",
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
              Selected Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Featured Projects
            </h2>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-auto">
            <Link to="/projects">
              View all projects
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

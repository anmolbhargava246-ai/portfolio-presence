import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web App", "Mobile", "Design", "Open Source"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience with real-time inventory management, seamless checkout, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Web App",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Comprehensive data visualization tool for tracking business metrics, user behavior, and generating actionable insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Web App",
    tags: ["TypeScript", "D3.js", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and intuitive banking application featuring biometric authentication, instant transfers, and spending insights.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Plaid", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Design System",
    description:
      "A comprehensive component library with accessibility-first approach, documentation, and Figma integration.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    category: "Design",
    tags: ["Figma", "Storybook", "React", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description:
      "Collaborative project management solution with real-time updates, timeline views, and team workflows.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    category: "Web App",
    tags: ["Next.js", "Prisma", "WebSocket", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Open Source CLI",
    description:
      "Developer tool for automating repetitive tasks, project scaffolding, and code generation.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
    category: "Open Source",
    tags: ["Node.js", "TypeScript", "CLI", "npm"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-4">
              Selected Projects
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              A collection of projects I've worked on, from web applications to
              mobile apps and open source contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-display text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

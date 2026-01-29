import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Fintech/Banking", "Travel", "Education", "Consumer Study", "Enterprise", "Tech/AI"];

const projects = [
  {
    id: 1,
    title: "Personal Loans FinTech",
    description:
      "A foundational and evaluative study exploring trust, decision making, and UX friction in a large Indian FinTech product.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Fintech/Banking",
    tags: ["Foundational Research", "Usability Testing", "JTBD", "Journey Mapping"],
    href: "/projects/personal-loans",
  },
  {
    id: 2,
    title: "Creative Education, Saudi Arabia",
    description:
      "A large scale mixed methods study to redesign curriculum across creative domains and position a new age education institution for long term relevance.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    category: "Education",
    tags: ["Mixed Methods", "Strategy Research", "Curriculum Design", "Expert Interviews"],
    href: "/projects/creative-education",
  },
  {
    id: 3,
    title: "Urban Planning & Lifestyle Research, Jeddah",
    description:
      "A mixed-methods study to understand lifestyle preferences, daily behaviours, and amenity needs of residents in Jeddah to shape a large scale urban development.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Consumer Study",
    tags: ["Mixed Methods", "Concept Testing", "Focus Groups", "Quantitative Survey"],
    href: "/projects/urban-planning",
  },
  {
    id: 4,
    title: "Airline Booking Platform UX",
    description:
      "A behavioural usability study of an airline booking platform, focused on the moments where clarity, confidence, and loyalty break down.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    category: "Travel",
    tags: ["Conversion UX", "Behavioural Insight", "Usability Testing", "Journey Mapping"],
    href: "/projects/airline-booking",
  },
  {
    id: 5,
    title: "Brand Perception & Decision-Making Study",
    description:
      "A behavioural brand study exploring how consumers choose between competing pizza brands, and what shapes trust, loyalty, and cultural relevance in the UAE.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    category: "Consumer Study",
    tags: ["Brand Equity", "Mixed Methods", "Focus Groups", "Quantitative"],
    href: "/projects/brand-perception",
  },
  {
    id: 6,
    title: "Sensory Preference & Brand Trust Study",
    description:
      "A sensory and behavioural study exploring how consumers evaluate laban beyond taste, and what creates trust, habit, and 'authenticity' in everyday dairy choices.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=600&fit=crop",
    category: "Consumer Study",
    tags: ["Sensory Research", "Brand Equity", "Blind Taste Testing", "Qualitative"],
    href: "/projects/sensory-preference",
  },
  {
    id: 7,
    title: "Digital Wallet Pre-Launch Usability",
    description:
      "A pre-launch usability programme focused on identifying where trust, comprehension, and task momentum break down in real transaction flows.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    category: "Fintech/Banking",
    tags: ["Fintech UX", "Pre-Launch Risk", "Behavioural UX", "Usability Testing"],
    href: "/projects/digital-wallet",
  },
  {
    id: 8,
    title: "Enterprise SaaS Onboarding",
    description:
      "Streamlining complex enterprise software onboarding to reduce time-to-value and improve user activation rates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Enterprise",
    tags: ["B2B Research", "User Interviews", "Workflow Analysis", "Heuristic Evaluation"],
    href: "/projects",
  },
  {
    id: 9,
    title: "AI Assistant Trust Study",
    description:
      "Exploring user mental models and trust factors in AI-powered productivity tools for knowledge workers.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "Tech/AI",
    tags: ["Generative Research", "Mental Models", "Trust & Safety", "Ethics"],
    href: "/projects",
  },
  {
    id: 10,
    title: "Credit Card Rewards Program",
    description:
      "Evaluating reward program comprehension and optimising the redemption experience for increased engagement.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "Fintech/Banking",
    tags: ["Evaluative Research", "Card Sorting", "Tree Testing", "Survey Design"],
    href: "/projects",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link
                to={project.href}
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
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-background rounded-full text-sm font-medium flex items-center gap-2">
                      View Case Study <ArrowUpRight className="h-4 w-4" />
                    </span>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const skills = [
  { category: "Design", items: ["UI/UX Design", "Design Systems", "Figma", "Prototyping", "User Research"] },
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "REST APIs", "AWS"] },
  { category: "Tools", items: ["Git", "VS Code", "Notion", "Linear", "Vercel"] },
];

const experience = [
  {
    title: "Senior Frontend Engineer",
    company: "Tech Startup",
    period: "2022 - Present",
    description: "Leading frontend architecture and mentoring junior developers on a B2B SaaS platform.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2019 - 2022",
    description: "Built custom web applications and e-commerce solutions for clients across various industries.",
  },
  {
    title: "UI/UX Designer",
    company: "Freelance",
    period: "2017 - 2019",
    description: "Designed user interfaces and experiences for startups and small businesses.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
                Hi, I'm Alex
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a designer and developer passionate about creating thoughtful
                digital experiences. With over 5 years of experience, I specialize
                in building products that are both beautiful and functional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new coffee shops,
                reading about design history, or contributing to open source
                projects.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  San Francisco, CA
                </span>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              Skills & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                <h3 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Background
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              Experience
            </h2>
          </div>

          <div className="max-w-3xl space-y-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-background rounded-xl shadow-soft"
              >
                <div className="hidden sm:block w-12 h-12 rounded-xl bg-accent/10 flex-shrink-0 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-muted-foreground">at {item.company}</span>
                  </div>
                  <p className="text-sm text-accent">{item.period}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              What I Believe In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Simplicity",
                description:
                  "The best solutions are often the simplest. I strive to remove complexity, not add it.",
              },
              {
                title: "Craft",
                description:
                  "Details matter. Every pixel, every interaction, every line of code deserves attention.",
              },
              {
                title: "Impact",
                description:
                  "Technology should serve people. I build products that make a meaningful difference.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

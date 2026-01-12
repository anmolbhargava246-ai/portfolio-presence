import { Link } from "react-router-dom";
import { ArrowRight, Download, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const skills = [
  { category: "Research Methods", items: ["In-depth Interviews", "Usability Testing", "Contextual Inquiry", "Diary Studies", "Surveys"] },
  { category: "Behavioral Science", items: ["Cognitive Biases", "Mental Models", "Decision Heuristics", "Behavioral Economics", "Trust & Friction"] },
  { category: "Analysis", items: ["Thematic Analysis", "Affinity Mapping", "Journey Mapping", "Insight Synthesis", "Stakeholder Workshops"] },
  { category: "Tools", items: ["Figma", "Dovetail", "Miro", "Notion", "UserTesting"] },
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
                Hi, I'm Anmol 👋
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a UX researcher with four years of experience. Basically, I look at 
                the "people" side of product development. 👥
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My way of working is embedded in strategy, not just execution. I step in early, 
                challenge assumptions, and turn human behaviour into clear product direction. 🧭
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have a master's degree in psychology, which makes me, honestly, a bit of a 
                user behaviour enthusiast. I look at biases, mental models, trust, friction… 
                so kind of everywhere the real insight lives. 💡
              </p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  Master's in Psychology, TISS Mumbai
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  Bachelor's in Psychology, Mumbai University
                </span>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Let's Talk
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop"
                  alt="Anmol - UX Researcher"
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Let's Connect
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Want clarity over noise?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you want insight that actually moves things forward, let's talk. 👇🏼
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

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-4">
              How I Approach Research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Strategy First",
                description:
                  "Research should inform direction, not just validate decisions. I embed early and challenge assumptions.",
              },
              {
                title: "Behavioral Lens",
                description:
                  "Understanding why people do what they do—through biases, mental models, and the moments where friction lives.",
              },
              {
                title: "Clarity Over Noise",
                description:
                  "Insights only matter if they move things. I translate complex findings into clear, actionable direction.",
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

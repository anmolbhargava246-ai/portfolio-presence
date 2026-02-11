import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Users, Layers, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyCreativeEducation = () => {
  return (
    <Layout>
      {/* Back Navigation */}
      <div className="container mx-auto pt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Education", "Curriculum Design", "Mixed Methods", "Strategy Research", "Saudi Arabia"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Shaping the Future of Creative Education in Saudi Arabia
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Large-scale mixed methods study to redesign curriculum across creative domains and position a new institution for long-term relevance.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            The Problem
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              The client aimed to lead creative education in Saudi Arabia but lacked clarity on what skills mattered to learners, employers, and the evolving job market.
            </p>

            <p className="text-foreground font-medium italic">
              This wasn't a content problem. It was a relevance and legitimacy problem.
            </p>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            My Role
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Led research strategy and execution across a three-member team. Owned discussion guide design, global expert interviews, and synthesis. Translated insights into a curriculum blueprint leadership could act on.
          </p>
        </div>
      </section>

      {/* Approach — Visual Stepper */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Approach
          </h2>

          <div className="space-y-0">
            {[
              { step: "1", title: "Global benchmarking", desc: "Desk research across creative education institutions" },
              { step: "2", title: "Expert interviews", desc: "Future skill directions and industry expectations" },
              { step: "3", title: "Student + professional interviews", desc: "Local aspirations and barriers" },
              { step: "4", title: "Quantitative validation", desc: "500+ survey responses to prioritise at scale" },
              { step: "5", title: "Curriculum synthesis", desc: "Module-level roadmap with learning pathways" },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-medium text-sm">{item.step}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-full bg-accent/20 my-1" />}
                </div>
                <div className="pb-6">
                  <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Briefcase, finding: "Clear mismatch between education and job market.", detail: "Students wanted practical skills; institutions optimised for theory.", shift: "Curriculum shifted to applied, portfolio-based learning." },
              { icon: Users, finding: "Different cohorts needed different value propositions.", detail: "Early career: skill building. Mid-career: leadership and adaptability.", shift: "Separate learning pathways designed by career stage." },
              { icon: Layers, finding: "Cross-disciplinary learning was highly valued.", detail: "Blending art, technology, and leadership emerged as a differentiator.", shift: "Modules blended craft with tech, entrepreneurship, and leadership." },
              { icon: Globe, finding: "Global credibility needed, local relevance non-negotiable.", detail: "Curriculum had to reflect Saudi context while meeting international standards.", shift: "Balanced global benchmarks with local cultural and labour market realities." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Outcome
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Curriculum blueprint across six creative domains",
              "Persona-based learning pathways by career stage",
              "Prioritised roadmap: local relevance + global credibility",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <span className="text-accent font-medium">→</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-foreground font-medium text-sm">
            Next time, I'd bring employer and industry signal data earlier to track skill relevance over time and push for tighter integration between curriculum design and labour market analytics.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in research that shapes strategy, systems, and long-term direction?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Let's talk →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyCreativeEducation;

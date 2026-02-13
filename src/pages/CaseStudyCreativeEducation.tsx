import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyCreativeEducation = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Back Navigation */}
        <div className="container mx-auto px-6 pt-8">
          <Link to="/projects">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-12 pb-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Education</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Curriculum Design</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Mixed Methods</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Strategy Research</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">Saudi Arabia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Shaping the Future of Creative Education in Saudi Arabia
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A large scale mixed methods study to redesign curriculum across creative domains and position a new age education institution for long term relevance.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              The Problem
            </h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                The client aimed to become a leading institution for creative education in Saudi Arabia—but lacked clarity on what skills truly mattered to learners, employers, and the evolving job market.
              </p>
              
              <p>
                The stakes were high: misaligned curriculum would mean poor employability outcomes, weak institutional credibility, and failure to capture a rapidly growing market shaped by Vision 2030 priorities.
              </p>
              
              <p className="text-muted-foreground italic">
                This wasn't a content problem.<br />
                It was a relevance and legitimacy problem.
              </p>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              My Role
            </h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                I led the research strategy and execution across a three-member team—owning discussion guide design, global expert interviews, and synthesis. I ensured cultural validity by coordinating closely with Arabic moderators for local interviews.
              </p>
              
              <p>
                Beyond execution, I played a key role in translating insights into a curriculum blueprint that leadership could act on, and in managing stakeholder alignment across complex client hierarchies.
              </p>
              
              <p className="text-muted-foreground italic">
                I helped leadership align on what creative education needed to become in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>

        {/* Research Snapshot */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <div className="bg-muted/50 rounded-2xl p-8">
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
                Research Snapshot
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Methods</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Desk research and global benchmarking</li>
                    <li>In-depth interviews (students & professionals)</li>
                    <li>Expert interviews (global subject matter experts)</li>
                    <li>Quantitative surveys (500+ responses)</li>
                    <li>Thematic analysis and prioritisation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Scale</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Six creative domains covered</li>
                    <li>Global and Saudi-based participants</li>
                    <li>Early career to mid-career professionals</li>
                    <li className="text-foreground font-medium">Balanced global benchmarks with local cultural and labour market realities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Approach
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <span className="text-foreground font-medium whitespace-nowrap">Phase 1</span>
                <span>Desk research and global benchmark analysis across creative education institutions</span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground font-medium whitespace-nowrap">Phase 2</span>
                <span>Expert interviews to define future skill directions and industry expectations</span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground font-medium whitespace-nowrap">Phase 3</span>
                <span>Student and professional interviews to capture local aspirations and barriers</span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground font-medium whitespace-nowrap">Phase 4</span>
                <span>Quantitative survey validation (500+ responses) to prioritise at scale</span>
              </div>
              <div className="flex gap-4">
                <span className="text-foreground font-medium whitespace-nowrap">Phase 5</span>
                <span>Synthesis and prioritisation into a module-level curriculum roadmap</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Key Insights
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  There was a clear mismatch between traditional education and job market expectations.
                </h3>
                <p className="text-muted-foreground mb-2">
                  Students wanted employable, practical skills, while institutions were still optimised for theory-heavy learning.
                </p>
                <p className="text-accent text-sm">
                  → Curriculum shifted toward applied, portfolio-based learning and industry-embedded projects.
                </p>
              </div>
              
              {/* Pull Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-12">
                <p className="text-2xl font-medium text-foreground italic leading-relaxed">
                  "Global credibility mattered, but local relevance was non-negotiable."
                </p>
              </blockquote>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Different cohorts needed different value propositions.
                </h3>
                <p className="text-muted-foreground mb-2">
                  Early career learners prioritised skill building, mid-career professionals sought leadership and adaptability.
                </p>
                <p className="text-accent text-sm">
                  → Separate learning pathways were designed for early-career vs mid-career professionals.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cross-disciplinary learning was highly valued.
                </h3>
                <p className="text-muted-foreground mb-2">
                  Blending art, technology, and leadership emerged as a strong differentiator.
                </p>
                <p className="text-accent text-sm">
                  → Modules blended creative craft with technology, entrepreneurship, and leadership skills.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Global credibility mattered, but local relevance was non-negotiable.
                </h3>
                <p className="text-muted-foreground mb-2">
                  Curriculum needed to reflect Saudi cultural context while meeting international standards.
                </p>
                <p className="text-accent text-sm">
                  → Curriculum balanced global benchmarks with Saudi-specific cultural and labour market realities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome and Impact */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Outcome and Impact
            </h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p className="font-medium">
                The research delivered three core outputs:
              </p>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>A curriculum blueprint across six creative domains with module-level recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Persona-based learning pathways for students, early-career, and mid-career professionals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>A prioritised roadmap aligning local relevance with global credibility</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground italic">
                Stakeholders used the blueprint to guide institutional positioning and programme rollout.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-6">
              Reflection
            </h2>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                This project reinforced the importance of designing education as a long-term system rather than a static curriculum—one that evolves with industry, culture, and learner expectations.
              </p>
              
              <p>
                If I did this again, I'd bring employer and industry signal data earlier to continuously track skill relevance over time, and push for tighter integration between curriculum design and labour market analytics.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 py-20 border-t border-border">
          <div className="max-w-3xl text-center">
            <p className="text-xl text-muted-foreground mb-8">
              Interested in research that shapes strategy, systems, and long term direction?
            </p>
            <Link to="/contact">
              <Button size="lg" className="px-8">
                Let's talk
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudyCreativeEducation;

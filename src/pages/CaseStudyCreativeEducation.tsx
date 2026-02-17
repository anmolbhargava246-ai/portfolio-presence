
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { RiskGrid } from "@/components/case-study/RiskGrid";

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
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Education
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Curriculum Design
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Mixed Methods
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Strategy Research
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Shaping the Future of Creative Education in Saudi Arabia
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A large scale mixed methods study to redesign curriculum across creative domains and position a new age education institution for long term relevance.
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
              The client aimed to become a leading institution for creative education in Saudi Arabia—but lacked clarity on what skills truly mattered to learners, employers, and the evolving job market.
            </p>

            <p>
              The stakes were high: misaligned curriculum would mean poor employability outcomes, weak institutional credibility, and failure to capture a rapidly growing market shaped by Vision 2030 priorities.
            </p>

            <p className="text-foreground font-medium">
              This wasn't a content problem.<br />
              It was a relevance and legitimacy problem.
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

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I led the research strategy and execution across a three-member team—owning discussion guide design, global expert interviews, and synthesis. I ensured cultural validity by coordinating closely with Arabic moderators for local interviews.
            </p>

            <p>
              Beyond execution, I played a key role in translating insights into a curriculum blueprint that leadership could act on, and in managing stakeholder alignment across complex client hierarchies.
            </p>

            <p className="text-foreground font-medium">
              I helped leadership align on what creative education needed to become in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Research Snapshot */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Snapshot
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Desk research and global benchmarking</li>
                  <li>In-depth interviews (students & professionals)</li>
                  <li>Expert interviews (global subject matter experts)</li>
                  <li>Quantitative surveys (500+ responses)</li>
                  <li>Thematic analysis and prioritisation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Scale
                </h3>
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Approach
          </h2>

          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 1</span>
                <p className="text-muted-foreground">Desk research and global benchmark analysis across creative education institutions</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 2</span>
                <p className="text-muted-foreground">Expert interviews to define future skill directions and industry expectations</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 3</span>
                <p className="text-muted-foreground">Student and professional interviews to capture local aspirations and barriers</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 4</span>
                <p className="text-muted-foreground">Quantitative survey validation (500+ responses) to prioritise at scale</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Phase 5</span>
                <p className="text-muted-foreground">Synthesis and prioritisation into a module-level curriculum roadmap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Risk Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <RiskGrid
            title="Curriculum Alignment Risks"
            subtitle="Where institutional design risked failing learner and market expectations."
            items={[
              { severity: "critical", title: "Skills-market mismatch", description: "Theory-heavy curriculum misaligned with employer expectations" },
              { severity: "high", title: "Cohort differentiation gap", description: "Early-career and mid-career learners served identical pathways" },
              { severity: "high", title: "Cultural relevance deficit", description: "Global benchmarks applied without local adaptation" },
              { severity: "medium", title: "Cross-disciplinary blind spot", description: "Siloed domains missing high-value blended learning" },
            ]}
            footnote="Prioritised by impact on institutional credibility and learner employability."
          />
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                There was a clear mismatch between traditional education and job market expectations.
              </h3>
              <p className="text-muted-foreground mb-3">
                Students wanted employable, practical skills, while institutions were still optimised for theory-heavy learning.
              </p>
              <p className="text-accent text-sm font-medium">
                → Curriculum shifted toward applied, portfolio-based learning and industry-embedded projects.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "Global credibility mattered, but local relevance was non-negotiable."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Different cohorts needed different value propositions.
              </h3>
              <p className="text-muted-foreground mb-3">
                Early career learners prioritised skill building, mid-career professionals sought leadership and adaptability.
              </p>
              <p className="text-accent text-sm font-medium">
                → Separate learning pathways were designed for early-career vs mid-career professionals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Cross-disciplinary learning was highly valued.
              </h3>
              <p className="text-muted-foreground mb-3">
                Blending art, technology, and leadership emerged as a strong differentiator.
              </p>
              <p className="text-accent text-sm font-medium">
                → Modules blended creative craft with technology, entrepreneurship, and leadership skills.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Global credibility mattered, but local relevance was non-negotiable.
              </h3>
              <p className="text-muted-foreground mb-3">
                Curriculum needed to reflect Saudi cultural context while meeting international standards.
              </p>
              <p className="text-accent text-sm font-medium">
                → Curriculum balanced global benchmarks with Saudi-specific cultural and labour market realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Outcome and Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              The research delivered three core outputs:
            </p>

            <ul className="space-y-3 list-disc list-inside">
              <li>A curriculum blueprint across six creative domains with module-level recommendations</li>
              <li>Persona-based learning pathways for students, early-career, and mid-career professionals</li>
              <li>A prioritised roadmap aligning local relevance with global credibility</li>
            </ul>

            <p className="text-sm text-muted-foreground/80 italic border-l-2 border-border pl-4">
              Stakeholders used the blueprint to guide institutional positioning and programme rollout.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
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
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in research that shapes strategy, systems, and long term direction?
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

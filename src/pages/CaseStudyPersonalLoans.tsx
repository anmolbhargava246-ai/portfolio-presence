import { Link } from "react-router-dom";
import { ArrowLeft, EyeOff, Zap, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyPersonalLoans = () => {
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
            {["FinTech", "Personal Loans", "Foundational + Evaluative", "Contract Role"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding Why Users Hesitate to Take Personal Loans Digitally
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Foundational and evaluative study exploring trust, decision-making, and UX friction in a large Indian FinTech product.
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
              Technically seamless product, low adoption. The team believed speed was the driver. What they lacked was understanding of how users think about borrowing money and where trust breaks down.
            </p>

            <p className="text-foreground font-medium">
              This wasn't a usability issue. It was a behavioural one.
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
            Primary researcher end-to-end — all interviews, usability sessions, and analysis. Contributed to framing insights and aligning recommendations with product and marketing stakeholders.
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
              { step: "Week 1–2", title: "Foundational interviews", desc: "Borrowing beliefs, fears, and trust breakdowns" },
              { step: "Week 3", title: "Journey + JTBD analysis", desc: "Decision moments and switching triggers" },
              { step: "Week 4", title: "Usability evaluation", desc: "Digital loan and KYC flow friction" },
              { step: "Week 5", title: "Stakeholder workshop", desc: "Aligning product + marketing on trust-first improvements" },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-medium text-xs">{item.step}</span>
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

      {/* Research Snapshot */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-xl md:text-2xl font-medium text-foreground mb-8">
              Research Snapshot
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>In-depth interviews</li>
                  <li>Usability testing</li>
                  <li>Jobs to be Done analysis</li>
                  <li>Journey mapping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Participants</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Loan users + drop-offs</li>
                  <li>Credit users avoiding loans</li>
                  <li>Tier 1, 2, 3 cities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: EyeOff, finding: "Users distrusted ambiguity, not loans.", detail: "Hidden charges and vague terms triggered hesitation more than interest rates.", shift: "Repayment language rewritten, total cost surfaced earlier." },
              { icon: Zap, finding: "Speed mattered only after trust.", detail: "Fast approval attractive, but not at the cost of clarity.", shift: "Reassurance cues added, cognitive overload reduced during KYC." },
              { icon: Heart, finding: "Borrowing was emotional, not transactional.", detail: "First-time borrowers relied on family validation before committing.", shift: "Social proof added, 'locked in' feeling reduced." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <item.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-lg font-display text-foreground italic">
              Insights shifted the team from speed-first messaging to clarity-first trust-building.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Impact
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              "Simplified jargon and repayment terminology",
              "Total cost surfaced earlier to reduce ambiguity",
              "Reassurance cues added during high-anxiety KYC steps",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground/80 italic border-l-2 border-border pl-4">
            This work contributed to the foundation supporting the client's publicly reported milestone of 1 lakh+ personal loan disbursals worth ₹1,000 crore (Oct 2024).
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-foreground font-medium text-sm">
            Next time, I'd push earlier alignment with risk, compliance, and behavioural analytics to track trust over time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to talk about behavioural research, trust, or decision-making in products?
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

export default CaseStudyPersonalLoans;

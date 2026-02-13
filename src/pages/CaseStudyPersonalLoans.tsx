import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/case-study-loans-hero.jpg";

const CaseStudyPersonalLoans = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden">
            <img src={heroImage} alt="Financial trust and transparency layers" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {["FinTech", "Personal Loans", "Foundational + Evaluative", "Contract Role"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">{tag}</span>
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

      {/* Problem */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground">
            Technically seamless product, low adoption. The team believed speed was the driver. What they lacked was understanding of how users think about borrowing money.
          </p>
          <p className="text-foreground font-medium mt-4">This wasn't a usability issue. It was a behavioural one.</p>
        </div>
      </section>

      {/* Role */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">My Role</h2>
          <p className="text-muted-foreground leading-relaxed">
            Primary researcher end-to-end — all interviews, usability sessions, and analysis. Contributed to framing insights and aligning recommendations with product and marketing stakeholders.
          </p>
        </div>
      </section>

      {/* Approach — Timeline */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Approach</h2>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-4 gap-3">
              {[
                { week: "1–2", title: "Foundational interviews", desc: "Borrowing beliefs and trust breakdowns" },
                { week: "3", title: "Journey + JTBD", desc: "Decision moments and switching triggers" },
                { week: "4", title: "Usability evaluation", desc: "Loan and KYC flow friction" },
                { week: "5", title: "Stakeholder workshop", desc: "Aligning on trust-first improvements" },
              ].map((item, i) => (
                <div key={item.week} className="text-center">
                  <div className="w-full h-1 rounded-full bg-accent mb-3" style={{ opacity: 0.3 + (i * 0.23) }} />
                  <p className="text-accent text-xs font-medium mb-1">Week {item.week}</p>
                  <h3 className="text-foreground font-medium text-xs mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">Key Insights</h2>
          <div className="space-y-4">
            {[
              { finding: "Users distrusted ambiguity, not loans.", shift: "Repayment language rewritten, total cost surfaced earlier." },
              { finding: "Speed mattered only after trust.", shift: "Reassurance cues added, cognitive overload reduced during KYC." },
              { finding: "Borrowing was emotional, not transactional.", shift: "Social proof added, 'locked in' feeling reduced." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-accent pl-6 py-4 mt-8">
            <p className="text-lg font-display text-foreground italic">
              Insights shifted the team from speed-first messaging to clarity-first trust-building.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">Impact</h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">Reflection</h2>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd push earlier alignment with risk, compliance, and behavioural analytics to track trust over time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">Want to talk about behavioural research, trust, or decision-making in products?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">Let's talk →</Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyPersonalLoans;
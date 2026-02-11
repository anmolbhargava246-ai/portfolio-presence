import { Link } from "react-router-dom";
import { ArrowLeft, Users, Lightbulb, Globe, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudyBrandPerception = () => {
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
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-lg font-medium rounded-lg border border-accent/20">
              Brand Equity · Consumer Decision-Making
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["QSR Category", "Mixed Methods", "UAE"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Decoding Brand Preference in a Habit-Driven Category
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Identified why consumers default to competitors—and what positioning levers could shift habitual preference toward the client brand.
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
              Strong awareness but weak habitual preference. Competitors had become the automatic choice for gatherings, celebrations, and comfort moments. The client wasn't being rejected — they were being forgotten.
            </p>

            <p className="text-foreground font-medium">
              This wasn't a positioning problem. It was a mental availability problem in high-stakes social contexts.
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
            Shaped research focus toward decision contexts rather than generic brand attributes. Led synthesis across qualitative and quantitative inputs, translating consumer language into actionable positioning territory. Moved the team from "what do people think of us" to "why aren't we the default."
          </p>
        </div>
      </section>

      {/* Decision Focus — Visual Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Decision Focus
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Target, title: "Emotional territories", desc: "Which to own vs. cede to competitors" },
              { icon: Lightbulb, title: "Positioning bet", desc: "Compete on nostalgia, or differentiate on modernity and value?" },
              { icon: Users, title: "Group salience", desc: "How to become the default in group decisions where safe choices win" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5 text-center">
                <item.icon className="h-5 w-5 text-accent mx-auto mb-3" />
                <h3 className="text-foreground font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
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

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Emotional triggers of category choice</li>
                  <li>Default habits vs. active preference</li>
                  <li>Cultural identity and brand fit</li>
                  <li>Barriers to trial and switching</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Methods</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Focus groups with digital pre-tasks</li>
                  <li>Competitor association mapping</li>
                  <li>Quantitative validation (500+)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Sample</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Loyalists + competitor-primary users</li>
                  <li>Dubai + Sharjah</li>
                  <li>Local + expat segments</li>
                </ul>
              </div>
            </div>
          </div>
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
              { step: "1", title: "Competitor association mapping", desc: "Established which emotional territories competitors already owned." },
              { step: "2", title: "Context-specific preference exploration", desc: "Focused on three decision moments: group gatherings, solo comfort, celebration." },
              { step: "3", title: "Cultural identity testing", desc: "Whether regional origin could serve as a differentiation lever." },
              { step: "4", title: "Quantitative prioritisation", desc: "Validated qualitative themes at scale to distinguish signal from noise." },
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

      {/* Key Insights — Finding → Shift Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-10">
            Key Insights
          </h2>

          <div className="space-y-4">
            {[
              { finding: "Category choice is driven by social risk, not taste preference.", detail: "In groups, people default to 'safe' brands requiring no explanation.", shift: "Positioning needed to build group legitimacy, not just individual appeal." },
              { finding: "Competitors owned nostalgia. The client owned lightness and value.", detail: "Association mapping revealed clear territory separation.", shift: "Strategy shifted to doubling down on existing strengths." },
              { finding: "Regional origin increased affinity — but only when explicit.", detail: "Participants who knew the brand's local roots showed higher warmth and trust.", shift: "Cultural origin surfaced as an underutilised differentiation lever." },
              { finding: "The barrier wasn't rejection — it was absence from consideration.", detail: "Most competitor-primary users had neutral or positive perceptions of the client.", shift: "Salience-building prioritised over perception repair." },
            ].map((item) => (
              <div key={item.finding} className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-foreground font-medium text-sm mb-2">{item.finding}</h3>
                <p className="text-muted-foreground text-xs mb-3">{item.detail}</p>
                <p className="text-accent text-xs font-medium">→ {item.shift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output and Impact
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Positioning framework: emotional territories to own vs. avoid",
              "Salience-building priorities for group decision contexts",
              "Cultural origin recommended as brand asset",
              "Strategy shifted from perception repair to mental availability",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-foreground font-medium mt-6 text-sm">
            Reframed the brief from "improve brand perception" to "become the obvious choice in moments that matter."
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Reflection
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Preference is behavioural — shaped by context, social risk, and mental shortcuts, not just perception scores.
          </p>
          <p className="text-foreground font-medium text-sm">
            Next time, I'd integrate purchase occasion data earlier to quantify which decision moments offer the highest leverage for salience investment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to discuss brand strategy research or consumer decision-making?
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

export default CaseStudyBrandPerception;

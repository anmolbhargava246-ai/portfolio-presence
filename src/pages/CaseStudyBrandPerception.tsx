import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { RiskGrid } from "@/components/case-study/RiskGrid";

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
          {/* Bold Category Visual */}
          <div className="mb-10">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-lg font-medium rounded-lg border border-accent/20">
              Brand Equity · Consumer Decision-Making
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              QSR Category
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Mixed Methods
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              UAE
            </span>
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
              The client had strong awareness but weak habitual preference. In a category driven by emotional defaults—comfort, nostalgia, group safety—awareness alone wasn't converting to first-choice status.
            </p>

            <p>
              Leadership assumed the gap was about product perception. The real issue was behavioural: competitors had become the automatic choice for gatherings, celebrations, and comfort moments. The client wasn't being rejected—they were being forgotten before the decision was even made.
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

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I shaped the research focus toward decision contexts rather than generic brand attributes—prioritising the moments where preference actually forms.
            </p>

            <p>
              Led synthesis across qualitative and quantitative inputs, translating fragmented consumer language into actionable positioning territory. Helped the team move from "what do people think of us" to "why aren't we the default."
            </p>
          </div>
        </div>
      </section>

      {/* Decision Focus */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Decision Focus
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This research was commissioned to inform brand positioning and marketing investment priorities. The client needed clarity on:
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Which emotional territories to own vs. cede to competitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Whether to compete on nostalgia and familiarity, or differentiate on modernity and value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>How to increase salience in group decision contexts where defaults win</span>
              </li>
            </ul>
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
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Focus Areas
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Emotional triggers of category choice</li>
                  <li>Default habits vs. active preference</li>
                  <li>Cultural identity and brand fit</li>
                  <li>Barriers to trial and switching</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Focus groups with digital pre-tasks</li>
                  <li>Competitor association mapping</li>
                  <li>Quantitative validation (500+ responses)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Sample
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Loyalists + competitor-primary users</li>
                  <li>Dubai + Sharjah</li>
                  <li>Local + expat segments</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
              Designed to surface behavioural drivers of preference, not just stated attitudes.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Approach
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-medium text-sm">1</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Competitor association mapping</h3>
                <p className="text-muted-foreground text-sm">Established which emotional territories competitors already owned—nostalgia, reliability, family safety—to identify realistic positioning space.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-medium text-sm">2</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Context-specific preference exploration</h3>
                <p className="text-muted-foreground text-sm">Focused on three decision moments: group gatherings, solo comfort, and celebration. These contexts revealed different default behaviours and switching barriers.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-medium text-sm">3</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Cultural identity and local relevance testing</h3>
                <p className="text-muted-foreground text-sm">Explored whether regional origin could serve as a differentiation lever in a category dominated by global brands.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-medium text-sm">4</span>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Quantitative prioritisation</h3>
                <p className="text-muted-foreground text-sm">Validated qualitative themes at scale to distinguish signal from noise and prioritise positioning investments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Risk Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <RiskGrid
            title="Preference Risk Map"
            subtitle="Mapped by barrier type to habitual preference, not stated attitude."
            items={[
              { severity: "critical", title: "Mental availability gap", description: "Brand absent from consideration at key decision moments" },
              { severity: "high", title: "Social risk aversion", description: "Consumers default to 'safe' brands in group contexts" },
              { severity: "high", title: "Emotional territory deficit", description: "Competitors own nostalgia and reliability associations" },
              { severity: "medium", title: "Cultural origin invisibility", description: "Local roots unknown to most consumers" },
            ]}
            footnote="Prioritised by impact on habitual purchase, not brand perception scores."
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
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Category choice is driven by social risk, not taste preference.
              </h3>
              <p className="text-muted-foreground mb-3">
                In group contexts, people default to "safe" brands that require no explanation. The client was seen as a personal choice, not a group-safe choice.
              </p>
              <p className="text-sm text-accent">
                → Positioning needed to build group legitimacy, not just individual appeal.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Competitors owned nostalgia and reliability. The client owned lightness and value.
              </h3>
              <p className="text-muted-foreground mb-3">
                Association mapping revealed clear territory separation. Competing on nostalgia would require years of investment; leading on modernity and affordability was immediately credible.
              </p>
              <p className="text-sm text-accent">
                → Strategy shifted to doubling down on existing strengths rather than chasing competitor territory.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                Regional origin increased affinity—but only when made explicit.
              </h3>
              <p className="text-muted-foreground mb-3">
                Participants who knew the brand's local roots showed higher warmth and trust. Most didn't know.
              </p>
              <p className="text-sm text-accent">
                → Recommended surfacing cultural origin in brand communications as an underutilised differentiation lever.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-lg font-medium text-foreground mb-2">
                The barrier wasn't rejection—it was absence from consideration.
              </h3>
              <p className="text-muted-foreground mb-3">
                Most competitor-primary users had neutral or positive perceptions of the client. They simply didn't think of them at the decision moment.
              </p>
              <p className="text-sm text-accent">
                → Salience-building and context-specific triggers prioritised over perception repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output and Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output and Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Delivered a positioning framework clarifying which emotional territories to own vs. avoid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Identified salience-building priorities for group decision contexts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Recommended cultural origin as an underutilised brand asset</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>Shifted strategy from perception repair to mental availability investment</span>
              </li>
            </ul>

            <p className="text-foreground font-medium pt-4">
              The research reframed the brief from "improve brand perception" to "become the obvious choice in moments that matter."
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
              Brand research often defaults to measuring attributes and awareness. This project reinforced that preference is behavioural—shaped by context, social risk, and mental shortcuts, not just perception scores.
            </p>

            <p className="text-foreground font-medium">
              If I ran this again, I'd integrate purchase occasion data earlier to quantify which decision moments offer the highest leverage for salience investment.
            </p>
          </div>
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

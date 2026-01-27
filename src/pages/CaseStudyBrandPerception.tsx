import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
            Understanding What Drives Brand Preference in a Crowded Food Category
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A behavioural brand study exploring how consumers choose between competing pizza brands, and what shapes trust, loyalty, and cultural relevance in the UAE.
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
              In a category dominated by familiar incumbents, the client needed sharper positioning in the consumer mind.
            </p>

            <p>
              The challenge wasn't awareness alone. It was understanding what people associate with the brand emotionally, what triggers preference, and why competitors feel like the default choice for gatherings, comfort, and celebration.
            </p>

            <p className="text-foreground font-medium">
              The real question was:<br />
              What makes a brand feel obvious before people even compare options?
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
              I worked as a researcher on a multi-group brand perception study, contributing across discussion design, synthesis, and insight development.
            </p>

            <p>
              The work focused on translating messy consumer language into clear strategic direction.
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

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Lens
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Emotional drivers of food choice</li>
                  <li>Cultural signalling and identity</li>
                  <li>Default habits vs active preference</li>
                  <li>Triggers and barriers to trial</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Focus groups + digital activities</li>
                  <li>Competitor association mapping</li>
                  <li>Quantitative validation (500+ responses)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Sample
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Loyalists + competitor users</li>
                  <li>Dubai + Sharjah</li>
                  <li>Local + expat segments</li>
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

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Rather than treating this as a broad brand health check, we narrowed the work to the highest-leverage ambiguity:
            </p>

            <p className="text-foreground font-medium italic">
              What do people really choose pizza brands for, beyond taste?
            </p>

            <p>
              We prioritised three decision contexts:
            </p>

            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Group gatherings</strong> (the "safe option")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Comfort and indulgence</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Identity and cultural relatability</strong></span>
              </li>
            </ul>

            <p>
              Competitor comparisons helped clarify what the category already owns, and where whitespace actually exists.
            </p>
          </div>
        </div>
      </section>

      {/* Consumer Quote */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed">
              "When it's a family thing, I go with what everyone knows. I don't want to explain the menu."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Participant, Dubai focus group
            </footer>
          </blockquote>
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
              <h3 className="text-lg font-medium text-foreground mb-3">
                Pizza choice is emotional infrastructure.
              </h3>
              <p className="text-muted-foreground">
                People associate it with togetherness, reward, and comfort—making brand feeling as important as flavour.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Competitors occupy strong mental defaults.
              </h3>
              <p className="text-muted-foreground">
                Some brands are nostalgic and family-safe, others are fast and reliable—shaping habitual preference.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                The client's strongest equity was "light and affordable".
              </h3>
              <p className="text-muted-foreground">
                Consumers consistently described it as less heavy, good value, and modern in tone.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Cultural origin increased affinity.
              </h3>
              <p className="text-muted-foreground">
                Regional pride and local identity acted as a differentiator in a globalised category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Output */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Output
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The research clarified the brand's behavioural positioning space and the key levers needed to strengthen distinctiveness, cultural resonance, and habitual preference.
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
              This project reinforced that brand strategy is behavioural.
            </p>

            <p>
              People rarely choose the "best" brand. They choose what feels familiar, safe in groups, emotionally rewarding, and culturally legible.
            </p>

            <p className="text-foreground font-medium">
              Good research makes those invisible defaults visible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to discuss brand perception research or consumer decision-making?
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

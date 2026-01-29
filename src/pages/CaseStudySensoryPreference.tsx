import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const CaseStudySensoryPreference = () => {
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
              Sensory Research · Consumer Decision-Making
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Dairy Category
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Brand Equity
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Saudi Arabia
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding What Drives Preference in a High-Frequency Beverage Category
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A sensory and behavioural study exploring how consumers evaluate laban beyond taste, and what creates trust, habit, and "authenticity" in everyday dairy choices.
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
              In a crowded staple category, the brand team needed to improve product appeal and competitiveness.
            </p>

            <p>
              The challenge wasn't just flavour tweaking. It was understanding what people subconsciously treat as "real laban" and why certain products become the default choice without active comparison.
            </p>

            <p className="text-foreground font-medium">
              The real question was:<br />
              What makes a laban feel authentic, satisfying, and worth repurchasing?
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
              I worked as a qualitative researcher on a multi-group product and perception study, contributing across discussion design, taste-test synthesis, and insight development.
            </p>

            <p>
              The work focused on translating subjective sensory language into clear product and positioning direction.
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
                  <li>Sensory trust and authenticity cues</li>
                  <li>Habitual preference vs active trial</li>
                  <li>Emotional associations with traditional beverages</li>
                  <li>Drivers of repeat purchase</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Methods
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Mini group discussions</li>
                  <li>Blind taste testing across multiple recipes</li>
                  <li>Competitor benchmarking and association mapping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Sample
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Heavy laban consumers (3x weekly)</li>
                  <li>Loyalists + competitor users</li>
                  <li>Riyadh + Jeddah</li>
                  <li>Male + female, across life stages</li>
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
              Rather than treating this as a simple taste preference test, we narrowed the work to the highest-leverage ambiguity:
            </p>

            <p className="text-foreground font-medium italic">
              What do people actually judge laban on, beyond "sourness"?
            </p>

            <p>
              We focused on three behavioural decision layers:
            </p>

            <ul className="space-y-2 pl-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Authenticity signals</strong> (what feels traditional vs artificial)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Mouthfeel satisfaction</strong> (texture as emotional payoff)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Aftertaste as the true loyalty driver</strong></span>
              </li>
            </ul>

            <p>
              Competitor comparisons helped reveal what the category already expects by default, and where improvement would actually shift behaviour.
            </p>
          </div>
        </div>
      </section>

      {/* Consumer Quote */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 py-4">
            <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed">
              "The best laban stays with you. It's not just about the first sip—it's how it feels after."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              — Participant, Riyadh focus group
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
                Laban choice is sensory identity, not just refreshment.
              </h3>
              <p className="text-muted-foreground">
                Consumers associate it with tradition, comfort, and everyday ritual—making emotional credibility as important as flavour.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Texture is the hidden decision lever.
              </h3>
              <p className="text-muted-foreground">
                People consistently linked thickness and smoothness to authenticity, and watery inconsistency reduced trust immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Aftertaste drives satisfaction and repurchase.
              </h3>
              <p className="text-muted-foreground">
                The strongest recipes weren't just "good tasting"—they left a lingering, balanced mouthfeel that made consumers want another sip.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                Visual cues shape quality judgement before tasting.
              </h3>
              <p className="text-muted-foreground">
                Pure whiteness signalled freshness and purity, while yellowish hues triggered debate around naturalness vs inconsistency.
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
              The research clarified the sensory and behavioural levers that define "ideal laban" and guided product optimisation and positioning to strengthen competitiveness and repeat purchase.
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
              This project reinforced that food and beverage loyalty is behavioural.
            </p>

            <p>
              People don't choose what is objectively best. They choose what feels authentic, satisfying in the body, and culturally legible.
            </p>

            <p className="text-foreground font-medium">
              Good sensory research makes those invisible defaults measurable and actionable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            If you're building products where trust is sensory and habit-based, let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudySensoryPreference;

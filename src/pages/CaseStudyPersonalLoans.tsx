import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              FinTech
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Personal Loans
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Foundational + Evaluative Research
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              Contract Role
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Understanding Why Users Hesitate to Take Personal Loans Digitally
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            A foundational and evaluative study exploring trust, decision making, and UX friction in a large Indian FinTech product.
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
              Despite a technically seamless product, adoption of digital personal loans was low.
            </p>

            <p>
              The team believed speed and convenience were the main drivers. What they lacked was a clear understanding of how users think about borrowing money, where trust breaks down, and how product language and flow amplify hesitation.
            </p>

            <p className="text-foreground font-medium">
              This wasn't just a usability issue.<br />
              It was a behavioural one.
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
              I was the primary researcher on this project, responsible for shaping the research strategy, conducting foundational interviews, running usability evaluations, and translating insights into product and marketing direction.
            </p>

            <p>
              I worked closely with product and marketing teams to ensure insights informed both UX changes and adoption strategy.
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
                  <li>In-depth interviews</li>
                  <li>Usability testing</li>
                  <li>Jobs to be Done analysis</li>
                  <li>Journey mapping</li>
                  <li>Cognitive load analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                  Participants
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Loan users</li>
                  <li>Applied but dropped off</li>
                  <li>Credit users who avoided loans</li>
                  <li>Tier 1, Tier 2, Tier 3 cities</li>
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
            <p className="text-muted-foreground leading-relaxed">
              The study combined behavioural exploration with hands-on usability evaluation to uncover both why people hesitate and where the product unintentionally increased that hesitation.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Week 1–2</span>
                <p className="text-muted-foreground">Foundational interviews to understand borrowing beliefs, fears, and trust breakdowns</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Week 3</span>
                <p className="text-muted-foreground">Journey mapping + Jobs to Be Done analysis to identify decision moments</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Week 4</span>
                <p className="text-muted-foreground">Usability evaluation of the digital loan and KYC flow</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-medium whitespace-nowrap">Week 5</span>
                <p className="text-muted-foreground">Stakeholder workshop to align product + marketing teams on trust-first improvements</p>
              </div>
            </div>
          </div>
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
                Users didn't distrust loans. They distrusted ambiguity.
              </h3>
              <p className="text-muted-foreground mb-3">
                Hidden charges, unclear repayment terms, and vague language triggered hesitation more than interest rates.
              </p>
              <p className="text-accent text-sm font-medium">
                → We rewrote repayment language, surfaced total cost earlier, and removed vague fee terminology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Speed mattered, but only after trust was established.
              </h3>
              <p className="text-muted-foreground mb-3">
                Fast approval was attractive, but not at the cost of clarity or perceived risk.
              </p>
              <p className="text-accent text-sm font-medium">
                → We added reassurance cues, clearer lender context, and reduced cognitive overload during KYC.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 my-12">
              <p className="text-xl md:text-2xl font-display text-foreground italic">
                "High cognitive load amplified anxiety. Complex forms and dense information during KYC made users second-guess their decision mid-flow."
              </p>
            </blockquote>

            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Borrowing was emotional, not transactional.
              </h3>
              <p className="text-muted-foreground mb-3">
                First-time borrowers relied heavily on family and peer validation before committing.
              </p>
              <p className="text-accent text-sm font-medium">
                → We introduced social proof elements and simplified language to reduce the feeling of being "locked in."
              </p>
            </div>
          </div>

          {/* Strategic Shift */}
          <p className="text-foreground font-medium mt-12 text-lg border-l-4 border-accent pl-6">
            Insights shifted the team from speed-first messaging to clarity-first trust-building.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
            Impact
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              Research informed concrete product changes across the loan journey:
            </p>

            <ul className="space-y-3 list-disc list-inside">
              <li>Simplified jargon and repayment terminology across key screens</li>
              <li>Surfaced total cost and terms earlier to reduce ambiguity</li>
              <li>Added reassurance cues and social proof during high-anxiety steps like KYC</li>
            </ul>

            <p>
              Stakeholders reported stronger completion rates and improved digital disbursals over the following year.
            </p>

            <p className="text-sm text-muted-foreground/80 italic border-l-2 border-border pl-4">
              This work contributed to the broader foundation supporting the client's publicly reported milestone of 1 lakh+ personal loan disbursals worth ₹1,000 crore (Oct 2024), reflecting overall platform performance rather than direct experimental attribution.
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
              This project reinforced that trust is not just a UX problem—it's a product, brand, and organisational one. Behavioural trust issues require cross-functional solutions.
            </p>

            <p>
              With more experience now, I would push for earlier triangulation with behavioural data and stronger longitudinal follow-ups to understand how trust evolves over time.
            </p>

            <p className="text-foreground font-medium">
              If I did this again, I'd push earlier alignment with risk, compliance, and behavioural analytics to track trust over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to talk about behavioural research, trust, or decision making in products?
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

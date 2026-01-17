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
                The client wanted to position itself as a pioneer in creative education in Saudi Arabia.
              </p>
              
              <p>
                While there was ambition to align with global standards, there was limited clarity on what skills actually mattered to students, professionals, and the future job market, especially within the local cultural context.
              </p>
              
              <p className="text-muted-foreground italic">
                The risk wasn't curriculum quality alone.<br />
                It was relevance, credibility, and long term positioning.
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
                I worked as a lead researcher as part of a three member team.
              </p>
              
              <p>
                I was responsible for designing discussion guides and surveys, moderating global expert interviews, coordinating with Arabic moderators, and ensuring insights translated into a clear, actionable curriculum blueprint.
              </p>
              
              <p>
                I also played a key role in stakeholder management across complex client hierarchies.
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
                    <li>Desk research and trend analysis</li>
                    <li>In depth interviews</li>
                    <li>Expert interviews</li>
                    <li>Quantitative surveys</li>
                    <li>Thematic analysis and prioritisation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Scale</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Global subject matter experts</li>
                    <li>Students and professionals</li>
                    <li>500 plus survey responses</li>
                    <li>Six creative domains</li>
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
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                The study was designed to balance global best practices with Saudi specific cultural and educational realities.
              </p>
              
              <p>
                I approached this as a systems problem, looking at education not just as curriculum, but as an ecosystem connecting skills, employability, identity, and long term career growth.
              </p>
              
              <p>
                Qualitative insights were used to uncover depth and nuance, while quantitative validation helped prioritise what truly mattered at scale.
              </p>
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
                <p className="text-muted-foreground">
                  Students wanted employable, practical skills, while institutions were still optimised for theory heavy learning.
                </p>
              </div>
              
              {/* Pull Quote */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-12">
                <p className="text-2xl font-medium text-foreground italic leading-relaxed">
                  "Global credibility mattered, but local relevance was non negotiable."
                </p>
              </blockquote>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Different cohorts needed different value propositions.
                </h3>
                <p className="text-muted-foreground">
                  Early career learners prioritised skill building, mid career professionals sought leadership and adaptability, and experts emphasised lifelong learning.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cross disciplinary learning was highly valued.
                </h3>
                <p className="text-muted-foreground">
                  Blending art, technology, and leadership emerged as a strong differentiator.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Global credibility mattered, but local relevance was non negotiable.
                </h3>
                <p className="text-muted-foreground">
                  Curriculum needed to reflect Saudi cultural context while meeting international standards.
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
              <p>
                The research resulted in a detailed curriculum blueprint with module level recommendations across six creative domains.
              </p>
              
              <p>
                Insights informed persona based learning pathways for students, early career, and mid career professionals.
              </p>
              
              <p>
                The final roadmap helped position the client as a forward looking leader in creative education and is now impacting thousands of students annually as the institution scales.
              </p>
              
              <p className="text-muted-foreground italic">
                Client feedback highlighted the role of research in strengthening both local and global credibility.
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
                This project reinforced the importance of designing education as a long term system rather than a static curriculum.
              </p>
              
              <p>
                With more experience now, I would push for parallel qualitative and quantitative work earlier to speed up timelines and reduce dependency bottlenecks across stakeholders.
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

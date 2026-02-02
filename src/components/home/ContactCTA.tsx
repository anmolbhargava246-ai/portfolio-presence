import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Need research that{" "}
            <span className="text-gradient">actually informs decisions?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I work with product teams, design leaders, and brand strategists 
            who want user insight that moves things forward—not just validates assumptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Book a Research Call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">About My Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

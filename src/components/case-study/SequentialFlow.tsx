import { ArrowDown } from "lucide-react";

interface FlowStep {
  title: string;
  description: string;
}

interface SequentialFlowProps {
  title: string;
  subtitle?: string;
  steps: FlowStep[];
  footnote?: string;
}

export function SequentialFlow({ title, subtitle, steps, footnote }: SequentialFlowProps) {
  return (
    <div className="my-12">
      <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mb-8">{subtitle}</p>
      )}

      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="bg-accent/5 border border-accent/10 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                  {i + 1}
                </div>
                <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground italic">"{step.description}"</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {footnote && (
          <p className="text-sm text-muted-foreground italic mt-6 pt-4 border-t border-border text-center">
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}

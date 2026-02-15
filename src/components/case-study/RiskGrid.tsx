interface RiskItem {
  severity: "critical" | "high" | "medium" | "low";
  title: string;
  description: string;
}

interface RiskGridProps {
  title: string;
  subtitle?: string;
  items: RiskItem[];
  footnote?: string;
}

const severityDot = {
  critical: "bg-red-500",
  high: "bg-amber-500",
  medium: "bg-amber-400",
  low: "bg-green-500",
};

const severityLabel = {
  critical: "CRITICAL",
  high: "HIGH",
  medium: "MEDIUM",
  low: "LOW",
};

export function RiskGrid({ title, subtitle, items, footnote }: RiskGridProps) {
  return (
    <div className="my-12">
      <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mb-8">{subtitle}</p>
      )}

      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {items.map((item, i) => (
            <div key={i} className="bg-card p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2.5 h-2.5 rounded-full ${severityDot[item.severity]}`} />
                <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                  {severityLabel[item.severity]}
                </span>
              </div>
              <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {footnote && (
          <p className="text-sm text-muted-foreground italic mt-6 pt-4 text-center">
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}

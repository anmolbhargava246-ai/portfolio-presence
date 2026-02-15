interface FrictionItem {
  label: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
}

interface FrictionMapProps {
  title: string;
  subtitle?: string;
  items: FrictionItem[];
  footnote?: string;
}

const severityConfig = {
  low: { color: "bg-green-400", width: "w-[25%]", label: "Low" },
  medium: { color: "bg-amber-400", width: "w-[50%]", label: "Medium" },
  high: { color: "bg-red-400", width: "w-[80%]", label: "High" },
  critical: { color: "bg-red-500", width: "w-[95%]", label: "Critical" },
};

export function FrictionMap({ title, subtitle, items, footnote }: FrictionMapProps) {
  return (
    <div className="my-12">
      <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-muted-foreground mb-8">{subtitle}</p>
      )}

      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="space-y-6">
          {items.map((item, i) => {
            const config = severityConfig[item.severity];
            return (
              <div key={i} className="space-y-1.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-medium text-foreground min-w-[120px]">{item.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground min-w-[120px]">{config.label}</span>
                  <div className="flex-1 relative h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`absolute inset-y-0 left-0 ${config.color} ${config.width} rounded-full transition-all`} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground pl-[132px]">{item.description}</p>
              </div>
            );
          })}
        </div>

        {footnote && (
          <p className="text-sm text-muted-foreground italic mt-8 pt-6 border-t border-border text-center">
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}

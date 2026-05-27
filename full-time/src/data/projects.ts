export interface ProjectSummary {
  num: string;
  slug: string;
  meta: string;          // engagement type · industry (used on case-study page)
  company?: string;      // appended on home/projects-index card only
  title: string;
  cardSummary: string;   // one-liner for cards (different from case-study subtitle)
  subtitle: string;      // case-study subtitle
  tags: string[];
}

export const projects: ProjectSummary[] = [
  {
    num: "01",
    slug: "atlassian",
    meta: "Product research · B2B SaaS",
    company: "Atlassian",
    title: "When ambiguous workflows put on-call engineers at risk",
    cardSummary:
      "Evaluative research on a new mobile scheduling feature reprioritised the team's pre-launch backlog. Shipped design changes lifted satisfaction by 15% and adoption by 10%.",
    subtitle:
      "How evaluative research on a new mobile scheduling feature shipped design changes that lifted satisfaction by 15% and adoption by 10%.",
    tags: ["Enterprise B2B SaaS", "Feature adoption", "Cross-functional partnership"],
  },
  {
    num: "02",
    slug: "digital-wallet",
    meta: "Pre-launch behavioural research · FinTech",
    title: "Finding the trust gaps before launch did",
    cardSummary:
      "Pre-launch research that re-prioritised a wallet's launch readiness by adoption risk rather than interface severity. Surfaced trust gaps the product team's assumptions had missed.",
    subtitle:
      "Pre-launch behavioural research that re-prioritised a wallet's launch readiness by adoption risk, not interface severity.",
    tags: ["Pre-launch research", "Activation & onboarding", "Behavioural usability"],
  },
  {
    num: "03",
    slug: "airline-booking",
    meta: "Conversion and retention research · Aviation",
    title: "Trust, dressed up as a usability problem",
    cardSummary:
      "A behavioural reframe shifted an airline from speed-first booking optimisation to a confidence-first experience strategy that addressed why repeat travellers were quietly disengaging.",
    subtitle:
      "How a behavioural reframe shifted an airline from speed-first optimisation to confidence-first experience strategy.",
    tags: ["Trust & adoption", "Conversion friction", "Retention behaviour"],
  },
  {
    num: "04",
    slug: "personal-loans",
    meta: "Activation and onboarding research · FinTech",
    title: "When ambiguity costs more than interest rates",
    cardSummary:
      "Mixed-methods research that revealed why a technically seamless loan product wasn't being taken. Reframed the team's messaging strategy from speed-first to clarity-first trust-building.",
    subtitle:
      "Why a technically seamless digital loan product still wasn't getting taken, and what changed when the team shifted from speed-first messaging to clarity-first trust-building.",
    tags: ["Activation & onboarding", "Trust & adoption", "Behavioural friction"],
  },
];

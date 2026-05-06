type Feature = string;

interface Tier {
  name: string;
  description: string;
  price: number;
  features: Feature[];
  cta: string;
  ctaStyle: "outline" | "primary" | "tertiary";
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Essential",
    description: "Fundamental care for smaller residential pools.",
    price: 175,
    features: [
      "Weekly Service Visit",
      "Basic Chemicals Included",
      "Water Quality Testing",
      "Debris Removal (Surface)",
    ],
    cta: "Select Plan",
    ctaStyle: "outline",
  },
  {
    name: "Elite",
    description: "Comprehensive maintenance for luxury estates.",
    price: 250,
    features: [
      "Priority Weekly Service",
      "Full Chemicals & Stabilizers",
      "Filter Cleaning & Backwash",
      "Tile Scrubbing & Floor Vacuum",
      "Equipment Inspection",
    ],
    cta: "Join Membership",
    ctaStyle: "primary",
    featured: true,
  },
  {
    name: "Concierge",
    description: "Bespoke 24/7 care for the discerning owner.",
    price: 450,
    features: [
      "Bi-Weekly Service Visits",
      "All Premium Chemicals",
      "Remote Monitor Setup",
      "Emergency Call-Out Coverage",
      "Patio Pressure Cleaning",
    ],
    cta: "Contact Concierge",
    ctaStyle: "tertiary",
  },
];

function ctaClass(style: Tier["ctaStyle"]) {
  if (style === "primary")
    return "w-full bg-primary text-on-primary py-3 rounded-lg font-label-bold text-label-bold hover:bg-primary-container transition-colors";
  if (style === "tertiary")
    return "w-full bg-tertiary-container text-on-tertiary-container py-3 rounded-lg font-label-bold text-label-bold hover:opacity-90 transition-opacity";
  return "w-full border-2 border-secondary text-secondary py-3 rounded-lg font-label-bold text-label-bold hover:bg-secondary/5 transition-colors";
}

export default function PricingTiers() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile grid grid-cols-1 md:grid-cols-3 gap-8 mb-stack-lg items-stretch">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative flex flex-col h-full p-8 rounded-xl border ${
            tier.featured
              ? "glass-card bg-white border-primary/20 scale-105 z-10 shadow-2xl"
              : "glass-card border-outline-variant/20 hover:border-secondary/50 transition-all"
          }`}
          style={{ boxShadow: "0 20px 40px -15px rgba(0,50,125,0.04)" }}
        >
          {tier.featured && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full font-label-bold text-sm tracking-wide whitespace-nowrap">
              MOST POPULAR
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
              {tier.name}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {tier.description}
            </p>
          </div>

          {/* Price */}
          <div className="mb-8 flex items-baseline gap-1">
            <span className="text-[48px] font-bold text-primary leading-none">
              ${tier.price}
            </span>
            <span className="text-on-surface-variant font-label-bold text-label-bold">
              / MONTH
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-10 flex-grow">
            {tier.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-body-md">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className={ctaClass(tier.ctaStyle)}>{tier.cta}</button>
        </div>
      ))}
    </section>
  );
}

export default function EliteMembership() {
  return (
    <section
      id="memberships"
      className="py-stack-lg px-margin-mobile md:px-stack-lg max-w-container-max mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">
          The Elite Membership
        </h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          Unlocking exclusive priority and emergency support for the discerning
          homeowner.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Card 1 */}
        <div className="p-stack-md border border-outline-variant/20 rounded-xl bg-surface hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container mb-stack-sm">
            <span className="material-symbols-outlined">bolt</span>
          </div>
          <h4 className="font-label-bold text-label-bold text-primary mb-2">
            24hr Emergency Call-Out
          </h4>
          <p className="text-on-surface-variant text-sm">
            Members receive priority dispatch for filtration or pump failures,
            365 days a year.
          </p>
        </div>

        {/* Card 2 — Elite highlight */}
        <div className="p-stack-md border-2 border-tertiary/30 rounded-xl bg-surface-container-lowest shadow-md transform scale-105 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-tertiary text-on-tertiary font-label-bold text-[10px] px-3 py-1 uppercase tracking-widest">
            Elite Tier
          </div>
          <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed mb-stack-sm">
            <span className="material-symbols-outlined">star_rate</span>
          </div>
          <h4 className="font-label-bold text-label-bold text-primary mb-2">
            Seasonal Detail Buff
          </h4>
          <p className="text-on-surface-variant text-sm">
            Deep stone cleaning and tile polishing twice per year to maintain
            that &apos;new pool&apos; luster.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-stack-md border border-outline-variant/20 rounded-xl bg-surface hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container mb-stack-sm">
            <span className="material-symbols-outlined">phone_iphone</span>
          </div>
          <h4 className="font-label-bold text-label-bold text-primary mb-2">
            Digital Dashboard
          </h4>
          <p className="text-on-surface-variant text-sm">
            Track visits, photos, and chemical history via our exclusive
            members-only mobile portal.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-stack-lg text-center">
        <button className="bg-tertiary text-on-tertiary px-stack-lg py-4 rounded-lg font-label-bold text-label-bold shadow-lg hover:bg-tertiary/90 transition-all">
          Explore Membership Benefits
        </button>
      </div>
    </section>
  );
}

export default function LiveMonitoring() {
  return (
    <section className="max-w-3xl mx-auto px-margin-mobile mb-stack-lg">
      <div
        className="glass-card p-10 rounded-xl"
        style={{ boxShadow: "0 20px 40px -15px rgba(0,50,125,0.04)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline-sm text-headline-sm text-primary">
            Live Quality Monitoring
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-bold text-label-bold text-secondary text-sm">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>

        {/* Gauges */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-label-bold text-label-bold text-on-surface-variant">
                pH Level
              </span>
              <span className="font-label-bold text-label-bold text-primary">
                7.4 (Optimal)
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "74%",
                  background:
                    "linear-gradient(to right, #5ef6e6, #006a62)",
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="font-label-bold text-label-bold text-on-surface-variant">
                Chlorine Level
              </span>
              <span className="font-label-bold text-label-bold text-primary">
                3.0 ppm
              </span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "60%",
                  background:
                    "linear-gradient(to right, #5ef6e6, #006a62)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-outline-variant/30 flex flex-wrap justify-center gap-4">
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label-bold">
            ALGAECIDE APPLIED
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label-bold">
            SHOCK TREATMENT: 48H AGO
          </span>
        </div>
      </div>
    </section>
  );
}

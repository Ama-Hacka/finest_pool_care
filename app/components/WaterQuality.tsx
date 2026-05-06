export default function WaterQuality() {
  return (
    <section id="water-quality" className="bg-surface-container-low py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg">
        <div className="glass-panel p-stack-lg rounded-2xl border border-white flex flex-col md:flex-row items-center justify-between gap-stack-lg shadow-sm">
          {/* Left: copy */}
          <div className="max-w-sm">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
              Real-Time Precision
            </h3>
            <p className="text-on-surface-variant">
              Our technicians provide digital reports for every visit, tracking
              every chemical metric with lab-grade accuracy.
            </p>
          </div>

          {/* Right: gauges */}
          <div className="w-full md:w-1/2 space-y-stack-md">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-bold text-label-bold text-primary">
                  pH Levels
                </span>
                <span className="font-label-bold text-label-bold text-secondary">
                  7.4 (Perfect)
                </span>
              </div>
              <div className="h-3 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                <div className="h-full water-gradient" style={{ width: "74%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-bold text-label-bold text-primary">
                  Chlorine Balance
                </span>
                <span className="font-label-bold text-label-bold text-secondary">
                  3.0 ppm (Ideal)
                </span>
              </div>
              <div className="h-3 w-full bg-outline-variant/30 rounded-full overflow-hidden">
                <div className="h-full water-gradient" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

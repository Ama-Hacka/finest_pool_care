export default function ExcellenceGrid() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile mb-stack-lg">
      <h2 className="font-headline-md text-headline-md text-primary mb-stack-md text-center">
        Excellence in Every Visit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Large image card — spans 2 cols × 2 rows */}
        <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group min-h-[340px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0_068a-bQYvqJk2VP3yGgltV_hdrbPJ42VQax2a1hQ99tCLXAKIlLGa6M-nfXJPTIXbwkh0YeqMVAZO4cX1VPyPb23fvRbAjNHvSvR47XYGosp8C_1kpfxgI9cTSOIyzW7SmkgdanBRWgfIxI1q9bRUIeHD_0UUsRPJ0GGg7QkEF7lQgC_PDrRh0JuNg1x5Lf0dVeNH-TY0E8QcxnXMrd0XhMuJV90sreWcvE2NOjglANkxArUbddk-w2CaQtQcElEfAYcyl4rUY"
            alt="Sun-drenched luxury infinity pool in Palm Beach"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
            <div>
              <p className="text-white font-headline-sm mb-2">
                Crystalline Standard
              </p>
              <p className="text-white/80 font-body-md">
                Our signature multi-stage filtration and balancing protocol
                ensures water that is as healthy as it is clear.
              </p>
            </div>
          </div>
        </div>

        {/* Precision Chemistry */}
        <div className="bg-surface-container-low p-8 rounded-xl">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary">
              water_drop
            </span>
          </div>
          <h4 className="font-label-bold text-label-bold text-primary mb-2">
            Precision Chemistry
          </h4>
          <p className="text-on-surface-variant text-body-md">
            Scientific water balancing to protect your equipment and your skin.
          </p>
        </div>

        {/* Reliable Schedule */}
        <div className="bg-surface-container-low p-8 rounded-xl">
          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary">
              event_available
            </span>
          </div>
          <h4 className="font-label-bold text-label-bold text-primary mb-2">
            Reliable Schedule
          </h4>
          <p className="text-on-surface-variant text-body-md">
            Uniformed professionals arrive at the same time every week,
            guaranteed.
          </p>
        </div>

        {/* All Chemicals Included — dark full-width card */}
        <div className="md:col-span-2 bg-primary text-on-primary p-8 rounded-xl flex items-center justify-between gap-6">
          <div className="max-w-md">
            <h4 className="font-headline-sm text-headline-sm mb-2">
              All Chemicals Included
            </h4>
            <p className="opacity-80 font-body-md">
              No hidden fees or surprise invoices. Your monthly membership
              covers all salt, chlorine, and stabilizers needed.
            </p>
          </div>
          <span className="material-symbols-outlined text-[64px] opacity-20 shrink-0">
            science
          </span>
        </div>
      </div>
    </section>
  );
}

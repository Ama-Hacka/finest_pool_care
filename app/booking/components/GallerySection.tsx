const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJLLI1teucoP7X5taaBS__xn0s-Ja2XUQq_jEjiI_kwCqcnS0TKkmP4RCrtPQCRMNRcSNLkmn-JmVAUAaMo-2WJgpc9TFThUjkTEo3a9YuKy-NpCqfiJ38z3k3g_q6i9hnOfP_W9-enyt_MaluqLHxA7QHpchyNzb8g7xGm9U_IeGLmSbIm2laSfQpZYFxXIch0Fx1bFGokT2a6UzfOkAnKqtSkzgHcjvxn8ogo5N8FksuH4GX91Sbt6P-iz_vWn7lnxc3f-EgZlU",
    alt: "Pristine high-end negative edge swimming pool overlooking the ocean in Palm Beach",
    colClass: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQndlu-cKvZ2SC_ZH3Q5J54bxBMq28_P0CGGfX10ZHV_FUz5qoBUrvGWazkgOjlmj6fnvviZ9G8_FVWSVHaUG-SWzC0EJ1DWRgtBwJD4EKLcZ3zBfBHS5-fs-OYmPO8E6vGZlPWuHpLAp_VAedU-3R-GkRlYOC_2R69I89wKOq2oPiqukIjXgUGnPq8OKTXpB-ml8S1lJDIJ2FO2VXhIiHqWDgUbIhcHutRo60NV0alz5xpjU2FP3AkRDHMV8YxV62USvEWUiBsnI",
    alt: "Expert pool technician testing water quality with digital equipment beside a sparkling blue pool",
    colClass: "h-48 md:h-full",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMXI4Ui4nJ0t8pc9edK6if_tKqC0vYSty8mSXAo6k8oVD_cfMd8AOtkC_njw-cGDnnfaFbZZRqXHA2Tqqz0emyQ9DYd9pbhPdiDzVP9XqZYzYfF2Dj5T451xk7H7uOSRuUJPoCgoinRSekRd1h8gpB-6TiKvODnZPHi7205hql1QZrglh9bZ862QaooVoaLK7ixusm8xeBGKtRFEhdhqOWVZPQ3brE6PbKdWce0M2njjEQfO7BICu8YCixvFmbSl2FkN90uZv4d2w",
    alt: "Luxurious modern pool spa with integrated lighting and high-quality stone finishes at dusk",
    colClass: "h-48 md:h-full",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-surface-container-low py-stack-lg">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">
              Crystalline Excellence
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-xl">
              Every visit ensures your pool remains a masterpiece of clarity and
              hygiene.
            </p>
          </div>
          <a
            href="/gallery"
            className="hidden md:flex items-center gap-2 text-secondary font-label-bold text-label-bold border-b-2 border-secondary pb-1"
          >
            View Full Gallery
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {images.map(({ src, alt, colClass }) => (
            <div
              key={alt}
              className={`rounded-xl overflow-hidden shadow-lg group ${colClass}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

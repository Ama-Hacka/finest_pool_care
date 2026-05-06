import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[870px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuWWhoxykSJuzaNU8pLcrHG4XDxAtwHT_kPxTBE4KaGBtZvjyw9vzOua5MyTIduEZhP1GBC9bumgZn3eE9BsbZ9gnG3-3jOS31-1OcooJp1xSNxipdxusQOjUMYInxdwH5Bsu6ZU9Y7QJvsyxV3q8WyWv7js8RkSyBKffK20NEAlUhRCG97DUIgrlJZOzNdVJ9IwzDbRRd9E3QL6XdD9aPZxY9yPrfPw2AS8ES2ovDvjxjC8EjktaECe6yHwHQ8PHiwY8wqO7ifbk"
          alt="Crystal-clear infinity pool overlooking the turquoise Atlantic Ocean in Palm Beach at sunset"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-brightness-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-stack-lg w-full">
        <div className="max-w-2xl glass-panel p-stack-lg rounded-xl shadow-2xl border border-white/20">
          <h1 className="font-display-lg text-display-lg text-primary mb-stack-sm">
            The Art of Crystalline Living
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
            Bespoke pool maintenance for Palm Beach&apos;s most prestigious
            estates. Serenity, delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-stack-md">
            <Link
              href="/booking"
              className="bg-primary text-on-primary px-stack-lg py-4 rounded-lg font-label-bold text-label-bold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all text-center"
            >
              Book Now for Free Estimate
            </Link>
            <button className="flex items-center justify-center gap-stack-sm border-2 border-secondary text-secondary px-stack-lg py-4 rounded-lg font-label-bold text-label-bold hover:bg-secondary/5 transition-all">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Our Standard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

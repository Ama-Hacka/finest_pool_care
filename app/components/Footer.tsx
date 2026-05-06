export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-stack-lg px-margin-mobile md:px-stack-lg flex flex-col md:flex-row justify-between items-center gap-stack-md bg-surface-container-lowest border-t border-outline-variant/20"
    >
      <div className="flex flex-col gap-2">
        <div className="text-headline-sm font-headline-sm text-primary">
          Finest Pool Care
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          © 2024 Finest Pool Care Palm Beach. Professional Maintenance &amp; Serenity.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-stack-md">
        <a
          href="#"
          className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Sustainability
        </a>
        <a
          href="tel:5619857468"
          className="font-label-bold text-label-bold text-primary hover:text-secondary transition-colors"
        >
          Contact: 561-985-7468
        </a>
      </div>
    </footer>
  );
}

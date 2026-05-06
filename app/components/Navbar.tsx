"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FinestLogo from "./FinestLogo";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Memberships", href: "/memberships" },
  { label: "Water Quality", href: "/#water-quality" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/memberships") return pathname === "/memberships";
    if (href === "/booking") return pathname === "/booking";
    return pathname === "/" && href.startsWith("/#");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center px-margin-mobile md:px-stack-lg h-20 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center shrink-0">
          <FinestLogo className="h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-gutter items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={
                isActive(href)
                  ? "text-primary border-b-2 border-primary pb-1 font-label-bold text-label-bold"
                  : "text-on-surface-variant font-label-bold text-label-bold hover:text-secondary transition-colors duration-300"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          className="bg-primary text-on-primary px-stack-md py-stack-sm rounded-lg font-label-bold text-label-bold active:opacity-80 active:scale-95 transition-all shadow-sm"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Finest Pool Care | Palm Beach Pool Maintenance",
  description:
    "Bespoke pool maintenance for Palm Beach's most prestigious estates. Serenity, delivered weekly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSerif.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased">{children}</body>
    </html>
  );
}

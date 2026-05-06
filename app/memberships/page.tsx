import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingTiers from "./components/PricingTiers";
import ExcellenceGrid from "./components/ExcellenceGrid";
import LiveMonitoring from "./components/LiveMonitoring";

export const metadata: Metadata = {
  title: "Memberships | Finest Pool Care",
  description:
    "Join our elite Palm Beach maintenance circle. Crystalline waters, effortless ownership.",
};

export default function MembershipsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-stack-lg">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-margin-mobile text-center mb-stack-lg">
          <span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-4 block">
            Exclusive Membership
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            Crystalline Waters, Effortless Ownership
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Join our elite Palm Beach maintenance circle. We handle the
            chemistry and clarity, you enjoy the serenity of your private oasis.
          </p>
        </section>

        <PricingTiers />
        <ExcellenceGrid />
        <LiveMonitoring />
      </main>
      <Footer />
    </>
  );
}

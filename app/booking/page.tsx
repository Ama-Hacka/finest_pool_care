import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCalendar from "./components/BookingCalendar";
import EstimateForm from "./components/EstimateForm";
import TrustBanner from "./components/TrustBanner";
import GallerySection from "./components/GallerySection";

export const metadata: Metadata = {
  title: "Book a Service | Finest Pool Care Palm Beach",
  description:
    "Book a professional pool service or request a custom estimate for your Palm Beach residence.",
};

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[409px] md:h-[512px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI69EloE7_qZR2-hCDaTsYCUMo6CGADK5n61o9YFvEL_yUVsoOp7YhKn63CY54Y87PceUvBfu624LNAsFptvp2mjjuODNwuoyRsTD2Dmcix0BUVtgJqOAMCDwR_6z3_6CQRyyaRt6O7k4veBP1IcLxSeOSwvzxWgaa1wKCTAVMb5hIeawgFbroJRP3JV6LwcaEoOcGXwV2d2iFZguGTx4rqV4M5KWLwLMvzsHH9OkBa0COczG4PLUgC_GH69nTRlcLyigqyDFBTs4"
              alt="Serene luxury swimming pool in Palm Beach during golden hour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />
          </div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-stack-lg text-center">
            <h1 className="font-display-lg text-display-lg text-primary mb-4">
              Reserve Your Serenity
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Experience the gold standard of pool maintenance. Book a
              professional service or request a custom estimate for your Palm
              Beach residence.
            </p>
          </div>
        </section>

        {/* Booking interface */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg pb-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <BookingCalendar />
            <EstimateForm />
          </div>
          <TrustBanner />
        </section>

        <GallerySection />
      </main>
      <Footer />
    </>
  );
}

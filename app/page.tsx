import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeeklyService from "./components/WeeklyService";
import WaterQuality from "./components/WaterQuality";
import EliteMembership from "./components/EliteMembership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <WeeklyService />
        <WaterQuality />
        <EliteMembership />
      </main>
      <Footer />
    </>
  );
}

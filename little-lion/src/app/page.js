import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import TheProcess from "@/components/TheProcess";
import Clients from "@/components/Clients";
import "@/app/globals.css";
import Samples from "@/components/Samples";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <TheProcess />
      <Samples />
      <Clients />
    </main>
  );
}
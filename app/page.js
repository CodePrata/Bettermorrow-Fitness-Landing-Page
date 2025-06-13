import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Coaches from "@/components/Coaches";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      <HeroSection />

      <section id="services">
        <Services />
      </section>

      <section id="coaches">
        <Coaches />
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

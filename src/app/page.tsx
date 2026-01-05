import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Achievements />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
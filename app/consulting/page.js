import About from "@/components/Consulting/about";
import Contact from "@/components/Consulting/contact";
import ExceptionalValue from "@/components/Consulting/exceptionalValue";
import Hero from "@/components/Consulting/hero";
import Offerings from "@/components/Consulting/offerings";
import OfferingsList from "@/components/Consulting/offeringsList";

export default function Consulting() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Offerings />
        <OfferingsList />
        <ExceptionalValue />
        <Contact />
      </div>
    </main>
  );
}

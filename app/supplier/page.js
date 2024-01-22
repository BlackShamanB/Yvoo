import Support from "@/components/Supplier/support";
import Hero from "@/components/Supplier/hero";
import Potential from "@/components/Supplier/potential";
import Security from "@/components/Supplier/security";
import Join from "@/components/Supplier/join";

export default function Supplier() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <Hero />
        <Potential />
        <Security />
        <Support />
        <Join />
      </div>
    </main>
  );
}

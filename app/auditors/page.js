import Hero from "@/components/Auditors/hero";
import JobDescription from "@/components/Auditors/jobDescription";
import Why from "@/components/Auditors/why";

export default function ForAuditors() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <Hero />
        <Why />
        <JobDescription />
      </div>
    </main>
  );
}

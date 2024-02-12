import GeneralInfo from "@/components/About/generalInfo";
import Hero from "@/components/About/hero";
import Team from "@/components/About/team";
// import TeamMembers from "@/components/About/teamMembers";

export default function Solutions() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <Hero />
        <GeneralInfo />
        <Team />
        {/* <TeamMembers /> */}
      </div>
    </main>
  );
}

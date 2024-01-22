import GeneralInfo from "@/components/About/generalInfo";
import Hero from "@/components/About/hero";
import Team from "@/components/About/team";
import TeamMembers from "@/components/About/teamMembers";

export default function Solutions() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <div className="bg-[#414141] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[36px]">
          <h1 className="uppercase font-machina font-[800] text-[30px] md:text-[40px] 2xl:text-[60px] leading-[30px] md:leading-[40px] 2xl:leading-[60px]">
            About Us
          </h1>
        </div>
        <Hero />
        <GeneralInfo />
        <Team />
        <TeamMembers />
      </div>
    </main>
  );
}

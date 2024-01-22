import Image from "next/image";
import Link from "next/link";
import React from "react";
//bg-bgFooter bg-no-repeat bg-contain
function Auditor() {
  return (
    <div
      className="relative grid w-full w-full bg-[#131D2A]" >
      <Image
        src="/icons/arch-2.png"
        width={316}
        height={275}
        alt="triangle"
        className="hidden md:block absolute -top-[193px] right-[8%] mouse-parallax 3xl:max-w-[316px] 2xl:max-w-[180px] md:max-w-[280px] max-w-[127px]" priority
      />
      <Image
        src="/icons/squares-3.png"
        width={145}
        height={140}
        alt="triangle"
        className="hidden md:block absolute 2xl:top-[151px] md:top-[328px] right-[0%] mouse-parallax" priority
      />
      <Image
        src="/icons/message-icon.png"
        width={280}
        height={204}
        alt="triangle"
        className="hidden md:block absolute 2xl:top-[643px] top-[1037px] right-[17%] mouse-parallax" priority
      />
      <Image
        src="/images/bg-footer.png"
        width={905}
        height={812}
        alt="yvoo-sales"
        style={{ objectFit: "cover", mixBlendMode: "color-dodge" }}
        className="hidden md:block absolute ml-[-50px] mt-[203px] h-[812px] z-1" priority
      />
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]" priority data-scroll data-scroll-speed="0.1">
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full h-auto px-[41px]">
          <div className="w-full bg-right bg-no-repeat">
            <Image
              src="/images/auditorBg.webp"
              width={592}
              height={395}
              alt="yvoo-sales"
              className="hidden md:block relative 2xl:ml-[auto] md:ml-[0] 2xl:mt-[126px] md:mt-[120px] 2xl:w-[592px] md:w-[476px]"
            />
            <Image
              src="/icons/greenTriangle-3.png"
              width={116}
              height={139}
              alt="triangle"
              className="hidden md:block absolute 2xl:top-[454px] md:top-[50px] top-[63px] 2xl:left-[42%] left-[17%] mouse-parallax 2xl:max-w-[116px] md:max-w-[102px] max-w-[42px]"
            />
            <div className="customxs:hidden absolute inset-0 bg-black opacity-40"></div>
          </div>
          <div className="3xl:pl-[84px] 2xl:pl-[54px] w-full flex flex-col 2xl:pt-[126px] pt-[80px] pb-[53px] customxs:pb-[75px] md:pt-none md:pb-none">
            <h1 className="mb-[24px] text-[#06D7F9] max-w-[182px] customxs:max-w-none font-machina font-[800] text-[30px] 2xl:text-[50px] md:text-[40px] leading-[30px] md:leading-[54px]">
              Join the Team of
              <br /> YVOO auditors
            </h1>
            <div className="max-w-[584px] flex flex-col gap-3 font-[400] leading-[20px] text-base">
              <p>
                Looking for a flexible and rewarding career opportunity in
                supplier readiness checks? YVOO is seeking motivated individuals
                to join our team of freelance agents. Conduct independent checks
                and play a crucial role in ensuring the safety and integrity of
                supply chains.
              </p>
              <p className="font-[700]">Why Become a YVOO Agent?</p>
              <ul className="pl-[20px] list-disc list-outside">
                <li>Set your own hours and work on your terms</li>
                <li>Get paid fast with transparent terms</li>
                <li>
                  No additional professional skills or qualifications required.
                  Professional auditors preferred
                </li>
                <li>Experience best practices within the industry</li>
                <li>
                  Work with top industry names on projects that align with your
                  goals and interests
                </li>
              </ul>
              <p>
                Take the first step towards revolutionizing supplier readiness
                checks with YVOO. Apply now to become an agent and start earning
                money in a flexible and rewarding way.
              </p>
            </div>
            <Link href={"/auditors"}>
              <button className="filled_btn_blue 2xl:mt-[48px] md:mt-[36px] mt-[24px]">
                Apply now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auditor;

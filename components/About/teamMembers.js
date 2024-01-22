"use client";

import Image from "next/image";

function TeamMembers() {
  const linkedInUrlDino = "https://www.linkedin.com/in/dinokurtagic";
  const linkedInUrlIvo = "https://www.linkedin.com/in/ivo-brandic-656b14133";

  return (
    <div className="relative flex flex-col gap-[22px] md:gap-[56px] 2xl:gap-[90px] w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[60px] md:py-[66px] 2xl:py-[84px] pb-[92px] 2xl:pb-[182px] bg-white">
      <Image
        src="/icons/yvoo-sales-icon.svg"
        width={124}
        height={137}
        alt="experience"
        className="hidden md:block absolute -top-[60px] right-[28%]"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        <div className="relative w-full max-w-[308px] h-[359px]">
          <Image
            src="/images/member-ivo.png"
            alt="ivo-mobile"
            fill
            className="object-contain hover:scale-[1.02]"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-black text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-[14px]">
            Ivo Brandic
          </h1>
          <div className="flex-between mb-[14px]">
            <h2 className="text-black text-[18px] leading-[18px] font-[800]">
              CEO
            </h2>
            <Image
              src="/icons/linkedIn-icon.svg"
              alt="linkedIn-mobile"
              width="32"
              height="32"
              className="hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open(linkedInUrlIvo, "_blank");
              }}
            />
          </div>
          <div className="[&>p]:text-black font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px]">
            <p>
              Ivo is the driving force behind YVOO, bringing over 25 years of
              diverse global procurement experience to the company. He has held
              leadership positions at renowned global brands such as Sanyo,
              Bosch, Siemens, and Linde. He is an expert in managing procurement
              operations globally, having led teams in countries like China,
              Germany, Russia, Hungary, and the USA. But what truly sets Ivo
              apart is his ability to set up and run successful procurement
              centers from scratch, having done so twice, first in China and
              then in Russia at Linde. His procurement center in Russia alone
              was responsible for over EUR 600 million in procurement and
              managing a network of over 1,600 suppliers in CIS while achieving
              exceptional delivery performance.
            </p>
            <p>
              Ivo holds a Master's degree in Industrial Engineering and
              Production Management and is a certified Six Sigma Black Belt. In
              addition to leading the company's business growth and corporate
              development, Ivo serves as a mastermind behind YVOO's mission to
              revolutionize the way procurement teams source and audit
              suppliers.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        <div className="relative w-full max-w-[308px] h-[359px]">
          <Image
            src="/images/member-dino.png"
            alt="dino-mobile"
            fill
            className="object-contain	cover:scale-[1.02]"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-black text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-[14px]">
            Dino Kurtagic
          </h1>
          <div className="flex-between mb-[14px]">
            <h2 className="text-black text-[18px] leading-[18px] font-[800]">
              CTO
            </h2>
            <Image
              src="/icons/linkedIn-icon.svg"
              alt="linkedIn-mobile"
              width="32"
              height="32"
              className="hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open(linkedInUrlDino, "_blank");
              }}
            />
          </div>
          <div className="[&>p]:text-black font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px]">
            <p>
              Dino is a highly accomplished technology leader with a successful
              background in data science product development. With over a decade
              of experience as a Software Developer, QA Engineer, and Data and
              Machine Learning Scientist, Dino brings a wealth of knowledge to
              his current role. He has also gained deep expertise in
              cutting-edge fields of robotics, robotic vision, and other areas
              of computer vision and AI as an associate research assistant at
              J.J. Strossmayer University Osijek. He is a natural problem solver
              and research enthusiast, with a track record of delivering over 50
              successful projects for both mid-size and enterprise companies.
            </p>
            <p>
              Dino is a Ph.D. candidate in Computer Engineering and
              Communications from J.J. Strossmayer University of Osijek. As CTO
              of YVOO, Dino leads the company's technology vision and data
              science team, leveraging his deep expertise in Artificial
              Intelligence and Big Data to transform the way organizations
              discover and verify new vendors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;

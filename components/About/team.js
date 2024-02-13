"use client";
import Image from "next/image";
function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full 3xl:pb-[120px] 2xl:pb-[79px] pb-[759px] bg-[#FFF] overflow-hidden">
      <div className="relative pl-[41px] 2xl:pl-[162px] 3xl:pl-[202px] pr-[41px] 2xl:pr-[55px] 3xl:pr-[84px] py-[98px] 2xl:py-[252px] pb-[0] w-full bg-[#FFFFFF]">
        <Image
          src="/icons/about_rectangle.svg"
          width={116}
          height={139}
          alt="triangle"
          className="absolute 3xl:top-[4.4%] 2xl:top-[4.6%] top-[2.7%] 3xl:left-[58.6%] 2xl:left-[66.5%] left-[70%] z-[1] 2xl:max-w-[116px] max-w-[67px] max-h-[276px]"
          data-scroll
          data-scroll-speed="0.3"
        />
        <h1 className="text-black font-machina font-[800] uppercase text-[30px] 2xl:text-[50px] leading-[34px] 2xl:leading-[54px] mb-[63px] 2xl:mb-[104px] 3xl:mb-[113px]"
          data-scroll
          data-scroll-speed="0.15">
          Our <br />
          Executive <br />
          Team
        </h1>{" "}
        <div className="relative grid grid-cols-1 md:grid-cols-1 3xl:gap-[29px] 2xl:gap-[35px] gap-[24px]"
          data-scroll
          data-scroll-speed="0.2">
          <div className="absolute 2xl:border-[6px] border-[4px] border-mint w-[264px] 2xl:w-[403px] 3xl:w-[563px] h-[256px] 2xl:h-[391px] 3xl:h-[546px] z-[1] left-[14px] 2xl:left-[30px] top-[-31px] 2xl:top-[-38px] 3xl:top-[-47px]"></div>
          <div className="relative w-full max-w-[205px] 2xl:max-w-[318px] 3xl:max-w-[438px] h-[240px] 2xl:h-[402px] 3xl:h-[554px]">
            <Image
              src="/images/member-ivo.png"
              alt="ivo-mobile"
              fill
              className="object-contain hover:scale-[1.02]"
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-black text-[26px] 2xl:text-[32px] leading-[30px] 2xl:leading-[32px] font-[700] 2xl:mb-[16px] mb-[9px]">
              Ivo Brandic
            </h1>
            <div className="flex-between 2xl:mb-[48px] mb-[20px]">
              <h2 className="text-mint 2xl:text-[24px] text-[16px] 2xl:leading-[30px] leading-[20px] font-[400]">
                Chief Executive Officer
              </h2>
              <Image
                src="/icons/linkedIn-icon.svg"
                alt="linkedIn-mobile"
                width="36"
                height="36"
                className="relative hover:scale-[1.04] cursor-pointer 2xl:top-[-7px] top-[-3px] 2xl:max-w-[36px] max-w-[26px] 2xl:max-h-[36px] max-h-[26px]"
                onClick={() => {
                  window.open(linkedInUrlIvo, "_blank");
                }}
              />
            </div>
            <div className="[&>p]:text-black font-[400] 2xl:text-[16px] text-[14px] leading-[20px] flex flex-col gap-[20px] flex-1 basis-[500px]">
              <p>
                Ivo is the driving force behind YVOO, bringing over 25 years of
                diverse global procurement experience to the company. He has
                held leadership positions at renowned global brands such as
                Sanyo, Bosch, Siemens, and Linde. He is an expert in managing
                procurement operations globally, having led teams in countries
                like China, Germany, Russia, Hungary, and the USA. But what
                truly sets Ivo apart is his ability to set up and run successful
                procurement centers from scratch, having done so twice, first in
                China and then in Russia at Linde. His procurement center in
                Russia alone was responsible for over EUR 600 million in
                procurement and managing a network of over 1,600 suppliers in
                CIS while achieving exceptional delivery performance.
              </p>
              <p>
                Ivo holds a Master's degree in Industrial Engineering and
                Production Management and is a certified Six Sigma Black Belt.
                In addition to leading the company's business growth and
                corporate development, Ivo serves as a mastermind behind YVOO's
                mission to revolutionize the way procurement teams source and
                audit suppliers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:pl-[20px] 3xl:pl-[12px] py-[61px] 2xl:py-[180px] w-full bg-[#FFFFFF]">
        <div className="relative bg-[#06D7F9] px-[41px] 2xl:px-[43px] 3xl:px-[72px] py-[40px] 2xl:py-[80px] 3xl:py-[79px] max-h-[430px] 2xl:max-h-[735px] 3xl:max-h-[847px]">
          <Image
            src="/icons/about_line.svg"
            width={426}
            height={196}
            alt="triangle"
            className="absolute 3xl:top-[20%] 2xl:top-[28%] top-[19%] 2xl:right-[0%] right-[0%] z-[1] 3xl:max-w-[426px] 2xl:max-w-[346px] max-w-[221px] max-h-[196px]"
            data-scroll
            data-scroll-speed="0.1"
          />
          <div className="flex flex-col gap-4"
          data-scroll
          data-scroll-speed="-0.15">
            <h1 className="max-w-[560px] font-[700] 2xl:text-[24px] text-[16px] 2xl:leading-[30px] leading-[20px] text-black 2xl:mb-[270px] mb-[104px]">
              Expertise Meets Innovation: Combining Procurement Know-How with
              Digital Transformation and AI
            </h1>
            <div className="grid grid-cols-1 2xl:grid-cols-1 2xl:gap-[50px] gap-[24px]">
              <div className="relative w-full max-w-[205px] 2xl:max-w-[318px] 3xl:max-w-[438px] h-[260px] 2xl:h-[402px] 3xl:h-[554px] bg-[#FFF]">
                <Image
                  src="/images/member-dino.png"
                  alt="dino-mobile"
                  fill
                  className="object-contain	cover:scale-[1.02]"
                />
              </div>
              <div className="col-span-2">
                <h1 className="text-black text-[26px] 2xl:text-[32px] leading-[30px] 2xl:leading-[32px] font-[700] 2xl:mb-[16px] mb-[9px]">
                  Dino Kurtagic
                </h1>
                <div className="flex-between 2xl:mb-[44px] mb-[21px] 3xl:pr-[213px] 2xl:pr-[119px]">
                  <h2 className="text-[#06D7F9] 2xl:text-[24px] text-[16px] 2xl:leading-[30px] leading-[20px] font-[400]">
                    Chief Technical Officer
                  </h2>
                  <Image
                    src="/icons/linkedIn-icon.svg"
                    alt="linkedIn-mobile"
                    width="36"
                    height="36"
                    className="relative hover:scale-[1.04] cursor-pointer 3xl:top-[-2px] 2xl:top-[-4px] top-[-3px] 2xl:max-w-[36px] max-w-[26px] 2xl:max-h-[36px] max-h-[26px]"
                    onClick={() => {
                      window.open(linkedInUrlDino, "_blank");
                    }}
                  />
                </div>
                <div className="[&>p]:text-black font-[400] 2xl:text-[16px] text-[14px] leading-[20px] flex flex-col gap-[20px] flex-1 3xl:pr-[135px] 2xl:pr-[120px]">
                  <p>
                    Dino is a highly accomplished technology leader with a
                    successful background in data science product development.
                    With over a decade of experience as a Software Developer, QA
                    Engineer, and Data and Machine Learning Scientist, Dino
                    brings a wealth of knowledge to his current role. He has
                    also gained deep expertise in cutting-edge fields of
                    robotics, robotic vision, and other areas of computer vision
                    and AI as an associate research assistant at J.J.
                    Strossmayer University Osijek. He is a natural problem
                    solver and research enthusiast, with a track record of
                    delivering over 50 successful projects for both mid-size and
                    enterprise companies.
                  </p>
                  <p>
                    Dino is a Ph.D. candidate in Computer Engineering and
                    Communications from J.J. Strossmayer University of Osijek.
                    As CTO of YVOO, Dino leads the company's technology vision
                    and data science team, leveraging his deep expertise in
                    Artificial Intelligence and Big Data to transform the way
                    organizations discover and verify new vendors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

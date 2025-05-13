import Image from "next/image";
function Hero() {
  return (
    <div className="relative w-full md:px-[20px] px-[41px] customsm:px-[50px] md:h-[820px] md:height-[unset] height-[874px] md:bg-solutionBgMd bg-solutionBG bg-no-repeat md:bg-contain bg-[size:100%] md:bg-[position:0_0] bg-[position:0_0%] flex justify-center md:pt-[120px] pt-[82px] xl:pb-0 md:max-h-[1008px]">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full mb-[120px] md:mb-[254px]">
        <h1
          className="3xl:max-w-[726px] 2xl:max-w-[530px] font-inter font-[700] md:text-[60px] text-[30px] md:leading-[68px] leading-[34px] flex-1 2xl:mb-[0] md:mb-[26px] mb-[120px]"
          data-scroll
          data-scroll-speed="0.15"
        >
          <div className="text-primary mb-[12px] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
            Solutions
          </div>
          <div className="md:mb-[42px] mb-[32px]">
            Supercharge your sourcing process with YVOO & Matchory
          </div>
          <Image
            src={"/icons/Matchory.svg"}
            alt="back arrow"
            width="200"
            height="33"
            className="md:max-w-[unset] max-w-[106px]"
          />
        </h1>
        <div
          className="md:pt-[42px] 3xl:pl-[85px] 2xl:pl-[55px] font-[400] text-[14px] md:text-[16px] leading-[20px] flex flex-col 2xl:gap-[31px] md:gap-[20px] flex-1 basis-[500px]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <p className="md:mb-[0] mb-[27px] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
            Stay ahead of the game and overcome the challenges of today’s
            procurement landscape. Inflation and supply chain disruptions demand
            a data-driven approach to ensure resilience and mitigate risks.
            Traditional sourcing methods no longer suffice, leaving companies
            vulnerable to <span className="font-[700]">supplier quality issues, compliance risks, and
            sustainability concerns</span>.
          </p>
          <p className="md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
            Enter <span className="font-[700]">Matchory & YVOO</span>—a strategic partnership that revolutionizes <span className="font-[700]">AI-powered supplier discovery</span>. By integrating <span className="font-[700]">Matchory’s global
            AI-driven supplier search</span> with <span className="font-[700]">YVOO’s ScanPro+</span>, we empower you to
            identify the best suppliers faster, enhance compliance, and optimize
            sourcing strategies with factual data insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

function SimpleSteps({ handleModal }) {
  return (
    <div className="w-full px-[22px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] 2xl:pt-[230px] pt-[194px] 2xl:pb-[220px] pb-[120px] bg-solutionThreeBg bg-no-repeat md:bg-[position:calc(100%-356px-284px)_-139px] bg-[position:156px_-83px] md:bg-[size:auto] bg-[size:163px]">
      <h1
        className="md:px-[0] px-[19px] mb-[40px] md:mb-[60px] text-[#06D7F9] font-inter font-[700] text-[26px] md:text-[40px] leading-[34px] md:leading-[48px] max-w-full"
        data-scroll
        data-scroll-speed="0.1"
      >
        Two Simple <span className="text-white">Steps&nbsp;to Success:</span>
      </h1>
      <div
        className="grid grid-cols-1 2xl:grid-cols-2 3xl:gap-[170px] 2xl:gap-[100px] mb-[80px] md:mb-[118px] md:px-[0] px-[19px]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <div className="flex-1 flex md:flex-row flex-col 2xl:gap-[29px] md:gap-[17px] gap-[12px] basis-[320px] md:mb-[0] mb-[40px]">
          <h1 className="text-primary font-inter font-[800] uppercase text-[50px] leading-[58px]">
            1
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:max-w-[unset] 2xl:max-w-[619px]">
            <span className="font-[700] text-blue">
              Matchory’s AI-powered platform
            </span>{" "}
            simplifies supplier sourcing with an{" "}
            <span className="font-[700] text-blue">
              intelligent chat-guided process
            </span>
            . Define your sourcing requirements through an interactive AI-driven
            chat, which instantly analyzes your needs and scans its{" "}
            <span className="font-[700] text-blue">
              structured global database
            </span>{" "}
            to generate a{" "}
            <span className="font-[700] text-blue">
              curated list of the best-matching suppliers
            </span>
            . <br />
            Use advanced analytics to compare, benchmark, and filter suppliers
            based on{" "}
            <span className="font-[700] text-blue">
              certifications, compliance, and industry-specific criteria
            </span>
            —all in seconds.
          </p>
        </div>
        <div className="flex-1 flex md:flex-row flex-col 2xl:gap-[22px] md:gap-[12px] gap-[12px] basis-[320px]">
          <h1 className="text-primary font-inter font-[800] uppercase text-[50px] leading-[58px]">
            2
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:max-w-[unset] 2xl:max-w-[619px]">
            With <span className="font-[700] text-blue">Matchory</span>, finding
            and qualifying high-quality suppliers has never been easier. Book a
            demo today and experience{" "}
            <span className="font-[700] text-blue">
              AI-driven supplier discovery
            </span>{" "}
            that enhances supply chain resilience, accelerates sourcing, and
            ensures a{" "}
            <span className="font-[700] text-blue">
              flexible, risk-free supplier base
            </span>
            .
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center flex-wrap md:gap-[42px] gap-[32px] text-center">
        <h2
          className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[28px] md:leading-[24px] leading-[20px] md:px-[0] px-[19px]"
          data-scroll
          data-scroll-speed="0.12"
        >
          Don't miss out on the future of supplier sourcing.
        </h2>
        <button
          className="rounded-[30px] blue_btn btn_animated_blue !max-w-[403px] md:ml-[-32px] md:!p-[18px_32px] !p-[14px_18px] !h-[auto] !w-[max-content]"
          onClick={handleModal}
          data-scroll
          data-scroll-speed="0.15"
        >
          book a demo & sign up at Searchpro+
        </button>
      </div>
    </div>
  );
}

export default SimpleSteps;

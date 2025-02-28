function SimpleSteps({ handleModal }) {
  return (
    <div className="w-full px-[22px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[98px] md:py-[95px] 2xl:py-[92px] 3xl:py-[100px]">
      <h1
        className="md:px-[0] px-[19px] mb-[40px] md:mb-[62px] 2xl:mb-[42px] text-[#06D7F9] font-inter font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] max-w-full sm:max-w-[600px] md:max-w-[423px] 2xl:max-w-[529px]"
        data-scroll
        data-scroll-speed="0.1"
      >
        Two Simple Steps&nbsp;to Success:
      </h1>
      <div
        className="grid grid-cols-1 2xl:grid-cols-2 3xl:gap-[162px] 2xl:gap-[100px] mb-[117px] md:mb-[157px] 2xl:mb-[78px] 3xl:mb-[118px] md:px-[0] px-[19px]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <div className="flex-1 flex 2xl:gap-6 md:gap-[17px] gap-[12px] basis-[320px]">
          <h1 className="text-primary font-inter font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px]">
            1
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] mb-6 md:max-w-[unset] 2xl:max-w-[619px] 2xl:pt-[0] pt-[5px]">
            YVOO SearchPro+'s user-friendly interface makes supplier sourcing a
            breeze. Begin by interacting with our AI-powered chatbot, which will
            guide you through articulating your requirements. In a matter of
            seconds, it will present you with a comprehensive list of potential
            suppliers. Then, leverage our advanced analysis tools to compare and
            benchmark supplier data, simplifying your evaluation process.
          </p>
        </div>
        <div className="flex-1 flex 2xl:gap-6 md:gap-[12px] gap-[8px] basis-[320px]">
          <h1 className="text-primary font-inter font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[50px]">
            2
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] mb-6 md:max-w-[unset] 2xl:max-w-[619px] 2xl:pt-[0] pt-[5px]">
            With YVOO SearchPro+, finding quality suppliers has never been
            easier. Book a demo today and unlock the power of our AI-driven
            platform. Enhance your supply chain resilience, drive innovation,
            and maintain a flexible supply base effortlessly.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center flex-wrap 2xl:gap-[42px] md:gap-[28px] gap-[20px] text-center">
        <h2
          className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[28px] md:leading-[24px] leading-[20px] md:px-[0] px-[19px]"
          data-scroll
          data-scroll-speed="0.12"
        >
          Don't miss out on the future of supplier sourcing.
        </h2>
        <button
          className="blue_btn btn_animated_blue !max-w-[403px] md:ml-[-32px]"
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

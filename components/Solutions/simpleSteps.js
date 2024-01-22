function SimpleSteps({ handleModal }) {
  return (
    <div className="w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[106px] md:py-[66px] 2xl:py-[100px]">
      <h1 className="mb-[30px] md:mb-[45px] font-machina font-[800] uppercase text-[30px] 2xl:text-[40px] leading-[30px] 2xl:leading-[40px] max-w-full sm:max-w-[600px] md:max-w-[308px] 2xl:max-w-[460px]">
        Two Simple Steps to Success:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-[30px] md:mb-[77px]">
        <div className="flex-1 flex gap-6 basis-[320px]">
          <h1 className="text-primary font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            1
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6 md:max-w-[476px] 2xl:max-w-[678px]">
            YVOO SearchPro+'s user-friendly interface makes supplier sourcing a
            breeze. Begin by interacting with our AI-powered chatbot, which will
            guide you through articulating your requirements. In a matter of
            seconds, it will present you with a comprehensive list of potential
            suppliers. Then, leverage our advanced analysis tools to compare and
            benchmark supplier data, simplifying your evaluation process.
          </p>
        </div>
        <div className="flex-1 flex gap-6 basis-[320px]">
          <h1 className="text-primary font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            2
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6 md:max-w-[476px] 2xl:max-w-[678px]">
            With YVOO SearchPro+, finding quality suppliers has never been
            easier. Book a demo today and unlock the power of our AI-driven
            platform. Enhance your supply chain resilience, drive innovation,
            and maintain a flexible supply base effortlessly.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-[48px]">
        <h2 className="font-[700] text-[24px] leading-[28px]">
          Don't miss out on the future of supplier sourcing.
        </h2>
        <button
          className="filled_btn_primary !w-fit !max-w-none !text-black"
          onClick={handleModal}
        >
          book a demo & sign up at Searchpro+
        </button>
      </div>
    </div>
  );
}

export default SimpleSteps;

function Results({ handleModal }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[40px] md:py-[79px] 2xl:py-[79px] w-full bg-white">
        <h1 className="text-black font-machina font-[800] uppercase text-[30px] 2xl:text-[40px] leading-[30px] 2xl:leading-[40px] max-w-full sm:max-w-[600px] md:max-w-[308px] 2xl:max-w-[650px]">
          Results that speak for themselves
        </h1>
      </div>
      <div className="px-[20px] customxs:px-[50px] w-full bg-[#06D7F9]">
        <div className="md:ml-[66px] 2xl:ml-[168px] my-[70px] md:my-[79px] max-w-[665px] md:max-w-[444px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Don't settle for outdated practices. Embrace the future of sourcing
            with YVOO SourcerPro+
          </h1>
          <p className="text-black font-[400] text-[16px] leading-[16px]">
            Book a demo now and unlock the full potential of your procurement
            process.
          </p>
          <button className="filled_btn_white mt-[16px]" onClick={handleModal}>
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;

import Image from "next/image";
function OfferingsList() {
  return (
    <div className="relative w-full px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[100px] md:py-[120px] 2xl:py-[49px] pb-[140px] md:pb-[180px] 2xl:pb-[271px] 3xl:pb-[320px] bg-black overflow-hidden">
      <Image
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="triangle"
        className="absolute 3xl:top-[50%] 2xl:top-[46%] md:top-[74%] top-[82%] 3xl:right-[-5.5%] 2xl:right-[-15%] md:right-[0%] right-[0%] 2xl:max-w-[unset] md:max-w-[295px] max-w-[175px] mouse-parallax z-[1]"
        data-scroll
        data-scroll-speed="0.15"
      />
      <div className="grid grid-cols-1 customxs:grid-cols-2 md2:grid-cols-4 3xl:gap-[52px] 2xl:gap-[28px] md:gap-[30px] md:gap-y-[60px] gap-[30px]">
        <div
          className="w-full flex flex-col md:gap-[24px] gap-[16px]"
          data-scroll
          data-scroll-speed="0.13"
        >
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-white 3xl:max-w-[340px] 2xl:max-w-[256px] md:max-w-[284px] 3xl:max-w-[278px]">
            Procurement strategy
            <br /> development:
          </h1>
          <p className="text-white leading-[20px] md:text-[16px] text-[14px] font-[400]">
            We work closely with our clients to develop comprehensive
            procurement strategies that align with their business goals and
            objectives.
          </p>
        </div>
        <div
          className="w-full flex flex-col 3xl:gap-[24px] 2xl:gap-[54px] md:gap-[24px] gap-[16px]"
          data-scroll
          data-scroll-speed="0.14"
        >
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-white 3xl:max-w-[340px] 2xl:max-w-[256px] md:max-w-[284px] 3xl:max-w-[278px]">
            Supplier
            <br /> management:
          </h1>
          <p className="text-white leading-[20px] md:text-[16px] text-[14px] font-[400]">
            We help our clients optimize their supplier relationships,
            identifying opportunities to reduce costs, improve quality, and
            enhance collaboration.
          </p>
        </div>
        <div
          className="w-full flex flex-col 3xl:gap-[24px] 2xl:gap-[54px] md:gap-[24px] gap-[16px]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-white 3xl:max-w-[340px] 2xl:max-w-[256px] md:max-w-[284px] 3xl:max-w-[278px]">
            Procurement
            <br /> technology:
          </h1>
          <p className="text-white leading-[20px] md:text-[16px] text-[14px] font-[400]">
            We assist our clients in selecting and implementing procurement
            technology solutions that drive efficiency and cost savings
          </p>
        </div>
        <div
          className="w-full flex flex-col md:gap-[24px] gap-[16px] md:flex hidden"
          data-scroll
          data-scroll-speed="0.11"
        >
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-white 3xl:max-w-[340px] 2xl:max-w-[256px] md:max-w-[284px] 3xl:max-w-[278px]">
            Procurement <br className="3xl:hidden 2xl:block hidden" /> process
            <br /> improvement:
          </h1>
          <p className="text-white leading-[20px] md:text-[16px] text-[14px] font-[400]">
            We help our clients streamline their procurement processes,
            identifying areas for improvement and implementing best practices to
            optimize efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferingsList;

import Image from "next/image";

function Info() {
  return (
    <div className="relative grid grid-cols-1 2xl:grid-rows-2 2xl:grid-cols-2 w-full gap-x-[170px] 2xl:gap-x-[170px] 2xl:gap-y-[80px] gap-y-[30px] px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] md:pb-[140px] pb-[100px] md:pt-[120px] 2xl:pt-[121px] 3xl:pt-[120px] bg-[#F6F6F6]">
      {/* <Image
        src="/icons/search-pro-icon.svg"
        width={127}
        height={125}
        alt="search-pro"
        className="hidden md:block absolute -top-[40px] right-[16%]"
      /> */}
      <div
        className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Tailor-Made Recommendations:
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:pr-[0] pr-[10px]">
          No more sifting through irrelevant choices. <span className="font-[700]">Matchory</span> delivers <span className="font-[700]">AI-curated supplier lists</span>, ensuring you connect with the <span className="font-[700]">best-fit</span> {" "}
          suppliers instantly. <span className="font-[700]">Save time and effort</span> with smart, data-driven
          selection.
        </p>
      </div>
      <div
        className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Boost Efficiency and Save Time:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          <span className="font-[700]">Matchory + YVOO</span> streamline <span className="font-[700]">supplier discovery and qualification</span>,
          eliminating manual work. <span className="font-[700]">Reduce sourcing time from months to days</span>, so
          your team can focus on strategic priorities.
        </p>
      </div>
      <div
        className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Make Informed Decisions:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          <span className="font-[700]">Matchory’s AI-powered insights + YVOO’s supplier verification</span> provide
          a <span className="font-[700]">comprehensive evaluation framework</span>. Access <span className="font-[700]">detailed supplier
          scorecards</span>, ensuring <span className="font-[700]">data-driven procurement decisions</span> with
          confidence.
        </p>
      </div>
      <div
        className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[23px] gap-[12px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Mitigate Financial Risks:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          Avoid costly sourcing mistakes. <span className="font-[700]">YVOO ScanPro+ ensures on-site
          verification</span>, reducing compliance risks, while <span className="font-[700]">Matchory’s AI</span> delivers <span className="font-[700]">real-time, structured supplier data</span> to <span className="font-[700]">optimize procurement
          efficiency</span>.
        </p>
      </div>
    </div>
  );
}

export default Info;

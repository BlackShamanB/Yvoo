import Image from "next/image";

function Info() {
  return (
    <div className="relative grid grid-cols-1 2xl:grid-rows-2 2xl:grid-cols-2 w-full gap-x-[170px] 2xl:gap-x-[170px] 2xl:gap-y-[60px] gap-y-[30px] px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[100px] md:py-[120px] 2xl:py-[121px] 3xl:py-[120px] bg-[#F6F6F6]">
      {/* <Image
        src="/icons/search-pro-icon.svg"
        width={127}
        height={125}
        alt="search-pro"
        className="hidden md:block absolute -top-[40px] right-[16%]"
      /> */}
      <div className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]" data-scroll data-scroll-speed="0.15">
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Tailor-Made Recommendations:
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:pr-[0] pr-[10px]">
          No more sifting through irrelevant choices. YVOO SearchPro+
          understands your company's specific needs and delivers a curated list
          of suppliers that meet your criteria. Save time and effort with a
          single click, knowing that each recommendation is handpicked to match
          your requirements.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]" data-scroll data-scroll-speed="0.15">
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Boost Efficiency and Save Time:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          YVOO SearchPro+ is your team's secret weapon for increased
          productivity. By eliminating manual searches, you can save hundreds of
          hours that can be better spent on strategic initiatives. Let our
          platform handle the tedious work while you focus on driving your
          business forward.{" "}
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[16px] gap-[12px]" data-scroll data-scroll-speed="0.12">
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Make Informed Decisions:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          Evaluating suppliers is made simple with YVOO SearchPro+'s powerful
          features. Conduct fit-gap analysis to assess how well suppliers align
          with your business needs. Access detailed scorecards and feature
          comparisons to gain valuable insights, empowering you to make informed
          decisions with confidence.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col 3xl:gap-[24px] 2xl:gap-[19px] md:gap-[23px] gap-[12px]" data-scroll data-scroll-speed="0.12">
        <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Mitigate Financial Risks:{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px]">
          Selecting the wrong supplier can lead to significant financial losses.
          YVOO SearchPro+ minimizes this risk by providing reliable and
          up-to-date supplier data. Our dynamic information ensures that you
          have the most accurate insights, allowing you to choose the right
          partners for your business.
        </p>
      </div>
    </div>
  );
}

export default Info;

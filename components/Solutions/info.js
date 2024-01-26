import Image from "next/image";

function Info() {
  return (
    <div className="relative grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 w-full gap-[20px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[48px] md:py-[64px] 3xl:py-[120px] bg-[#F6F6F6]">
      <Image
        src="/icons/search-pro-icon.svg"
        width={127}
        height={125}
        alt="search-pro"
        className="hidden md:block absolute -top-[40px] right-[16%]"
      />
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px]">
          Tailor-Made Recommendations:
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
          No more sifting through irrelevant choices. YVOO SearchPro+
          understands your company's specific needs and delivers a curated list
          of suppliers that meet your criteria. Save time and effort with a
          single click, knowing that each recommendation is handpicked to match
          your requirements.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px]">
          Boost Efficiency and Save Time:{" "}
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
          YVOO SearchPro+ is your team's secret weapon for increased
          productivity. By eliminating manual searches, you can save hundreds of
          hours that can be better spent on strategic initiatives. Let our
          platform handle the tedious work while you focus on driving your
          business forward.{" "}
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px]">
          Make Informed Decisions:{" "}
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
          Evaluating suppliers is made simple with YVOO SearchPro+'s powerful
          features. Conduct fit-gap analysis to assess how well suppliers align
          with your business needs. Access detailed scorecards and feature
          comparisons to gain valuable insights, empowering you to make informed
          decisions with confidence.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px]">
          Mitigate Financial Risks:{" "}
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
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

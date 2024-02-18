import Image from "next/image";

function Scan({ handleModal }) {
  return (
    <div
      id="scan"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-[#06D7F9] z-30"
    >
      <Image
        src="/icons/greenTriangle.png"
        width={146}
        height={166}
        alt="triangle"
        className="hidden md:block absolute -top-[54px] md2:left-[18%] 2xl:left-[20%]"
      />
      <div
        className="px-[20px] customxs:px-[50px] py-[55px] md:py-0 md:flex-center flex-col h-fit md:h-[714px] 2xl:h-[914px] 3xl:h-[854px]"
      >
        <div
          className="flex flex-col justify-center md:items-end md:flex-nowrap md:flex-col gap-[24px] 2xl:ml-[182px] md:mt-[128px] md:mb-[420px] md2:mr-[36px]"
        >
          <Image
            src="/images/industriesManufacturing.webp"
            width={900}
            height={506}
            alt="yvoo-search"
            className="relative 3xl:top-[-200px] 2xl:top-[-201px] top-[-40px] z-10 3xl:max-w-[900px] 2xl:max-w-[660px] md:max-w-[622px] max-w-[319px] 3xl:w-[900px] 2xl:w-[660px] md:w-[622px] 2xl:left-[74px] md:left-[-85px] left-[0]"
          />
          <Image
            src="/icons/squares-1.png"
            width={124}
            height={137}
            alt="triangle"
            className="absolute 2xl:top-[83%] top-[-111%] 3xl:left-[39%] 2xl:left-[20.5%] left-[82%] mouse-parallax 2xl:block md:hidden block md:max-w-[97px] max-w-[45px] transform md:scale-y-[1] scale-y-[-1]"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/about_line.svg"
            width={495}
            height={196}
            alt="triangle"
            className="absolute 3xl:top-[59%] 2xl:top-[28%] top-[19%] 2xl:left-[0%] left-[0%] z-[1] 3xl:max-w-[495px] 2xl:max-w-[495px] max-w-[221px] max-h-[196px]"
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          transform: "translateZ(-10px)",
          transformStyle: "preserve-3d",
        }}
        className="px-[20px] customxs:px-[50px] py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[714px] 2xl:h-[914px] 3xl:h-[854px]"
      >
        <div
          className="mb-[140px] md:mb-0 md2:ml-[37px] md:mt-[134px] flex flex-col 3xl:gap-[24px] gap-[20px] text-black font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px] 3xl:max-w-[671px] max-w-[479px]"
        >
          <h1 className="break-all uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] 3xl:mb-[9px] mb-[11px]">
            Manufacturing
          </h1>
          <div className="flex flex-col gap-[24px] 3xl:mb-[20px] mb-[28px]">
            <p className="font-[700] text-[18px] text-black 2xl:text-[24px] md:text-[20px] text-[16px] leading-[20px] md:leading-[24px] 2xl:leading-[30px] max-w-[281px] md:max-w-[382px]">
              Cut your Supplier Evaluation Costs by up to 70%{" "}
            </p>
          </div>
          <p>
            Manufacturers face intense pressure from fluctuating order volumes,
            declining internal value creation capabilities, growing competition,
            and complex value creation structures. As a result, finding the
            right suppliers has become increasingly critical. However,
            traditional on-site supplier audits can be time-consuming and
            costly, especially with increasing fuel prices.
          </p>
          <p className="3xl:pr-[0] pr-[5px] 3xl:mb-[0] mb-[5px]">
            YVOO offers a revolutionary solution for evaluating new suppliers.
            With our global network of agents, we can efficiently and swiftly
            evaluate multiple vendors, saving you valuable time and money. By
            outsourcing your supplier audits to our experienced team, you can be
            confident that you're making a wise, cost-effective, and time-saving
            decision.
          </p>
          <p className="font-[700] mt-[-5px] 3xl:pr-[0] pr-[10px]">
            Lower your supplier evaluation costs, accelerate the number of
            audited suppliers, and reduce compliance risk
          </p>
          <button
            className="filled_btn mt-[24px] !border-[#000000] !border-[2px] md:p-[18px_62px] !w-[max-content]"
            onClick={handleModal}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scan;

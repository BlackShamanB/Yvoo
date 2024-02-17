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
        className="px-[20px] customxs:px-[50px] py-[55px] md:py-0 md:flex-center flex-col h-fit md:h-[714px] xl:h-[907px]"
      >
        <div
          className="flex flex-col justify-center md:items-end md:flex-nowrap md:flex-col gap-[24px] 2xl:ml-[182px] md:mt-[128px] md:mb-[420px] md2:mr-[36px]"
        >
        <Image
          style={{ zIndex: 0, transform: "translateZ(10px)" }}
          src="/images/auditSuccess.webp"
          width={875}
          height={493}
          alt="yvoo-search"
          className="absolute 3xl:bottom-[-155px] 2xl:bottom-[-59px] bottom-[-40px] z-10 3xl:max-w-[875px] 2xl:max-w-[666px] md:max-w-[622px] max-w-[319px] 3xl:w-[875px] 2xl:w-[666px] md:w-[622px] 2xl:right-[unset] md:right-[-85px] right-[0]"
        /></div>
      </div>
      <div
        style={{
          position: "relative",
          transform: "translateZ(-10px)",
          transformStyle: "preserve-3d",
        }}
        className="px-[20px] customxs:px-[50px] py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[714px] xl:h-[907px]"
      >
        <div
          className="mb-[140px] md:mb-0 md2:ml-[44px] md:mt-[128px] max-w-[674px] flex flex-col gap-4 text-black font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px]"
        >
          <h1 className="break-all uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px]">
            Manufacturing
          </h1>
          <div className="flex flex-col gap-[24px]">
            <p className="font-[700] text-[18px] text-black md:text-[24px] leading-[22px] md:leading-[28px] max-w-[281px] md:max-w-[327px]">
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
          <p>
            YVOO offers a revolutionary solution for evaluating new suppliers.
            With our global network of agents, we can efficiently and swiftly
            evaluate multiple vendors, saving you valuable time and money. By
            outsourcing your supplier audits to our experienced team, you can be
            confident that you're making a wise, cost-effective, and time-saving
            decision.
          </p>
          <p className="font-[700]">
            Lower your supplier evaluation costs, accelerate the number of
            audited suppliers, and reduce compliance risk
          </p>
          <button
            className="filled_btn_white mt-[16px] !bg-[#53D3AA] !border-[#53D3AA]"
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

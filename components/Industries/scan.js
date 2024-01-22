import Image from "next/image";

function Scan({ handleModal }) {
  return (
    <div
      id="scan"
      style={{ transformStyle: "preserve-3d" }}
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-scanBgsm customxs:bg-scanBgmd md:bg-scanBg bg-transparent bg-local bg-contain 2xl:bg-[length:100%_907px] bg-no-repeat bg-bottom z-30"
    >
      <Image
        src="/icons/greenTriangle.png"
        width={146}
        height={166}
        alt="triangle"
        className="hidden md:block absolute -top-[54px] md2:left-[18%] 2xl:left-[20%]"
      />
      <div
        style={{
          position: "relative",
          transform: "translateZ(-1px)",
          transformStyle: "preserve-3d",
        }}
        className="px-[20px] customxs:px-[50px] bg-[#53D3AA] py-[55px] md:py-0 md:flex-center flex-col h-fit md:h-[714px] xl:h-[907px]"
      >
        <div
          style={{
            position: "relative",
            transform: "translateZ(10px)",
          }}
          className="flex flex-col justify-center md:items-end md:flex-nowrap md:flex-col gap-[24px] 2xl:ml-[182px] md:mt-[128px] md:mb-[420px] md2:mr-[36px]"
        >
          <h1 className="break-all md:text-right uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
            Manufacturing
          </h1>
          <div className="flex flex-col gap-[24px] md:items-end">
            <p className="md:text-right font-[700] text-[18px] text-black md:text-[24px] leading-[22px] md:leading-[28px] max-w-[281px] md:max-w-[327px]">
              Cut your Supplier Evaluation Costs by up to 70%{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          transform: "translateZ(-10px)",
          transformStyle: "preserve-3d",
        }}
        className="px-[20px] customxs:px-[50px] bg-black py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[714px] xl:h-[907px]"
      >
        <div
          style={{
            position: "relative",
            transform: "translateZ(10px)",
          }}
          className="mb-[140px] md:mb-0 md2:ml-[44px] md:mt-[128px] max-w-[674px] flex flex-col gap-4 font-[400] leading-[19px] [&>p]:text-[14px] [&>p]:customxs:text-[16px]"
        >
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

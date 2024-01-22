import Image from "next/image";
import Link from "next/link";

function Sales({ handleModal }) {
  return (
    <div
      id="sales"
      style={{ transformStyle: "preserve-3d" }}
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-salesBgsm customxs:bg-salesBgmd md:bg-salesBg bg-transparent bg-local bg-contain bg-no-repeat bg-bottom z-40"
    >
      <Image
        src="/icons/yvoo-sales-icon.svg"
        width={124}
        height={137}
        alt="yvoo-sales"
        className="hidden md:block absolute -top-[40px] right-[40%]"
      />
      <div
        style={{
          position: "relative",
          transform: "translateZ(-1px)",
        }}
        className="px-[20px] customxs:px-[50px] bg-white py-[55px] md:py-0 md:flex-center flex-col h-fit md:h-[918px] 2xl:h-[971px]"
      >
        <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-[24px] md2:ml-[92px] 2xl:ml-[182px] md:mt-[128px] md:mb-[568px]">
          <h1 className="md:hidden uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
            Automotive Companies
          </h1>
          <h1 className="hidden md:block uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px] max-w-[318px] 2xl:max-w-[472px]">
            Automotive
            <br /> Companies
          </h1>
          <div className="flex flex-col gap-[24px]">
            <p className="font-[700] text-[18px] text-black 2xl:text-[24px] leading-[22px] 2xl:leading-[26px]">
              Increase quality, innovation,
              <br /> and flexibility
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
        className="px-[20px] customxs:px-[50px] bg-[#06D7F9] py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[714px] md:h-[918px] 2xl:h-[971px]"
      >
        <div
          style={{
            position: "relative",
            transform: "translateZ(10px)",
          }}
          className="text-black mb-[140px] md:mb-0 md2:ml-[44px] 2xl:ml-[52px] md:mt-[120px] max-w-[584px] flex flex-col gap-4 font-[400] leading-[19px] [&>p]:text-[14px] [&>p]:customxs:text-[16px]"
        >
          <p>
            Suppliers are key sources of innovation, and OEMs must choose their
            partners carefully to ensure differentiating products. Flexibility
            across the full supply chain is crucial to enable OEMs to respond to
            market fluctuations and changes in customer preferences.
          </p>
          <p>
            At YVOO, we understand the importance of selecting the right
            suppliers to drive innovation and flexibility in the highly
            engineered products industry. Our supplier auditing process is fast,
            cost-effective, and enables you to evaluate new suppliers and
            establish a global network that meets your high standards for
            quality and performance. With our expertise, you can confidently
            navigate your industry's unique sourcing requirements and unlock
            tremendous opportunities for growth and success.
          </p>
          <p className="font-[700]">
            Future-proof your supply chain and ensure procurement excellence
          </p>
          <button className="filled_btn_white mt-[16px]" onClick={handleModal}>
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sales;

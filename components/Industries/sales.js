import Image from "next/image";
import Link from "next/link";

function Sales({ handleModal }) {
  return (
    <div
      id="sales"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-white bg-local bg-contain bg-no-repeat bg-bottom z-40"
    >
      <div
        className="px-[20px] customxs:px-[50px] bg-white py-[55px] md:py-0 md:flex-center flex-col h-fit md:h-[918px] 2xl:h-[1038px] 3xl:h-[1047px]"
      >
        <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-[30px] 2xl:ml-[112px] 3xl:ml-[152px] md:mt-[184px] md:mb-[568px] 3xl:max-w-[unset] max-w-[503px]">
          <h1 className="hidden md:block uppercase font-machina font-[800] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] max-w-[318px] 2xl:max-w-[472px]">
            Automotive
            <br /> Companies
          </h1>
          <div className="flex flex-col gap-[24px]">
            <p className="font-[700] text-[18px] text-black 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] max-w-[327px]">
              Increase quality, innovation, and flexibility
            </p>
          </div>
          <div
            className="text-black mb-[140px] md:mb-0 md:mt-[19px] max-w-[673px] flex flex-col gap-[20px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px]"
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
            <button className="filled_btn mt-[27px] !p-[18px_62px] !w-[max-content]" onClick={handleModal}>
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div
        className="px-[11px] h-auto pt-[273px]"
      >
        <Image
          src="/images/automotiveCompanies.webp"
          width={948}
          height={613}
          alt="yvoo-search"
          className="relative z-10 3xl:max-w-[948px] 2xl:max-w-[708px] max-w-[319px] 3xl:w-[948px] 2xl:left-[0] md:left-[-85px] left-[0]"
        />
        <Image
          src="/icons/industries-icon.svg"
          width={107}
          height={129}
          alt="industries"
          className="hidden md:block absolute top-[19%] right-[13.3%] z-[11]"
        />
        
      </div>
    </div>
  );
}

export default Sales;

import Image from "next/image";
import Link from "next/link";

function Sales({ handleModal }) {
  return (
    <div
      id="sales"
      style={{ transformStyle: "preserve-3d" }}
      className="relative grid w-full w-full bg-white bg-local bg-contain bg-no-repeat bg-bottom z-29" >
      {/* <Image
        src="/icons/yvoo-sales-icon.svg"
        width={124}
        height={137}
        alt="yvoo-sales"
        className="absolute -top-[40px] right-[40%]" priority
      /> */}
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]" data-scroll priority data-scroll-speed="0.1">
        <div
          style={
            {
              // position: "relative",
              // transform: "translateZ(-1px)",
            }
          }
          className="relative grid grid-cols-1 2xl:grid-cols-2 bg-white md:py-0 md:flex-center flex-col h-fit 3xl:h-[1187px] 2xl:h-[1125px] md:h-[1422px] md:px-[0] px-[41px]"
        >
          <div className="flex flex-wrap md:flex-nowrap items-center md:items-start md:flex-col md:gap-[24px] gap-[12px] md:mt-[128px] mt-[144px] 3xl:mb-[568px] 2xl:mb-[356px]">
            <Image
              src="/icons/squares-2.png"
              width={96}
              height={106}
              alt="triangle"
              className="absolute top-[82px] 2xl:left-[43%] md:left-[67%] mouse-parallax md:block hidden"
            />
            <h1 className="uppercase 3xl:ml-[154px] 2xl:ml-[0] font-machina font-[800] text-[40px] text-[#00D1EF] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px] max-w-[318px] 2xl:max-w-[472px]">
              YVOO Sales<b className="text-black">Pro+</b>
            </h1>
            <div className="flex flex-col gap-[24px] 3xl:ml-[154px] 2xl:ml-[0]">
              <p className="font-[700] text-[18px] text-black 2xl:text-[24px] leading-[22px] 2xl:leading-[26px] max-w-[327px] 2xl:max-w-[327px]">
                Unlock Your Supplier Potential and Maximize Your Business Growth{" "}
              </p>
              <button className="filled_btn" onClick={handleModal}>
                Request demo
              </button>
            </div>
            <Image
              src="/images/buisness-growth.webp"
              width={748}
              height={523}
              alt="yvoo-sales"
              className="3xl:ml-[auto] 2xl:ml-[-115px] mt-[24px] 3xl:min-w-[748px] 2xl:min-w-[660px] md:min-w-[538px] 2xl:max-w-[660px] md:max-w-[538px] 2xl:ml-[0] md:ml-[-62px] ml-[-41px]"
            />
          </div>
          <div
            style={{
              position: "relative",
              transform: "translateZ(-10px)",
              transformStyle: "preserve-3d",
            }}
            className="bg-white md:py-0 md:flex-center flex-col h-auto md:h-[918px] 2xl:h-[1187px] 3xl:pl-[84px] 2xl:pl-[54px]"
          >
            <div
              style={{
                position: "relative",
                transform: "translateZ(10px)",
              }}
              className="text-black mb-[140px] md:mb-0 2xl:mt-[120px] md:mt-[-71px] max-w-[584px] flex flex-col gap-4 font-[400] leading-[19px] [&>p]:text-[14px] [&>p]:customxs:text-[16px]"
            >
              <Image
                style={{ zIndex: 0, transform: "translateZ(10px)" }}
                src="/icons/brain-3.svg"
                width={111}
                height={120}
                alt="yvoo-search"
                className="z-10 2xl:ml-[0] md:ml-[-31px] md:max-w-[111px] max-w-[74px]"
              />
              <p>
                At YVOO, we understand the challenges suppliers face in finding
                new opportunities, expanding their network, and increasing their
                visibility in the market. That's why we've built YVOO SalesPro+,
                a platform specifically designed to revolutionize supplier
                search and audits, empowering you to thrive in the ever-evolving
                business landscape.
              </p>
              <p>Benefits for Suppliers:</p>
              <ul className="pl-[20px] list-disc list-outside">
                <li>
                  Reach a global audience of potential buyers and clients.{" "}
                </li>
                <li>
                  Expand your business network and connect with reliable
                  partners.
                </li>
                <li>
                  Increase visibility and exposure to new business
                  opportunities.
                </li>
                <li>
                  Access real-time market data and insights to make informed
                  decisions.
                </li>
                <li>
                  Streamline your sales process and save time and resources.
                </li>
              </ul>
              <p>
                Don't miss out on the chance to supercharge your sales efforts.
                Join YVOO SalesPro+ and experience a safe and secure platform
                that prioritizes your data security. Connect with potential
                customers with confidence, knowing that your information is
                protected.{" "}
                <Link className="cursor-pointer underline" href={"/supplier"}>
                  Register now to get started.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;

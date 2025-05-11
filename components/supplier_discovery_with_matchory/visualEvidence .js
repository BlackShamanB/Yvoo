import Image from "next/image";

function Stats() {
  return (
    <div className="relative w-full bg-blue flex-center 3xl:px-[202px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[100px] md:pt-[120px] 2xl:pt-[318px] pb-[60px] 2xl:pb-[424px] text-black">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 md:gap-[11%] gap-[80px] w-full md:top-[0] -top-[160px] relative">
        <div
          data-scroll
          data-scroll-speed="0.13"
          className="relative"
        >
          <Image
          className="md:absolute relative md:top-[-395px] md:right-[-71px] md:max-w-[100%] max-w-[250px]"
            src="/images/office_img.webp"
            width={592}
            height={790}
            alt="office_img"
          />
          <Image
            src="/icons/RoundedArrows.svg"
            width={114}
            height={114}
            alt="roundedArrows"
            className="absolute top-[-57px] right-[-127px] md:block hidden"
          />
          <Image
            src="/icons/crosses-2.svg"
            width={101}
            height={113}
            alt="crosses"
            className="absolute md:max-w-[unset] max-w-[53px] md:top-[176px] md:top-[-13px] md:left-[78px] -left-[36px]"
          />
        </div>
        <div
          className="relative w-full flex justify-center flex-col md:gap-[42px] gap-[32px]"
          data-scroll
          data-scroll-speed="0.13"
        >
          <div className="text-white font-[700] md:text-[40px] text-[26px] md:leading-[48px] leading-[34px]">
            Visual evidence for verified Supplier capabilities
          </div>
          <div className="font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            Explore real on-site factory conditions
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row items-start">
              <Image
                src="/icons/checkWhite.svg"
                width={20}
                height={20}
                alt="triangle"
                className="mt-[5px] mr-[9px]"
              />
              <div className="flex flex-col">
                <div className="font-[600] md:text-[24px] text-[18px] md:leading-[26px]">
                  Supplier’s Factory & Production Images{" "}
                </div>
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Swipeable Gallery{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <Image
                src="/icons/checkWhite.svg"
                width={20}
                height={20}
                alt="triangle"
                className="mt-[5px] mr-[9px]"
              />
              <div className="flex flex-col">
                <div className="font-[600] md:text-[24px] text-[18px] md:leading-[26px]">
                  Real On-Site Audit Photos for Verification
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <Image
                src="/icons/checkWhite.svg"
                width={20}
                height={20}
                alt="triangle"
                className="mt-[5px] mr-[9px]"
              />
              <div className="flex flex-col">
                <div className="font-[600] md:text-[24px] text-[18px] md:leading-[26px]">
                  Video Previews of Manufacturing Capabilities
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <Image
                src="/icons/checkWhite.svg"
                width={20}
                height={20}
                alt="triangle"
                className="mt-[5px] mr-[9px]"
              />
              <div className="flex flex-col">
                <div className="font-[600] md:text-[24px] text-[18px] md:leading-[26px]">
                  Document Attachments
                </div>
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Certifications & Past Audit Reports
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

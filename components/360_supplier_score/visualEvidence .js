import Image from "next/image";

function Stats() {
  return (
    <div className="relative w-full bg-blue flex-center 3xl:px-[202px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[100px] md:pt-[120px] 2xl:pt-[318px] pb-[100px] md:pb-[120px] 2xl:pb-[424px] text-black">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 gap-[11%] w-full">
        <div
          data-scroll
          data-scroll-speed="0.13"
          className="relative"
        >
          <Image
          className="absolute top-[-395px] right-[-71px]"
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
            className="absolute top-[-57px] right-[-127px]"
          />
          <Image
            src="/icons/crosses-2.svg"
            width={101}
            height={113}
            alt="crosses"
            className="absolute top-[176px] left-[78px]"
          />
        </div>
        <div
          className="relative w-full flex justify-center flex-col gap-[42px]"
          data-scroll
          data-scroll-speed="0.13"
        >
          <div className="text-white font-[700] text-[40px] leading-[48px]">
            Visual evidence for verified Supplier capabilities
          </div>
          <div className="font-[700] text-[30px] leading-[38px]">
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
                <div className="font-[600] text-[24px] leading-[30px]">
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
                <div className="font-[600] text-[24px] leading-[30px]">
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
                <div className="font-[600] text-[24px] leading-[30px]">
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
                <div className="font-[600] text-[24px] leading-[30px]">
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

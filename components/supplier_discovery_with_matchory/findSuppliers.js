import Image from "next/image";

import LoadOnLoad from "../LoadOnLoad";

function SearchPro() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  return (
    <div className="relative w-[1516px] 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[728px] max-w-[100%] mx-[auto] relative justify-center gap-[133px] md:px-0 px-[12px]">
      <LoadOnLoad>
        <div className="flex flex-col md:gap-[42px] gap-[20px] rounded-[30px] md:p-[120px_308px_119px] p-[60px_29px] bg-white items-center justify-center mb-[80px] mt-[-170px]">
          <div className="text-black md:text-[30px] text-[18px] md:leading-[38px] leading-[26px] font-[700]">
            FIND SUPPLIERS YOU CAN TRUST
          </div>
          <div className="text-black md:text-[24px] text-[16px] md:leading-[30px] leading-[22px] font-[300] text-center">
            AI-driven, on-site verified supplier insights for risk-free
            sourcing.
            <br />
            Make informed procurement decisions with real-time supplier
            assessments.
          </div>
          <div className="flex flex-row gap-[30px]">
            <div
              className="text-black text-[16px] leading-[20px] font-[500] w-[max-content] p-[20px_64px] bg-blue rounded-[30px] uppercase"
              onClick={handleModal}
            >
              Start now
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <Image src="/icons/blue_arrow.svg" width={16} height={16}></Image>
              <div className="text-black">
                Get Your Verified Supplier Report
              </div>
            </div>
          </div>
        </div>
      </LoadOnLoad>
    </div>
  );
}

export default SearchPro;

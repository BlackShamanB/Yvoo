import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function BuyerSupplier({ handleModal }) {
  const [isHoveredBuyer, setIsHoveredBuyer] = useState(false);
  const [isHoveredSupplier, setIsHoveredSupplier] = useState(false);
  const handleMouseEnterBuyer = () => {
    setIsHoveredBuyer(true);
  };

  const handleMouseLeaveBuyer = () => {
    setIsHoveredBuyer(false);
  };
  const handleMouseEnterSupplier = () => {
    setIsHoveredSupplier(true);
  };

  const handleMouseLeaveSupplier = () => {
    setIsHoveredSupplier(false);
  };
  return (
    <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-[#131D2A] md:pb-[69px] pb-[37px]">
      <div
        className="2xl:pr-[13px] 3xl:pl-[0] 2xl:px-[0] px-[0] py-[95px] md:py-[133px] 2xl:py-[209px] flex 2xl:ml-[48px] 2xl:mr-[0] md:mx-[25px] mx-[11px] bg-black 3xl:mt-[54px] 2xl:mt-[58px] md:mt-[24px] mt-[12px] text-center"
        onMouseEnter={handleMouseEnterBuyer}
        onMouseLeave={handleMouseLeaveBuyer}
        // style={{ background: isHoveredBuyer ? "blue" : "red" }}
      >
        <div className="flex-start gap-[34px] 2xl:mb-[20px] md:mb-[95px] mb-[48px] cursor-pointer mx-auto">
          <div className="flex flex-col 2xl:gap-[32px] md:gap-[22px] gap-[17px] text-center">
            <h1
              className="font-machina text-[#FFF] uppercase font-[800] text-[40px] md:text-[50px] 2xl:text-[60px] leading-[44px] md:leading-[54px] 2xl:leading-[64px]"
              style={{ color: isHoveredBuyer ? "#06D7F9" : "#FFF" }}
            >
              Buyer
            </h1>
            <h2 className="font-[700] text-[16px] md:text-[20px] 2xl:text-[24px] leading-[20px] md:leading-[26px] 2xl:leading-[30px]">
              We are your Uber for procurement.
            </h2>
            <button
              className="filled_btn_primary !hover:bg-[#06D7F9] hover:!text-[black] !text-[#06D7F9] !border-[#06D7F9] 2xl:mt-[17px] mt-[9px] 2xl:ml-[92px] md:ml-[57px] mx-[auto] md:!max-w-[224px] !max-w-[max-content] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px] md:!px-[30px] !px-[28px] md:!py-[18px] !py-[6px]"
              onClick={handleModal}
            >
              View rates
            </button>
          </div>
        </div>
      </div>
      <div className="2xl:absolute relative 3xl:left-[38.3%] 2xl:left-[36.6%] 3xl:top-[30%] 2xl:top-[32%] 2xl:mt-[0] md:mt-[-110px] mt-[-71px] grid 2xl:grid-cols-3-min md:grid-cols-3 grid-cols-[1fr_1.1fr_1fr]">
        <div className="min-w-[60px] 2xl:mt-[0] md:mt-[80px] mt-[52px] 2xl:ml-[0] md:ml-[160px]">
          <div
            className="flex-center hover:scale-[1.04] cursor-pointer"
            onClick={() => {
              window.open("https://searchpro.yvoo.io", "_blank");
            }}
          >
            <Image
              src="/icons/arrow-blue.svg"
              width={60}
              height={60}
              alt="left arrow"
              className="relative 3xl:max-w-[unset] 2xl:max-w-[44px] md:max-w-[unset] max-w-[34px] 3xl:mt-[33px] 2xl:mt-[22px] md:ml-[0] ml-[14px]"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
              style={{ display: isHoveredSupplier ? "none" : "block" }}
            />
          </div>
        </div>
        <div>
          <Image
            src={isHoveredSupplier ? "/icons/supplier.svg" : "/icons/buyer.svg"}
            width={244}
            height={260}
            alt={isHoveredSupplier ? "supplier" : "buyer"}
            className="relative 3xl:max-w-[unset] 2xl:max-w-[203px] md:max-w-[203px] max-w-[131px] 3xl:ml-[44px] 2xl:ml-[31px] md:ml-[26px]"
            onClick={() => {
              window.open("https://searchpro.yvoo.io", "_blank");
            }}
          />
        </div>
        <div className="2xl:mt-[0] md:mt-[80px] mt-[52px] 2xl:ml-[0] md:mr-[180px]">
          <div
            className="bg-transparent rounded-br-full rounded-tr-full flex-center hover:scale-[1.04] cursor-pointer"
            onClick={() => {
              window.open("https://searchpro.yvoo.io", "_blank");
            }}
          >
            <Image
              src="/icons/right-arrow.svg"
              width={108}
              height={108}
              alt="left arrow"
              className="w-[60px] 2xl:ml-[43px] md:ml-[20px] ml-[-15px] 2xl:max-w-[44px] md:max-w-[unset] max-w-[34px] 3xl:mt-[33px] 2xl:mt-[22px]"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
              // style={{ display: isHoveredSupplier ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-[#131D2A] py-[65px] md:py-[115px] 2xl:py-[229px] flex cursor-pointer 2xl:mt-[38px] mt-[0] 3xl:pr-[40px] 2xl:pr-[37px] 2xl:px-[0] text-center"
        onMouseEnter={handleMouseEnterSupplier}
        onMouseLeave={handleMouseLeaveSupplier}
      >
        <div className="flex-start flex-row-reverse gap-[80px] mx-auto">
          <div className="flex flex-col items-center 2xl:gap-[33px] gap-[0]">
            <h1
              className="font-machina uppercase font-[800] text-[40px] md:text-[50px] 2xl:text-[60px] leading-[44px] md:leading-[54px] 2xl:leading-[64px] 2xl:mb-[0] md:mb-[22px] mb-[17px]"
              style={{ color: isHoveredSupplier ? "#53D3AA" : "#FFF" }}
            >
              Supplier
            </h1>
            <h2 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 2xl:mb-[0] mb-[15px]">
              Way to your excellence
            </h2>
            <button
              className="mint_btn md:mt-[15px] mt-[8px] md:!max-w-[224px] !max-w-[136px] md:!py-[18px] !py-[8px] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px] text-[#FFF]"
              onClick={handleModal}
            >
              View rates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerSupplier;

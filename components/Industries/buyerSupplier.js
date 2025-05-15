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
    <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-[#131D2A] pt-[57px] md:pb-[54px] pb-[86px]">
      <div
        className="md:pt-[221px]  md:pb-[238px] flex 2xl:ml-[48px] 2xl:mr-[0] md:mx-[25px] mx-[11px] text-center rounded-[30px] pr-[11px]"
        data-scroll
        data-scroll-speed="0.1"
        onMouseEnter={handleMouseEnterBuyer}
        onMouseLeave={handleMouseLeaveBuyer}
        style={{ background:  isHoveredSupplier ? "none" : "black" }}
      >
        <div className="flex-start gap-[34px] cursor-pointer mx-auto">
          <div className="flex flex-col md:gap-[24px] gap-[12px] text-center">
            <h1
              className="font-inter text-[#FFF] uppercase font-[800] text-[40px] md:text-[50px] 2xl:text-[60px] leading-[44px] md:leading-[54px] 2xl:leading-[68px]"
              style={{ color: isHoveredBuyer ? "#06D7F9" : "#FFF" }}
            >
              Buyer
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[20px] 2xl:text-[24px] leading-[26px] 2xl:leading-[30px] mb-[24px]">
              We are your Uber for procurement.
            </h2>
            <button
              className="whitespace-nowrap filled_btn_primary btn_animated_blue rounded-[30px] !max-w-[max-content] hover:!text-[black] !text-[#06D7F9] !border-[#06D7F9] 2xl:ml-[92px] md:ml-[57px] mx-[auto] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px] md:!px-[62px] !px-[32px] md:!py-[18px] !py-[14px]"
              onClick={handleModal}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
      <div className="2xl:absolute relative 3xl:left-[38.3%] 2xl:left-[36.6%] 3xl:top-[30%] 2xl:top-[32%] 2xl:mt-[0] md:mt-[-110px] mt-[-71px] grid 2xl:grid-cols-3-min md:grid-cols-3 grid-cols-[1fr_1.1fr_1fr] z-[1]">
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
            className="relative 3xl:max-w-[unset] 2xl:max-w-[203px] md:max-w-[203px] max-w-[131px] 3xl:ml-[44px] 2xl:ml-[31px] mx-[auto]"
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
              width={60}
              height={60}
              alt="left arrow"
              className="w-[60px] 2xl:ml-[43px] md:ml-[20px] ml-[-15px] 3xl:max-w-[unset] 2xl:max-w-[44px] md:max-w-[unset] max-w-[34px] 3xl:mt-[33px] 2xl:mt-[22px]"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
              style={{ display: isHoveredSupplier ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
      <div
        className="md:pt-[221px]  md:pb-[238px] flex cursor-pointer 2xl:ml-[0] md:mx-[25px] mx-[11px] text-center rounded-[30px]"
        onMouseEnter={handleMouseEnterSupplier} 
        onMouseLeave={handleMouseLeaveSupplier}
        data-scroll
        data-scroll-speed="0.1"
        style={{ background:  isHoveredSupplier ? "black" : "none" }}
      >
        <div className="flex-start flex-row-reverse gap-[80px] mx-auto">
          <div className="flex flex-col items-center 2xl:gap-[24px] gap-[0]">
            <h1
              className="font-inter uppercase font-[800] text-[40px] md:text-[50px] 2xl:text-[60px] leading-[44px] md:leading-[54px] 2xl:leading-[68px] 2xl:mb-[0] md:mb-[22px] mb-[12px]"
              style={{ color: isHoveredSupplier ? "#53D3AA" : "#FFF" }}
            >
              Supplier
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[20px] 2xl:text-[24px] leading-[26px] 2xl:leading-[30px] mb-[24px]">
              Way to your excellence
            </h2>
            <button
              className="whitespace-nowrap mint_btn btn_animated_green rounded-[30px] !max-w-[max-content] md:!px-[62px] !px-[32px] md:!py-[18px] !h-[auto] !py-[14px] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px] text-[#FFF]"
              onClick={handleModal}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerSupplier;

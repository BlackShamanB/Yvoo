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
    <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-[#131D2A] pb-[69px]">
      <div
        className="2xl:pr-[13px] 3xl:pl-[0] 2xl:px-[0] px-[0] py-[55px] md:py-[133px] 2xl:py-[209px] flex 2xl:ml-[48px] 2xl:mr-[0] mx-[25px] bg-black 3xl:mt-[54px] 2xl:mt-[58px] md:mt-[24px] text-center"
        onMouseEnter={handleMouseEnterBuyer}
        onMouseLeave={handleMouseLeaveBuyer}
        // style={{ background: isHoveredBuyer ? "blue" : "red" }}
      >
        <div className="flex-start gap-[34px] 2xl:mb-[20px] mb-[95px] cursor-pointer mx-auto">
          <div className="flex flex-col 2xl:gap-[32px] gap-[22px] text-center">
            <h1
              className="font-machina text-[#FFF] uppercase font-[800] text-[30px] md:text-[50px] 2xl:text-[60px] leading-[30px] md:leading-[54px] 2xl:leading-[64px]"
              style={{ color: isHoveredBuyer ? "#06D7F9" : "#FFF" }}
            >
              Buyer
            </h1>
            <h2 className="font-[700] text-[20px] md:text-[20px] 2xl:text-[24px] leading-[18px] md:leading-[26px] 2xl:leading-[30px]">
              We are your Uber for procurement.
            </h2>
            <button
              className="filled_btn_primary !hover:bg-[#06D7F9] hover:!text-[black] !text-[#06D7F9] !border-[#06D7F9] 2xl:mt-[17px] mt-[9px] 2xl:ml-[92px] ml-[57px] !max-w-[224px] !text-[16px] !leading-[20px] !py-[18px]"
              onClick={handleModal}
            >
              View rates
            </button>
          </div>
        </div>
      </div>
      <div className="2xl:absolute relative 3xl:left-[38.3%] 2xl:left-[36.6%] 3xl:top-[30%] 2xl:top-[32%] 2xl:mt-[0] mt-[-110px] grid 2xl:grid-cols-3-min grid-cols-3">
        <div className="min-w-[60px] 2xl:mt-[0] mt-[80px] 2xl:ml-[0] ml-[160px]">
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
              className="relative 3xl:max-w-[unset] 2xl:max-w-[44px] 3xl:mt-[33px] 2xl:mt-[22px]"
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
            className="relative 3xl:max-w-[unset] 2xl:max-w-[203px] max-w-[203px] 3xl:ml-[44px] 2xl:ml-[31px] ml-[26px]"
            onClick={() => {
              window.open("https://searchpro.yvoo.io", "_blank");
            }}
          />
        </div>
        <div className="2xl:mt-[0] mt-[80px] 2xl:ml-[0] mr-[180px]">
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
              className="w-[60px] 2xl:ml-[43px] ml-[20px] 2xl:max-w-[44px] 3xl:mt-[33px] 2xl:mt-[22px]"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
              // style={{ display: isHoveredSupplier ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-[#131D2A] py-[55px] md:py-[115px] 2xl:py-[229px] flex cursor-pointer 2xl:mt-[38px] mt-[0] 3xl:pr-[40px] 2xl:pr-[37px] 2xl:px-[0] text-center"
        onMouseEnter={handleMouseEnterSupplier}
        onMouseLeave={handleMouseLeaveSupplier}
      >
        <div className="flex-start flex-row-reverse gap-[80px] mx-auto">
          <div className="flex flex-col items-center 2xl:gap-[33px] gap-[0]">
            <h1
              className="font-machina uppercase font-[800] text-[30px] md:text-[50px] 2xl:text-[60px] leading-[30px] md:leading-[54px] 2xl:leading-[64px] 2xl:mb-[0] mb-[22px]"
              style={{ color: isHoveredSupplier ? "#53D3AA" : "#FFF" }}
            >
              Supplier
            </h1>
            <h2 className="font-[700] 2xl:text-[24px] text-[20px] 2xl:leading-[30px] leading-[26px] 2xl:mb-[0] mb-[15px]">
              Way to your excellence
            </h2>
            <button
              className="mint_btn mt-[15px] !max-w-[224px] !py-[18px] !text-[16px] !leading-[20px] text-[#FFF]"
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

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
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-[#131D2A] pb-[69px]">
      <div
        className="3xl:pl-[247px] pl-[126px] py-[55px] md:py-[164px] 2xl:py-[217px] flex ml-[48px] bg-black 3xl:mt-[54px] 2xl:mt-[58px]"
        onMouseEnter={handleMouseEnterBuyer}
        onMouseLeave={handleMouseLeaveBuyer}
        // style={{ background: isHoveredBuyer ? "blue" : "red" }}
      >
        <div className="flex-start gap-[34px] mb-[20px] cursor-pointer">
          <div className="flex flex-col gap-[32px] text-center">
            <h1 className="font-machina text-[#FFF] uppercase font-[800] text-[30px] md:text-[40px] 2xl:text-[60px] leading-[30px] md:leading-[40px] 2xl:leading-[64px]"
            style={{ color: isHoveredBuyer ? "#06D7F9" : "#FFF" }}
            >
              Buyer
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[24px] leading-[18px] md:leading-[30px]">
              We are your Uber for procurement.
            </h2>
            <button
              className="filled_btn_primary !bg-[#06D7F9] !text-[black] !border-[#06D7F9] mt-[17px] ml-[92px] !max-w-[224px] !text-[16px] !leading-[20px] !py-[18px]"
              onClick={handleModal}
            >
              View rates
            </button>
          </div>
          <div className="relative flex justify-center items-center mt-[9px]">
            <div
              className="flex-center hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
            >
              <Image
                src="/icons/arrow-blue.svg"
                width={58}
                height={30}
                alt="left arrow"
                className="relative mr-[43px] 3xl:max-w-[unset] 2xl:max-w-[44px] 3xl:top-[0] 2xl:top-[3px] 3xl:right-[unset] 2xl:right-[79px]"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io", "_blank");
                }}
                style={{display: isHoveredSupplier ? 'none' : 'block'}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xs:pr-[20px] bg-[#131D2A] py-[55px] md:py-[164px] 2xl:py-[236px] flex cursor-pointer mt-[38px] 3xl:pl-[160px] 2xl:pl-[41px]"
        onMouseEnter={handleMouseEnterSupplier}
        onMouseLeave={handleMouseLeaveSupplier}>
        <div className="flex-start flex-row-reverse gap-[80px]">
          <div className="flex flex-col items-center gap-[33px]">
            <h1 className="font-machina uppercase font-[800] text-[30px] md:text-[40px] 2xl:text-[60px] leading-[30px] md:leading-[40px] 2xl:leading-[64px]"
                style={{color: isHoveredSupplier ? "#53D3AA" : "#FFF"}}>
              Supplier
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[24px] leading-[18px] md:leading-[30px]">
              Way to your excellence
            </h2>
            <button
              className="mint_btn mt-[15px] !max-w-[224px] !py-[18px] !text-[16px] !leading-[20px] text-[#FFF]"
              onClick={handleModal}
            >
              View rates
            </button>
          </div>
          <div className="relative flex justify-center items-start">
            <div
              className="w-[66px] bg-transparent rounded-br-full rounded-tr-full flex-center hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
            >
              <Image
                src="/icons/right-arrow.svg"
                width={108}
                height={108}
                alt="left arrow"
                className="ml-[43px]"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io", "_blank");
                }}
                style={{display: isHoveredSupplier ? 'block' : 'none'}}
              />
            </div>
          </div>
        </div>
      </div>
              <Image
                src={isHoveredSupplier ? '/icons/supplier.svg' : "/icons/buyer.svg"}
                width={244}
                height={260}
                alt={isHoveredSupplier ? 'supplier' : "buyer"}
                className="absolute 3xl:left-[43.7%] left-[42.7%] 3xl:top-[30%] 2xl:top-[33%] 3xl:max-w-[unset] 2xl:max-w-[203px]"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io", "_blank");
                }}
              />
    </div>
  );
}

export default BuyerSupplier;

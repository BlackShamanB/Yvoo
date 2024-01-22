import Image from "next/image";

function BuyerSupplier({ handleModal }) {
  return (
    <div className="grid grid-cols-1 customsm:grid-cols-2 w-full">
      <div className="xs:pl-[20px] py-[55px] customsm:py-[164px] 2xl:py-[142px] flex justify-end">
        <div className="flex-between gap-[80px]">
          <div className="flex flex-col gap-[14px]">
            <h1 className="font-machina uppercase font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
              Buyer
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[24px] leading-[18px] md:leading-[24px]">
              We are your Uber for
              <br /> procurement.
            </h2>
            <button
              className="filled_btn_primary !bg-[#53D3AA] !border-[#53D3AA] mt-[30px]"
              onClick={handleModal}
            >
              Book a demo
            </button>
          </div>
          <div className="relative flex justify-center items-center ">
            <div
              className="h-[132px] w-[66px] bg-[#474747] rounded-bl-full rounded-tl-full flex-center hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
            >
              <Image
                src="/icons/buyer-icon.svg"
                width={58}
                height={30}
                alt="left arrow"
                className="mr-[43px]"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xs:pr-[20px] bg-[#474747] py-[55px] md:py-[164px] 2xl:py-[142px] flex">
        <div className="flex-between flex-row-reverse gap-[80px]">
          <div className="flex flex-col items-end gap-[14px]">
            <h1 className="font-machina uppercase font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
              Supplier
            </h1>
            <h2 className="font-[700] text-[18px] md:text-[24px] leading-[18px] md:leading-[24px]">
              Way to your
              <br /> excellence
            </h2>
            <button
              className="filled_btn_primary mt-[30px]"
              onClick={handleModal}
            >
              Book a demo
            </button>
          </div>
          <div className="relative flex justify-center items-center">
            <div
              className="h-[132px] w-[66px] bg-black rounded-br-full rounded-tr-full flex-center hover:scale-[1.04] cursor-pointer"
              onClick={() => {
                window.open("https://searchpro.yvoo.io", "_blank");
              }}
            >
              <Image
                src="/icons/supplier-icon.svg"
                width={58}
                height={30}
                alt="left arrow"
                className="ml-[43px]"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerSupplier;

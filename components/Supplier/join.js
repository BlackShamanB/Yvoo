"use client";

function Join() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full 3xl:gap-[171px] 2xl:gap-[110px] gap-[63px] px-[41px] customxs:px-[50px] 2xl:px-[162px] 3xl:px-[201px] pt-[96px] 2xl:pt-[181px] pb-[101px] 2xl:pb-[92px] 3xl:pb-[122px] bg-supplier2Bg 2xl:bg-supplier2Bg2xl 3xl:bg-supplier2Bg3xl bg-no-repeat">
      <div className="flex flex-col gap-[20px]">
        <h1 className="uppercase font-machina text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] font-[800] max-w-[880px]"
          data-scroll
          data-scroll-speed="0.15">
          Join <b className="text-[#06D7F9]">YVOO 
          <br /> SALE</b>SPRO+
        </h1>
      </div>
      <div className="flex flex-col 2xl:gap-[47px] gap-[24px]">
        <p className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] customxs:max-w-[665px] md:max-w-none"
          data-scroll
          data-scroll-speed="0.2">
          Join YVOO SALESPRO+ today and experience a safe and secure platform
          that prioritizes your data security. Connect with potential customers
          with confidence, knowing that your information is protected. Register
          now to get started.
        </p>
        <button
          type="submit"
          className="filled_btn_primary hover:!text-black !text-[#06D7F9] md:!p-[18px_62px] !p-[8px_30px] !w-[max-content] 2xl:!text-[16px] !text-[12px] 2xl:!leading-[20px] !leading-[16px]"
          onClick={() => {
            window.open("https://searchpro.yvoo.io", "_blank");
          }}
          data-scroll
          data-scroll-speed="0.1"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Join;

"use client";

function Join() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[56px] md:py-[72px] 2xl:py-[120px] pb-[76px] md:pb-[100px] 2xl:pb-[112px] bg-[#414141]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="uppercase font-machina text-[30px] md:text-[42px] 2xl:text-[42px] font-[800] leading-[30px] md:leading-[40px] 2xl:leading-[42px] max-w-[880px]">
          Join
          <br /> <b className="text-[#06D7F9]">YVOO SALE</b>SPRO+
        </h1>
      </div>
      <div className="flex flex-col gap-[40px]">
        <p className="font-[700] text-[18px] leading-[18px] md:text-[24px] md:leading-[24px] customxs:max-w-[665px] md:max-w-none">
          Join YVOO SALESPRO+ today and experience a safe and secure platform
          that prioritizes your data security. Connect with potential customers
          with confidence, knowing that your information is protected. Register
          now to get started.
        </p>
        <button
          type="submit"
          className="filled_btn_primary !text-black"
          onClick={() => {
            window.open("https://searchpro.yvoo.io", "_blank");
          }}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Join;

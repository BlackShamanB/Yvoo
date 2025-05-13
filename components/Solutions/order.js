function Order({ handleModal }) {
  return (
    <div className="w-full flex-between flex-wrap 2xl:flex-nowrap 3xl:gap-[33px] 2xl:gap-[67px] px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[100px] md:py-[101px] 2xl:py-[105px] bg-[#53D3AA]">
      <p
        className="flex-1 text-black font-[700] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] leading-[26px] md2:max-w-[779px] 2xl:max-w-[1202px] basis-[860px] 2xl:mb-[0] mb-[32px]"
        data-scroll
        data-scroll-speed="0.05"
      >
        Want to see why our clients choose us ? Check out our case studies and
        learn how we <br/> help businesses maintain procurement excellence.
      </p>
      <button className="rounded-[30px] border-white border-[1px] btn_animated_white md:!max-w-[275px] md:p-[18px_62px] p-[14px_32px] !max-w-[max-content] uppercase md:text-[16px] text-[12px] md:leading-[20px] leading-[16px]" onClick={handleModal}

        data-scroll
        data-scroll-speed="0.02"
      >
        See us in Action
      </button>
    </div>
  );
}

export default Order;

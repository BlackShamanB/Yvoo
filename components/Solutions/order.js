function Order({ handleModal }) {
  return (
    <div className="w-full flex-between flex-wrap 2xl:flex-nowrap 3xl:gap-[33px] 2xl:gap-[67px] px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[100px] md:py-[101px] 2xl:py-[105px] bg-[#53D3AA]">
      <p className="flex-1 text-black font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] md2:max-w-[779px] 2xl:max-w-[1202px] basis-[860px] 2xl:mb-[0] mb-[30px]"
        data-scroll
        data-scroll-speed="0.05">
        Unlock the power of effortless supplier readiness checks with ScanPro+.
        Don't miss out on this game-changing solution. Book a demo today and
        experience a new level of efficiency and reliability.
      </p>
      <button className="filled_btn md:!max-w-[275px] !max-w-[175px]" onClick={handleModal}
        data-scroll
        data-scroll-speed="0.02">
        Order ScanPro+
      </button>
    </div>
  );
}

export default Order;

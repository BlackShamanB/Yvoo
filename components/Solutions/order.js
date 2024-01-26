function Order({ handleModal }) {
  return (
    <div className="w-full flex-between flex-wrap 2xl:flex-nowrap gap-[80px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[64px] md:py-[88px] bg-[#53D3AA]">
      <p className="flex-1 text-black font-[700] text-[24px] leading-[28px] md2:max-w-[779px] 2xl:max-w-[1202px] basis-[860px]">
        Unlock the power of effortless supplier readiness checks with ScanPro+.
        Don't miss out on this game-changing solution. Book a demo today and
        experience a new level of efficiency and reliability.
      </p>
      <button className="filled_btn !max-w-[214px]" onClick={handleModal}>
        Order ScanPro+
      </button>
    </div>
  );
}

export default Order;

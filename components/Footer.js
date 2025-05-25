"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useData } from "@/components/DataContext";

import ModalRequest from "./ModalRequest";

const Footer = () => {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const pageName = window.location.pathname;
  // const firstLinks = [
  //   { name: "Home", link: "/" },
  //   { name: "Solutions", link: "/solutions" },
  //   { name: "About us", link: "/about" },
  // ];
  // const secondLinks = [
  //   { name: "For auditors", link: "/auditors" },
  //   { name: "Consulting", link: "/consulting" },
  //   { name: "Blog", link: "/blog" },
  // ];
  const firstLinks = [
    // { name: "Home", link: "/" },
    { name: "Solutions", link: "/#" },
    { name: "1-Click Audit", link: "/" },
    { name: "360° Supplier Score ", link: "/supplier_score" },
    { name: "Supplier Discovery\n with Matchory", link: "/solutions" },
    { name: "Consulting", link: "/consulting" },
  ];
  const secondLinks = [
    { name: "Pricing", link: "/pricing" },
    { name: "For Auditors", link: "/auditors" },
    { name: "For Supplier", link: "/supplier" },
    { name: "Blog", link: "/blog" },
    { name: "Industries", link: "/industries" },
  ]
  const threeLinks = [
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Data Processing Agreement", link: "/" },
    { name: "Imprint", link: "/imprint" },
  ];

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  const { data } = useData();
  return (
    <footer
      className="bg-[#131D2A] text-white -mt-[1px] lg:pl-[100px] 3xl:pr-[48px] 2xl:pr-[49px] md:pr-[85px] pt-[60px] 2xl:pb-[92px] pb-[111px] md:pl-[85px] flex 2xl:items-start flex-wrap md:gap-[127px] gap-[30px] flex-col 2xl:flex-row px-[41px]"
      style={{
        background: data == "/blog" || data == "/" || data == "/supplier_score" ? "transparent" : "",
      }}
    >
      <Image src="/icons/Logo_new.svg" width={130} height={42} alt="logo" className="md:mb-[0] mb-[24px]"/>
      {/* <div className="flex-1 md:flex-center md:justify-between gap-8 flex-wrap"> */}
        {/* <div className="flex 2xl:gap-[84px] md:gap-[113px] gap-[102px] flex-wrap"> */}
        <div className="flex flex-row md:gap-[24px] gap-[8px]">
          <ul className="flex flex-col gap-3 leading-[20px] md:max-w-[284px] max-w-[148px]">
            {firstLinks.map((link) => {
              return (
                <Link href={link.link} legacyBehavior>
                  <div
                    key={link.link}
                    className="text-whte md:text-[20px] text-[14px] md:leading-[26px] leading-[18px] font-[400] relative inline-block text-white pseudo-text-effect cursor-pointer"
                    data-after={link.name}
                  >
                    <a className="group" href={link.link}>
                      {link.name}
                      {/* <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span> */}
                    </a>
                  </div>
                </Link>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-3 leading-[20px]">
            {secondLinks.map((link) => {
              return (
                <Link href={link.link} legacyBehavior>
                  <div
                    key={link.link}
                    className="text-whte md:text-[20px] text-[14px] md:leading-[26px] leading-[18px] font-[400] relative inline-block text-white pseudo-text-effect cursor-pointer"
                    data-after={link.name}
                  >
                    <a className="group" href={link.link}>
                      {link.name}
                      {/* <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span> */}
                    </a>
                  </div>
                </Link>
              );
            })}
          </ul>
          </div>
          <ul className="flex flex-col gap-[12px] leading-[20px] md:order-[unset] order-1 md:ml-[auto]">
            {threeLinks.map((link) => {
              return (
                <Link href={link.link} legacyBehavior>
                  <div
                    key={link.link}
                    className="text-whte md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] font-[400] opacity-[50%] relative inline-block pseudo-text-effect cursor-pointer"
                    data-after={link.name}
                  >
                    <a className="group" href={link.link}>
                      {link.name}
                      {/* <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span> */}
                    </a>
                  </div>
                </Link>
              );
            })}
            <div className="text-whte md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] font-[400] opacity-[50%] md:mt-[42px] md:mb-[0] mb-[18px] md:order-[unset] -order-1">© 2021 YVOO LTD  |  All Rights Reserved</div>
          </ul>
          {/* <ul className="flex flex-col uppercase text-[#53D3AA] hidden 2xl:block ml-[36px]">
            watch instructions
            <Image
              src="/icons/watch_instructions.svg"
              width={48}
              height={48}
              alt="logo"
              className="inline ml-[10px]"
            />
          </ul> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div
        className="flex items-center gap-[10px] cursor-pointer hidden 2xl:flex"
        onClick={handleModal}
      >
        <Image
          src="/icons/card-icon.svg"
          width={31}
          height={23}
          alt="menu"
          className="cursor-pointer"
        />
        <h2 className="font-normal text-primary">Request demo</h2>
      </div> */}
      {/* <div className="flex flex-1 md:flex-center justify-between gap-8 flex-wrap 2xl:hidden 2xl:mt-[0] md:mt-[-12px] mt-[-11px]">
        <ul className="flex md:flex-center items-center gap-3 uppercase text-[#53D3AA] block 2xl:hidden md:md-[0] mb-[-12px]">
          watch instructions
          <Image
            src="/icons/watch_instructions.svg"
            width={48}
            height={48}
            alt="logo"
            className="inline"
          />
        </ul> */}
        {/* <div
          className="flex items-center gap-[10px] cursor-pointer block 2xl:hidden 2xl:mb-[20px] md:mb-[-20px] mb-[20px]"
          onClick={handleModal}
        >
          <Image
            src="/icons/card-icon.svg"
            width={31}
            height={23}
            alt="menu"
            className="cursor-pointer"
          />
          <h2 className="font-normal text-primary">Request demo</h2>
        </div> */}
      {/* </div> */}
      <button
        // className="outlined_btn btn_animated_blue"
        className="uppercase text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] md:p-[20px_64px] p-[16px_34px] rounded-[30px] bg-blue max-w-[max-content]"
        onClick={handleModal}
      >
        Book a Demo
      </button>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </footer>
  );
};

export default Footer;

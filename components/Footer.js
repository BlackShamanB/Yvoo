"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ModalRequest from "./ModalRequest";

const Footer = () => {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const firstLinks = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "About us", link: "/about" },
  ];
  const secondLinks = [
    { name: "For auditors", link: "/auditors" },
    { name: "Consulting", link: "/consulting" },
    { name: "Blog", link: "/blog" },
  ];

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <footer className="bg-[#131D2A] text-white -mt-[1px] lg:pl-[100px] 3xl:pr-[54px] 2xl:pr-[49px] md:pr-[85px] 2xl:pt-[93px] pt-[60px] 2xl:pb-[92px] pb-[111px] md:pl-[85px] flex 2xl:items-center 2xl:justify-centerr md:flex-between flex-wrap 2xl:gap-[135px] gap-[60px] flex-col 2xl:flex-row px-[41px]">
      <Image src="logo.svg" width={122} height={36} alt="logo" />
      <div className="flex-1 md:flex-center md:justify-between gap-8 flex-wrap">
        <div className="flex items-center 2xl:gap-[84px] md:gap-[113px] gap-[102px] flex-wrap">
          <ul className="flex flex-col gap-3 leading-[20px]">
            {firstLinks.map((link) => {
              return (
                <div
                  key={link.link}
                  className="relative inline-block text-white pseudo-text-effect" data-after={link.name}
                >
                  <Link href={link.link} legacyBehavior>
                    <a className="group">
                      {link.name}
                      {/* <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span> */}
                    </a>
                  </Link>
                </div>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-3 leading-[20px]">
            {secondLinks.map((link) => {
              return (
                <div
                  key={link.link}
                  className="relative inline-block text-white pseudo-text-effect" data-after={link.name}
                >
                  <Link href={link.link} legacyBehavior>
                    <a className="group">
                      {link.name}
                      {/* <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span> */}
                    </a>
                  </Link>
                </div>
              );
            })}
          </ul>
          <ul className="flex flex-col uppercase text-[#53D3AA] hidden 2xl:block ml-[36px]">
            watch instructions<Image src="/icons/watch_instructions.svg" width={48} height={48} alt="logo" className="inline ml-[10px]"/>
          </ul>
        </div>
      </div>
        <div
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
        </div>
      <div className="flex flex-1 md:flex-center justify-between gap-8 flex-wrap 2xl:hidden 2xl:mt-[0] md:mt-[-12px] mt-[-11px]">
        <ul className="flex md:flex-center items-center gap-3 uppercase text-[#53D3AA] block 2xl:hidden md:md-[0] mb-[-12px]">
          watch instructions<Image src="/icons/watch_instructions.svg" width={48} height={48} alt="logo" className="inline"/>
        </ul>
        <div
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
        </div>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </footer>
  );
};

export default Footer;

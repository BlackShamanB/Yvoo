"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ModalRequest from "./ModalRequest";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

const Header = () => {
  const [active, setActive] = useState(false);
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Обновляем состояние при клике на ссылку
  }

  // let pathName = window.location.pathname

  // const setPathName = () => {
  //   console.log(window.location.pathname)
  //   pathName = window.location.pathname
  //   console.log(document.querySelector(`[href="${window.location.pathname}"]`))
  // }

  const links = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "About us", link: "/about" },
    { name: "For auditors", link: "/auditors" },
    { name: "Consulting", link: "/consulting" },
    { name: "Blog", link: "/blog" },
    { name: "Supplier", link: "/supplier" },
    { name: "Industries", link: "/industries" },
  ];

  return (
    <div className="w-full flex lg2:justify-between items-center p-6 !pl-[40px] lg2:pr-[80px] items-center h-[94px] font-medium bg-[black]">
      <div className="lg2:hidden scale-150">
        <Image
          onClick={toggleMenu}
          src="/icons/hamburger.svg"
          width={26}
          height={30}
          alt="menu"
          className="cursor-pointer min-w-[26px]"
        />
      </div>
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={118}
          height={34}
          alt="logo"
          className="cursor-pointer min-w-[88px] md:max-w-[118px] max-w-[78px]"
        />
      </Link>

      {!active && (
        <ul
          className={`lg2:flex items-center gap-8 p-6 3xl:ml-[420px] 2xl:ml-[181px] ml-[0] ${
            active ? "block" : "hidden"
          }`}
        >
          {links.map((link) => {
            return (
              <div key={link.name} className="relative inline-block text-white">
                <Link href={link.link} legacyBehavior>
                  <a onClick={() => {closeMenu; handleLinkClick(link.link)}} className="group">
                    <div className="relative z-[1] text-[16px]">{link.name}</div>
                    <span className={`absolute z-[0] bottom-[6px] w-full h-1 bg-[#2ECC71] bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100 ${activeLink == link.link ? '!origin-bottom-left scale-x-50' : ''}`}></span>
                  </a>
                </Link>
              </div>
            );
          })}
        </ul>
      )}
      {active && (
        <>
          <ul
            className={
              "z-[1000] text-[32px] leading-[36px] font-[600] flex flex-col fixed inset-0 right-0 bg-black gap-8 p-8 lg2:hidden text-white"
            }
          >
            <div className="flex-between">
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  width={118}
                  height={34}
                  alt="logo"
                  className="cursor-pointer"
                />
              </Link>
              <Image
                onClick={toggleMenu}
                src="/icons/close.svg"
                width={30}
                height={30}
                alt="close"
                className="cursor-pointer absolute right-12"
              />
            </div>
            {links.map((link) => {
              return (
                <li key={link.name} className="relative max-w-[max-content]">
                  <Link
                    href={link.link}
                    onClick={closeMenu}
                    className="group block max-w-[max-content]"
                  >
                    <div className="relative z-[1] max-w-[max-content]">
                      {link.name}
                    </div>
                    <span className="absolute z-[0] bottom-[6px] w-full h-1 bg-[#2ECC71] bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span>
                  </Link>
                </li>
              );
            })}
            <li className="flex flex-row items-center gap-3 uppercase text-[#53D3AA] text-[16px] mt-[auto]">
              watch instructions<Image src="/icons/watch_instructions.svg" width={48} height={48} alt="logo" className="inline"/>
            </li>
          </ul>
        </>
      )}
      <div className="flex-center gap-[36px] 2lg:ml-[0] ml-[auto]">
        <button
          className="outlined_btn"
          onClick={handleModal}
        >
          Request demo
        </button>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </div>
  );
};

export default Header;

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/components/DataContext";

import ModalRequest from "./ModalRequest";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);

  const refY = useRef(null);
  const refV = useRef(null);
  const refG = useRef(null);
  const refO = useRef(null);
  const refEl = useRef(null);
  useEffect(() => {
    if(!refY.current) return

    refY.current.classList.add("typing-char");
    setTimeout(() => {
      refV.current.classList.add("typing-char");
    }, 100);
    setTimeout(() => {
      refG.current.classList.add("typing-char");
    }, 200);
    setTimeout(() => {
      refO.current.classList.add("typing-char");
    }, 300);
    setTimeout(() => {
      refEl.current.classList.add("typing-char");
    }, 400);
  });
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
    setData(link);
  };
  const { setData } = useData();

  useEffect(() => {
    setData(window.location.pathname);
  }, [setData]);

  // let pathName = window.location.pathname

  // const setPathName = () => {
  //   console.log(window.location.pathname)
  //   pathName = window.location.pathname
  //   console.log(document.querySelector(`[href="${window.location.pathname}"]`))
  // }

  const links = [
    // { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "Pricing", link: "/pricing" },
    { name: "For auditors", link: "/auditors" },
    { name: "For supplier", link: "/supplier" },
    // { name: "Consulting", link: "/consulting" },
    { name: "Blog", link: "/blog" },
    // { name: "Supplier", link: "/supplier" },
    { name: "Industries", link: "/industries" },
  ];

  const solutionsSubmenu = [
    { name: "1-Click Audit", link: "/" },
    { name: "360° Supplier Score", link: "/supplier_score" },
    { name: "Supplier Discovery with Matchory", link: "/" },
    { name: "Consulting", link: "/consulting" },
  ];

  return (
    <div className={`${props.classes} sticky top-[0] z-[1000] 3xl:max-w-[1920px] w-full flex lg2:justify-between items-center md:pt-[21px] md:pb-[21px] lg2:pl-[48px] md:pl-[24px] pl-[4px] lg2:pr-[48px] md:pr-[24px] pr-[12px] items-center md:h-[86px] h-[58px] font-medium bg-[black]`}>
      <div className="lg2:hidden 2xl:mr-[32px] md:mr-[33px]">
        <Image
          onClick={toggleMenu}
          src="/icons/hamburger.svg"
          width={44}
          height={34}
          alt="menu"
          className="cursor-pointer min-w-[26px] max-w-[34px] h-[34px] mr-[7px]"
        />
      </div>
      <Link href={"/"}>
        <Image
          onClick={toggleMenu}
          src="/icons/Logo_new.svg"
          width={130}
          height={42}
          alt="menu"
          className="cursor-pointer md:max-w-[130px] max-w-[80px] md:max-h-[42px] max-h-[26px]"
        />
      </Link>
      {/* <Link href={"/"} className="pt-[10px] typing-effect">
        <div>
          <Image
            ref={refY}
            src="/icons/logo_y.svg"
            width={23}
            height={25}
            alt="logo"
            className="relative inline -top-[4px] cursor-pointer md:max-w-[118px] max-w-[78px] logo-char"
          />
          <Image
            ref={refV}
            src="/icons/logo_v.svg"
            width={27}
            height={25}
            alt="logo_y"
            className="relative inline -top-[4px] cursor-pointermd:max-w-[118px] max-w-[78px] logo-char"
          />
          <Image
            ref={refG}
            src="/icons/logo_g.svg"
            width={26}
            height={34}
            alt="logo"
            className="relative inline -top-[9px] cursor-pointer md:max-w-[118px] max-w-[78px] ml-[2px] logo-char"
          />
          <Image
            ref={refO}
            src="/icons/logo_o.svg"
            width={26}
            height={25}
            alt="logo"
            className="relative inline -top-[4px] cursor-pointer md:max-w-[118px] max-w-[78px] logo-char"
          />
          <Image
            ref={refEl}
            src="/icons/logo_el.svg"
            width={11}
            height={16}
            alt="logo"
            className="relative inline -top-[4px] cursor-pointer md:max-w-[118px] max-w-[78px] top-[-9px] ml-[4px] logo-char"
          />
        </div>
      </Link> */}

      {!active && (
        <ul
          // onMouseEnter={() => setIsSolutionsHovered(link.name === "Solutions")}
          onMouseLeave={() => setIsSolutionsHovered(false)}
          className={`lg2:flex items-center gap-[30px] p-6 3xl:ml-[396px] 2xl:ml-[158px] ml-[0] font-inter ${
            active ? "block" : "hidden"
          }`}
        >
          {links.map((link) => {
            return (
              <div 
                key={link.name} 
                className="relative inline-block text-white"
                onMouseEnter={() => setIsSolutionsHovered(link.name === "Solutions")}
              >
                <Link href={link.link} legacyBehavior>
                  <a
                    onClick={() => {
                      closeMenu;
                      handleLinkClick(link.link);
                    }}
                    className="group"
                  >
                    <div className="relative z-[1] 2xl:text-[16px] text-[14px] leading-[44px]">
                      {link.name}
                    </div>
                    <span
                      className={`absolute z-[0] bottom-[16px] w-full h-1 bg-[#2ECC71] bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100 ${
                        activeLink == link.link
                          ? "!origin-bottom-left scale-x-50"
                          : ""
                      }`}
                    ></span>
                  </a>
                </Link>
                {link.name === "Solutions" && isSolutionsHovered && (
                  <div className="absolute -left-[10px] p-[20px] gap-[20px] flex flex-col mt-2 w-48 bg-[#EAEEF9] rounded-[10px]  z-10">
                    {solutionsSubmenu.map((subItem) => (
                      <Link key={subItem.name} href={subItem.link} legacyBehavior
                        onMouseEnter={() => setIsSolutionsHovered(true)}
                        onMouseLeave={() => setIsSolutionsHovered(false)}
                      >
                        <a className="block text-sm text-black font-[500] hover:text-green" href={subItem.link}>
                          {subItem.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
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
                  src="/icons/Logo_new.svg"
                  width={130}
                  height={42}
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
              watch instructions
              <Image
                src="/icons/watch_instructions.svg"
                width={48}
                height={48}
                alt="logo"
                className="inline"
              />
            </li>
          </ul>
        </>
      )}
      <div className="flex-center gap-[36px] 2lg:ml-[0] ml-[auto]">
        <button
          // className="outlined_btn btn_animated_blue"
          className="uppercase text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] md:p-[12px_34px] p-[8px_12px] md:rounded-[22px] rounded-[16px] bg-blue"
          onClick={handleModal}
        >
          Book Demo
        </button> 
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </div>
  );
};

export default Header;

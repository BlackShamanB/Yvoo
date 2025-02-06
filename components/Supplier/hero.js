"use client";

import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function Hero() {
  const [focusData, setIsFocus] = useState({
    name: false,
    company: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  const handleFocus = (e) => {
    const { id } = e.target;
    setIsFocus({ ...focusData, [id]: true });
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setIsFocus({ ...focusData, [id]: false });
  };
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setServerError("Passwords don't match");
      return;
    }
    if (serverError) setServerError("");
    if (isSuccess) setIsSuccess(false);
    await Auth.signUp({
      username: formData.email,
      password: formData.password,
      attributes: {
        email: formData.email,
        name: formData.name,
        // "custom:mobile_phone": formData.phone,
        "custom:company_name": formData.company,
        "custom:user_type": "yvoo-supplier",
      },
    })
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          window.open("https://searchpro.yvoo.io", "_blank");
        }, 3000);
      })
      .catch((error) => {
        setServerError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 10000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (serverError) {
      setTimeout(() => {
        setServerError("");
      }, 15000);
    }
  }, [serverError]);

  return (
    <div className="supplier-bg-size px-[40px] 2xl:px-[162px] 3xl:px-[202px] w-full bg-left-top bg-cover bg-[length:100%_712px] bg-supplierBg 2xl:bg-supplierBg2xl 3xl:bg-supplierBg3xl bg-no-repeat flex justify-center pt-[78px] 2xl:pt-[156px] pb-[100px] md:pb-[144px] 2xl:pb-[150px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full 3xl:gap-[169px] 2xl:gap-[109px] gap-[103px]">
        <div className="flex flex-col 2xl:gap-[55px] gap-[26px] break-words">
          <h1
            className="uppercase font-inter text-[30px] md:text-[30px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] font-[800] max-w-[530px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            Unlock New Sales
            <br /> Opportunities with{" "}
            <b className="text-[#06D7F9]">YVOO SALES</b>PRO+
          </h1>
          <div
            className="font-[700] text-[16px] leading-[20px] 2xl:text-[24px] 2xl:leading-[30px]"
            data-scroll
            data-scroll-speed="0.15"
          >
            <p>Empower Your Supplier Journey</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="pt-[7px]"
          data-scroll
          data-scroll-speed="0.05"
        >
          <div className="flex flex-col 2xl:gap-[42px] gap-[34px]">
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="name"
                className={`absolute ${
                  focusData["name"] || formData["name"]
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData["name"] && !formData["name"]
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Full Name <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="text"
                id="name"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  "border-color":
                    focusData["name"] || formData["name"]
                      ? "#FFFFFF"
                      : "#FFFFFF80",
                }}
              />
            </div>
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="company"
                className={`absolute ${
                  focusData["company"] || formData["company"]
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData["company"] && !formData["company"]
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Company Name <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="text"
                id="company"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.company}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  "border-color":
                    focusData["company"] || formData["company"]
                      ? "#FFFFFF"
                      : "#FFFFFF80",
                }}
              />
            </div>
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="email"
                className={`absolute ${
                  focusData["email"] || formData["email"]
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData["email"] && !formData["email"]
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Email Address <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="email"
                id="email"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  "border-color":
                    focusData["email"] || formData["email"]
                      ? "#FFFFFF"
                      : "#FFFFFF80",
                }}
              />
            </div>
            {/* <div className="relative flex flex-col gap-3">
              <label
                htmlFor="phone"
                className={`absolute ${
                  focusData['phone'] || formData['phone']
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData['phone'] && !formData['phone']
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Phone <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="phone"
                id="phone"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.phone}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  'border-color': focusData['phone'] || formData['phone'] ? '#FFFFFF' : '#FFFFFF80'
                }}
              />
            </div> */}
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="password"
                className={`absolute ${
                  focusData["password"] || formData["password"]
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData["password"] && !formData["password"]
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Password <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="password"
                id="password"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                value={formData.password}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  "border-color":
                    focusData["password"] || formData["password"]
                      ? "#FFFFFF"
                      : "#FFFFFF80",
                }}
              />
            </div>
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="confirmPassword"
                className={`absolute ${
                  focusData["confirmPassword"] || formData["confirmPassword"]
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !focusData["confirmPassword"] && !formData["confirmPassword"]
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] text-[#FFFFFF50]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Confirm Password <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border-b-[2px] md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[transparent] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                value={formData.confirmPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                  "border-color":
                    focusData["confirmPassword"] || formData["confirmPassword"]
                      ? "#FFFFFF"
                      : "#FFFFFF80",
                }}
              />
            </div>
            {serverError && (
              <p className="min-h-[46px] w-full flex-center mb-3 py-[10px] px-[15px] text-white bg-[#ff0000]">
                {serverError}
              </p>
            )}
            {isSuccess && (
              <div className="min-h-[46px] w-full flex-center mb-3 py-[10px] px-[15px] text-white bg-[#32de84]">
                <p>
                  To confirm your account please login to SearcPro+ app. You
                  will be redirected soon to login form. If not redirected,
                  click{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => {
                      window.open("https://searchpro.yvoo.io/login", "_blank");
                    }}
                  >
                    here
                  </span>
                  .
                </p>
              </div>
            )}
            <button
              disabled={loading}
              type="submit"
              className="filled_btn_primary btn_animated_blue hover:!text-black !text-[#06D7F9] 2xl:!text-[16px] !text-[12px] 2xl:!leading-[20px] !leading-[16px] md:!p-[18px_62px] !p-[8px_30px] !w-[max-content] 2xl:mt-[0] mt-[-10px]"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;

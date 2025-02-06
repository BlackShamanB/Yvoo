"use client";

import { useEffect, useState } from "react";

import { sendEmail } from "../utils/email";

function Contact() {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [inputValueName, setInputValueName] = useState("");
  const [isFocusedCompany, setIsFocusedCompany] = useState(false);
  const [inputValueCompany, setInputValueCompany] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [inputValueMessage, setInputValueMessage] = useState("");

  const handleFocus = (e) => {
    switch (e.target.id) {
      case "name":
        setIsFocusedName(true);
        break;
      case "company":
        setIsFocusedCompany(true);
        break;
      case "email":
        setIsFocusedEmail(true);
        break;
      case "message":
        setIsFocusedMessage(true);
        break;
    }
  };

  const handleBlur = (e) => {
    switch (e.target.id) {
      case "name":
        setIsFocusedName(false);
        break;
      case "company":
        setIsFocusedCompany(false);
        break;
      case "email":
        setIsFocusedEmail(false);
        break;
      case "message":
        setIsFocusedMessage(false);
        break;
    }
  };

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "name":
        setInputValueName(e.target.value);
        break;
      case "company":
        setInputValueCompany(e.target.value);
        break;
      case "email":
        setInputValueEmail(e.target.value);
        break;
      case "message":
        setInputValueMessage(e.target.value);
        break;
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    handleInputChange(e);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (serverError) setServerError("");
    if (isSuccess) setIsSuccess(false);
    try {
      await sendEmail({
        to: "contact@yvoo.io",
        from: formData.email,
        subject: "Contact Yvoo",
        message: `name:\n\n${formData.name}\n\nmessage:\n\n ${formData.message} \n\n company:\n\n ${formData.company}`,
      });

      setIsSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsLoading(false);
    }
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
    <div className="flex flex-col gap-[70px] md:gap-[100px] 2xl:gap-[104px] 3xl:gap-[133px] w-full px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] pt-[98px] md:pt-[154px] 2xl:pt-[212px] pb-[98px] md:pb-[143px] 2xl:pb-[172px] bg-[#131D2A]">
      <div className="flex 2xl:flex-row flex-col 3xl:gap-[277px] 2xl:gap-[117px] md:gap-[58px] gap-[54px]">
        <h1 className="font-inter uppercase text-[#06D7F9] font-[800] text-[30px] md:text-[50px] leading-[34px] md:leading-[54px] text-nowrap"
        data-scroll
        data-scroll-speed="0.15">
          Contact us
        </h1>
        <div className="col-span-2 flex flex-col gap-4 pt-[8px]">
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] font-[400] leading-[20px]"
        data-scroll
        data-scroll-speed="0.12">
            Contact us today to learn more about how we can help your business
            optimize its procurement operations and achieve sustainable success
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}
        data-scroll
        data-scroll-speed="0.1">
        <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:gap-[170px] 2xl:gap-[110px] gap-[40px]">
          <div className="flex flex-col md:gap-[43px] gap-[34px]">
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="name"
                className={`absolute ${
                  isFocusedName || inputValueName
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !isFocusedName && !inputValueName
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Name <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="text"
                id="name"
                className="border-b-2 md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full p-[3px_3px_12px_0] bg-[#131D2A] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="company"
                className={`absolute ${
                  isFocusedCompany || inputValueCompany
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : " top-[0px]"
                } 
                ${
                  !isFocusedCompany && !inputValueCompany
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Company <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="text"
                id="company"
                className="border-b-2 md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full  p-[3px_3px_12px_0] bg-[#131D2A] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.company}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="email"
                className={`absolute ${
                  isFocusedEmail || inputValueEmail
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !isFocusedEmail && !inputValueEmail
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Email <b className="text-[#2ECC71]">*</b>
              </label>
              <input
                type="email"
                id="email"
                className="border-b-2 md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm outline-none focus:border-[#FFFFFF] block w-full  p-[3px_3px_12px_0] bg-[#131D2A] border-[#FFFFFF80] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <div className="relative flex flex-col gap-3">
              <label
                htmlFor="message"
                className={`absolute ${
                  isFocusedMessage || inputValueMessage
                    ? "text-[14px] leading-[18px] font-[400] top-[-22px]"
                    : ""
                } 
                ${
                  !isFocusedMessage && !inputValueMessage
                    ? "md:text-[24px] text-[16px] md:leading-[30px] leading-[20px]"
                    : ""
                }`}
                style={{ transition: "0.2s ease all" }}
              >
                Message <b className="text-[#2ECC71]">*</b>
              </label>
              <textarea
                id="message"
                rows="4"
                className="min-h-[42px] md:max-h-[135px] max-h-[50px] block  p-[3px_3px_12px_0] w-full md:text-[24px] text-[16px] md:leading-[30px] leading-[20px] rounded-sm border-b-2 outline-none bg-[#131D2A] border-[#FFFFFF80] placeholder-gray-400 text-white focus:ring-[#06D7F9] focus:border-[#06D7F9]"
                placeholder=""
                value={formData.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </div>
            {serverError && (
              <p className="min-h-[46px] w-full flex-center mb-3 py-[10px] px-[15px] text-white bg-[#ff0000]">
                {serverError}
              </p>
            )}
            {isSuccess && (
              <p className="min-h-[46px] w-full flex-center mb-3 py-[10px] px-[15px] text-white bg-[#32de84]">
                Your form was successfully submitted!
              </p>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="filled_btn_primary btn_animated_blue hover:!text-[#000] md:!max-w-[190px] !max-w-[111px] md:!p-[18px_62px] !p-[8px_30px] !text-[#06D7F9] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px] disabled:cursor-not-allowed"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;

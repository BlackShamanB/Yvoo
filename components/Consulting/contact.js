"use client";

import { useEffect, useState } from "react";

import { sendEmail } from "../utils/email";

function Contact() {
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
    <div className="flex flex-col gap-[24px] md:gap-[46px] 2xl:gap-[92px] w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[60px] md:py-[74px] 2xl:py-[90px] pb-[120px] bg-[#2F2F2F]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[38px]">
        <h1 className="font-machina uppercase text-[#06D7F9] font-[800] text-[30px] md:text-[40px] leading-[30px] md:leading-[40px]">
          Contact us
        </h1>
        <div className="col-span-2 flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px]">
            Contact us today to learn more about how we can help your business
            optimize its procurement operations and achieve sustainable success
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Name <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="text"
                id="name"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#474747] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder="John"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="company"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Company <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="text"
                id="company"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#474747] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder="Yvoo"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Email <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="email"
                id="email"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#474747] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-[42px] justify-between">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Message <b className="text-[#FF490F]">*</b>
              </label>
              <textarea
                id="message"
                rows="4"
                className="min-h-[42px] max-h-[126px] block p-2.5 w-full text-sm rounded-sm border outline-none bg-[#474747] border-[#909090] placeholder-gray-400 text-white focus:ring-[#06D7F9] focus:border-[#06D7F9]"
                placeholder="Write your message here..."
                value={formData.message}
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
              className="md:self-end filled_btn_primary !max-w-[126px] !text-black disabled:cursor-not-allowed"
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

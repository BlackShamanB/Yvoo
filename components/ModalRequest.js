import { useEffect, useState } from "react";
import Image from "next/image";

import { sendEmail } from "./utils/email";

const ModalRequest = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    job: "",
    phone: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleOnClose = (e) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

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
        subject: "Requesting Demo",
        message: `Dear,\n\n I'm requesting demo from YVOO landing page. My name is ${formData.name}, company name is ${formData.company}, job title is ${formData.job} and my phone number is: ${formData.phone}.\n\n Best regards, ${formData.name}`,
      });

      setIsSuccess(true);
      setFormData({
        email: "",
        name: "",
        company: "",
        job: "",
        phone: "",
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

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-[#212529] bg-opacity-50 text-black z-[1000] flex-center"
      id="modal"
      onClick={handleOnClose}
    >
      <div className="bg-white flex flex-col justify-center relative shadow-[rgba(0, 0, 0, 0.25) 0px 0px 46px 0] w-full md:max-w-[680px] mx-[10px] md:mx-0">
        <button
          disabled={isLoading}
          className="absolute top-[40px] right-[32px] cursor-pointer bg-none outline-none border-none width-[12px] height-[12px] disabled:cursor-not-allowed"
          onClick={onClose}
        >
          <Image
            height={12}
            width={12}
            src={"icons/modal-close.svg"}
            alt="close-btn"
            className="bg-none"
          />
        </button>
        <div className="w-full py-[40px] px-[30px] md:py-[92px] md:px-[112px] [&>p]:mb-[5px]">
          <h3 className="font-[700] uppercase text-[19px] md:text-[24px] leading-[1.1] mb-[22px]">
            Request demo
          </h3>
          <p className="font-[400] text-[16px] leading-[19px]">
            Contact us for a product demo
          </p>
          <p className="font-[400] text-[16px] leading-[19px]">
            Or send us an email to{" "}
            <a className="text-[#06d7f9]" href="mailto:contact@yvoo.io">
              contact@yvoo.io
            </a>
          </p>
          <form className="mt-[10px] flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Your e-mail*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-[47px] mb-[10px] px-[27px] border border-[#cfcfcf] text-[16px] font-[400] outline-none"
            />
            <input
              type="text"
              id="name"
              placeholder="Full name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-[47px] mb-[10px] px-[27px] border border-[#cfcfcf] text-[16px] font-[400] outline-none"
            />
            <input
              type="text"
              id="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleChange}
              className="w-full h-[47px] mb-[10px] px-[27px] border border-[#cfcfcf] text-[16px] font-[400] outline-none"
            />
            <input
              type="text"
              id="job"
              placeholder="Job title"
              value={formData.job}
              onChange={handleChange}
              className="w-full h-[47px] mb-[10px] px-[27px] border border-[#cfcfcf] text-[16px] font-[400] outline-none"
            />
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[47px] mb-[10px] px-[27px] border border-[#cfcfcf] text-[16px] font-[400] outline-none"
            />
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
              className="outlined_btn !border md:!max-w-[50%] disabled:border-[rgb(207, 207, 207)] disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              Request Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalRequest;

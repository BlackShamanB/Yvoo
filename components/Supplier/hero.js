"use client";

import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function Hero() {
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
        "custom:mobile_phone": formData.phone,
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
    <div className="supplier-bg-size px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] w-full bg-top customxs:bg-center bg-[length:100%_712px] customxs:bg-cover h-auto md:h-[712px] md2:h-[677px] xl:h-[677px] 2xl:h-[781px] bg-supplierBgsm customxs:bg-supplierBgmd md2:bg-supplierBg2xl 2xl:bg-supplierBg bg-no-repeat flex justify-center pt-[58px] md:pt-[68px] 2xl:pt-[96px] pb-[68px] md:pb-[144px] 2xl:pb-[184px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-[40px]">
        <div className="flex flex-col gap-[25px] break-words md:justify-center mt-[26px] md:mt-none">
          <h1 className="hidden md:block uppercase font-machina text-[30px] md:text-[40px] font-[800] leading-[30px] md:leading-[40px] max-w-[880px]">
            Unlock New Sales
            <br /> Opportunities with
            <br /> <b className="text-[#06D7F9]">YVOO SALES</b>PRO+
          </h1>
          <h1 className="md:hidden uppercase font-machina text-[30px] md:text-[40px] font-[800] leading-[30px] md:leading-[40px] max-w-[880px]">
            Unlock
            <br /> New Sales Opportunities with
            <br />
            <b className="text-[#06D7F9]">YVOO SALES</b>PRO+
          </h1>
          <div className="hidden md:block font-[700] text-[18px] leading-[18px] md:text-[24px] md:leading-[24px]">
            <p>Empower Your Supplier Journey</p>
          </div>
          <div className="md:hidden font-[700] text-[18px] leading-[18px] md:text-[24px] md:leading-[24px]">
            <p>
              Empower Your
              <br /> Supplier Journey
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
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
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
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
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
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
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="phone"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Phone <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="phone"
                id="phone"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="password"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Password <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="password"
                id="password"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="confirmPassword"
                className="font-[400] text-[14px] leading-[13px]"
              >
                Confirm Password <b className="text-[#FF490F]">*</b>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border text-sm rounded-sm outline-none focus:border-[#06D7F9] block w-full p-2.5 bg-[#2D3C40] border-[#909090] placeholder-gray-400 text-white active:ring-[#06D7F9]"
                value={formData.confirmPassword}
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
              className="filled_btn_primary !text-black"
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

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./lib/storageHelper";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(
    getLocalStorage("cookie_consent", null)
  );

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div className={`${cookieConsent === null ? "block" : "hidden"}`}>
      <div
        className={`my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 flex justify-between items-center flex-col sm:flex-row gap-4 bg-black/90 rounded-lg shadow shadow-white/20 z-[1000]`}
      >
        <div className="text-center">
          <Link href="/info/cookies">
            <p>
              We use <span className="font-bold text-primary">cookies</span> on
              our site.
            </p>
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
            onClick={() => setCookieConsent(false)}
          >
            Decline
          </button>
          <button
            className="filled_btn_primary !text-sm !px-[16px] !py-0 !capitalize"
            onClick={() => setCookieConsent(true)}
          >
            Allow Cookies
          </button>
        </div>
      </div>
    </div>
  );
}

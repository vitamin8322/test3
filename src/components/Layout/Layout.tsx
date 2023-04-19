import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LS_LANG } from "../../utils/constants";
import { LangContext } from "../../App";

type Props = {};

const Layout = (props: Props) => {
  const { locale, setLocale } = useContext(LangContext);
  const handleLanguageChange = (lang: string) => {
    localStorage.setItem(LS_LANG, lang);
    setLocale(lang);
  };
  
  return (
    <div className="flex justify-between">
      <div className="flex mt-8">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `active ${locale === "vi" ? "font-bold" : ""}`
              : "mx-3"
          }
          to="/login1"
        >
          No React Hook Form
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `active ${locale === "vi" ? "font-bold" : ""}`
              : "mx-3"
          }
          to="/login2"
        >
          React Hook Form
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? `active ${locale === "vi" ? "font-bold" : ""}`
              : "mx-3"
          }
          to="/register"
        >
          Register
        </NavLink>
      </div>
      <div className="inline-flex mt-8">
        <button
          onClick={() => handleLanguageChange("vi")}
          className={`mx-3 ${locale === "vi" ? "choose-lang" : ""} py-2 px-4`}
        >
          vi
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          className={`mx-3 ${locale === "en" ? "choose-lang" : ""} py-2 px-4` }
        >
          en
        </button>
      </div>
    </div>
  );
};

export default Layout;

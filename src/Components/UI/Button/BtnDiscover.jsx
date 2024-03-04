import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import { FaArrowDown } from "react-icons/fa6";
import "../../Section/TextHome/MainBlocsHome.jsx";

const Button = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const contactSectionRef = useRef(null);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, []);
  return (
    // <NavLink
    //   onClick={SectionToScroll}
    //   className={`bg-fff6e4 border-black border-4 inline-flex items-center gap-2 px-8 py-3 shadow-2xl rounded-full transform active:scale-75 transition-transform animate-bounce ${
    //     isDarkMode ? "text-black" : "text-fff6e4"
    //   }`}
    // >
    //   <span className={`text-3xl mr-3 font-semibold`}>
    //     {translations[language].btnDiscoverFr}
    //     {translations[language].btnDiscoverEn}
    //   </span>
    //   <FaArrowRight className={`h-10 w-10`} />
    // </NavLink>
    <div className={`absolute bottom-32 lg:bottom-10`}>
      <button>
        <div ref={contactSectionRef} className={`animate-bounce`}>
          <div
            className={`border-black border-4 p-2 h-53 rounded-full shadow-sm transform active:scale-75 transition-transform ${
              isDarkMode ? "bg-fff6e4" : "bg-061628"
            }`}
          >
            <FaArrowDown className={`text-black h-10 w-10`} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import { FaArrowDown } from "react-icons/fa6";
import "../../Section/TextHome/MainBlocsHome.jsx";

const Button = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [scrollNavbar, setScrollNavbar] = useState();
  const SectionToScroll = () => {
    const contactSection = document.getElementById("team");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <div className={`absolute bottom-36 lg:bottom-20`}>
    //   <NavLink
    //     to="/services"
    //     onClick={SectionToScroll}
    //     className={`bg-fff6e4 inline-flex items-center gap-2 px-8 py-3 shadow-2xl rounded-full transform active:scale-75 transition-transform ${
    //       isDarkMode ? "text-black" : "text-fff6e4"
    //     }`}
    //   >
    //     <span className={`text-3xl mr-3 font-semibold`}>
    //       {translations[language].btnDiscoverFr}
    //       {translations[language].btnDiscoverEn}
    //     </span>
    //     <FaArrowRight className={`h-10 w-10`} />
    //   </NavLink>
    // </div>
    <div className={`absolute bottom-36 lg:bottom-20`}>
      <button>
        <NavLink to="/services">
          <div
            className={`p-2 h-53 rounded-full shadow-lg transform active:scale-75 transition-transform animate-bounce ${
              isDarkMode ? "bg-fff6e4" : "bg-061628"
            }`}
          >
            <FaArrowRight className={`text-black h-10 w-10`} />
          </div>
        </NavLink>
      </button>
    </div>
  );
};

export default Button;

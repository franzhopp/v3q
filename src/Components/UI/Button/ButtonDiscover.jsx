import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
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
    <NavLink
      onClick={SectionToScroll}
      className={`bg-FFF6E4 border-black border-4 inline-flex items-center gap-2 px-8 py-3 shadow-2xl rounded-full transform active:scale-75 transition-transform ${
        isDarkMode ? "text-black" : "text-FFF6E4"
      }`}
    >
      <span className="text-xl sm:text-3xl mr-3 font-semibold">
        {translations[language].btnDiscoverFr}
        {translations[language].btnDiscoverEn}
      </span>
      <FaArrowRight className="h-5 w-5 sm:h-8 sm:w-8" />
    </NavLink>
  );
};

export default Button;

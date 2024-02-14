import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { FaArrowRight } from "react-icons/fa";
import translations from "../translate.jsx";

const ButtonQuote = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className={`flex justify-center lg:justify-end px-10 ${
        isDarkMode ? "text-black" : "text-fff6e4"
      }`}
    >
      <NavLink
        to="/quote"
        className={`bg-fff6e4 border-black border-4 inline-flex items-center rounded-full shadow-2xl px-8 py-3 transform active:scale-75 transition-transform`}
      >
        <span className={`text-2xl lg:text-3xl font-extrabold pr-3`}>
          {" "}
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </span>
        <FaArrowRight className={`h-10 w-10`} />
      </NavLink>
    </div>
  );
};

export default ButtonQuote;

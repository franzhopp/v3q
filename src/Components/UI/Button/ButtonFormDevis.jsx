import translations from "../translate.jsx";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ButtonDevis = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className={`flex justify-center sm:justify-end mt-10 px-10 ${
        isDarkMode ? "text-black" : "text-FFF6E4 "
      }`}
    >
      <NavLink
        to="/devis"
        className="inline-flex items-center gap-2 rounded-full border-black border-4 bg-FFF6E4 px-8 py-3"
      >
        <span className="text-2xl sm:text-3xl mr-3 font-semibold">
          {" "}
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </span>
        <FaArrowRight className="h-10 w-10" />
      </NavLink>
    </div>
  );
};

export default ButtonDevis;

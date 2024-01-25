import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ButtonSend = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex justify-center">
        <NavLink className="inline-flex items-center gap-2 rounded-full shadow-2xl bg-black px-8 py-3 text-FFF6E4 transition-transform transform hover:scale-105">
          <span className="text-3xl mr-3 font-semibold">
            {translations[language].btnSendFr}
            {translations[language].btnSendEn}{" "}
          </span>
          <FaArrowRight className="h-10 w-10" />
        </NavLink>
      </div>
    </>
  );
};

export default ButtonSend;

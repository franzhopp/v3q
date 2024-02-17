import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const ButtonSend = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex justify-center">
        <NavLink className="inline-flex items-center gap-2 rounded-full shadow-2xl bg-black border-fff6e4 border-4 px-8 py-3 text-fff6e4 transform active:scale-75 transition-transform">
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

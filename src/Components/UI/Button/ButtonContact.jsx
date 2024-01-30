import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import Artwork from "../../../assets/artworkheart.png";
import translations from "../translate.jsx";

const ButtonContactServices = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex justify-center px-10">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 rounded-full border-black border-4 bg-black px-8 py-3 text-fff6e4 transform active:scale-75 transition-transform"
        >
          <span className="text-2xl sm:text-3xl mr-3 font-semibold">
            {translations[language].titleContactFr}
            {translations[language].titleContactEn}
          </span>
          <FaArrowRight className="h-10 w-10" />
        </NavLink>
      </div>
      <img src={Artwork} alt="Icône Gears" className="mt-10" />
    </>
  );
};

export default ButtonContactServices;

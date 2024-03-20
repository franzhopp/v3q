import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import Artwork from "../../../assets/Artwork/ArtworkHeart.png";
import translations from "../translate.jsx";

const ButtonContactServices = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={`flex justify-center px-10`}>
        <NavLink
          to="/"
          className={`bg-black text-fff6e4 inline-flex items-center gap-2 rounded-full px-8 py-3 relative transform active:scale-75 transition-transform`}
        >
          <span className={`text-2xl lg:text-3xl font-semibold pr-3`}>
            {translations[language].btnContact}
            {translations[language].titleContactEn}
          </span>
          <FaArrowRight className={`h-10 w-10`} />
        </NavLink>
      </div>
      <div className={`py-10`}>
        <img src={Artwork} alt="Icône Artwork" />
      </div>
    </>
  );
};

export default ButtonContactServices;

import { useTheme } from "../../context/ThemeProvider.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import SvgPoint from "../Svg/SvgPoint.jsx";
import ButtonContactServices from "../../Components/UI/Button/BtnContact.jsx";
import Artwork from "../../assets/Artwork/ArtworkHeart.png";
import ArtworkMobile from "../../assets/Artwork/ArtworkMobile.png";

const TextReturnContact = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <div className={`pt-44`}>
      <div className={`flex justify-center`}>
        <SvgPoint />
      </div>
      <div
        className={`flex justify-center ${
          isDarkMode ? "text-black" : "text-fff6e4 "
        }`}
      >
        <div className={`w-96 lg:w-1/2 py-10`}>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className={`text-center text-2xl font-extrabold px-5`}
          >
            {translations[language].questionServicesFr}
            {translations[language].questionServicesEn}
          </p>
        </div>
      </div>
      <div className="relative pt-24">
        <div className={``}>
          <img
            src={Artwork}
            alt="Icône Artwork"
            className={`relative bottom-32 sm:flex hidden`}
          />
        </div>
        <div className={``}>
          <img
            src={ArtworkMobile}
            alt="Icône Artwork"
            className={`relative bottom-56 sm:hidden flex`}
          />
        </div>
      </div>
      <ButtonContactServices />
    </div>
  );
};

export default TextReturnContact;

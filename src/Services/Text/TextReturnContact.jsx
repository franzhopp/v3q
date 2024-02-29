import { useTheme } from "../../context/ThemeProvider.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import SvgPoint from "../Svg/SvgPoint.jsx";
import ButtonContactServices from "../../Components/UI/Button/BtnContact.jsx";

const TextReturnContact = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <div className={`pt-20`}>
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
      <ButtonContactServices />
    </div>
  );
};

export default TextReturnContact;

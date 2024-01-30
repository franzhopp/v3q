import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import SvgPoint from "../Svg/SvgPoint.jsx";
import translations from "../translate.jsx";
import ButtonContact from "../../UI/Button/ButtonContact.jsx";

const TextReturnContact = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="pb-10">
        <div className="flex justify-center pt-20">
          <SvgPoint />
        </div>
        <div
          className={`flex justify-center ${
            isDarkMode ? "text-black" : "text-fff6e4 "
          }`}
        >
          <div className="w-96 sm:w-1/2 mt-10">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-center text-2xl font-extrabold px-5"
            >
              {translations[language].questionServicesFr}
              {translations[language].questionServicesEn}
            </p>
          </div>
        </div>
      </div>
      <ButtonContact />
    </>
  );
};

export default TextReturnContact;

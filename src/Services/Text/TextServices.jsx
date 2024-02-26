import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useTheme } from "../../context/ThemeProvider.jsx";
import translations from "../translate.jsx";

const TextServices = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`flex justify-center pt-16 ${
        isDarkMode ? "text-black" : " text-fff6e4"
      }`}
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`w-96 xl:w-1/3 px-5`}
      >
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-center text-2xl font-extrabold`}
        >
          {translations[language].textServices1Fr}
          {translations[language].textServices1En}
        </p>
      </div>
    </div>
  );
};

export default TextServices;

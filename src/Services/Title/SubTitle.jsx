import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useTheme } from "../../context/ThemeProvider.jsx";
import translations from "../translate.jsx";

const SubTitle = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className={`flex justify-center ${
        isDarkMode ? "text-black" : "text-fff6e4"
      }`}
    >
      <div className={`w-96 px-5`}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-center`}
        >
          {translations[language].describeServices1Fr}
          {translations[language].describeServices1En}{" "}
          <span className={`font-extrabold`}>
            {translations[language].describeServicesBold1Fr}
            {translations[language].describeServicesBold1En}
          </span>{" "}
          {translations[language].wordServicesFr}{" "}
          <span className={`font-extrabold`}>
            {translations[language].describeServices2Fr}
            {translations[language].describeServices2En}
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default SubTitle;

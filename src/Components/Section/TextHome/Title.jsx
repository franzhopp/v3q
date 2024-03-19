import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleTextHome = () => {
  const { language } = useLanguage();
  return (
    <div className={`w-80 mb-5 lg:mb-0`}>
      <p
        data-aos="fade-left"
        className={`text-3xl lg:text-4xl lg:text-left text-center font-extrabold px-5 lg:px-0`}
      >
        {translations[language].titleSectionFr}
        {translations[language].titleSectionEn}
      </p>
    </div>
  );
};

export default TitleTextHome;

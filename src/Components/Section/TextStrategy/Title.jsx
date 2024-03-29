import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleStrategy = () => {
  const { language } = useLanguage();
  return (
    <h1
      className={`text-fff6e4 text-left text-3xl lg:text-4xl font-extrabold`}
      data-aos="fade-right"
    >
      {translations[language].titleSecondSectionFr}
      {translations[language].titleSecondSectionEn}
    </h1>
  );
};

export default TitleStrategy;

import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleStrategy = () => {
  const { language } = useLanguage();
  return (
    <h3
      className="text-left ml-5 sm:ml-10 font-extrabold text-3xl text-fff6e4"
      data-aos="fade-right"
    >
      {translations[language].titleSecondSectionFr}
      {translations[language].titleSecondSectionEn}
    </h3>
  );
};

export default TitleStrategy;

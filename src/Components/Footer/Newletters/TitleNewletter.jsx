import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleNewletter = () => {
  const { language } = useLanguage();
  return (
    <div className="text-fff6e4 font-inter text-center text-sm pt-10">
      {translations[language].newletterFr}
      {translations[language].newletterEn}
    </div>
  );
};

export default TitleNewletter;

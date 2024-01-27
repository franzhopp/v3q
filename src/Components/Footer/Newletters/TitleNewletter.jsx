import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleNewletter = () => {
  const { language } = useLanguage();
  return (
    <div className="font-inter text-sm text-center text-FFF6E4 pt-10">
      {translations[language].newletterFr}
      {translations[language].newletterEn}
    </div>
  );
};

export default TitleNewletter;

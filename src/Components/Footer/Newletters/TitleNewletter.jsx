import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleNewletter = () => {
  const { language } = useLanguage();
  return (
    <div className={`text-fff6e4  text-center text-sm font-inter pt-10`}>
      {translations[language].newletterFr}
      {translations[language].newletterEn}
    </div>
  );
};

export default TitleNewletter;

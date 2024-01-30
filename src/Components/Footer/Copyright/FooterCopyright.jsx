import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const Copyright = () => {
  const { language } = useLanguage();
  return (
    <p className="mx-auto max-w-md text-center">
      <div className="text-center tracking-tighter text-fff6e4 mt-8">
        &copy; {translations[language].copy1Fr}
        {translations[language].copy1En} l'agence.{" "}
        {translations[language].copy2Fr}
        {translations[language].copy2En}
      </div>
    </p>
  );
};

export default Copyright;

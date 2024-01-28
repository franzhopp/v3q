import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleTextHome = () => {
  const { language } = useLanguage();
  return (
    <div className="w-80 relative">
      <p
        data-aos="fade-left"
        className="mt-10 font-extrabold text-4xl sm:text-left text-center relative"
      >
        {translations[language].titleSectionFr}
        {translations[language].titleSectionEn}
      </p>
    </div>
  );
};

export default TitleTextHome;

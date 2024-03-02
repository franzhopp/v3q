import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleTextHome = () => {
  const { language } = useLanguage();
  return (
    <div className="w-80">
      <p
        data-aos="fade-left"
        className="pt-10 text-3xl lg:text-4xl lg:text-left text-center font-extrabold"
      >
        {translations[language].titleSectionFr}
        {translations[language].titleSectionEn}
      </p>
    </div>
  );
};

export default TitleTextHome;

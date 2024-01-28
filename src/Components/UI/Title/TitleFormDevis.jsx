import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
const TitleDevis = () => {
  const { language } = useLanguage();
  return (
    <div className="image-navi-studio-title-devis mt-20 pb-24">
      <div
        className="pt-28 text-FFF6E4 sm:ml-44 sm:text-left text-center font-extrabold"
        data-aos="fade-left"
      >
        <p className="sm:mt-4 mr-5 text-4xl sm:text-6xl">
          {" "}
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </p>
      </div>
    </div>
  );
};

export default TitleDevis;

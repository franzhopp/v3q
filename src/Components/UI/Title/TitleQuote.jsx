import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleQuote = () => {
  const { language } = useLanguage();
  return (
    <div className="BgTitleQuote bg-cover py-32">
      <div
        className="flex justify-center lg:justify-start text-fff6e4 font-extrabold pt-20"
        data-aos="fade-left"
      >
        <p className="pt-5 px-32 text-4xl lg:text-6xl">
          {" "}
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </p>
      </div>
    </div>
  );
};

export default TitleQuote;

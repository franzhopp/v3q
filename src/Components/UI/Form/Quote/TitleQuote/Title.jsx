import { useLanguage } from "../../../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleQuoteBloc = () => {
  const { language } = useLanguage();
  return (
    <p
      data-aos="fade-right"
      className="text-fff6e4 text-2xl sm:text-3xl font-extrabold max-w-xl ml-6 sm:ml-0"
    >
      {translations[language].titleInfoFreeFr}
      {translations[language].titleInfoFreeEn}
    </p>
  );
};

export default TitleQuoteBloc;

import { useLanguage } from "../../../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleQuoteBloc = () => {
  const { language } = useLanguage();
  return (
    <p
      data-aos="fade-right"
      className={`text-black text-2xl lg:text-3xl font-extrabold ml-6 lg:ml-0`}
    >
      {translations[language].titleInfoFreeFr}
      {translations[language].titleInfoFreeEn}
    </p>
  );
};

export default TitleQuoteBloc;

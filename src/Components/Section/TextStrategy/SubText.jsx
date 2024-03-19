import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import translations from "../translate.jsx";

const SubTextStrategy = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={`w-80 mt-5`}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-fff6e4 mt-0 lg:mt-5 text-arial`}
        >
          <h1 className={`text-4xl FontNumber font-semibold pb-5`}>01.</h1>
          <span className={`font-extrabold`}>
            <RiBardLine className={`inline`} />{" "}
            {translations[language].wordBoldSecondSectionFr}
            {translations[language].wordBoldSecondSectionEn}
          </span>{" "}
          {translations[language].textSecondSectionWithoutBoldFr}
          {translations[language].textSecondSectionWithoutBoldEn}{" "}
          <span className={`font-extrabold`}>
            {translations[language].wordSecondSectionBold2Fr}
            {translations[language].wordSecondSectionBold2En}
          </span>
          .
        </p>
      </div>
      <div className={`w-80 mt-5`}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-fff6e4 mt-2 text-arial`}
        >
          <h1 className={`text-4xl FontNumber font-semibold pb-5`}>02.</h1>
          <span className={`font-extrabold`}>
            <RiBardLine className={`inline`} />{" "}
            {translations[language].wordBoldSecondSection2Fr}
            {translations[language].wordBoldSecondSection2En}
          </span>{" "}
          {translations[language].textSecondSectionWithoutBold2Fr}
          {translations[language].textSecondSectionWithoutBold2En}{" "}
          <span className={`font-extrabold`}>
            {translations[language].wordSecondSectionBold3Fr}
            {translations[language].wordSecondSectionBold3En}
          </span>
          .
        </p>
      </div>
      <div className={`w-80 mt-5`}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-fff6e4 mt-2 text-arial`}
        >
          <h1 className={`text-4xl FontNumber font-semibold pb-5`}>03.</h1>
          <span className={`font-extrabold`}>
            <RiBardLine className={`inline`} />{" "}
            {translations[language].wordBoldSecondSection3Fr}
            {translations[language].wordBoldSecondSection3En}
          </span>{" "}
          {translations[language].textSecondSectionWithoutBold3Fr}
          {translations[language].textSecondSectionWithoutBold3En}{" "}
        </p>
      </div>
    </>
  );
};

export default SubTextStrategy;

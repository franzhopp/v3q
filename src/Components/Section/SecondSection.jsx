import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";

const SecondSection = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-C22E2E h-1/2 border-b border-gray-400">
      <div className="pt-32 pb-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="text-left ml-5 sm:ml-10 font-extrabold text-3xl text-FFF6E4"
          data-aos="fade-right"
        >
          {translations[language].titleSecondSectionFr}
          {translations[language].titleSecondSectionEn}
          <div className="flex justify-start">
            <span className="absolute w-80 h-1 bg-FFF6E4"></span>
          </div>
        </h3>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -left-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">01.</h1>
              <span className="font-extrabold">
                {translations[language].wordBoldSecondSectionFr}
                {translations[language].wordBoldSecondSectionEn}
              </span>{" "}
              {translations[language].textSecondSectionWithoutBoldFr}
              {translations[language].textSecondSectionWithoutBoldEn}{" "}
              <span className="font-extrabold">
                {translations[language].wordSecondSectionBold2Fr}
                {translations[language].wordSecondSectionBold2En}
              </span>
              .
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">02.</h1>
              <span className="font-extrabold">
                {translations[language].wordBoldSecondSection2Fr}
                {translations[language].wordBoldSecondSection2En}
              </span>{" "}
              {translations[language].textSecondSectionWithoutBold2Fr}
              {translations[language].textSecondSectionWithoutBold2En}{" "}
              <span className="font-extrabold">
                {translations[language].wordSecondSectionBold3Fr}
                {translations[language].wordSecondSectionBold3En}
              </span>
              .
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -right-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">03.</h1>
              <span className="font-extrabold">
                {translations[language].wordBoldSecondSection3Fr}
                {translations[language].wordBoldSecondSection3En}
              </span>{" "}
              {translations[language].textSecondSectionWithoutBold3Fr}
              {translations[language].textSecondSectionWithoutBold3En}{" "}
            </p>
          </div>
          <div className="flex justify-center mt-16">
            <a
              href="/ethics"
              className="text-FFF6E4 font-extrabold underline transition hover:text-0C3E78"
            >
              › Découvrir Nos Valeurs ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

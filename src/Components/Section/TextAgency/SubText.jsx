import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import translations from "../translate.jsx";

const SubTextAgency = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-0C3E78 py-24 px-4 sm:px-6 lg:px-8">
      <div className="pt-3 pb-16 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        <div className="w-80 mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 text-arial"
          >
            <h1 className="text-4xl number font-semibold pb-5">04.</h1>
            <span className="font-extrabold">
              <RiBardLine className="inline" />{" "}
              {translations[language].textSectionAgencyBold1Fr}
              {translations[language].textSectionAgencyBold1En}{" "}
              <span>navi studio.™</span> ?{" "}
              {translations[language].textSectionAgencyBold2Fr}
              {translations[language].textSectionAgencyBold2En}{" "}
            </span>
            {translations[language].textSectionAgencyWithoutBold2Fr}
            {translations[language].textSectionAgencyWithoutBold2En}
          </p>
        </div>
        <div className="w-80 mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 text-arial"
          >
            <h1 className="text-4xl number font-semibold pb-5">05.</h1>
            <span className="font-extrabold">
              <RiBardLine className="inline" />{" "}
              {translations[language].textSectionAgencyBold3Fr}
              {translations[language].textSectionAgencyBold3En}{" "}
            </span>
            {translations[language].textSectionAgencyBold4Fr}
            {translations[language].textSectionAgencyBold4En}{" "}
            <span className="font-extrabold">
              {translations[language].textSectionAgencyBold5Fr}
              {translations[language].textSectionAgencyBold5En}
            </span>
          </p>{" "}
        </div>
        <div className="w-80 mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 text-arial"
          >
            <h1 className="text-4xl number font-semibold pb-5">06.</h1>
            <span className="font-extrabold">
              <RiBardLine className="inline" />{" "}
              {translations[language].textSectionAgencyBold6Fr}
              {translations[language].textSectionAgencyBold6En}{" "}
            </span>
            {translations[language].textSectionAgencyBold7Fr}
            {translations[language].textSectionAgencyBold7En}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubTextAgency;

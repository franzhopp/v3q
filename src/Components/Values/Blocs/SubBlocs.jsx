import { useLanguage } from "../../../context/LanguageProvider";
import translations from "../translate.jsx";
import { RiBardLine } from "react-icons/ri";

const SubBlocs = () => {
  const { language } = useLanguage();
  return (
    <div className="text-center">
      <h1
        data-aos="fade-right"
        className="font-extrabold font-inter text-2xl sm:text-4xl"
      >
        {" "}
        {translations[language].titleWorkEthicsFr}
        {translations[language].titleWorkEthicsEn}{" "}
      </h1>
      <div className="flex justify-center">
        <span className="absolute w-48 h-1 bg-e18ab0"></span>
      </div>
      <div className="flex justify-center px-3 pt-6">
        <div className="rounded-lg shadow-md w-96 2xl:w-1/3 sm:px-0 px-3 transition-transform transform hover:scale-90">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className=" text-center p-5 mt-10"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].describe4EthicsWorkFr}
            {translations[language].describe4EthicsWorkEn}{" "}
            <span className="font-extrabold">
              {translations[language].describe4BoldEthicsWorkFr}
              {translations[language].describe4BoldEthicsWorkEn}{" "}
            </span>
            {translations[language].describeWithoutBold4Fr}
            {translations[language].describeWithoutBold4En}{" "}
            <span className="font-extrabold">
              {translations[language].describe4Bold4Fr}
              {translations[language].describe4Bold4En}
            </span>
          </p>
          <div className="text-transparent mb-6"></div>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center p-5 mb-10"
          >
            {translations[language].describe5EthicsWorkFr}
            {translations[language].describe5EthicsWorkEn}{" "}
            <span className="font-extrabold">
              {translations[language].describe5BoldEthicsWorkFr}
              {translations[language].describe5BoldEthicsWorkEn}{" "}
            </span>
            {translations[language].describeWithoutBold5Fr}
            {translations[language].describeWithoutBold5En}{" "}
            <span className="font-extrabold">
              {translations[language].describe5Bold5Fr}
              {translations[language].describe5Bold5En}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBlocs;

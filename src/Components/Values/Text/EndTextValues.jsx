import { useLanguage } from "../../../context/LanguageProvider";
import translations from "../translate.jsx";
import ImgLogo from "../../../assets/Logo/MainLogoNaviStudio.png";
import { RiBardLine } from "react-icons/ri";

const EndTextValues = () => {
  const { language } = useLanguage();
  return (
    <div className="text-center">
      <h1
        data-aos="fade-left"
        className="text-fff6e4 font-extrabold text-2xl sm:text-4xl mb-10 mt-20"
      >
        <div className="flex justify-center">
          <h1
            data-aos="fade-left"
            className="px-10 font-inter mt-4 sm:mt-3 text-3xl sm:text-4xl"
          >
            {translations[language].titleTrust1Fr}
            {translations[language].titleTrust1En}{" "}
            <span>
              <img
                src={ImgLogo}
                className="h-20 sm:h-24 mb-4 mr-1 mt-3 inline"
                alt="Icône navi studio."
              />
            </span>{" "}
            {translations[language].titleTrust2En} 🙏{" "}
          </h1>
        </div>
      </h1>
      <div className="flex justify-center">
        <div className="w-full 2xl:w-1/3 sm:px-5 px-10">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-fff6e4 text-center"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].describe6EthicsWorkFr}
            {translations[language].describe6EthicsWorkEn}{" "}
            <span className="font-extrabold">
              {translations[language].describe6BoldEthicsWorkFr}
              {translations[language].describe6BoldEthicsWorkEn}{" "}
            </span>
            {translations[language].describeWithoutBold6Fr}
            {translations[language].describeWithoutBold6En}{" "}
            <span className="font-extrabold">
              {translations[language].describe6Bold6Fr}
              {translations[language].describe6Bold6En}
            </span>
          </p>
          <div className="text-transparent mb-6"></div>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className=" text-fff6e4 text-center mb-10"
          >
            {translations[language].describe7EthicsWorkFr}
            {translations[language].describe7EthicsWorkEn}{" "}
            <span className="font-extrabold">
              {translations[language].describe7BoldEthicsWorkFr}
              {translations[language].describe7BoldEthicsWorkEn}{" "}
            </span>
            {translations[language].describeWithoutBold7Fr}
            {translations[language].describeWithoutBold7En}{" "}
            <span className="font-extrabold">
              {translations[language].describe7Bold7Fr}
              {translations[language].describe7Bold7En}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndTextValues;

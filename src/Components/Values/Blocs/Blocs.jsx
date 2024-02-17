import { useLanguage } from "../../../context/LanguageProvider";
import { useTheme } from "../../../context/ThemeProvider";
import translations from "../translate.jsx";
import { RiBardLine } from "react-icons/ri";

const Blocs = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const text = "01.";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  const text2 = "02.";
  const letters2 = text2.split("");
  const animationConfig2 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  const text3 = "03.";
  const letters3 = text3.split("");
  const animationConfig3 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  return (
    <>
      <div
        class={`mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6 ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <div className="p-6 rounded-lg shadow-md">
          <h2
            data-aos="fade-left"
            className="text-8xl FontNumber text-e18ab0 font-bold mb-2"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig[index].dataAos}
                data-aos-delay={animationConfig[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </h2>
          <p className="text-xl font-inter font-extrabold">
            <RiBardLine className="inline" />{" "}
            {translations[language].title1EthicsFr}
            {translations[language].title1EthicsEn}
          </p>
          <span className="absolute w-48 h-1 bg-e18ab0"></span>
          <div className="w-72 mt-5">
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              {translations[language].describe1EthicsFr}
              {translations[language].describe1EthicsEn}
              <span className="font-extrabold">
                {" "}
                {translations[language].describe1BoldEthicsFr}
                {translations[language].describe1BoldEthicsEn}
              </span>{" "}
              {translations[language].describeWithoutBold1Fr}
              {translations[language].describeWithoutBold1En}
              <span className="font-extrabold">
                {" "}
                {translations[language].describe1Bold1Fr}
                {translations[language].describe1Bold1En}
              </span>
            </p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-md">
          <h2
            data-aos="fade-right"
            className="text-8xl FontNumber text-e18ab0 font-bold mb-2"
          >
            {letters2.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig2[index].dataAos}
                data-aos-delay={animationConfig2[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </h2>
          <p className="text-xl font-inter font-extrabold">
            <RiBardLine className="inline" />{" "}
            {translations[language].title2EthicsFr}
            {translations[language].title2EthicsEn}
          </p>
          <span className="absolute w-48 h-1 bg-e18ab0"></span>
          <div className="w-72 mt-5">
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              {translations[language].describe2EthicsFr}
              {translations[language].describe2EthicsEn}{" "}
              <span className="font-extrabold">
                {translations[language].describe2BoldEthicsFr}
                {translations[language].describe2BoldEthicsEn}{" "}
              </span>
              {translations[language].describeWithoutBold2Fr}
              {translations[language].describeWithoutBold2En}
            </p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-md">
          <h2
            data-aos="fade-left"
            className="text-8xl FontNumber text-e18ab0 font-bold mb-2"
          >
            {letters3.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig3[index].dataAos}
                data-aos-delay={animationConfig3[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </h2>
          <p className=" text-xl font-inter font-extrabold">
            <RiBardLine className="inline" /> Passion & Motivation
          </p>
          <span className="absolute w-48 h-1 bg-e18ab0"></span>
          <div className="w-72 mt-5">
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              {translations[language].describe3EthicsFr}
              {translations[language].describe3EthicsEn}{" "}
              <span className="font-extrabold">
                {translations[language].describe3BoldEthicsFr}
                {translations[language].describe3BoldEthicsEn}{" "}
              </span>
              {translations[language].describe3Bold1Fr}
              {translations[language].describe3Bold1En}
              {translations[language].describeWithoutBold3Fr}
              {translations[language].describeWithoutBold3En}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blocs;

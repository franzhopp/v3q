import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import translations from "../translate.jsx";
import ButtonQuote from "../../UI/Button/ButtonFormQuote.jsx";

const TextOffers = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-0C3E78 pt-28 pb-28 px-4 sm:px-6 lg:px-8">
      <h3
        className="text-center font-extrabold text-3xl text-fff6e4 px-5"
        data-aos="fade-left"
      >
        {translations[language].titleServices3Fr}
        {translations[language].titleServices3En}
      </h3>
      <div className="flex justify-center">
        <span className="absolute w-32 h-1"></span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        <div className="min-h-500 w-80 rounded-lg mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 px-5"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].bloc1ServicesFr}
            {translations[language].bloc1ServicesEn}
          </p>
        </div>
        <div className="min-h-500 w-80 mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 px-5"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].bloc2ServicesFr}
            {translations[language].bloc2ServicesEn}
          </p>
        </div>
        <div className="min-h-500 w-80 mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="mt-2 text-fff6e4 px-5"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].bloc3ServicesFr}
            {translations[language].bloc3ServicesEn}
          </p>
        </div>
      </div>
      <ButtonQuote />
    </div>
  );
};

export default TextOffers;

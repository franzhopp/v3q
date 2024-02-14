import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import translations from "../translate.jsx";
import ButtonQuote from "../../UI/Button/ButtonFormQuote.jsx";

const TextOffers = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-0C3E78 py-32">
      <div className="flex justify-center">
        <h3
          className="text-fff6e4 text-3xl text-center font-extrabold px-5"
          data-aos="fade-left"
        >
          {translations[language].titleServices3Fr}
          {translations[language].titleServices3En}
        </h3>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 py-16">
        <div className="w-80 px-5 py-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-fff6e4"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].bloc1ServicesFr}
            {translations[language].bloc1ServicesEn}
          </p>
        </div>
        <div className="w-80 px-5 py-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-fff6e4"
          >
            <RiBardLine className="inline" />{" "}
            {translations[language].bloc2ServicesFr}
            {translations[language].bloc2ServicesEn}
          </p>
        </div>
        <div className="w-80 px-5 py-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-fff6e4"
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

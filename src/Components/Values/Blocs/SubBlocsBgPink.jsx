import { useLanguage } from "../../../context/LanguageProvider";
import translations from "../translate.jsx";
import { RiBardLine } from "react-icons/ri";

const SubBlocsBgPink = () => {
  const { language } = useLanguage();
  return (
    <div className="pt-8 pb-10 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
      <div className="min-h-500 w-80 rounded-lg mt-5">
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mt-2 text-FFF6E4 text-arial"
        >
          <h1 className="text-4xl number font-semibold pb-5">07.</h1>
          <span className="font-extrabold">
            <RiBardLine className="inline" />{" "}
            {translations[language].titleDetailsEthics1Fr}
            {translations[language].titleDetailsEthics1En}{" "}
          </span>
          {translations[language].describeDetailsEthics1Fr}
          {translations[language].describeDetailsEthics1En}
        </p>
      </div>
      <div className="min-h-500 w-80 rounded-lg mt-5">
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mt-2 text-FFF6E4 text-arial"
        >
          <h1 className="text-4xl number font-semibold pb-5">08.</h1>
          <span className="font-extrabold">
            <RiBardLine className="inline" />{" "}
            {translations[language].titleDetailsEthics2Fr}
            {translations[language].titleDetailsEthics2En}{" "}
          </span>
          {translations[language].describeDetailsEthics2Fr}
          {translations[language].describeDetailsEthics2En}
        </p>
      </div>

      <div className="min-h-500 w-80 rounded-lg mt-5">
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mt-2 text-FFF6E4 text-arial"
        >
          <h1 className="text-4xl number font-semibold pb-5">09.</h1>
          <span className="font-extrabold">
            <RiBardLine className="inline" />{" "}
            {translations[language].titleDetailsEthics3Fr}
            {translations[language].titleDetailsEthics3En}{" "}
          </span>
          {translations[language].describeDetailsEthics3Fr}
          {translations[language].describeDetailsEthics3En}
        </p>
      </div>
    </div>
  );
};

export default SubBlocsBgPink;

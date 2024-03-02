import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import { RiBardLine } from "react-icons/ri";

const TextMarketing = () => {
  const { language } = useLanguage();
  return (
    <div className={`WireTitleMarketing`}>
      <div
        className={`BgServicesMarketing bg-center bg-cover bg-no-repeat py-32`}
      >
        <div
          data-aos="fade-right"
          className={`text-fff6e4 t ext-4xl lg:text-5xl text-center font-extrabold py-3`}
        >
          {translations[language].titleServicesMarketingFr}
          {translations[language].titleServicesMarketingEn}
        </div>
        <div className={`pl-10 2xl:pl-96`}>
          <div className={`flex flex-wrap`}>
            <div className={`text-fff6e4 text-left font-extrabold py-3 pr-3`}>
              <h2 className={`text-fff6e4 text-xl font-extrabold py-3`}>
                <div className={`w-40`}>
                  {translations[language].subTitleMarketing1Fr}
                  {translations[language].subTitleMarketing1En}
                </div>
              </h2>
              <div className={`w-72`}>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-fff6e4`}
                >
                  <RiBardLine className={`inline`} />{" "}
                  {translations[language].describeMarketing1Fr}
                  {translations[language].describeMarketing1En}
                </p>
              </div>
            </div>
            <div className={`text-fff6e4 text-left font-extrabold py-3 pr-3`}>
              <h2 className={`text-fff6e4 text-xl font-extrabold py-3`}>
                <div className={`w-40`}>
                  {translations[language].subTitleMarketing2Fr}
                  {translations[language].subTitleMarketing2En}
                </div>
              </h2>
              <div className={`w-72`}>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className={`text-fff6e4`}
                >
                  <RiBardLine className={`inline`} />{" "}
                  {translations[language].describeMarketing2Fr}
                  {translations[language].describeMarketing2En}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id={`contact-services`}></div>
      </div>
    </div>
  );
};

export default TextMarketing;

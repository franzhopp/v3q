import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import SvgPoint from "../Svg/SvgPoint.jsx";
import translations from "../translate.jsx";
import ButtonContactServices from "../../UI/Button/ButtonContactServices";

const DetailsServices = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <section>
      <div
        className={`image-navi-studio-marketing-services pb-12 text-FFF6E4 pr-0 sm:pr-10 md:pr-20 lg:pr-32 xl:pr-96`}
      >
        <div
          data-aos="fade-right"
          className="text-center text-4xl sm:text-5xl font-extrabold pt-10"
        >
          {translations[language].titleServicesMarketingFr}
          {translations[language].titleServicesMarketingEn}
          <div className="flex justify-center">
            <span className="absolute w-32 h-1 line"></span>
          </div>
        </div>
        <div className="mt-10 sm:mt-20">
          <div className="flex flex-wrap justify-center">
            <div className="font-extrabold text-FFF6E4 text-left mr-20">
              <p className="text-2xl mb-10 font-extrabold text-FFF6E4">
                <div className="w-44">
                  {translations[language].subTitleMarketing1Fr}
                  {translations[language].subTitleMarketing1En}
                </div>
              </p>
              <div className="w-60">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-base mb-10 text-FFF6E4"
                >
                  <RiBardLine className="inline" />{" "}
                  {translations[language].describeMarketing1Fr}
                  {translations[language].describeMarketing1En}
                </p>
              </div>
            </div>
            <div className="font-extrabold text-FFF6E4 text-left mr-20">
              <p className="text-2xl mb-10 font-extrabold text-FFF6E4">
                <div className="w-44">
                  {translations[language].subTitleMarketing2Fr}
                  {translations[language].subTitleMarketing2En}
                </div>
              </p>
              <div className="w-60">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-base text-FFF6E4"
                >
                  <RiBardLine className="inline" />{" "}
                  {translations[language].describeMarketing2Fr}
                  {translations[language].describeMarketing2En}
                </p>
              </div>
              <div id="contact-services"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pb-10">
          <div className="flex justify-center pt-20">
            <SvgPoint />
          </div>
          <div
            className={`flex justify-center ${
              isDarkMode ? "text-black" : "text-FFF6E4 "
            }`}
          >
            <div className="w-96 sm:w-1/2 mt-10">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-center text-2xl font-extrabold px-5"
              >
                {translations[language].questionServicesFr}
                {translations[language].questionServicesEn}
              </p>
            </div>
          </div>
        </div>
        <ButtonContactServices />
      </div>
    </section>
  );
};

export default DetailsServices;

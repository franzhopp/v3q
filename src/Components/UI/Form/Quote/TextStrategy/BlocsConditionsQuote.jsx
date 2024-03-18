import { NavLink } from "react-router-dom";
import translations from "../translate.jsx";
import SvgBtnQuote from "../Svg/SvgBtnQuote.jsx";
import BackToTopButton from "../../../ScrollToTop/BackToTopButton.jsx";
import { useLanguage } from "../../../../../context/LanguageProvider.jsx";

const BlocsConditions = () => {
  const { language } = useLanguage();
  return (
    <div className={`mt-8`}>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`text-black text-lg lg:text-xl lg:w-96 ml-6 lg:ml-0 w-80`}
      >
        <span>
          {translations[language].describeInfoFree1Fr}
          {translations[language].describeInfoFree1En}{" "}
        </span>
      </p>
      <br />
      <p
        className={`text-black text-lg lg:text-xl lg:w-96 ml-6 lg:ml-0 mb-1 w-80`}
      >
        <span className="font-extrabold underline">
          {translations[language].describleInfoFree2Fr}
          {translations[language].describleInfoFree2En}
        </span>
      </p>

      <p
        className={`text-black text-lg lg:text-xl lg:w-96 ml-6 lg:ml-0 mb-5 w-80`}
      >
        <ul>
          <br />
          <li data-aos="fade-right">
            <span className={`font-extrabold`}>1</span>.{" "}
            {translations[language].bloc1FreeFr}
            {translations[language].bloc1FreeEn}
          </li>
          <br />
          <li data-aos="fade-left">
            <span className={`font-extrabold`}>2</span>.{" "}
            {translations[language].bloc2FreeFr}
            {translations[language].bloc2FreeEn}{" "}
            <NavLink
              to="/services"
              className={`text-c22e2e underline font-extrabold tracking-wide`}
            >
              {" "}
              {translations[language].linkBlocFreeFr}
              {translations[language].linkBlocFreeEn}
            </NavLink>{" "}
            {translations[language].bloc2dFreeFr}
            {translations[language].bloc2dFreeEn}
          </li>
          <br />
          <li data-aos="fade-right">
            <span className={`font-extrabold`}>3</span>.{" "}
            {translations[language].bloc3FreeFr}
            {translations[language].bloc3FreeEn}{" "}
            <NavLink
              to="/pricingfr"
              className={`text-c22e2e underline font-extrabold tracking-wide`}
            >
              {" "}
              {translations[language].linkBlocFreeFr}
              {translations[language].linkBlocFreeEn}
            </NavLink>
            .
          </li>
          <br />
          <li data-aos="fade-left">
            <span className={`font-extrabold`}>4</span>.{" "}
            {translations[language].bloc4FreeFr}
            {translations[language].bloc4FreeEn}
          </li>
        </ul>
      </p>
      <BackToTopButton />
      <div className={`flex justify-start lg:justify-center mx-6 lg:mx-0`}>
        <NavLink to={`/`}>
          <SvgBtnQuote />
        </NavLink>
      </div>
    </div>
  );
};

export default BlocsConditions;

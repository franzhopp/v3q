import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import SvgBtnQuote from "../Svg/SvgBtnQuote.jsx";
import BackToTopButton from "../../ScrollToTop/BackToTopButton.jsx";

const BlocsConditions = () => {
  const { language } = useLanguage();
  return (
    <div className="mt-8">
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="text-FFF6E4 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
      >
        <span>
          {translations[language].describeInfoFree1Fr}
          {translations[language].describeInfoFree1En}{" "}
        </span>
      </p>
      <br />
      <p className="text-FFF6E4 mb-1 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
        <span className="font-extrabold underline">
          {translations[language].describleInfoFree2Fr}
          {translations[language].describleInfoFree2En}
        </span>
      </p>

      <p className="text-FFF6E4 mb-5 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
        <ul>
          <br />
          <li data-aos="fade-right">
            <span className="font-extrabold">1</span>.{" "}
            {translations[language].bloc1FreeFr}
            {translations[language].bloc1FreeEn}
          </li>
          <br />
          <li data-aos="fade-left">
            <span className="font-extrabold">2</span>.{" "}
            {translations[language].bloc2FreeFr}
            {translations[language].bloc2FreeEn}{" "}
            <NavLink
              to="/services"
              className="underline font-extrabold tracking-wide text-C22E2E"
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
            <span className="font-extrabold">3</span>.{" "}
            {translations[language].bloc3FreeFr}
            {translations[language].bloc3FreeEn}{" "}
            <NavLink
              to="/pricingfr"
              className="underline font-extrabold tracking-wide text-C22E2E"
            >
              {" "}
              {translations[language].linkBlocFreeFr}
              {translations[language].linkBlocFreeEn}
            </NavLink>
            .
          </li>
          <br />
          <li data-aos="fade-left">
            <span className="font-extrabold">4</span>.{" "}
            {translations[language].bloc4FreeFr}
            {translations[language].bloc4FreeEn}
          </li>
        </ul>
      </p>
      <BackToTopButton />
      <div className="flex flex-col text-left mx-6">
        <NavLink to="/">
          <SvgBtnQuote />
        </NavLink>
      </div>
    </div>
  );
};

export default BlocsConditions;

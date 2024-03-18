import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const LinksFooter = () => {
  const { language } = useLanguage();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <ul
      className={`flex flex-wrap justify-center pt-16 gap-6 md:gap-8 lg:gap-24`}
    >
      <li>
        <NavLink
          to="/"
          onClick={ScrollToTop}
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navAgence}
          {translations[language].navAgency}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/values"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navSousValuesFr}
          {translations[language].navSousValuesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/designer"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          Designer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/developer"
          className="text-fff6e4 transition duration-500 hover:opacity-80"
        >
          Web Developer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navServices}
          {translations[language].navServicesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navSousServicesFr}
          {translations[language].navSousServicesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricingfr"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navSousPricingFr}
          {translations[language].navSousPricingEn}
        </NavLink>{" "}
      </li>
      <li>
        <NavLink
          to="/quote"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <span className={`text-fff6e4`}>—</span>{" "}
        <span
          className={`text-fff6e4 italic transition duration-500 hover:opacity-80`}
        >
          Rejoignez-nous{" "}
        </span>{" "}
      </li>
    </ul>
  );
};

export default LinksFooter;

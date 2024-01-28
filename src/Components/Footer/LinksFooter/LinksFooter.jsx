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
    <ul className="flex flex-wrap justify-center pt-16 gap-6 md:gap-8 lg:gap-24">
      <li>
        <NavLink
          to="/"
          onClick={ScrollToTop}
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navAgence}
          {translations[language].navAgency}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/values"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navSousValuesFr}
          {translations[language].navSousValuesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/designer"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          Designer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/developer"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          Web Developer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navServices}
          {translations[language].navServicesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navSousServicesFr}
          {translations[language].navSousServicesEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricingfr"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navSousPricingFr}
          {translations[language].navSousPricingEn}
        </NavLink>{" "}
      </li>
      <li>
        <NavLink
          to="/quote"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          {translations[language].navSousFreeFr}
          {translations[language].navSousFreeEn}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className="text-FFF6E4 transition hover:text-0C3E78"
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="text-FFF6E4 transition hover:text-0C3E78">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default LinksFooter;
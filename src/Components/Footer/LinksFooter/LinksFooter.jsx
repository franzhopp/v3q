import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import { useEffect } from "react";

const LinksFooter = () => {
  const { language } = useLanguage();
  const SectionToSectionContact = () => {
    const ContactToScroll = document.getElementById("contact");
    if (ContactToScroll) {
      ContactToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
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
          onClick={SectionToSectionContact}
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <a
          href="https://instagram.com/navistudio.fr"
          className={`text-fff6e4 transition duration-500 hover:opacity-80`}
        >
          — <span className={`italic`}>Rejoignez-nous</span>
        </a>
      </li>
    </ul>
  );
};

export default LinksFooter;

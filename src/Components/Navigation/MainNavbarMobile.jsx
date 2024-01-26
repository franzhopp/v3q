import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import translations from "./translate.jsx";
import Image from "../../assets/logo-5.png";
import ModalSearch from "../Modal/SearchModal.jsx";
import "../Section/FirstSection.jsx";
import "../Homepage/Homepage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkLightThemes from "../../hook/useTheme.jsx";
import { useTheme } from "../../context/ThemeProvider.jsx";

const NavbarMobile = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsAgence, setShowSousListsAgence] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsThreeMenu, setShowSousListsThreeMenu] = useState(false);
  const [showSousListsRate, setShowSousListsRate] = useState(false);
  const [showSousListsFiveMenu, setShowSousListsFiveMenu] = useState(false);
  const [openModel, setOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { isDarkMode } = useTheme();
  const changeLanguageHandler = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    setIsOpen(false);
  };
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpen(!isOpen);
    document.body.style.overflowY = "hidden";
  };
  const SectionToSectionContact = () => {
    const ContactToScroll = document.getElementById("contact");
    if (ContactToScroll) {
      ContactToScroll.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const handleAnimateButtonClick = () => {
    setIsAnimating(!isAnimating);
  };
  const toggleSousListsAgence = () => {
    setShowSousListsAgence(!showSousListsAgence);
  };
  const toggleSousListsMenu = () => {
    setShowSousListsMenu(!showSousListsMenu);
  };
  const toggleSousListsRate = () => {
    setShowSousListsRate(!showSousListsRate);
  };
  const toggleSousListsFiveMenu = () => {
    setShowSousListsFiveMenu(!showSousListsFiveMenu);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
  }, [
    showSousListsAgence,
    showSousListsFiveMenu,
    showSousListsMenu,
    showSousListsThreeMenu,
    showSousListsRate,
  ]);
  return (
    <nav
      className={`fixed w-full top-0 left-0 shadow-md 2xl:hidden bg-FFF6E4 z-max`}
    >
      <div className="px-5 h-28 flex items-center justify-between">
        <NavLink to="/" data-aos="fade-left">
          <img
            src={Image}
            onClick={scrollToTop}
            alt="Logo navi studio."
            className="h-14 w-auto"
          />
        </NavLink>
        <div>
          <div
            data-aos="fade-left"
            onClick={toggleMenuMobile}
            className="icon-toggle bg-C22E2E cursor-pointer rounded-md p-2 inline-flex items-center justify-center ring-1 ring-white ring-opacity-20"
          >
            {isAnimating ? (
              <svg
                onClick={handleAnimateButtonClick}
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle
                  cx="26.5"
                  cy="26.5"
                  r="26.5"
                  transform="rotate(90 26.5 26.5)"
                  fill="#C22E2E"
                />
                <path
                  d="M26 12L26 41"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M17 18L17 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M35 18L35 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                onClick={handleAnimateButtonClick}
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <circle
                  cy="26.5"
                  cx="26.5"
                  r="26.5"
                  transform="rotate(90 26.5 26.5)"
                  fill="#C22E2E"
                />
                <path
                  d="M12 27H41"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M18 36L35 36"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M18 18L35 18"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <ul className={`p-5 ${isOpen ? "block" : "hidden"}`}>
        <li className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
          <NavLink className="block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
            <button onClick={toggleSousListsAgence}>
              <div className="flex items-center justify-between">
                <div className="pr-2">
                  {translations[language].navAgence}
                  {translations[language].navAgency}
                </div>
                <IoIosArrowDown className="mt-1" />
              </div>
            </button>
            <ul className={`p-2 ${showSousListsAgence ? "block" : "hidden"}`}>
              <li className="ml-4">
                <ul
                  data-aos="fade-left"
                  className={`p-2 ${showSousListsAgence ? "block" : "hidden"}`}
                >
                  <li className="ml-4 font-extrabold">
                    <NavLink
                      to="/"
                      className="block border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousHomeFr}
                      {translations[language].navSousHomeEn}
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to="/ethics"
                      className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousValuesFr}
                      {translations[language].navSousValuesEn}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="block py-2 rounded-md text-base font-extrabold">
                  <button onClick={toggleSousListsFiveMenu}>
                    <div className="flex items-center justify-between">
                      <div className="pr-2">
                        {translations[language].navSousTeamFr}
                        {translations[language].navSousTeamEn}
                      </div>
                      <IoIosArrowDown className="mt-1" />
                    </div>
                  </button>

                  <ul
                    data-aos="fade-left"
                    className={`toggle-menu ${
                      showSousListsFiveMenu ? "block" : "hidden"
                    } p-2`}
                  >
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/designer"
                        className="block border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        Designer
                      </NavLink>
                    </li>
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/dev"
                        className="block rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        Web Developer
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
            </ul>
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
          <NavLink className="block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
            <button onClick={toggleSousListsMenu}>
              <div className="flex items-center justify-between">
                <div className="pr-2">
                  {translations[language].navServices}
                  {translations[language].navServicesEn}
                </div>
                <IoIosArrowDown className="mt-1" />
              </div>
            </button>
            <ul
              data-aos="fade-left"
              className={`toggle-menu ${
                showSousListsMenu ? "block" : "hidden"
              } p-2`}
            >
              <li className="ml-4">
                <NavLink
                  to="/services"
                  className="block border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                >
                  {translations[language].navSousServicesFr}
                  {translations[language].navSousServicesEn}
                </NavLink>
              </li>
              <NavLink className="block border-C22E2E border-b-2 ml-4">
                <li>
                  <button onClick={toggleSousListsRate}>
                    <div className="flex items-center justify-between">
                      <div className="block hover:text-0C3E78 px-4 py-2 font-extrabold pr-2">
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn}
                      </div>
                      <IoIosArrowDown className="mt-1" />
                    </div>
                  </button>
                  <ul
                    data-aos="fade-left"
                    className={`toggle-menu ${
                      showSousListsRate ? "block" : "hidden"
                    } p-2`}
                  >
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/rate"
                        className="block border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn} FR
                      </NavLink>
                    </li>
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/rateuk"
                        className="block rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn} UK
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </NavLink>
              <li className="ml-4">
                <NavLink
                  to="/devis"
                  className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                >
                  {translations[language].navSousFreeFr}
                  {translations[language].navSousFreeEn}
                </NavLink>
              </li>
            </ul>
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
          <NavLink
            to="/portfolio"
            className="block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
          <NavLink
            to="/"
            onClick={SectionToSectionContact}
            className="block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Contact
          </NavLink>
        </li>
        {/* SELECT TRAD */}
        <li className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
          <div className="block px-2 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
            <select
              className={`${isDarkMode ? "bg-FFF6E4" : "bg-042142"}`}
              value={language}
              onChange={(e) => changeLanguageHandler(e.target.value)}
            >
              <option
                value="fr"
                className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}
              >
                FR
              </option>
              <option
                value="en"
                className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}
              >
                EN
              </option>
            </select>
          </div>
        </li>
        {/* BARRE DE RECHERCHE */}
        <div className="flex justify-start px-3 pt-4 pb-3">
          <div
            className={`hover:text-0C3E78 ${
              isDarkMode ? "text-C22E2E" : "text-FFF6E4"
            }`}
          >
            <FaSearch
              className="h-8 mr-5"
              onClick={() => {
                setOpenModel(true);
              }}
            />
          </div>
          <DarkLightThemes />
        </div>
        {/* EXTÉRIEUR */}
        {openModel && (
          <ModalSearch closeModal={setOpenModel} searchQuery={setSearchQuery} />
        )}
      </ul>
      <div id="home"></div>
    </nav>
  );
};

export default NavbarMobile;
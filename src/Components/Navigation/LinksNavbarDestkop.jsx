import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { useLanguage } from "../../context/LanguageProvider";
import DarkLightThemes from "../../hook/useTheme";
import ModalSearch from "../Modal/SearchModal";
import translations from "./translate.jsx";
import Image from "../../assets/logo-5.png";

const LinksNavbarDesktop = () => {
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsTwoMenu, setShowSousListsTwoMenu] = useState(false);
  const [showSousListsRate, setShowSousListsRate] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [openModel, setOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const { language, changeLanguage } = useLanguage();
  const { isDarkMode } = useTheme();
  const changeLanguageHandler = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  const toggleSousListsTwoMenu = () => {
    setShowSousListsTwoMenu(!showSousListsTwoMenu);
  };
  const toggleSousListsRate = () => {
    setShowSousListsRate(!showSousListsRate);
  };
  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };
  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 1000);
  };
  return (
    <nav
      className={`bg-FFF6E4 border-b-4 border-C22E2E h-28 items-center fixed w-full top-0 left-0 shadow-md z-max`}
    >
      <div className="flex justify-between items-center h-24 mt-2 container mx-auto px-4 sm:px-6 lg:px-8">
        <NavLink to="/">
          <img
            alt="Logo"
            data-aos="fade-left"
            className="lg:h-20 h-10 bg-cover bg-no-repeat"
            src={Image}
          />
        </NavLink>
        <div className="flex justify-center items-center">
          <li className="relative group list-none">
            <NavLink
              to="/"
              onMouseEnter={handleMouseEnterSubmenu}
              onMouseLeave={closeSubmenuWithDelay}
              className={`hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold ${
                isDarkMode ? "text-C22E2E" : "text-FFF6E4"
              }`}
            >
              {translations[language].navAgence}
              {translations[language].navAgency}
            </NavLink>
            <div className="flex justify-center">
              <ul
                className={`absolute hidden group-hover:block rounded-md font-extrabold text-left w-48 bg-FFF6E4 mt-2 py-2 ${
                  isDarkMode ? "text-C22E2E" : "text-FFF6E4"
                }`}
              >
                <li>
                  <NavLink
                    to="/"
                    className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousHomeFr}
                    {translations[language].navSousHomeEn}
                  </NavLink>
                  <li>
                    <NavLink
                      to="/values"
                      className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousValuesFr}
                      {translations[language].navSousValuesEn}
                    </NavLink>
                  </li>
                </li>
                <button onClick={toggleSousListsTwoMenu}>
                  <div className="flex items-center justify-between">
                    <div className="block hover:text-0C3E78 px-4 py-2 font-extrabold pr-2">
                      {translations[language].navSousTeamFr}
                      {translations[language].navSousTeamEn}
                    </div>
                    <IoIosArrowDown className="mt-1" />
                  </div>
                </button>
                <ul
                  className={`toggle-menu ${
                    showSousListsTwoMenu ? "block" : "hidden"
                  } p-2`}
                >
                  <li
                    className={`ml-4 ${
                      isDarkMode ? "text-C22E2E" : "text-FFF6E4"
                    }`}
                  >
                    <NavLink
                      to="/designer"
                      className="block border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Designer
                    </NavLink>
                  </li>
                  <li className="ml-4 font-extrabold">
                    <NavLink
                      to="/developer"
                      className="block border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Web Developer
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
          <li className="relative group list-none">
            <NavLink
              to="/services"
              className={`hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold ${
                isDarkMode ? "text-C22E2E" : "text-FFF6E4"
              }`}
            >
              {translations[language].navServices}
              {translations[language].navServicesEn}
            </NavLink>
            <div className="flex justify-center">
              <ul
                className={`absolute hidden group-hover:block bg-FFF6E4 w-48 mt-2 py-2 rounded-md text-left ${
                  isDarkMode ? "text-C22E2E" : "text-FFF6E4"
                }`}
              >
                <li>
                  <NavLink
                    to="/services"
                    className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousServicesFr}
                    {translations[language].navSousServicesEn}
                  </NavLink>
                </li>
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
                  className={`toggle-menu ${
                    showSousListsRate ? "block" : "hidden"
                  } p-2`}
                >
                  <li className="ml-4 font-extrabold">
                    <NavLink
                      to="/pricingfr"
                      className="block border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousPricingFr}
                      {translations[language].navSousPricingEn} FR
                    </NavLink>
                  </li>
                  <li className="ml-4 font-extrabold">
                    <NavLink
                      to="/pricinguk"
                      className="block border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousPricingFr}
                      {translations[language].navSousPricingEn} UK
                    </NavLink>
                  </li>
                </ul>
                <li>
                  <NavLink
                    to="/quote"
                    className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousFreeFr}
                    {translations[language].navSousFreeEn}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <div className={`${isDarkMode ? "text-C22E2E" : "text-FFF6E4"}`}>
            <NavLink
              to="/portfolio"
              className="hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/"
              className="hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
            >
              Contact
            </NavLink>
          </div>
          <li
            className={`relative group list-none ${
              isDarkMode ? "text-C22E2E" : "text-FFF6E4"
            }`}
          >
            <div
              className={`hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold`}
            >
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
          <div
            className={`hover:text-0C3E78 px-6 py-2 xl:text-2xl text-base font-extrabold ${
              isDarkMode ? "text-C22E2E" : "text-FFF6E4"
            }`}
          >
            <FaSearch
              data-aos="fade-left"
              className="h-5 xl:h-7"
              onClick={() => {
                setOpenModel(true);
              }}
            />
          </div>
          {openModel && (
            <ModalSearch
              className={`${isDarkMode ? "bg-FFF6E4" : "bg-042142"}`}
              closeModal={setOpenModel}
              searchQuery={setSearchQuery}
            />
          )}
          <DarkLightThemes />
        </div>
      </div>
    </nav>
  );
};

export default LinksNavbarDesktop;

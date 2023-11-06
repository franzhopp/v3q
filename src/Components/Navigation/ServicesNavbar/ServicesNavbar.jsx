import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ModalSearch from "../../Modal/SearchModal";
import Image from "../../../assets/logo-5.png";
import { IoIosArrowDown } from "react-icons/io";
import "../../Section/FirstSection.jsx";
import "../../Homepage/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";

const NavbarServices = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsAgence, setShowSousListsAgence] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsTwoMenu, setShowSousListsTwoMenu] = useState(false);
  const [showSousListsThreeMenu, setShowSousListsThreeMenu] = useState(false);
  const [showSousListsFiveMenu, setShowSousListsFiveMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [openModel, setOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  const changeLanguageHandler = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  // Toggle → HandleMouse from list items
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpen(!isOpen);
    document.body.style.overflowY = "hidden";
  };

  const handleAnimateButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };
  const toggleSousListsAgence = () => {
    setShowSousListsAgence(!showSousListsAgence);
  };
  const toggleSousListsMenu = () => {
    setShowSousListsMenu(!showSousListsMenu);
  };
  const toggleSousListsTwoMenu = () => {
    setShowSousListsTwoMenu(!showSousListsTwoMenu);
  };
  const toggleSousListsThreeMenu = () => {
    setShowSousListsThreeMenu(!showSousListsThreeMenu);
  };
  const toggleSousListsFiveMenu = () => {
    setShowSousListsFiveMenu(!showSousListsFiveMenu);
  };
  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };
  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 1000);
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
  ]);
  return (
    <div className="image-navi-studio-navbar-services h-screen sm:pb-20 mb:min-h-650 min-h-500">
      <nav
        className={`bg-FFF6E4 border-b-4 border-C22E2E h-28 items-center transition duration-300 ease-in-out fixed w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mt-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <NavLink to="/">
                <img
                  data-aos="fade-left"
                  className="lg:h-20 h-10 bg-cover bg-no-repeat xl:logo"
                  src={Image}
                />
              </NavLink>
            </div>

            <div className="flex items-center">
              <li data-aos="fade-left" className="relative group list-none">
                <NavLink
                  to="/"
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={closeSubmenuWithDelay}
                  className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
                >
                  {translations[language].navAgence}
                  {translations[language].navAgency}
                </NavLink>
                <div className="flex justify-center">
                  <ul className="absolute hidden group-hover:block rounded-md text-left w-48 bg-FFF6E4 border border-gray-300 mt-2 py-2">
                    <li className="text-C22E2E font-extrabold">
                      <NavLink
                        to="/"
                        className="block text-C22E2E border-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousHomeFr}
                        {translations[language].navSousHomeEn}
                      </NavLink>
                      <li>
                        <NavLink
                          to="/ethics"
                          className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                        >
                          {translations[language].navSousValuesFr}
                          {translations[language].navSousValuesEn}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services"
                          className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                        >
                          {translations[language].navSousAboutUsFr}
                          {translations[language].navSousAboutUsEn}
                        </NavLink>
                      </li>
                    </li>
                    <button onClick={toggleSousListsTwoMenu}>
                      <div className="flex items-center justify-between">
                        <div className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold pr-2">
                          {translations[language].navSousTeamFr}
                          {translations[language].navSousTeamEn}
                        </div>
                        <IoIosArrowDown className="mt-1 text-C22E2E" />
                      </div>
                    </button>
                    <ul
                      className={`toggle-menu ${
                        showSousListsTwoMenu ? "block" : "hidden"
                      } p-2`}
                    >
                      <li className="list-decimal ml-4 text-C22E2E font-extrabold">
                        <NavLink
                          to="/designer"
                          className="block text-C22E2E border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                        >
                          Designer
                        </NavLink>
                      </li>
                      <li className="list-decimal ml-4 text-C22E2E font-extrabold">
                        <NavLink
                          to="/webdev"
                          className="block text-C22E2E border-C22E2E border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                        >
                          Web Developer
                        </NavLink>
                      </li>
                    </ul>
                  </ul>
                </div>
              </li>

              <li data-aos="fade-left" className="relative group list-none">
                <NavLink
                  to="/services"
                  className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
                >
                  {translations[language].navServices}
                  {translations[language].navServicesEn}
                </NavLink>
                <div className="flex justify-center">
                  <ul className="absolute hidden group-hover:block bg-FFF6E4 w-48 mt-2 py-2 rounded-md border border-gray-300 text-left">
                    <li>
                      <NavLink
                        to="/services"
                        className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousServicesFr}
                        {translations[language].navSousServicesEn}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/rate"
                        className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/devis"
                        className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousFreeFr}
                        {translations[language].navSousFreeEn}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <NavLink
                to="/portfolio"
                data-aos="fade-left"
                href="about"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/"
                data-aos="fade-left"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
              >
                Contact
              </NavLink>

              <li data-aos="fade-left" className="relative group list-none">
                <NavLink
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={closeSubmenuWithDelay}
                  className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
                >
                  <select
                    value={language}
                    onChange={(e) => changeLanguageHandler(e.target.value)}
                  >
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                  </select>
                </NavLink>
              </li>

              <div
                data-aos="fade-left"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 xl:text-2xl text-base font-extrabold"
              >
                <svg
                  data-aos="fade-left"
                  className="h-7 xl:flex hidden"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                >
                  <path
                    d="M23.8885 12.0905C23.8885 18.7679 18.5409 24.181 11.9443 24.181C5.34762 24.181 0 18.7679 0 12.0905C0 5.4131 5.34762 0 11.9443 0C18.5409 0 23.8885 5.4131 23.8885 12.0905ZM2.32617 12.0905C2.32617 17.4675 6.63233 21.8264 11.9443 21.8264C17.2562 21.8264 21.5623 17.4675 21.5623 12.0905C21.5623 6.71355 17.2562 2.35466 11.9443 2.35466C6.63233 2.35466 2.32617 6.71355 2.32617 12.0905Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M26.704 30.7329C27.6489 31.7396 29.2216 31.78 30.2168 30.8229C31.2121 29.8659 31.2529 28.2739 30.308 27.2671L26.704 30.7329ZM18.4013 21.8861L26.704 30.7329L30.308 27.2671L22.0053 18.4204L18.4013 21.8861Z"
                    fill="#C22E2E"
                  />
                </svg>
              </div>
              {openModel && (
                <ModalSearch
                  closeModal={setOpenModel}
                  searchQuery={setSearchQuery}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={`fixed w-full top-0 left-0 shadow-md md:hidden bg-FFF6E4 z-max`}
      >
        <div className="px-5 h-28 flex items-center justify-between">
          <NavLink to="/" data-aos="fade-left">
            <img src={Image} alt="" className="h-10 w-auto sm:h-10" />
          </NavLink>
          <div>
            <div
              data-aos="fade-left"
              onClick={toggleMenuMobile}
              className="icon-toggle bg-C22E2E cursor-pointer rounded-md p-2 inline-flex items-center justify-center ring-1 ring-white ring-opacity-20"
            >
              <svg
                className={`rotateAnimation ${
                  isAnimating ? "animate-rotate" : ""
                }`}
                onClick={handleAnimateButtonClick}
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
        </div>
        <ul className={`toggle-menu ${isOpen ? "block" : "hidden"} p-3`}>
          <li>
            <NavLink className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
              <button onClick={toggleSousListsAgence}>
                <div className="flex items-center justify-between">
                  <div className="pr-2">
                    {translations[language].navAgence}
                    {translations[language].navAgency}
                  </div>
                  <IoIosArrowDown className="mt-1 text-C22E2E" />
                </div>
              </button>

              <ul
                className={`toggle-menu ${
                  showSousListsAgence ? "block" : "hidden"
                } p-2`}
              >
                <li className="ml-4">
                  <ul
                    data-aos="fade-left"
                    className={`toggle-menu ${
                      showSousListsAgence ? "block" : "hidden"
                    } p-2`}
                  >
                    <li className="list-decimal ml-4 text-C22E2E font-extrabold">
                      <NavLink
                        to="/"
                        className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousHomeFr}
                        {translations[language].navSousHomeEn}
                      </NavLink>
                    </li>
                    <li className="list-decimal ml-4">
                      <NavLink
                        to="/ethics"
                        className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousValuesFr}
                        {translations[language].navSousValuesEn}
                      </NavLink>
                    </li>
                    <li className="list-decimal ml-4">
                      <NavLink
                        to="/services"
                        className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousAboutUsFr}
                        {translations[language].navSousAboutUsEn}
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink className="text-C22E2E block py-2 rounded-md text-base font-extrabold">
                    <button onClick={toggleSousListsFiveMenu}>
                      <div className="flex items-center justify-between">
                        <div className="pr-2">
                          {translations[language].navSousTeamFr}
                          {translations[language].navSousTeamEn}
                        </div>
                        <IoIosArrowDown className="mt-1 text-C22E2E" />
                      </div>
                    </button>

                    <ul
                      data-aos="fade-left"
                      className={`toggle-menu ${
                        showSousListsFiveMenu ? "block" : "hidden"
                      } p-2`}
                    >
                      <li className="list-decimal ml-4 text-C22E2E font-extrabold">
                        <NavLink
                          to="/designer"
                          className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                        >
                          Designer
                        </NavLink>
                      </li>
                      <li className="list-decimal ml-4 text-C22E2E font-extrabold">
                        <NavLink
                          to="/webdev"
                          className="block text-C22E2E rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
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

          <li>
            <NavLink className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="pr-2">
                    {translations[language].navServices}
                    {translations[language].navServicesEn}
                  </div>
                  <IoIosArrowDown className="mt-1 text-C22E2E" />
                </div>
              </button>

              <ul
                data-aos="fade-left"
                className={`toggle-menu ${
                  showSousListsMenu ? "block" : "hidden"
                } p-2`}
              >
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/services"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousServicesFr}
                    {translations[language].navSousServicesEn}
                  </NavLink>
                </li>
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/rate"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousPricingFr}
                    {translations[language].navSousPricingEn}
                  </NavLink>
                </li>
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/devis"
                    className="block text-C22E2E  hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    {translations[language].navSousFreeFr}
                    {translations[language].navSousFreeEn}
                  </NavLink>
                </li>
              </ul>
            </NavLink>
          </li>

          <NavLink
            to="/portfolio"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Contact
          </NavLink>

          <li>
            <NavLink className="text-C22E2E block px-2 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
              <select
                value={language}
                onChange={(e) => changeLanguageHandler(e.target.value)}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </NavLink>
          </li>

          <NavLink className="text-C22E2E hover:text-0C3E78 px-3 py-2">
            {openModel && (
              <ModalSearch
                closeModal={setOpenModel}
                searchQuery={setSearchQuery}
              />
            )}
            <svg
              className="h-5 ml-2"
              onClick={() => {
                setOpenModel(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <path
                d="M23.8885 12.0905C23.8885 18.7679 18.5409 24.181 11.9443 24.181C5.34762 24.181 0 18.7679 0 12.0905C0 5.4131 5.34762 0 11.9443 0C18.5409 0 23.8885 5.4131 23.8885 12.0905ZM2.32617 12.0905C2.32617 17.4675 6.63233 21.8264 11.9443 21.8264C17.2562 21.8264 21.5623 17.4675 21.5623 12.0905C21.5623 6.71355 17.2562 2.35466 11.9443 2.35466C6.63233 2.35466 2.32617 6.71355 2.32617 12.0905Z"
                fill="#C22E2E"
              />
              <path
                d="M26.704 30.7329C27.6489 31.7396 29.2216 31.78 30.2168 30.8229C31.2121 29.8659 31.2529 28.2739 30.308 27.2671L26.704 30.7329ZM18.4013 21.8861L26.704 30.7329L30.308 27.2671L22.0053 18.4204L18.4013 21.8861Z"
                fill="#C22E2E"
              />
            </svg>
          </NavLink>
        </ul>
      </nav>

      <div className="pt-44 px-14 py-20 text-left sm:mt-28">
        <h1 className="font-extrabold text-FFF6E4 text-5xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <motion.span
            id="all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {translations[language].titleServicesFr}
            {translations[language].titleServicesEn}
          </motion.span>
        </h1>
        <div className="w-full sm:w-1/2">
          <span className="font-extrabold text-FFF6E4 block pt-10 text-base sm:text-4xl">
            {translations[language].titleServices1Fr}
            {translations[language].titleServices1En}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarServices;

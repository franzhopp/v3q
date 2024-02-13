import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "./../../context/ThemeProvider.jsx";
import { useLanguage } from "./../../context/LanguageProvider.jsx";
import DarkLightThemes from "./../../hook/useTheme.jsx";
import ModalSearch from "./../Modal/SearchModal";
import translations from "./translate.jsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ImgBlack from "../../assets/logo-5.png";
import ImgWhite from "../../assets/logo-57.png";
import ButtonOpen from "./ButtonMobile/ButtonOpen.jsx";
import ButtonClose from "./ButtonMobile/ButtonClose.jsx";
import "../Section/TextHome/MainBlocsHome.jsx";
import "./../Homepage/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";

const LinksNavbarMobile = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSousListsAgence, setShowSousListsAgence] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsFiveMenu, setShowSousListsFiveMenu] = useState(false);
  const [showSousListsRate, setShowSousListsRate] = useState(false);
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
  };
  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpen(!isOpen);
    document.body.style.overflowY = "hidden";
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
    showSousListsRate,
  ]);
  return (
    <nav
      className={`bg-fff6e4 fixed w-full top-0 left-0 shadow-md 2xl:hidden z-50`}
    >
      <div className="px-5 h-28 flex items-center justify-between">
        <NavLink to="/" data-aos="fade-left">
          <img
            src={isDarkMode ? ImgBlack : ImgWhite}
            onClick={scrollToTop}
            alt="Logo navi studio."
            className="h-14 w-auto"
          />
        </NavLink>
        <div
          data-aos="fade-left"
          onClick={toggleMenuMobile}
          className="cursor-pointer rounded-full mr-1"
        >
          {isAnimating ? (
            <div onClick={handleAnimateButtonClick}>
              <ButtonOpen />
            </div>
          ) : (
            <div onClick={handleAnimateButtonClick}>
              <ButtonClose />
            </div>
          )}
        </div>
      </div>
      <ul className={`p-5 fadeInDelayDesktop ${isOpen ? "block" : "hidden"}`}>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink className="block px-3 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold">
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
                      className="block border-c22e2e border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      {translations[language].navSousHomeFr}
                      {translations[language].navSousHomeEn}
                    </NavLink>
                  </li>
                  <li className="ml-4">
                    <NavLink
                      to="/values"
                      className="block border-c22e2e border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
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
                        className="block border-c22e2e border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        Designer
                      </NavLink>
                    </li>
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/developer"
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
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink className="block px-3 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold">
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
                  className="block border-c22e2e border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                >
                  {translations[language].navSousServicesFr}
                  {translations[language].navSousServicesEn}
                </NavLink>
              </li>
              <NavLink className="block border-c22e2e border-b-2 ml-4">
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
                        to="/pricingfr"
                        className="block border-c22e2e border-b-2 rounded-md hover:text-0C3E78 px-4 py-2 font-extrabold"
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn} FR
                      </NavLink>
                    </li>
                    <li className="ml-4 font-extrabold">
                      <NavLink
                        to="/pricinguk"
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
                  to="/quote"
                  className="block hover:text-0C3E78 px-4 py-2 font-extrabold"
                >
                  {translations[language].navSousFreeFr}
                  {translations[language].navSousFreeEn}
                </NavLink>
              </li>
            </ul>
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink
            to="/portfolio"
            className="block px-3 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink
            to="/"
            className="block px-3 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Contact
          </NavLink>
        </li>
        {/* SELECT TRAD */}
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <div className="block px-2 py-2 border-c22e2e border-b-2 rounded-md text-base font-extrabold">
            <select
              className={`${isDarkMode ? "bg-fff6e4" : "bg-042142"}`}
              value={language}
              onChange={(e) => changeLanguageHandler(e.target.value)}
            >
              <option
                value="fr"
                className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}
              >
                FR
              </option>
              <option
                value="en"
                className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}
              >
                EN
              </option>
            </select>
          </div>
        </li>
        {/* BARRE DE RECHERCHE */}
        <div className="flex justify-start px-2 pt-4 pb-3">
          <div
            className={`hover:text-0C3E78 transform active:scale-75 transition-transform ${
              isDarkMode ? "text-c22e2e" : "text-fff6e4"
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

export default LinksNavbarMobile;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../context/ThemeProvider.jsx";
import translations from "./translate.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ImgBlack from "../../assets/Logo/LogoMainNaviStudio.png";
import TitleHome from "../UI/Title/TitleHome.jsx";
import ModalSearch from "../UI/Modal/SearchModal.jsx";
import "../Section/TextHome/MainBlocsHome.jsx";
import "../../Home/Homepage";
import DarkLightThemes from "../../hook/useTheme.jsx";
import NavbarMobile from "./MainNavbarMobile.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import FlagFr from "./FlagTrad/FlagFr.jsx";
import FlagUk from "./FlagTrad/FlagUk.jsx";

const NavbarDesktop = () => {
  const [scrollNavbar, setScrollNavbar] = useState();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsTwoMenu, setShowSousListsTwoMenu] = useState(false);
  const [showSousListsRate, setShowSousListsRate] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [showSousListsTrad, setShowSousListsTrad] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [openModel, setOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
  const SectionToScroll = () => {
    const contactSection = document.getElementById("team");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const SectionToSectionContact = () => {
    const ContactToScroll = document.getElementById("contact");
    if (ContactToScroll) {
      ContactToScroll.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
  const toggleSousListsTwoMenu = () => {
    setShowSousListsTwoMenu(!showSousListsTwoMenu);
    setIsHovered(false);
    setIsExpanded(!isExpanded);
  };
  const toggleSousListsRate = () => {
    setShowSousListsRate(!showSousListsRate);
    setIsExpanded(!isExpanded);
  };
  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };
  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 1000);
  };
  const toggleSousLists5 = () => {
    setShowSousListsTrad(!showSousListsTrad);
    setIsExpanded5(!isExpanded5);
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
  });
  return (
    <div className={`WireBannier`}>
      <div className={`BgHome bg-cover bg-no-repeat`}>
        <nav
          className={`bg-fff6e4 border-c22e2e border-b-4 fixed w-full top-0 left-0 h-28 items-center shadow-md z-50 2xl:flex hidden`}
        >
          <div
            className={`flex justify-between items-center h-24 mt-2 container mx-auto px-4 sm:px-6 lg:px-8`}
          >
            <NavLink to="/">
              <img
                src={ImgBlack}
                // src={isDarkMode ? ImgBlack : ImgWhite}
                alt="Logo"
                onClick={scrollToTop}
                data-aos="fade-left"
                className={`lg:h-20 h-10 w-auto transform active:scale-75 transition-transform`}
              />
            </NavLink>
            <div className={`flex justify-center items-center`}>
              <li className={`relative group list-none`}>
                <NavLink
                  to="/"
                  onClick={SectionToScroll}
                  onMouseEnter={handleMouseEnterSubmenu}
                  onMouseLeave={closeSubmenuWithDelay}
                  className={`hover:opacity-80 transition duration-500 px-6 py-2 text-2xl font-extrabold ${
                    isDarkMode ? "text-c22e2e" : "text-fff6e4"
                  }`}
                >
                  {translations[language].navAgence}
                  {translations[language].navAgency}
                </NavLink>
                <div className={`flex justify-center`}>
                  <ul
                    className={`bg-fff6e4 absolute hidden group-hover:block font-extrabold text-left w-44 rounded-lg py-3 ${
                      isDarkMode ? "text-c22e2e" : "text-fff6e4"
                    } FadeInDelayDesktop`}
                  >
                    <li>
                      <NavLink
                        to="/"
                        onClick={scrollToTop}
                        className={`block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        {translations[language].navSousHomeFr}
                        {translations[language].navSousHomeEn}
                      </NavLink>
                      <li>
                        <NavLink
                          to="/values"
                          className={`block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                        >
                          {translations[language].navSousValuesFr}
                          {translations[language].navSousValuesEn}
                        </NavLink>
                      </li>
                    </li>
                    <button onClick={toggleSousListsTwoMenu}>
                      <div className={`flex justify-between items-center`}>
                        <div
                          className={`block hover:opacity-80 transition duration-500 px-4 py-2 pr-2 font-extrabold`}
                        >
                          {translations[language].navSousTeamFr}
                          {translations[language].navSousTeamEn}
                        </div>
                        {isExpanded ? <RxCross2 /> : <IoIosArrowDown />}
                      </div>
                    </button>
                    <ul
                      className={`${
                        showSousListsTwoMenu ? "block" : "hidden"
                      } p-2`}
                    >
                      <li
                        className={`ml-2 ${
                          isDarkMode ? "text-c22e2e" : "text-fff6e4"
                        }`}
                      >
                        <NavLink
                          to="/designer"
                          className={`border-c22e2e FadeInDelayDesktop block border-b-2 rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                        >
                          Designer
                        </NavLink>
                      </li>
                      <li className={`ml-2`}>
                        <NavLink
                          to="/developer"
                          className={`border-c22e2e FadeInDelayDesktop block border-b-2 rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                        >
                          Web Developer
                        </NavLink>
                      </li>
                    </ul>
                  </ul>
                </div>
              </li>
              <li className={`relative group list-none`}>
                <NavLink
                  to="/services"
                  className={`hover:opacity-80 transition duration-500 px-6 py-2 text-2xl font-extrabold ${
                    isDarkMode ? "text-c22e2e" : "text-fff6e4"
                  }`}
                >
                  {translations[language].navServices}
                  {translations[language].navServicesEn}
                </NavLink>
                <div className={`flex justify-center`}>
                  <ul
                    className={`bg-fff6e4 absolute hidden group-hover:block w-44 rounded-lg py-3 text-left ${
                      isDarkMode ? "text-c22e2e" : "text-fff6e4"
                    } FadeInDelayDesktop`}
                  >
                    <li>
                      <NavLink
                        to="/services"
                        className={`block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        {translations[language].navSousServicesFr}
                        {translations[language].navSousServicesEn}
                      </NavLink>
                    </li>
                    <button onClick={toggleSousListsRate}>
                      <div className={`flex justify-between items-center`}>
                        <div
                          className={`block hover:opacity-80 transition duration-500 px-4 py-2 pr-2 font-extrabold`}
                        >
                          {translations[language].navSousPricingFr}
                          {translations[language].navSousPricingEn}
                        </div>
                        {isExpanded ? <RxCross2 /> : <IoIosArrowDown />}
                      </div>
                    </button>
                    <ul
                      className={`FadeInDelayDesktop p-2 ${
                        showSousListsRate ? "block" : "hidden"
                      }`}
                    >
                      <li className={`ml-2`}>
                        <NavLink
                          to="/pricingfr"
                          className={`border-c22e2e block border-b-2 rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                        >
                          {translations[language].navSousPricingFr}
                          {translations[language].navSousPricingEn} FR
                        </NavLink>
                      </li>
                      <li className={`ml-2`}>
                        <NavLink
                          to="/pricinguk"
                          className={`border-c22e2e block border-b-2 rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                        >
                          {translations[language].navSousPricingFr}
                          {translations[language].navSousPricingEn} UK
                        </NavLink>
                      </li>
                    </ul>
                    <li>
                      <NavLink
                        to="/quote"
                        className={`block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        {translations[language].navSousFreeFr}
                        {translations[language].navSousFreeEn}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <div className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
                <NavLink
                  to="/portfolio"
                  className={`hover:opacity-80 transition duration-500 px-6 py-2 text-2xl font-extrabold`}
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/"
                  onClick={SectionToSectionContact}
                  className={`hover:opacity-80 transition duration-500 px-6 py-2 text-2xl font-extrabold`}
                >
                  Contact
                </NavLink>
              </div>
              <li
                className={`relative group list-none px-2 ${
                  isDarkMode ? "text-c22e2e" : "text-fff6e4"
                }`}
              >
                <div className={`flex justify-between items-center`}>
                  <div className={`pr-2`}>
                    <span className={`text-2xl font-extrabold`}>
                      {language}
                    </span>
                  </div>
                  {isExpanded5 ? <RxCross2 /> : <IoIosArrowDown />}
                </div>
                <ul
                  className={`bg-fff6e4 absolute -right-2 hidden group-hover:block font-extrabold text-left w-24 rounded-lg py-3 ${
                    isDarkMode ? "text-c22e2e" : "text-fff6e4"
                  } FadeInDelayDesktop`}
                >
                  <li
                    className="text-c22e2e hover:opacity-80 px-4 py-2"
                    onClick={() => changeLanguageHandler("FR")}
                  >
                    FR <FlagFr />
                  </li>
                  <li
                    className="text-c22e2e hover:opacity-80 px-4 py-2"
                    onClick={() => changeLanguageHandler("EN")}
                  >
                    EN <FlagUk />
                  </li>
                </ul>
              </li>
              <div
                className={`hover:opacity-80 duration-500 px-6 py-2 text-2xl font-extrabold transform active:scale-75 transition-transform ${
                  isDarkMode ? "text-c22e2e" : "text-fff6e4"
                }`}
              >
                <FaSearch
                  data-aos="fade-left"
                  className={`h-5 xl:h-7`}
                  onClick={() => {
                    setOpenModel(true);
                  }}
                />
              </div>
              {openModel && (
                <ModalSearch
                  className={`${isDarkMode ? "bg-fff6e4" : "bg-061628"}`}
                  closeModal={setOpenModel}
                  searchQuery={setSearchQuery}
                />
              )}
              {/* <DarkLightThemes /> */}
            </div>
          </div>
        </nav>
        <NavbarMobile />
        <TitleHome />
      </div>
    </div>
  );
};

export default NavbarDesktop;

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "./../../context/ThemeProvider.jsx";
import { useLanguage } from "./../../context/LanguageProvider.jsx";
import DarkLightThemes from "./../../hook/useTheme.jsx";
import ModalSearch from "../UI/Modal/SearchModal.jsx";
import translations from "./translate.jsx";
import ImgBlack from "../../assets/Logo/LogoMainNaviStudio.png";
import ButtonOpen from "./ButtonMobile/ButtonOpen.jsx";
import ButtonClose from "./ButtonMobile/ButtonClose.jsx";
import "../Section/TextHome/MainBlocsHome.jsx";
import "../../Home/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import FlagFr from "./FlagTrad/FlagFr.jsx";
import FlagUk from "./FlagTrad/FlagUk.jsx";

const LinksNavbarMobile = () => {
  const { language, changeLanguage } = useLanguage();
  const { isDarkMode } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openModel, setOpenModel] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [isOpen, setIsOpen] = useState(false);
  // MES 4 LISTS
  const [showSousListsAgence, setShowSousListsAgence] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [showSousListsFiveMenu, setShowSousListsFiveMenu] = useState(false);
  const [showSousListsRate, setShowSousListsRate] = useState(false);
  const [showSousListsTrad, setShowSousListsTrad] = useState(false);
  // MES 4 ICONS
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const changeLanguageHandler = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  const handleAnimateButtonClick = () => {
    setIsAnimating(!isAnimating);
  };

  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpen(!isOpen);
  };

  const toggleSousLists1 = () => {
    setShowSousListsAgence(!showSousListsAgence);
    setIsExpanded1(!isExpanded1);
  };
  const toggleSousLists2 = () => {
    setShowSousListsFiveMenu(!showSousListsFiveMenu);
    setIsExpanded2(!isExpanded2);
  };
  const toggleSousLists3 = () => {
    setShowSousListsMenu(!showSousListsMenu);
    setIsExpanded3(!isExpanded3);
  };
  const toggleSousLists4 = () => {
    setShowSousListsRate(!showSousListsRate);
    setIsExpanded4(!isExpanded4);
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
  }, [
    showSousListsAgence,
    showSousListsFiveMenu,
    showSousListsMenu,
    showSousListsRate,
    showSousListsTrad,
  ]);
  return (
    <nav
      className={`bg-fff6e4 fixed w-full top-0 left-0 shadow-md 2xl:hidden z-50`}
    >
      <div className={`flex items-center justify-between h-28 px-5`}>
        <NavLink to="/" data-aos="fade-left">
          <img
            // src={isDarkMode ? ImgBlack : ImgWhite}
            src={ImgBlack}
            alt="Logo navi studio."
            className={`h-14 w-auto transform active:scale-75 transition-transform`}
          />
        </NavLink>
        <div
          data-aos="fade-left"
          className={`cursor-pointer rounded-full mr-1`}
        >
          <div className={`flex justify-between items-center`}>
            <div data-aos="fade-right" className={`pt-2 px-3`}>
              <DarkLightThemes />
            </div>
            <div data-aos="fade-left" onClick={toggleMenuMobile}>
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
        </div>
      </div>
      <ul className={`p-5 FadeInDelayDesktop ${isOpen ? "block" : "hidden"}`}>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <div className={`flex justify-start px-3`}>
            <div
              className={`hover:opacity-80 duration-500 transform active:scale-75 transition-transform ${
                isDarkMode ? "text-c22e2e" : "text-fff6e4"
              }`}
            >
              <FaSearch
                className={`h-10 w-5 mr-5 transform active:scale-75 transition-transform`}
                onClick={() => {
                  setOpenModel(true);
                }}
              />
            </div>
          </div>
          {openModel && (
            <ModalSearch
              closeModal={setOpenModel}
              searchQuery={setSearchQuery}
            />
          )}
        </li>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink
            className={`border-c22e2e text-lg block px-3 py-2 border-b-2 rounded-md font-extrabold`}
          >
            <button onClick={toggleSousLists1}>
              <div className={`flex justify-between items-center`}>
                <div className="pr-2">
                  {translations[language].navAgence}
                  {translations[language].navAgency}
                </div>
                {isExpanded1 ? <RxCross2 /> : <IoIosArrowDown />}
              </div>
            </button>
            <ul className={`p-2 ${showSousListsAgence ? "block" : "hidden"}`}>
              <li>
                <ul
                  data-aos="fade-left"
                  className={`p-2 ${showSousListsAgence ? "block" : "hidden"}`}
                >
                  <li className={`font-extrabold`}>
                    <NavLink
                      to="/"
                      className={`border-c22e2e text-lg block border-b-2 hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                    >
                      {translations[language].navSousHomeFr}
                      {translations[language].navSousHomeEn}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/values"
                      className={`border-c22e2e text-lg block border-b-2 hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                    >
                      {translations[language].navSousValuesFr}
                      {translations[language].navSousValuesEn}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className={`text-lg block py-2 rounded-md font-extrabold`}
                >
                  <button onClick={toggleSousLists2}>
                    <div className={`flex justify-between items-center`}>
                      <div className={`pr-2`}>
                        {translations[language].navSousTeamFr}
                        {translations[language].navSousTeamEn}
                      </div>
                      {isExpanded2 ? <RxCross2 /> : <IoIosArrowDown />}
                    </div>
                  </button>
                  <ul
                    data-aos="fade-left"
                    className={` ${
                      showSousListsFiveMenu ? "block" : "hidden"
                    } p-2`}
                  >
                    <li className={`font-extrabold`}>
                      <NavLink
                        to="/designer"
                        className={`border-c22e2e text-lg block border-b-2 hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        Designer
                      </NavLink>
                    </li>
                    <li className={`font-extrabold`}>
                      <NavLink
                        to="/developer"
                        className={`text-lg block rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
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
          <NavLink
            className={`border-c22e2e text-lg block px-3 py-2 border-b-2 rounded-md font-extrabold`}
          >
            <button onClick={toggleSousLists3}>
              <div className={`flex justify-between items-center`}>
                <div className={`pr-2`}>
                  {translations[language].navServices}
                  {translations[language].navServicesEn}
                </div>
                {isExpanded3 ? <RxCross2 /> : <IoIosArrowDown />}
              </div>
            </button>
            <ul
              data-aos="fade-left"
              className={` ${showSousListsMenu ? "block" : "hidden"} p-2`}
            >
              <li>
                <NavLink
                  to="/services"
                  className={`border-c22e2e text-lg block border-b-2 hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                >
                  {translations[language].navSousServicesFr}
                  {translations[language].navSousServicesEn}
                </NavLink>
              </li>
              <NavLink className={`border-c22e2e block border-b-2`}>
                <li>
                  <button onClick={toggleSousLists4}>
                    <div className={`flex justify-between items-center`}>
                      <div
                        className={`text-lg block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold pr-2`}
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn}
                      </div>
                      {isExpanded4 ? <RxCross2 /> : <IoIosArrowDown />}
                    </div>
                  </button>
                  <ul
                    data-aos="fade-left"
                    className={` ${showSousListsRate ? "block" : "hidden"} p-2`}
                  >
                    <li className={`font-extrabold`}>
                      <NavLink
                        to="/pricingfr"
                        className={`border-c22e2e text-lg block border-b-2 hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn} FR
                      </NavLink>
                    </li>
                    <li className={`font-extrabold`}>
                      <NavLink
                        to="/pricinguk"
                        className={`text-lg block rounded-md hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
                      >
                        {translations[language].navSousPricingFr}
                        {translations[language].navSousPricingEn} UK
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </NavLink>
              <li>
                <NavLink
                  to="/quote"
                  className={`text-lg block hover:opacity-80 transition duration-500 px-4 py-2 font-extrabold`}
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
            className={`border-c22e2e text-lg block px-3 py-2 border-b-2 rounded-md font-extrabold hover:opacity-80 transition duration-500`}
          >
            Portfolio
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
          <NavLink
            to="/"
            className={`border-c22e2e text-lg block px-3 py-2 border-b-2 rounded-md font-extrabold hover:opacity-80 transition duration-500`}
          >
            Contact
          </NavLink>
        </li>
        <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"} pb-3`}>
          <div
            className={`border-c22e2e border-b-2 text-lg block px-1 rounded-md font-extrabold`}
          >
            <li className={`${isDarkMode ? "text-c22e2e" : "text-fff6e4"}`}>
              <div
                className={` text-lg block px-3 py-2 rounded-md font-extrabold`}
              >
                <button onClick={toggleSousLists5}>
                  <div className={`flex justify-between items-center`}>
                    <div className={`pr-2`}>
                      <span>{language}</span>
                    </div>
                    {isExpanded5 ? <RxCross2 /> : <IoIosArrowDown />}
                  </div>
                </button>
                <ul
                  data-aos="fade-left"
                  className={`${showSousListsTrad ? "block" : "hidden"} p-2`}
                >
                  <li
                    className="px-4 py-2 text-c22e2e hover:opacity-80"
                    onClick={() => changeLanguageHandler("FR")}
                  >
                    FR <FlagFr />
                  </li>
                  <li
                    className="px-4 py-2 text-c22e2e hover:opacity-80"
                    onClick={() => changeLanguageHandler("EN")}
                  >
                    EN <FlagUk />
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </li>
      </ul>
      <div id={`home`}></div>
    </nav>
  );
};

export default LinksNavbarMobile;

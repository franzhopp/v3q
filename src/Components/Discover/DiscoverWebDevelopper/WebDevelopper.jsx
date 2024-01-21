import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import NavbarDiscoverWebDevelopper from "../../Navigation/NavbarDiscover/DiscoverWebDevelopperNavbar";
import Avatar from "../../UI/Avatar/TemplateAvatarWebDeveloper";
import LogoInsta from "../../../assets/instagram1.png";
import LogoLinkedin from "../../../assets/linkedin1.png";
import LogoSnap from "../../../assets/snapchat1.png";
import Footer from "../../Footer/Footer";

import TitlePage from "./TitlePage.jsx";
import SubTitlePage from "./SubTitlePage.jsx";
import BaseBackground from "./BaseBackground.jsx";
{
  /* ☺︎ */
}
const DiscoverWebDeveloper = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-FFF6E4">
      <NavbarDiscoverWebDevelopper />
      <Avatar />
      <BaseBackground />
      <div className="flex flex-col pt-60">
        <div className="flex justify-center mt-44">
          <TitlePage />
        </div>
        <div className="flex justify-center mt-32">
          <SubTitlePage />
        </div>
        <div className="bg-C22E2E flex justify-center pt-32 pb-24">
          <NavLink className="bg-FFF6E4 text-C22E2E shadow-md inline-flex items-center gap-2 px-8 py-3 rounded-full transition-transform transform hover:scale-105">
            <span className="text-3xl mr-3 font-semibold">
              {translations[language].btnDiscoverFr}
              {translations[language].btnDiscoverEn}{" "}
            </span>
            <svg
              className="hidden sm:block"
              width="44"
              height="38"
              viewBox="0 0 44 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                fill="#C22E2E"
              />
            </svg>
            <svg
              className="sm:hidden"
              width="44"
              height="38"
              viewBox="0 0 44 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                fill="#C22E2E"
              />
            </svg>
          </NavLink>
        </div>
      </div>
      <div className="picture-belgique h-52 pt-10"></div>
      <div className="flex justify-center mt-28">
        <p className="text-C22E2E text-center font-inter text-2xl lg:text-4xl">
          Qui est-elle ?
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="20"
              viewBox="0 0 116 20"
              fill="none"
            >
              <path d="M0 0L61 20L116 0H0Z" fill="#C22E2E" />
            </svg>
          </div>
        </p>
      </div>
      <div class="pt-32 pb-10 flex flex-wrap justify-center space-x-0 sm:space-x-10">
        <div class="p-6">
          <div
            data-aos="fade-in"
            className="flex flex-row space-x-10 list-none "
          >
            <li>
              <NavLink
                to="https://www.instagram.com/navistudio.fr/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <img
                  src={LogoInsta}
                  alt="Icône Instagram"
                  className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="" rel="noreferrer" target="_blank">
                {" "}
                <img
                  src={LogoLinkedin}
                  alt="Icône Linkedin"
                  className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://t.snapchat.com/BYKwKD2r"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <img
                  src={LogoSnap}
                  alt="Icône Snapchat"
                  className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
                />
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DiscoverWebDeveloper;

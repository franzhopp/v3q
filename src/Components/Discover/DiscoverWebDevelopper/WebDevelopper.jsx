import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import NavbarDiscoverWebDevelopper from "../../Navigation/NavbarDiscover/DiscoverWebDevelopperNavbar";
import Avatar from "../../UI/Avatar/TemplateAvatarWebDeveloper";
import LogoInsta from "../../../assets/instagram1.png";
import LogoLinkedin from "../../../assets/linkedin1.png";
import LogoSnap from "../../../assets/snapchat1.png";
import Footer from "../../Footer/Footer";

import { useEffect } from "react";
import TitlePage from "./TitlePage.jsx";
import SubTitlePage from "./SubTitlePage.jsx";
import BaseBackground from "./BaseBackground.jsx";
import PatternLouisa from "../../../assets/picture-louisa.png";
import SvgMoon from "./SvgMoon.jsx";
import Frame from "./Frame.jsx";
import Vector from "./Vector.jsx";

const DiscoverWebDeveloper = () => {
  const { language } = useLanguage();
  const SectionToScrollDesc = () => {
    const contactSection = document.getElementById("descl");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
  }, []);
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
          <NavLink
            onClick={SectionToScrollDesc}
            className="bg-FFF6E4 text-C22E2E shadow-md inline-flex items-center gap-2 px-8 py-3 rounded-full transition-transform transform hover:scale-105"
          >
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
      <div className="picture-belgique h-52"></div>
      <div className="flex justify-center pt-20">
        <p
          data-aos="fade-right"
          className="text-C22E2E text-center font-inter text-2xl lg:text-4xl"
        >
          <div id="descl" className=""></div>
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
      <div className="flex flex-wrap justify-center pt-24 space-x-20">
        <div className="flex relative">
          <Frame />
        </div>
        <div data-aos="fade-left" className="pb-20">
          <img src={PatternLouisa} className="-rotate-6" />
        </div>
        <div className="flex relative">
          <Vector />
        </div>
        <div className="p-6 bg-F9FEFE sm:w-96 sm:h-1/2 text-center rounded-lg shadow-lg rotate-6">
          <div className="mt-5 text-base">
            <p className="text-C22E2E mb-3">
              Hello ! Je m'appelle Louisa, je suis passionnée par le
              Développement web & le Design. Mon voyage a débuté en 2022, j'ai
              étudié à Paris 🇫🇷. Me formant à travers des écoles ainsi qu'un
              travail personnel très régulier. J'aime voyager, lire des livres,
              l'art et aussi la photographie.
            </p>
            <p className="text-C22E2E mb-5">
              C'est pour cela que cette idée de création avec Mélissa m'a donc
              donné la motivation de créer mon agence pour unir nos compétences.
              Je t'invite à naviger les pages de ce site, conçu avec une grande
              passion et un immense plaisir de te la partager ! ☺
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <SvgMoon />
      </div>
      <div className="flex flex-col justify-center pt-10">
        <h2 className="text-C22E2E font-emblema text-2xl text-center">
          Astres Lunaires
        </h2>
        <p className="text-C22E2E xs text-center">
          DEVELOPER • DESIGNER • WRITER
        </p>
      </div>
      <div class="pt-14 pb-28 flex flex-wrap justify-center space-x-0 sm:space-x-10">
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

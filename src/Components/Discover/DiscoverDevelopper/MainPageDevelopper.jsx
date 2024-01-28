import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { FaArrowRight } from "react-icons/fa";
import translations from "../translate.jsx";
import NavbarDiscoverWebDevelopper from "../../Navigation/NavbarDiscover/NavbarDevelopper.jsx";
import Avatar from "../../UI/Avatar/AvatarDeveloper.jsx";
import TitlePage from "./Title/TitlePage.jsx";
import SubTitlePage from "./Title/SubTitlePage.jsx";
import SubDescTitle from "./Title/SubDescTitle.jsx";
import BaseBackground from "./Svg/SvgMainBackground.jsx";
import SvgPyramid from "./Svg/SvgPyramid.jsx";
import Pattern from "../../../assets/picture-louisa.png";
import Copyright from "./Copyright/LocationCopyright.jsx";
import Frame from "./Svg/SvgFrame.jsx";
import Vector from "./Svg/SvgVector.jsx";
import LogoBrand from "./Logo/LogoBrand.jsx";
import BackToTopButton from "../../UI/ScrollToTop/BackToTopButton.jsx";
import LinksNetwork from "./Network/LinksNetwork.jsx";
import Footer from "../../Footer/MainFooter.jsx";

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
              {translations[language].btnDiscoverEn}
            </span>
            <FaArrowRight className="h-10 w-10" />
          </NavLink>
          <BackToTopButton />
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
            <SvgPyramid />
          </div>
        </p>
      </div>
      <div className="flex flex-wrap justify-center pt-28 space-x-10">
        <div className="flex relative">
          <Frame />
        </div>
        <div data-aos="fade-left" className="pb-20">
          <img
            src={Pattern}
            className="-rotate-6 transition hover:opacity-90"
          />
          <Copyright />
        </div>
        <div className="flex relative">
          <Vector />
        </div>
        <div className="p-5 bg-F9FEFE sm:w-96 sm:h-1/2 text-center rounded-lg shadow-lg rotate-6">
          <div className="mt-5 text-base">
            <SubDescTitle />
          </div>
        </div>
      </div>
      <LogoBrand />
      <div class="pt-14 pb-28 flex flex-wrap justify-center space-x-0 sm:space-x-10">
        <div class="p-6">
          <div
            data-aos="fade-in"
            className="flex flex-row space-x-10 list-none"
          >
            <LinksNetwork />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default DiscoverWebDeveloper;
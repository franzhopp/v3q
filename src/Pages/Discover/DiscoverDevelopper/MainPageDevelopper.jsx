import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { FaArrowRight } from "react-icons/fa";
import translations from "../translate.jsx";
import NavbarDiscoverWebDevelopper from "../../../Components/Navigation/NavbarDiscover/NavbarDevelopper.jsx";
import Avatar from "../../../Components/UI/Avatar/AvatarDeveloper.jsx";
import TitlePage from "./Title/TitlePage.jsx";
import SubTitlePage from "./Title/SubTitlePage.jsx";
import SubDescTitle from "./Title/SubDescTitle.jsx";
import BaseBackground from "./Svg/SvgMainBackground.jsx";
import SvgPyramid from "./Svg/SvgPyramid.jsx";
import ImageProjects from "./Image/ImageProjects.jsx";
import Pattern from "../../../assets/Picture/PictureLouisa.png";
import Copyright from "./Copyright/LocationCopyright.jsx";
import Frame from "./Svg/SvgFrame.jsx";
import Vector from "./Svg/SvgVector.jsx";
import LogoBrand from "./Logo/LogoBrand.jsx";
import LinksNetwork from "./Network/LinksNetwork.jsx";
import Footer from "../../../Components/Footer/MainFooter.jsx";
import BackToTopButton from "../../../Components/UI/ScrollToTop/BackToTopButton.jsx";

const DiscoverWebDeveloper = () => {
  const { language } = useLanguage();

  const SectionToScrollDesc = () => {
    const contactSection = document.getElementById("AboutLouisa");
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
    <section className="bg-fff6e4">
      <NavbarDiscoverWebDevelopper />
      <Avatar />
      <BaseBackground />
      <div className="bg-c22e2e flex flex-col">
        <div className="flex justify-center py-20">
          <TitlePage />
        </div>
        <div className="flex justify-center py-10">
          <SubTitlePage />
        </div>
        <div className="flex justify-center py-20">
          <NavLink
            onClick={SectionToScrollDesc}
            className="bg-fff6e4 text-c22e2e shadow-md inline-flex items-center gap-2 px-8 py-3 rounded-full transform active:scale-75 transition-transform"
          >
            <span className="text-3xl mr-3 font-semibold">
              {translations[language].btnDiscoverFr}
              {translations[language].btnDiscoverEn}
            </span>
            <FaArrowRight className="h-10 w-10" />
          </NavLink>
        </div>
      </div>
      <div
        id="AboutLouisa"
        className="PictureBelgique bg-cover bg-no-repeat h-52"
      ></div>
      <BackToTopButton />
      <div className="flex justify-center pt-20">
        <p
          data-aos="fade-right"
          className="text-c22e2e text-center font-inter text-3xl lg:text-4xl"
        >
          À propos
          <div className="flex justify-center">
            <SvgPyramid />
          </div>
        </p>
      </div>
      <div className="flex flex-wrap justify-center pt-20 space-x-10">
        <div className="flex relative">
          <Frame />
        </div>
        <div data-aos="fade-left">
          <img
            src={Pattern}
            className="-rotate-12 transition duration-500 hover:opacity-90"
          />
          <div className="flex justify-center pl-20">
            <Copyright />
          </div>
        </div>
        <div className="flex relative">
          <Vector />
        </div>
        <div className="bg-f9fefe p-5 mt-20 lg:mt-0 lg:w-96 lg:h-1/2 text-center rounded-2xl shadow-lg rotate-12">
          <div className="mt-5">
            <SubDescTitle />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <p
          data-aos="fade-left"
          className="text-c22e2e text-center font-inter text-3xl lg:text-4xl"
        >
          Projets
          <div className="flex justify-center">
            <SvgPyramid />
          </div>
        </p>
      </div>

      <div className="flex justify-center pt-20 p-10">
        <div className="bg-f9fefe p-4 rounded-2xl shadow-lg sm:w-1/2 sm:h-1/2 transition duration-500 hover:opacity-90">
          <ImageProjects />
        </div>
      </div>
      <LogoBrand />
      <div className="py-16 flex flex-wrap justify-center space-x-0 sm:space-x-10">
        <div className="p-6">
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

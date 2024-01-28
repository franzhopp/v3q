import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../Homepage/Homepage.jsx";

const NavbarServices = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <div className="image-navi-studio-navbar-services pb-0 2xl:pb-20">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
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

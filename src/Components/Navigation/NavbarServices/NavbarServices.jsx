import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../Homepage/Homepage.jsx";

const NavbarServices = () => {
  const { language } = useLanguage();
  return (
    <div className="image-navi-studio-navbar-services h-full py-56 bg-cover bg-center">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
      <div className="px-10">
        <h1 className="text-fff6e4 text-6xl lg:text-8xl tracking-tighter font-extrabold">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {translations[language].titleServicesFr}
            {translations[language].titleServicesEn}
          </motion.span>
        </h1>
        <div className="w-80 lg:w-1/2 pt-5 pl-1">
          <p className="text-fff6e4 text-lg lg:text-4xl font-extrabold">
            {translations[language].titleServices1Fr}
            {translations[language].titleServices1En}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarServices;

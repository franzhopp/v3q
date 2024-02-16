import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../Homepage/Homepage.jsx";

const NavbarEthics = () => {
  const { language } = useLanguage();
  return (
    <div className="BgValues bg-cover bg-no-repeat bg-center h-full py-56">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
      <div className="px-10">
        <h1 className="text-fff6e4 text-6xl lg:text-8xl tracking-tighter font-extrabold">
          <motion.span
            id="all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {translations[language].navSousValuesFr}
            {translations[language].navSousValuesEn}
          </motion.span>
        </h1>
        <div className="w-80 lg:w-1/2 pt-5 pl-1">
          <span className="text-fff6e4 text-lg lg:text-4xl font-extrabold">
            {translations[language].titleNavEthicsFr}
            {translations[language].titleNavEthicsEn}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarEthics;

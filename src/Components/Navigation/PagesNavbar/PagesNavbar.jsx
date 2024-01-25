// import translations from "../translate.jsx";
// import { useLanguage } from "../../../context/LanguageProvider.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/FirstSection.jsx";
import "../../Homepage/Homepage";

const PagesNavbar = () => {
  // const { language, changeLanguage } = useLanguage();
  return (
    <div className="image-navi-studio-porfolio h-screen sm:pb-20 mb:min-h-650 min-h-500">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default PagesNavbar;

// import { useLanguage } from "../../../context/LanguageProvider.jsx";
// import translations from "../translate.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocs.jsx";
import "../../Homepage/Homepage.jsx";

const PrivacyNavbar = () => {
  // const { language, changeLanguage } = useLanguage();
  return (
    <div className="BgServices h-screen sm:pb-20 mb:min-h-650 min-h-500">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default PrivacyNavbar;

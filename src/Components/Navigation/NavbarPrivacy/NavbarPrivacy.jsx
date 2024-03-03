// import { useLanguage } from "../../../context/LanguageProvider.jsx";
// import translations from "../translate.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocs.jsx";
import "../Home/Homepage";

const PrivacyNavbar = () => {
  // const { language, changeLanguage } = useLanguage();
  return (
    <div className={`BgServices h-screen`}>
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default PrivacyNavbar;

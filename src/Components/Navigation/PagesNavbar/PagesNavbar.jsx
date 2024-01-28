// import translations from "../translate.jsx";
// import { useLanguage } from "../../../context/LanguageProvider.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Homepage/Homepage";

const PagesNavbar = () => {
  // const { language, changeLanguage } = useLanguage();
  return (
    <div className="image-navi-studio-porfolio">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default PagesNavbar;

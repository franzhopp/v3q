// import translations from "../translate.jsx";
// import { useLanguage } from "../../../context/LanguageProvider.jsx";
import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Homepage/Homepage.jsx";

const PagesNavbar = () => {
  // const { language, changeLanguage } = useLanguage();
  return (
    <>
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </>
  );
};

export default PagesNavbar;

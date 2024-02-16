import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import NavbaPages from "../../Navigation/NavbarPages/NavbarPages.jsx";
import translations from "./translate.jsx";
import SvgReturnHome from "../Svg/SvgReturnHome.jsx";
import SvgError from "../Svg/SvgError.jsx";
import ImgLogo from "../../../assets/Logo/LogoNaviStudioPinkFlash.png";
import Footer from "../../Footer/MainFooter.jsx";

const PageNotFound = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-fff6e4">
      <NavbaPages />
      <div className="flex justify-start pt-32 sm:pt-30 pl-4">
        <NavLink to="/">
          <SvgReturnHome />
        </NavLink>
      </div>
      <div className="pt-32 pb-40 px-4">
        <div className="flex justify-center animate-formbounce pb-10">
          <SvgError />
        </div>
        <div className="pb-28 text-center">
          <h1 className="text-c22e2e text-9xl font-extrabold">404</h1>
          <p className="text-c22e2e text-2xl sm:text-4xl font-extrabold tracking-tight">
            {translations[language].pageNotFoundFr}
            {translations[language].pageNotFoundEn}
          </p>
          <div className="flex justify-center pt-1">
            <img
              src={ImgLogo}
              className="h-9 sm:h-10"
              alt="Icône navi studio."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;

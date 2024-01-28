import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "./translate.jsx";
import SvgReturnHome from "../Svg/SvgReturnHome.jsx";
import SvgError from "../Svg/SvgError.jsx";
import PagesNavbar from "../../Navigation/NavbarPages/NavbarPages.jsx";
import ImgLogo from "../../../assets/logo-6.png";
import Footer from "../../Footer/MainFooter.jsx";

const PageNotFound = () => {
  const { language } = useLanguage();
  return (
    <section className="bg-FFF6E4">
      <PagesNavbar />
      {/* SVG RETURN HOME */}
      <div className="flex justify-start pt-32 sm:pt-12 pl-3">
        <NavLink
          to="/"
          className="text-C22E2E shadow-full font-extrabold underline transition hover:text-0C3E78"
        >
          <SvgReturnHome />
        </NavLink>
      </div>
      <div className="place-content-center pt-32 pb-40 px-4">
        {/* SVG ERROR */}
        <div className="animate-formbounce flex justify-center pb-10">
          <SvgError />
        </div>
        <div className="text-center pb-28">
          <h1 className="text-C22E2E text-9xl font-extrabold">404</h1>
          <p className="text-C22E2E text-2xl sm:text-4xl font-extrabold tracking-tight">
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
    </section>
  );
};

export default PageNotFound;

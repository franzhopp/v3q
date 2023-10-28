import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImgText from "../../assets/logo-4.png";
import ButtonContact from "../UI/Button/ButtonFormContact";

const Section = () => {
  const { language } = useLanguage();

  const [scrollNavbar, setScrollNavbar] = useState();
  const SectionToScroll = () => {
    const contactSection = document.getElementById("team");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-FFF6E4 pt-24 relative">
      <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
        <div className="w-80 relative">
          <span className="absolute h-72 w-1 bg-C22E2E -left-14 bottom-0 hidden sm:block"></span>
          <p
            data-aos="fade-left"
            className="mt-10 font-extrabold text-black text-4xl sm:text-left text-center relative"
          >
            {translations[language].titleSectionFr}
            {translations[language].titleSectionEn}
          </p>
        </div>
        <div className="w-80 mt-10">
          <div className="p-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-center text-black"
            >
              <span className="font-extrabold">
                {`Notre agence design et développe des sites qui sauront faire briller vos projets.`}
              </span>{" "}
              {`Notre équipe produit des sites modernes et intuitifs qui sauront attirer l'oeil`}
              <span className="font-extrabold">{` des visiteurs`}</span>. Venez
              découvrir
              <span>
                <img
                  src={ImgText}
                  className="h-6 mr-1 inline"
                  alt="Icône navi studio."
                />
              </span>
              dès aujourd'hui.
            </p>
          </div>
        </div>
        <div className="w-80 mt-3 sm:mt-10 relative">
          <div className="p-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="font-extrabold text-center sm:text-right  text-black"
            >
              {`Votre site est votre vision. Chaque site raconte une histoire que notre équipe restranscrit en développant des expériences uniques qui reflètent l'identité de votre marque. Découvrez notre agence, `}
              <NavLink
                href="about"
                onClick={SectionToScroll}
                className="font-extrabold underline text-C22E2E"
              >
                #♡
              </NavLink>
              .
            </p>
          </div>
          <span className="absolute h-96 w-1 bg-C22E2E -right-14 top-0 hidden sm:block"></span>
        </div>
      </div>
      <ButtonContact />
    </section>
  );
};

export default Section;

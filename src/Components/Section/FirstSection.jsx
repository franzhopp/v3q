import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "./translate.jsx";
import ImgBlack from "../../assets/logo-4.png";
import ImgWhite from "../../assets/logo-57.png";
import ButtonContact from "../UI/Button/ButtonFormContact";
import { useTheme } from "../../context/ThemeProvider.jsx";

const Section = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
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
    <section className="bg-FFF6E4 pt-20">
      <div
        className={`flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <div className="w-80 relative">
          <p
            data-aos="fade-left"
            className="mt-10 font-extrabold text-4xl sm:text-left text-center relative"
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
              className="text-center"
            >
              <span className="font-extrabold">
                › {translations[language].textBoldOneFr}
                {translations[language].textBoldOneEn}
              </span>{" "}
              {translations[language].textWithoutBoldOneFr}
              {translations[language].textWithoutBoldOneEn}
              <span>
                <img
                  src={isDarkMode ? ImgBlack : ImgWhite}
                  className="h-5 mr-1 inline"
                  alt="Icône navi studio."
                />
              </span>{" "}
              {translations[language].textWithoutWordBoldFsFr}
            </p>
          </div>
        </div>
        <div className="w-80 mt-3 sm:mt-10 relative">
          <div className="p-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="font-extrabold text-center sm:text-right"
            >
              › {translations[language].textWithoutBoldFsFr}
              {translations[language].textWithoutBoldFsEn}{" "}
              <a
                onClick={SectionToScroll}
                className="font-extrabold underline text-C22E2E"
              >
                #navi
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <ButtonContact />
    </section>
  );
};

export default Section;

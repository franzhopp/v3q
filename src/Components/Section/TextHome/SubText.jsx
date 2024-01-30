import { useEffect, useState } from "react";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const SubTextHome = () => {
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
    <>
      <div className="w-80 mt-10">
        <div className="p-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-center"
          >
            <span className="font-extrabold">
              {translations[language].textBoldOneFr}
              {translations[language].textBoldOneEn}
            </span>{" "}
            {translations[language].textWithoutBoldOneFr}
            {translations[language].textWithoutBoldOneEn}{" "}
            <span>navi studio.™</span>{" "}
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
            {translations[language].textWithoutBoldFsFr}
            {translations[language].textWithoutBoldFsEn}{" "}
            <a
              onClick={SectionToScroll}
              className="font-extrabold underline text-c22e2e"
            >
              #navi
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SubTextHome;

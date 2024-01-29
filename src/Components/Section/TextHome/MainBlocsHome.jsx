import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import TitleTextHome from "./Title.jsx";
import SubTextHome from "./SubText.jsx";
import ButtonContact from "../../UI/Button/ButtonFormContact.jsx";
import BackToTopButton from "../../UI/ScrollToTop/BackToTopButton.jsx";

const BlocsItemsHome = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="py-3 bg-FFF6E4 border-b-2 border-C22E2E">
        <span className="flex justify-center text-center font-extrabold px-10 text-black text-2xl sm:text-2xl">
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </span>
      </div>

      <section className="bg-FFF6E4 pt-24">
        <div
          className={`flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 ${
            isDarkMode ? "text-black" : "text-FFF6E4"
          }`}
        >
          <TitleTextHome />
          <SubTextHome />
        </div>
        <BackToTopButton />
        <ButtonContact />
      </section>
    </>
  );
};

export default BlocsItemsHome;

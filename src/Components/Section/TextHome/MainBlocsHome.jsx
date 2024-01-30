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
        <div
          className={`flex justify-center text-center font-extrabold px-10 text-md tracking-tight ${
            isDarkMode ? "text-black" : "text-FFF6E4"
          }`}
        >
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </div>
      </div>
      <div className="bg-FFF6E4 pt-24">
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
      </div>
    </>
  );
};

export default BlocsItemsHome;

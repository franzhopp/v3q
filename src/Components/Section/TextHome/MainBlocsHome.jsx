import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import TitleTextHome from "./Title.jsx";
import SubTextHome from "./SubText.jsx";
import ButtonContact from "../../UI/Button/BtnFormContact.jsx";
import BackToTopButton from "../../UI/ScrollToTop/BackToTopButton.jsx";

const BlocsItemsHome = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="py-3 bg-fff6e4 border-b-4 border-c22e2e">
        <div
          className={`flex justify-center text-center font-extrabold px-10 text-lg lg:text-2xl tracking-tight ${
            isDarkMode ? "text-black" : "text-fff6e4"
          }`}
        >
          {translations[language].scrollingTextFr}
          {translations[language].scrollingTextEn}
        </div>
      </div>
      <div className="bg-fff6e4 pt-24">
        <div
          className={`flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 ${
            isDarkMode ? "text-black" : "text-fff6e4"
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

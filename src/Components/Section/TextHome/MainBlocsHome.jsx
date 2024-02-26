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
      <div className="border-c22e2e border-b-4 py-3">
        <div
          className={`font-extrabold px-10 text-lg lg:text-2xl tracking-tight inline-block whitespace-nowrap AnimationScrolling ${
            isDarkMode ? "text-black" : "text-fff6e4"
          }`}
        >
          <span className={`transform active:scale-75 transition-transform`}>
            {translations[language].scrollingTextFr}
            {translations[language].scrollingTextEn}
          </span>
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

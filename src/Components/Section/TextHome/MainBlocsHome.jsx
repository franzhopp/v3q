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
      <div className={`bg-fff6e4 pt-36`}>
        <div
          className={`flex flex-wrap justify-center items-center space-x-0 sm:space-x-6 ${
            isDarkMode ? "text-black" : "text-fff6e4"
          }`}
        >
          <TitleTextHome />
          <SubTextHome />
        </div>
        <BackToTopButton />
      </div>
      <ButtonContact />
    </>
  );
};

export default BlocsItemsHome;

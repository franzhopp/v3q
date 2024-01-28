import { useTheme } from "../../../context/ThemeProvider.jsx";
import TitleTextHome from "./Title.jsx";
import SubTextHome from "./SubText.jsx";
import ButtonContact from "../../UI/Button/ButtonFormContact.jsx";
import BackToTopButton from "../../UI/ScrollToTop/BackToTopButton.jsx";

const BlocsItemsHome = () => {
  const { isDarkMode } = useTheme();
  return (
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
  );
};

export default BlocsItemsHome;

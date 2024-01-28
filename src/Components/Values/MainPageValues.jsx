import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";
import SvgFontRight from "./Svg/SvgFontRight";
import SvgFontLeft from "./Svg/SvgFontLeft";
import NavbarEthics from "../Navigation/NavbarValues/NavbarValues.jsx";
import Img from "../../assets/bg-ethics-mac.png";
import BackToTopButton from "../UI/ScrollToTop/BackToTopButton";
import Blocs from "./Blocs/Blocs";
import SvgStarPink from "./Svg/SvgStarPink";
import SvgArrowScroll from "./Svg/SvgArrowScroll";
import SvgStarBeige from "./Svg/SvgStarBeige";
import SvgStarPinkEnd from "./Svg/SvgStarPinkEnd";
import SubBlocs from "./Blocs/SubBlocs";
import SubBlocsBgPink from "./Blocs/SubBlocsBgPink";
import EndTextValues from "./Text/EndTextValues";
import Footer from "../Footer/MainFooter.jsx";

const EthicsPage = () => {
  const { isDarkMode } = useTheme();
  const [scrollSection, setScrollSection] = useState();
  const ScrollToSectionEthics = () => {
    const sectionToScrollEthics = document.getElementById("ethics");
    if (sectionToScrollEthics) {
      sectionToScrollEthics.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollSection(true);
      } else {
        setScrollSection(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="bg-FFF6E4">
      <NavbarEthics />
      <div class="flex justify-center mt-10">
        {/* Les 3 blocs */}
        <Blocs />
      </div>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-end mt-16">
            <SvgFontRight />
          </div>
          <div className="px-10">
            <img src={Img} alt="Image Values" className="rounded-lg" />
          </div>
          <SvgFontLeft />
        </div>
      </div>
      <div
        className={`flex justify-center ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <SubBlocs />
      </div>
      <BackToTopButton />
      <div className="flex justify-center pt-16">
        <SvgStarPink />
      </div>
      <div className="flex justify-center sm:justify-end relative right-24 top-20 sm:right-96">
        <div onClick={ScrollToSectionEthics}>
          <SvgArrowScroll />
        </div>
      </div>
      <div className="bg-E18AB0 py-24 px-4 sm:px-6 lg:px-8">
        <SubBlocsBgPink />
        <div id="ethics"></div>
      </div>
      <div className="bg-ethics-blur pt-32 pb-20">
        <div className="flex justify-center">
          <SvgStarBeige />
        </div>
        <EndTextValues />
        <div className="flex justify-center mt-20 pb-28">
          <SvgStarPinkEnd />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default EthicsPage;

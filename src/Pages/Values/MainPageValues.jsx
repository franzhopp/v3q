import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";
import SvgFontRight from "./Svg/SvgFontRight";
import SvgFontLeft from "./Svg/SvgFontLeft";
import NavbarValues from "../../Components/Navigation/NavbarValues/NavbarValues";
import Img from "../../assets/Picture/PictureValuesMac.png";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton";
import Blocs from "./Blocs/Blocs";
import SvgArrowScroll from "./Svg/SvgArrowScroll";
import SubBlocs from "./Blocs/SubBlocs";
import SubBlocsBgPink from "./Blocs/SubBlocsBgPink";
import EndTextValues from "./Text/EndTextValues";
import Footer from "../../Components/Footer/MainFooter";

const PageValues = () => {
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
    <section className={`bg-fff6e4`}>
      <NavbarValues />
      <div className={`flex justify-center pt-16`}>
        <Blocs />
      </div>
      <div className={`flex justify-center`}>
        <div>
          <div className={`flex justify-end`}>
            <SvgFontRight />
          </div>
          <div className={`flex justify-start relative`}>
            <SvgFontLeft />
          </div>
          <div className={`px-10`}>
            <div className={`WireBannier`}>
              <img
                src={Img}
                alt="ImageValues"
                className={`relative rounded-lg transition duration-500 hover:opacity-90`}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center pt-16 ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <SubBlocs />
      </div>
      <BackToTopButton />
      <div className={`flex justify-center pt-10`}>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
            fill="#E18AB0"
          />
        </svg>
      </div>
      <div
        className={`flex justify-center sm:justify-end relative right-24 top-20 lg:right-96`}
      >
        <div onClick={ScrollToSectionEthics}>
          <SvgArrowScroll />
        </div>
      </div>
      <div className={`bg-e18ab0 px-4 sm:px-6 lg:px-8 py-28`}>
        <SubBlocsBgPink />
        <div id={`ethics`}></div>
      </div>
      <div className={`WireBannier`}>
        <div className={`BgValuesBlur bg-cover bg-no-repeat py-28`}>
          <EndTextValues />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PageValues;

import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiBardLine } from "react-icons/ri";
import NavbarPages from "../Navigation/NavbarPages/NavbarPages.jsx";
import TitlePorfolio from "../UI/Title/TitlePorfolio.jsx";
import ImgDefault from "../../assets/Svg/Hourglass.svg";
import SvgLine from "./Svg/SvgLine.jsx";
import SvgHeart from "./Svg/SvgHeart.jsx";
import SvgStarPink from "./Svg/SvgStar.jsx";
import Footer from "../Footer/MainFooter.jsx";
import BackToTopButton from "../UI/ScrollToTop/BackToTopButton";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const cards = [
    {
      image: ImgDefault,
      title: "À venir",
      content: "Qui a dit que le futur projet arrive très prochainement ? 🎉",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };
  return (
    <section x-comp={`Portfolio`} className={`bg-fff6e4`}>
      <NavbarPages />
      <TitlePorfolio />
      {/* Title */}
      <div
        x-comp={`TitlePortfolio`}
        className={`flex justify-start px-32 py-10`}
      >
        <h1 className={`text-c22e2e text-2xl lg:text-5xl font-extrabold`}>
          Latest Projects
        </h1>
        <div className={`pt-1 px-2`}>
          <SvgStarPink />
        </div>
      </div>
      <div className={`flex`}>
        <div className={`bg-gray-700 h-96 w-full`}>
          <div className="flex flex-wrap ">
            <div className={`bg-slate-300 h-96 w-1/2`}></div>
            <div className={`bg-slate-500 h-96 w-1/2`}></div>
          </div>
        </div>
      </div>
      <div className={`flex justify-center py-10`}>
        <SvgHeart />
      </div>
      <BackToTopButton />
      <Footer />
    </section>
  );
};

export default Portfolio;

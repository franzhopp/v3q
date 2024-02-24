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
    <>
      <section x-comp={`Portfolio`} className={`bg-fff6e4`}>
        <NavbarPages />
        <TitlePorfolio />
        {/* Title */}
        <div>
          <div
            x-comp={`TitlePortfolio`}
            className={`flex justify-center lg:justify-start px-10 lg:px-32 py-10`}
          >
            <h1 className={`text-c22e2e text-2xl lg:text-5xl font-extrabold`}>
              Latest Projects
            </h1>
            <div className={`pt-1 px-2`}>
              <SvgStarPink />
            </div>
          </div>
        </div>
        <div className={`h-screen`}>
          <div class={`flex justify-center`}>
            <div class={`h-96 w-full`}>
              <div class={`flex flex-wrap justify-center`}>
                <div class={`bg-slate-300 h-96 w-full lg:w-1/2`}>
                  {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              mollitia nihil temporibus eius magni sit id, fuga voluptatibus
              vero, itaque illo. Ad cum, voluptate voluptatum voluptas sint
              error totam nobis! */}
                </div>
                <div class={`bg-slate-500 h-96 w-full lg:w-1/2`}>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              aperiam officiis, quae saepe voluptates perferendis repellat
              voluptatibus dicta facere velit illum veritatis, sit nostrum! Odit
              ipsa corrupti pariatur ut totam. */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-start">
          <SvgLine />
        </div> */}
        <BackToTopButton />
        <div className={`flex justify-center py-20`}>
          <SvgHeart />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

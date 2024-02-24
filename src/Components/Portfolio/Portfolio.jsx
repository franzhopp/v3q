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
import ImgPatternNavi from "../../assets/Picture/PatternNavi.png";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: ImgDefault,
      title: "Project title -",
      subtitle: "Project short description",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention.",
    },
    {
      image: ImgDefault,
      title: "Project title 2 -",
      subtitle: "Project short description 2",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 2",
    },
    {
      image: ImgDefault,
      title: "Project title 3 -",
      subtitle: "Project short description 3",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 3",
    },
    {
      image: ImgDefault,
      title: "Project title 4 -",
      subtitle: "Project short description 4",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 4",
    },
    {
      image: ImgDefault,
      title: "Project title 5 -",
      subtitle: "Project short description 5",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 5",
    },
  ];
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
        <div className={`flex justify-center relative`}>
          <img
            src={ImgPatternNavi}
            className={`absolute py-3 lg:flex hidden `}
          />
        </div>
        <div className={``}>
          <div class={`flex flex-wrap`}>
            <div
              class={`flex justify-center items-center bg-slate-300 h-96 w-full lg:w-1/2`}
            >
              <div>
                <img
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                  className={`w-auto h-44 animate-formbounce`}
                />
              </div>
            </div>
            <div class={`bg-slate-500 py-24 px-20 h-96 w-full lg:w-1/2`}>
              <h1 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                {cards[currentIndex].title}
              </h1>
              <h2 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                {cards[currentIndex].subtitle}
              </h2>
              <p
                className={`text-black text-xl lg:text-2xl text-left font-extrabold py-5`}
              >
                {cards[currentIndex].content}
              </p>
            </div>
          </div>
        </div>
        <div x-comp={`BtnDisplayPrevNext`} className={`pt-10`}>
          <div className={`flex justify-center items-center gap-2`}>
            <button
              className="bg-black text-fff6e4 p-3 shadow-lg rounded-full mr-3 transform active:scale-75 transition-transform"
              onClick={handlePrev}
            >
              <FaArrowLeft className="h-6 w-6" />
            </button>
            {cards.map((_, i) => (
              <div
                className={`bg-black rounded-full w-3 h-3 ${
                  currentIndex === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
            <button
              className="bg-black text-fff6e4 p-3 shadow-lg rounded-full ml-3 transform active:scale-75 transition-transform"
              onClick={handleNext}
            >
              <FaArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            x-comp={`SubTitlePortfolio`}
            className={`flex flex-col text-center pt-28`}
          >
            <h1
              className={`text-c22e2e text-2xl lg:text-4xl font-extrabold pb-5`}
            >
              Wanna see some more ?
            </h1>
            <p className={`text-c22e2e text-2xl lg:text-4xl font-extrabold`}>
              Check out our personal portfolios
            </p>
          </div>
        </div>
        <div
          class={`flex flex-wrap justify-center space-x-0 sm:space-x-6 py-20`}
        >
          <div className="bg-slate-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-90">
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"></p>
            </div>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-90">
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"></p>
            </div>
          </div>
        </div>
        <div
          class={`flex flex-wrap justify-center space-x-0 sm:space-x-6 py-20`}
        >
          <div className="bg-slate-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-90">
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"></p>
            </div>
          </div>
          <div className="bg-slate-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-90">
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom"></p>
            </div>
          </div>
        </div>
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

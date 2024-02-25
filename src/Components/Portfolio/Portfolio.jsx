import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import NavbarPages from "../../Components/Navigation/NavbarPages/NavbarPages.jsx";
import TitlePorfolio from "../../Components/UI/Title/TitlePorfolio.jsx";
import ImgDefault from "../../assets/Svg/Hourglass.svg";
import SvgHeart from "./Svg/SvgHeart.jsx";
import SvgStarPink from "./Svg/SvgStar.jsx";
import Footer from "../../Components/Footer/MainFooter.jsx";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton";
import ImgPatternNavi from "../../assets/Picture/PatternNavi.png";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: ImgDefault,
      title: "Project title",
      subtitle: "Project short description",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention.",
    },
    {
      image: ImgDefault,
      title: "Project title 2",
      subtitle: "Project short description 2",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 2",
    },
    {
      image: ImgDefault,
      title: "Project title 3",
      subtitle: "Project short description 3",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 3",
    },
    {
      image: ImgDefault,
      title: "Project title 4",
      subtitle: "Project short description 4",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 4",
    },
    {
      image: ImgDefault,
      title: "Project title 5",
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
      <section x-comp={`PortfolioNavi`} className={`bg-fff6e4`}>
        <NavbarPages />
        <TitlePorfolio />
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
        <div x-comp={`ImgCarousel`} className={`flex justify-center relative`}>
          <img
            src={ImgPatternNavi}
            className={`absolute py-3 lg:flex hidden `}
          />
        </div>

        <div x-comp={`Carousel`} className={``}>
          <div class={`flex flex-wrap`}>
            <div
              class={`bg-slate-300 flex justify-center items-center h-96 w-full lg:w-1/2`}
            >
              <div>
                <img
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                  className={`w-auto h-44 animate-formbounce`}
                />
              </div>
            </div>
            <div class={`bg-slate-500 h-1/2 lg:h-96 w-full lg:w-1/2 py-10`}>
              <div className="px-10">
                <h1 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  {cards[currentIndex].title}
                </h1>
                <h2 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  {cards[currentIndex].subtitle}
                </h2>
                <p
                  className={`text-black text-md lg:text-2xl text-left font-extrabold py-5`}
                >
                  {cards[currentIndex].content}
                </p>
              </div>
              <div className={`flex justify-end px-5 lg:px-10`}>
                <div
                  className={`bg-fff6e4 flex flex-wrap rounded-full space-x-6 p-3`}
                >
                  <button className="bg-black text-fff6e4 p-3 shadow-lg rounded-full transform active:scale-75 transition-transform">
                    <FaArrowRight className="h-8 w-8" />
                  </button>
                  <button className="bg-gray-500 px-7 p-3 text-md lg:text-lg rounded-full font-extrabold ">
                    View details
                  </button>
                </div>
              </div>
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
        <div x-comp={`TitlePortfolioDetails`} className="flex justify-center">
          <div
            x-comp={`SubTitlePortfolio`}
            className={`flex flex-col text-center pt-28`}
          >
            <h1
              className={`text-c22e2e text-2xl lg:text-4xl font-extrabold pb-5`}
            >
              Wanna see some more ?
            </h1>
            <p
              className={`text-c22e2e text-2xl lg:text-4xl font-extrabold px-10 pb-20`}
            >
              Check out our personal portfolios
            </p>
          </div>
        </div>
        <div x-comp={`PersonalPortfolios`} className={``}>
          <div class={`flex flex-wrap`}>
            <div class={`bg-slate-300 h-96 w-full lg:w-1/2`}>
              <div className="flex justify-between">
                <h1 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  Louisa
                </h1>
                <h2 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  Web Developer
                </h2>
              </div>
              <div className={`flex justify-end px-5 lg:px-10`}>
                <div
                  className={`bg-fff6e4 flex flex-wrap rounded-full space-x-6 p-3`}
                >
                  <button className="bg-black text-fff6e4 p-3 shadow-lg rounded-full transform active:scale-75 transition-transform">
                    <FaArrowRight className="h-8 w-8" />
                  </button>
                  <button className="bg-gray-500 px-7 p-3 text-md lg:text-lg rounded-full font-extrabold ">
                    Website
                  </button>
                </div>
              </div>
            </div>
            <div class={`bg-slate-500 h-96 w-full lg:w-1/2`}>
              <div className="flex justify-between">
                <h1 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  MÃ©lissa
                </h1>
                <h2 className="text-black text-2xl lg:text-4xl text-left font-extrabold">
                  Designer
                </h2>
              </div>
              <div className={`flex justify-end px-5 lg:px-10`}>
                <div
                  className={`bg-fff6e4 flex flex-wrap rounded-full space-x-6 p-3`}
                >
                  <button className="bg-black text-fff6e4 p-3 shadow-lg rounded-full transform active:scale-75 transition-transform">
                    <FaArrowRight className="h-8 w-8" />
                  </button>
                  <button className="bg-gray-500 px-7 p-3 text-md lg:text-lg rounded-full font-extrabold ">
                    Website
                  </button>
                </div>
              </div>
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

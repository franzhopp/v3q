import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiBardLine } from "react-icons/ri";
import NavbarPages from "../Navigation/NavbarPages/NavbarPages.jsx";
import TitlePorfolio from "../UI/Title/TitlePorfolio.jsx";
import ImgDefault from "../../assets/hourglass.svg";
import SvgLine from "./Svg/SvgLine.jsx";
import SvgHeart from "./Svg/SvgHeart.jsx";
import SvgStarPink from "./Svg/SvgStarPink.jsx";
import Footer from "../Footer/MainFooter.jsx";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const cards = [
    {
      image: ImgDefault,
      title: "À venir",
      content: "Qui a dit que le futur projet arrive très prochainement ? 😎",
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
    <section className="bg-fff6e4 bg-pattern-portfolio">
      <NavbarPages />
      <TitlePorfolio />
      <div className="flex justify-start relative">
        <SvgLine />
      </div>
      {/* <div className="flex justify-end relative">
        <SvgStarPink />
      </div> */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="flex justify-center px-3 py-10">
          <div className="bg-fff6e4 p-5 py-5  rounded-2xl shadow-2xl mr-5 ml-5">
            <div className="flex justify-center mt-3">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className={`w-auto h-44 object-cover rounded-2xl animate-formbounce`}
              />
            </div>
            <p
              className={`mt-6 text-xl font-extrabold ${
                isDarkMode ? "text-black" : "text-fff6e4"
              }`}
            >
              <span className="font-bold number">{currentIndex + 1}.</span>{" "}
              <span className="number font-extrabold">
                {cards[currentIndex].title}
              </span>
              <div className="flex flex-col">
                <NavLink
                  to={cards[currentIndex].url}
                  className={`font-inter text-sm hover:text-0C3E78 ${
                    isDarkMode ? "text-c22e2e" : "text-fff6e4"
                  }`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiBardLine className="h-3 w-3 inline" />{" "}
                  <span className="underline">Lien vers le site</span>
                </NavLink>
              </div>
            </p>
            <div
              className={`text-center ${
                isDarkMode ? "text-black" : "text-fff6e4"
              }`}
            >
              <p className="overflow-auto p-5 h-40">
                {cards[currentIndex].content}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-black text-fff6e4 h-16 w-16 px-4 py-2 mr-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                onClick={handlePrev}
              >
                <FaArrowLeft className="h-10 w-8" />
              </button>
              <button
                className="bg-black text-fff6e4 h-16 w-16 px-4 py-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                onClick={handleNext}
              >
                <FaArrowRight className="h-10 w-8" />
              </button>
            </div>
            <div className="flex justify-center relative py-10">
              <SvgHeart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;

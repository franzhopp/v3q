import { useTheme } from "../../../context/ThemeProvider";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiBardLine } from "react-icons/ri";
import NavbarPages from "../../Navigation/PagesNavbar/PagesNavbar";
import TitlePorfolio from "../../UI/Title/TitlePorfolio";
import ImgDefault from "../../../assets/imgdefault.svg";
import Footer from "../../Footer/Footer";
import SvgLine from "./Svg/SvgLine";
import SvgHeart from "./Svg/SvgHeart";
import SvgStarPink from "./Svg/SvgStarPink";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const cards = [
    {
      image: ImgDefault,
      title: "À venir",
      content: "Qui a dit que le prochain projet arrive très bientôt ? 😎",
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
    <section className="bg-FFF6E4 bg-pattern-portfolio">
      <NavbarPages />
      <TitlePorfolio />
      <div className="flex justify-start relative">
        <SvgLine />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="flex justify-center px-3 py-10">
          <div className="bg-FFF6E4 p-5 py-10 h-1/2 rounded-2xl shadow-2xl mr-5 ml-5">
            <div className="flex justify-center mt-3">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className={`w-auto h-44 object-cover rounded-2xl animate-formbounce`}
              />
            </div>
            <p
              className={`mt-6 text-xl font-extrabold ${
                isDarkMode ? "text-black" : "text-FFF6E4"
              }`}
            >
              <span className="font-bold number">{currentIndex + 1}.</span>{" "}
              <span className="number font-extrabold">
                {cards[currentIndex].title}
              </span>
              <div className="flex flex-col">
                <NavLink
                  to={cards[currentIndex].url}
                  className={`font-inter text-sm mb-2 hover:text-0C3E78 ${
                    isDarkMode ? "text-C22E2E" : "text-FFF6E4"
                  }`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <RiBardLine className="h-3 w-3 inline mb-1" /> Lien vers le
                  site
                </NavLink>
              </div>
            </p>
            <div className={`${isDarkMode ? "text-black" : "text-FFF6E4"}`}>
              <p className="overflow-auto p-5 h-40">
                {cards[currentIndex].content}
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <button
                className="bg-black font-extrabold text-FFF6E4 hover:bg-C22E2E transition px-4 py-2 rounded-full mr-2"
                onClick={handlePrev}
              >
                <FaArrowLeft className="h-8 w-8" />
              </button>
              <button
                className="bg-black font-extrabold text-FFF6E4 hover:bg-C22E2E transition px-4 py-2 rounded-full"
                onClick={handleNext}
              >
                <FaArrowRight className="h-8 w-8" />
              </button>
            </div>
            <div className="flex justify-center relative py-10">
              <SvgHeart />
            </div>
          </div>
          <SvgStarPink />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;

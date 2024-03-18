import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NavbarPages from "../../Components/Navigation/NavbarPages/NavbarPages.jsx";
import TitlePorfolio from "../../Components/UI/Title/TitlePorfolio.jsx";
import ImgDefault from "../../assets/Background/BgPortfolioSlide.png";
import ImgDev from "../../assets/test1.png";
import ImgDesigner from "../../assets/test2.png";
import SvgHeart from "./Svg/SvgHeart.jsx";
import SvgStarPink from "./Svg/SvgStar.jsx";
import SvgLine from "./Svg/SvgLine.jsx";
import Footer from "../../Components/Footer/MainFooter.jsx";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton";
import ImgPatternNavi from "../../assets/Picture/PatternNavi.png";
import SvgStarRed from "./Svg/SvgStarRed";

const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      image: ImgDefault,
      title: "Bientôt disponible -",
      subtitle: "En travaux",
      content: "C'est ici que vous découvrirez nos dernières réalisations.",
    },
    {
      id: 2,
      image: ImgDefault,
      title: "Project title 2",
      subtitle: "Project short description 2",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 2",
    },
    {
      id: 3,
      image: ImgDefault,
      title: "Project title 3",
      subtitle: "Project short description 3",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 3",
    },
    {
      id: 4,
      image: ImgDefault,
      title: "Project title 4",
      subtitle: "Project short description 4",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention. 4",
    },
    {
      id: 5,
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
  // const [intervalId, setIntervalId] = useState(null); // To store the interval ID

  // useEffect(() => {
  //   // Start the automatic scroll when the component mounts
  //   const id = setInterval(handleNext, 3000); // Change slide every 5 seconds
  //   setIntervalId(id);

  //   // Cleanup function to clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);u
  return (
    <>
      <section x-comp={`PortfolioNavi`} className={`bg-fff6e4`}>
        <NavbarPages />
        <TitlePorfolio />
        <div
          x-comp={`TitlePortfolio`}
          className={`flex justify-center lg:justify-start px-10 lg:px-32 py-16`}
        >
          <h1 className={`text-c22e2e text-2xl lg:text-5xl font-extrabold`}>
            Latest Projects
          </h1>
          <div className={`px-2`}>
            <SvgStarPink />
          </div>
        </div>
        {/* <div x-comp={`ImgCarousel`} className={`flex justify-center relative`}>
          <img
            src={ImgPatternNavi}
            className={`absolute py-9 lg:flex hidden`}
          />
        </div> */}
        <div x-comp={`Carousel`}>
          <div className={`flex flex-wrap`}>
            {/* 1 */}
            <div
              className={`BgSlidePortfolio bg-gray-300 bg-no-repeat bg-cover bg-center flex justify-center items-center w-full lg:w-1/2 relative`}
            >
              <div className={`flex justify-start relative`}>
                <button
                  onClick={handleNext}
                  className={`transition-transform transform hover:scale-90`}
                >
                  <svg
                    className={`absolute left-0 -bottom-9 ml-5 hidden xl:flex`}
                    width="21"
                    height="67"
                    viewBox="0 0 21 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 4L4 33.5L17 63"
                      stroke="#8C8C8C"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className={`text-8xl text-transparent`}>
                CECI EST UN TEST DE FONCTIONNALITÉ VISUELLE
              </p>
            </div>
            {/* 2 */}
            <BackToTopButton />
            <div
              className={`bg-0c3e78 h-1/2 lg:h-2/5 w-full lg:w-1/2 py-10 relative`}
            >
              <div className={`flex justify-end relative`}>
                <button
                  onClick={handlePrev}
                  className={`transform active:scale-75 transition-transform`}
                >
                  <svg
                    className={`absolute right-0 top-40 mr-5`}
                    width="21"
                    height="67"
                    viewBox="0 0 21 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 63L17 33.5L4.00001 4"
                      stroke="#D9D9D9"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className={`px-5 lg:px-16`}>
                <div className="flex justify-start gap-2">
                  <div className="pb-10">
                    <button
                      className={`bg-fff6e4 px-5 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                    >
                      Design
                    </button>
                  </div>
                  <div className="pb-10">
                    <button
                      className={`bg-fff6e4 px-5 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                    >
                      Web Dev
                    </button>
                  </div>
                  <div className="pb-10">
                    <button
                      className={`bg-fff6e4 px-5 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                    >
                      ...
                    </button>
                  </div>
                </div>
                <h1
                  className={`text-fff6e4 text-2xl lg:text-4xl text-left font-extrabold`}
                >
                  {cards[currentIndex].title}
                </h1>
                <h2
                  className={`text-fff6e4 text-2xl lg:text-4xl text-left font-extrabold`}
                >
                  {cards[currentIndex].subtitle}
                </h2>
                <div className="w-2/3">
                  <p
                    className={`text-fff6e4 text-md lg:text-2xl text-left font-extrabold py-5`}
                  >
                    {cards[currentIndex].content}
                  </p>
                </div>
              </div>
              <div className={`flex justify-end px-5 lg:px-10`}>
                <div
                  className={`bg-fff6e4 flex flex-wrap rounded-full space-x-6 p-3`}
                >
                  <button
                    className={`bg-black text-fff6e4 p-3 shadow-lg rounded-full transform active:scale-75 transition-transform`}
                  >
                    <FaArrowRight className={`h-8 w-8`} />
                  </button>
                  <button
                    className={`bg-black px-7 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                  >
                    <p className={`text-fff6e4`}>Découvrir</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SvgLine />
        <div className={`py-20`}>
          <SvgStarRed />
        </div>
        <div
          x-comp={`PersonalPortfolios`}
          className={`bg-e18ab0 relative py-24`}
        >
          <div
            x-comp={`TitlePortfolioDetails`}
            className={`flex justify-center`}
          >
            <div
              x-comp={`SubTitlePortfolio`}
              className={`flex flex-col text-center`}
            >
              <h1 className={`text-fff6e4 text-3xl lg:text-4xl font-extrabold`}>
                Vous voulez en voir plus ?
              </h1>
              <p className={`text-fff6e4 text-xl lg:text-2xl font-extrabold`}>
                Découvrez nos portfolios personnels
              </p>
            </div>
          </div>
          <div className={`flex justify-center pt-10 px-10`}>
            <div className={`relative`}>
              <div className={`flex justify-center pt-10 px-10 relative z-10`}>
                <div className={`flex flex-wrap justify-center gap-16`}>
                  <div className={`flex flex-col px-0 lg:px-10`}>
                    <div className={``}>
                      <img src={ImgDev} className={``} />
                    </div>
                    <div className={`flex justify-end`}>
                      <p
                        className={`text-fff6e4 text-right flex flex-col pt-2`}
                      >
                        Laissez-vous bercer par l'innovation et la créativité
                        <span className={`flex justify-end font-extrabold`}>
                          Découvrir {`>`}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={`flex flex-col px-0 lg:px-10`}>
                    <div className={``}>
                      <div className={` `}>
                        <img src={ImgDesigner} className={``} />
                      </div>
                    </div>
                    <div className={`flex justify-end`}>
                      <p
                        className={`text-fff6e4 text-right flex flex-col pt-2`}
                      >
                        Entrez dans un univers à la fois graphique et artistique
                        <span className={`flex justify-end font-extrabold`}>
                          Découvrir {`>`}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-center py-20`}>
          <SvgHeart />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

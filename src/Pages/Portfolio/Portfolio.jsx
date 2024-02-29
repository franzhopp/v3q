import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import NavbarPages from "../../Components/Navigation/NavbarPages/NavbarPages.jsx";
import TitlePorfolio from "../../Components/UI/Title/TitlePorfolio.jsx";
// import ImgDefault from "../../assets/Background/BgCardsTwo.png";
import ImgDefault from "../../assets/Background/BgPortfolioSlide.png";
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
      title: "Project title",
      subtitle: "Project short description",
      content:
        "This is a short text describing your project and use these few words to catch the customer's attention.",
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
  // }, []);

  return (
    <>
      <BackToTopButton />
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
          <div className={`pt-1 px-2`}>
            <SvgStarPink />
          </div>
        </div>

        <div x-comp={`ImgCarousel`} className={`flex justify-center relative`}>
          <img
            src={ImgPatternNavi}
            className={`absolute py-9 lg:flex hidden`}
          />
        </div>
        <div x-comp={`Carousel`}>
          <div class={`flex flex-wrap`}>
            {/* 1 */}
            <div
              class={`BgSlidePortfolio bg-cover bg-center flex justify-center items-center w-full lg:w-1/2 relative`}
            >
              <div className={`flex justify-start relative`}>
                <button onClick={handleNext}>
                  <svg
                    className={`absolute left-0 bottom-2 ml-5 hidden xl:flex`}
                    width="21"
                    height="67"
                    viewBox="0 0 21 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 4L4 33.5L17 63"
                      stroke="#8C8C8C"
                      stroke-width="7"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className={`text-8xl text-transparent`}>
                CECI EST UN TEST DE FONCTIONNALITÉ VISUELLE
              </p>
            </div>
            {/* 2 */}
            <div
              class={`bg-0c3e78 h-1/2 lg:h-2/5 w-full lg:w-1/2 py-10 relative`}
            >
              <div className={`flex justify-end relative`}>
                <button onClick={handlePrev}>
                  <svg
                    className={`absolute right-0 top-32 mr-5 hidden xl:flex`}
                    width="21"
                    height="67"
                    viewBox="0 0 21 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 63L17 33.5L4.00001 4"
                      stroke="#D9D9D9"
                      stroke-width="7"
                      stroke-linecap="round"
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
                      Keyword
                    </button>
                  </div>
                  <div className="pb-10">
                    <button
                      className={`bg-fff6e4 px-5 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                    >
                      Another keyword
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
                    className={` bg-0c3e78 px-7 p-3 text-md lg:text-lg rounded-full font-extrabold`}
                  >
                    <p className={`text-fff6e4`}>View details</p>
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
        <div x-comp={`PersonalPortfolios`} class={`bg-e18ab0 py-20 relative`}>
          <div
            x-comp={`TitlePortfolioDetails`}
            className={`flex justify-center`}
          >
            <div
              x-comp={`SubTitlePortfolio`}
              className={`flex flex-col text-center`}
            >
              <h1 className={`text-fff6e4 text-3xl lg:text-4xl font-extrabold`}>
                Wanna see some more ?
              </h1>
              <p
                className={`text-fff6e4 text-xl lg:text-2xl font-extrabold px-10`}
              >
                Check out our personal portfolios
              </p>
            </div>
          </div>
          <div class={`flex justify-center py-10 px-10`}>
            <div className={`flex flex-wrap justify-center gap-16`}>
              <div className={`flex flex-col`}>
                <div
                  className={`p-6 rounded-3xl shadow-md transition-transform transform hover:scale-90`}
                >
                  <h2
                    data-aos="fade-left"
                    className={`text-black text-8xl FontNumber font-bold mb-2`}
                  >
                    Web Dev
                  </h2>
                </div>
                <div className={`flex justify-end`}>
                  <p className={`text-fff6e4 flex flex-col pt-2`}>
                    Tell us a bit more about yourself
                    <span className={`flex justify-end font-extrabold`}>
                      Find out more {`>`}
                    </span>
                  </p>
                </div>
              </div>
              <div className={`flex flex-col`}>
                <div
                  className={`p-6 rounded-3xl shadow-md transition-transform transform hover:scale-90`}
                >
                  <h2
                    data-aos="fade-left"
                    className={`text-8xl FontNumber text-black font-bold mb-2`}
                  >
                    Designer
                  </h2>
                </div>
                <div className={`flex justify-end`}>
                  <p className={`text-fff6e4 flex flex-col pt-2`}>
                    Tell us a bit more about yourself
                    <span className={`flex justify-end font-extrabold`}>
                      Find out more {`>`}
                    </span>
                  </p>
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

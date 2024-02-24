import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider.jsx";

export default function Carousel({
  children: cards,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const { isDarkMode } = useTheme();
  const [curr, setCurr] = useState(0);
  const handleNext = () => {
    setCurr((curr) => (curr === 0 ? cards.length - 1 : curr - 1));
  };
  const handlePrev = () => {
    setCurr((curr) => (curr === cards.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="bg-black border-c22e2e border-4 p-2 rounded-3xl flex justify-center w-96 3xl:w-1/2"
      >
        <div className={`h-1/2 overflow-hidden  rounded-3xl shadow-2xl`}>
          <div className="flex justify-center">
            <NavLink to="https://www.instagram.com/navistudio.fr/">
              <div
                className={`flex rounded-3xl transition-transform ease-out duration-500`}
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {cards}
                {/* <div className={`relative`}>
                  <svg
                    className={` absolute top-10`}
                    width="90"
                    height="60"
                    viewBox="0 0 64 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="64" height="21" rx="10.5" fill="black" />
                  </svg>
                </div> */}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div x-comp={`BtnDisplayPrevNext`} className={`pt-10`}>
        <div className={`flex justify-center items-center gap-2`}>
          <button
            className="text-c22e2e mr-3 transform active:scale-75 transition-transform"
            onClick={handleNext}
          >
            <FaArrowLeft className="h-10 w-8" />
          </button>
          {cards.map((_, i) => (
            <div
              className={`bg-c22e2e rounded-full w-3 h-3 ${
                curr === i ? "p-4" : "bg-opacity-50"
              }`}
            />
          ))}
          <button
            className="text-c22e2e ml-3 transform active:scale-75 transition-transform"
            onClick={handlePrev}
          >
            <FaArrowRight className="h-10 w-8" />
          </button>
        </div>
      </div>
      {/* <p
        className={`font-arial tracking-tighter mt-6 text-center font-extrabold text-base overflow-auto p-5 h-40 ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <div className="flex flex-col justify-center">
          <span>{cards[curr].title}</span>
          <span>{cards[curr].country}</span>
          <span>{cards[curr].user}</span>
        </div>
      </p> */}
    </div>
  );
}

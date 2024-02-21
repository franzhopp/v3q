import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div className="flex justify-center px-3 pt-20">
      <div
        className={`bg-black border-c22e2e border-2 p-2 h-1/2 rounded-3xl shadow-2xl mr-5 ml-5`}
      >
        <div className="flex justify-center relative">
          <div className="absolute">
            <svg
              width="90"
              height="60"
              viewBox="0 0 64 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="21" rx="10.5" fill="black" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink to="https://www.instagram.com/navistudio.fr/">
            <div
              className={`flex transition-transform ease-out duration-500`}
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {slides}
            </div>
            <div
              className={`flex items-center justify-between absolute inset-0 p-4`}
            >
              <div>
                <button
                  className="bg-black text-fff6e4 h-16 w-16 px-4 mr-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                  onClick={prev}
                >
                  <FaArrowLeft className="h-10 w-8" />
                </button>
              </div>
              <div>
                <button
                  className="bg-black text-fff6e4 h-16 w-16 px-4 py-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
                  onClick={next}
                >
                  <FaArrowRight className="h-10 w-8" />
                </button>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>


























  );
}

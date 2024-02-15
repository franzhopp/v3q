import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Img0 from "../../../assets/0.png";
import Img1 from "../../../assets/2.png";
import Img2 from "../../../assets/3.png";
import Img3 from "../../../assets/1.png";
import Img4 from "../../../assets/4.png";
import Img5 from "../../../assets/5.png";
import Img6 from "../../../assets/6.png";
import Img7 from "../../../assets/7.png";
import Img12 from "../../../assets/12.png";
import Img10 from "../../../assets/10.png";

const SectionExploration = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: Img0,
      title: "Toulouse, 31000",
      country: "France 🇫🇷",
    },
    {
      image: Img4,
      title: "Strasbourg, 67000",
      country: "France 🇫🇷",
    },
    {
      image: Img7,
      title: "Versailles, 78646",
      country: "France 🇫🇷",
    },
    {
      image: Img1,
      title: "Bruges, 8000",
      country: "Belgique 🇧🇪",
    },
    {
      image: Img2,
      title: "Atomium, 1020",
      country: "Belgique 🇧🇪",
    },
    {
      image: Img3,
      title: "Bruxelles, 3000",
      country: "Belgique 🇧🇪",
    },
    {
      image: Img12,
      title: "Londres, SW1X 7LX",
      country: "Royaume-Uni 🇬🇧",
    },
    {
      image: Img6,
      title: "Barcelone, 08001",
      country: "Espagne 🇪🇸",
    },
    {
      image: Img10,
      title: "Atlantic Beach, 32233",
      country: "États-Unis 🇺🇸",
    },
    {
      image: Img5,
      title: "Boston Massachusetts, 02186",
      country: "États-Unis 🇺🇸",
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
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className="relative">
        <div className="absolute top-36 -left-36 2xl:top-40 2xl:left-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg
              data-aos="fade-in"
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="152"
              viewBox="0 0 152 152"
              fill="none"
            >
              <circle cx="76" cy="76" r="76" fill="#0C3E78" />
            </svg>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <svg
              data-aos="fade-in"
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="152"
              viewBox="0 0 152 152"
              fill="none"
            >
              <circle cx="76" cy="76" r="76" fill="#c22e2e" />
            </svg>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <svg
              data-aos="fade-in"
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="152"
              viewBox="0 0 152 152"
              fill="none"
            >
              <circle cx="76" cy="76" r="76" fill="#E18AB0" />
            </svg>
          </motion.span>
        </div>
      </div>
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
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                loading="lazy"
                className={`w-80 rounded-2xl`}
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="bg-black text-fff6e4 h-16 w-16 px-4 mr-2 rounded-full shadow-lg transform active:scale-75 transition-transform"
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
      <p
        className={`font-arial tracking-tighter mt-6 text-center font-extrabold text-base overflow-auto p-5 h-40 ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <div className="flex flex-col justify-center">
          <span>{cards[currentIndex].title}</span>
          <span>{cards[currentIndex].country}</span>
          <span>{cards[currentIndex].user}</span>
        </div>
      </p>
    </div>
  );
};

export default SectionExploration;

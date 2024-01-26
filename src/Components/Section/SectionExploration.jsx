import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider.jsx";
import Img1 from "../../assets/2.png";
import Img2 from "../../assets/3.png";
import Img3 from "../../assets/1.png";
import Img4 from "../../assets/4.png";
import Img5 from "../../assets/5.png";
import Img6 from "../../assets/6.png";
import Img7 from "../../assets/7.png";
import Img8 from "../../assets/8.png";
import Img9 from "../../assets/9.png";
import Img10 from "../../assets/10.png";
import Img11 from "../../assets/11.png";
import Img12 from "../../assets/12.png";
import Img13 from "../../assets/13.png";

const SectionExploration = () => {
  const { isDarkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [borderColors, setBorderColors] = useState([
  //   "#0C3E78",
  //   "#C22E2E",
  //   "#E18AB0",
  // ]);
  // const handleBorderColorChange = (index) => {
  //   const colorPalette = ["#0C3E78", "#C22E2E", "#E18AB0"];
  //   const newBorderColors = [...borderColors];
  //   newBorderColors[index] = colorPalette[index % colorPalette.length];
  //   setBorderColors(newBorderColors);
  // };
  const cards = [
    {
      image: Img1,
      title: "Bruges, 8000",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img2,
      title: "Atomium, 1020",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img3,
      title: "Bruxelles, 1000",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img4,
      title: "Strasbourg, 67000",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img5,
      title: "Boston, Massachusetts, 02186",
      country: "États-Unis 🇺🇸",
      user: "📸 | Taylor.",
    },
    {
      image: Img6,
      title: "Barcelone, 08001",
      country: "Espagne 🇪🇸",
      user: "📸 | Alexis.",
    },
    {
      image: Img7,
      title: "Versailles, 78646",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img8,
      title: "Marseille, 13008",
      country: "France 🇫🇷",
      user: "📸 | Océane.",
    },
    {
      image: Img9,
      title: "Paris, 75007",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img10,
      title: "Atlantic beach, Florida",
      country: "États-Unis 🇺🇸",
      user: "📸 | Mélissa.",
    },
    {
      image: Img11,
      title: "Mont-Saint-Michel, 50170",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img12,
      title: "London, 99132",
      country: "Royaume-Uni 🇬🇧",
      user: "📸 | Mélissa.",
    },
    {
      image: Img13,
      title: "Guadalajara, Jal",
      country: "Mexico 🇲🇽",
      user: "📸 | Ruben.",
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
          <svg
            // onClick={() => handleBorderColorChange(0)}
            xmlns="http://www.w3.org/2000/svg"
            width="152"
            height="152"
            viewBox="0 0 152 152"
            fill="none"
          >
            <circle cx="76" cy="76" r="76" fill="#0C3E78" />
          </svg>
          <svg
            // onClick={() => handleBorderColorChange(1)}
            xmlns="http://www.w3.org/2000/svg"
            width="152"
            height="152"
            viewBox="0 0 152 152"
            fill="none"
          >
            <circle cx="76" cy="76" r="76" fill="#C22E2E" />
          </svg>
          <svg
            // onClick={() => handleBorderColorChange(2)}
            xmlns="http://www.w3.org/2000/svg"
            width="152"
            height="152"
            viewBox="0 0 152 152"
            fill="none"
          >
            <circle cx="76" cy="76" r="76" fill="#E18AB0" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center px-3 pt-20">
        <div
          className={`bg-black border-C22E2E border-2 p-2 h-1/2 rounded-3xl shadow-2xl mr-5 ml-5`}
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
          className="bg-black font-extrabold text-FFF6E4 hover:bg-C22E2E transition px-4 rounded-full mr-2"
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
      <p
        className={`mt-6 text-center font-extrabold text-base overflow-auto p-5 h-40 ${
          isDarkMode ? "text-black" : "text-FFF6E4"
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

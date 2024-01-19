import { useState } from "react";
import { NavLink } from "react-router-dom";
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
// import Img13 from "../../assets/13.png";

const SectionExploration = () => {
  const id = "";
  const cards = [
    {
      image: Img1,
      title: "Bruges",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img2,
      title: "Atomium",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img3,
      title: "Bruxelles",
      country: "Belgique 🇧🇪",
      user: "📸 | Louisa.",
    },
    {
      image: Img4,
      title: "Strasbourg",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img5,
      title: "Boston, Massachusetts",
      country: "États-Unis 🇺🇸",
      user: "📸 | Taylor.",
    },
    {
      image: Img6,
      title: "Barcelone",
      country: "Espagne 🇪🇸",
      user: "📸 | Alexis.",
    },
    {
      image: Img7,
      title: "Versailles",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img8,
      title: "Marseille",
      country: "France 🇫🇷",
      user: "📸 | Océane.",
    },
    {
      image: Img9,
      title: "Paris",
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
      title: "Mont-Saint-Michel",
      country: "France 🇫🇷",
      user: "📸 | Louisa.",
    },
    {
      image: Img12,
      title: "London",
      country: "Royaume-Uni 🇬🇧",
      user: "📸 | Mélissa.",
    },
    // {
    //   image: Img13,
    //   title: "Guadalajara, Jal",
    //   country: "Mexico 🇲🇽",
    //   user: "📸 | Ruben.",
    // },
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
    <section>
      {/* <div>
        <TitlePorfolio />
        <div className="flex justify-start relative">
          <svg
            className="absolute left-5 xl:left-72"
            width="4"
            height="940"
            viewBox="0 0 4 1490"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="-8.74228e-08"
              x2="2.00007"
              y2="1636"
              stroke="#C22E2E"
              stroke-width="4"
            />
            <line
              x1="2"
              y1="-8.74228e-08"
              x2="2.00007"
              y2="1636"
              stroke="#C22E2E"
              stroke-width="4"
            />
            <line
              x1="2"
              y1="-8.74228e-08"
              x2="2.00007"
              y2="1636"
              stroke="#C22E2E"
              stroke-width="4"
            />
          </svg>
        </div>
      </div> */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="flex justify-center px-3 pt-16">
          <div className="bg-FFF6E4 p-5 h-1/2 rounded-2xl shadow-2xl mr-5 ml-5">
            <div className="flex justify-center mt-3">
              <NavLink to="https://www.instagram.com/navistudio.fr/">
                <img
                  key={id}
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                  loading="lazy"
                  className={`w-96 rounded-2xl transition hover:opacity-90`}
                />
              </NavLink>
            </div>
            <div className="flex justify-center mt-10">
              <button
                className="bg-black font-extrabold text-FFF6E4 hover:bg-C22E2E transition px-4 py-2 rounded-full mr-2"
                onClick={handlePrev}
              >
                <svg
                  className="p-1"
                  width="30"
                  height="30"
                  viewBox="0 0 50 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.0251 23.299C-0.3417 24.6659 -0.3417 26.8819 1.0251 28.2488L23.299 50.5226C24.6658 51.8895 26.8819 51.8895 28.2487 50.5226C29.6156 49.1558 29.6156 46.9397 28.2487 45.5729L8.4497 25.7739L28.2487 5.97487C29.6156 4.60807 29.6156 2.39197 28.2487 1.02517C26.8819 -0.341725 24.6658 -0.341725 23.299 1.02517L1.0251 23.299ZM49.5 22.2739H3.5V29.2739H49.5V22.2739Z"
                    fill="#FFF6E4"
                  />
                </svg>
              </button>
              <button
                className="bg-black font-extrabold text-FFF6E4 hover:bg-C22E2E transition px-4 py-2 rounded-full"
                onClick={handleNext}
              >
                <svg
                  className="p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 52"
                  fill="none"
                >
                  <path
                    d="M48.4749 28.4749C49.8417 27.108 49.8417 24.892 48.4749 23.5251L26.201 1.25126C24.8342 -0.115572 22.6181 -0.115572 21.2513 1.25126C19.8844 2.6181 19.8844 4.83418 21.2513 6.20101L41.0503 26L21.2513 45.799C19.8844 47.1658 19.8844 49.3819 21.2513 50.7487C22.6181 52.1156 24.8342 52.1156 26.201 50.7487L48.4749 28.4749ZM0 29.5L46 29.5V22.5L0 22.5L0 29.5Z"
                    fill="#FFF6E4"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-6 text-black text-center font-inter text-md overflow-auto p-5 h-40">
              <div className="flex flex-col justify-center">
                <span>{cards[currentIndex].title}</span>
                <span>{cards[currentIndex].country}</span>
                <span>{cards[currentIndex].user}</span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionExploration;

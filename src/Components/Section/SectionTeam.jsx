import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import ImgText from "../../assets/logo-4.png";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.png";

const SectionTeam = () => {
  const { language } = useLanguage();
  const props = useSpring({
    from: { color: "#C22E2E" },
    to: async (next) => {
      while (true) {
        await next({ color: "#0C3E78" });
        await next({ color: "#C22E2E" });
      }
    },
    config: { duration: 1000 },
  });
  const text = "Team #navi♡";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];
  const text1 = "Designer";
  const letters1 = text1.split("");
  const animationConfig1 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];
  const text2 = "Web Developper";
  const letters2 = text2.split("");
  const animationConfig2 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
    { dataAos: "fade-left", dataAosDelay: 700 },
    { dataAos: "fade-left", dataAosDelay: 800 },
  ];

  return (
    <section className="bg-FFF6E4 pt-14 border-red-l border-red-r">
      <div className="flex justify-center mb-6">
        <div className="w-4/5 sm:w-1/2">
          <h3
            data-aos="fade-right"
            className="text-center font-extrabold mt-14 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            <span className="text-C22E2E font-inter">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  data-aos={animationConfig[index].dataAos}
                  data-aos-delay={animationConfig[index].dataAosDelay}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h3>
        </div>
      </div>

      <div className="flex justify-center mb-16">
        <div className="w-4/5 sm:w-1/2 rounded-lg shadow-md">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="px-5 text-black text-center text-lg md:text-center lg:text-center sm:text-2xl mt-10 mb-5"
          >
            <span className="font-extrabold">
              {translations[language].textSectionTeamBold1Fr}
              {translations[language].textSectionTeamBold1En}{" "}
              <img
                src={ImgText}
                className="h-6 mr-1 inline sm:h-9"
                alt="Icône navi studio."
              />
            </span>
            <span className="font-extrabold">
              {translations[language].textSectionTeamBold2Fr}
              {translations[language].textSectionTeamBold2En}{" "}
            </span>
            {translations[language].textSectionTeamWithoutBold1Fr}
            {translations[language].textSectionTeamWithoutBold1En} <br />
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col space-x-3 mb-5 sm:flex-row">
            <div className="mb-10 sm:mb-0">
              <div className="w-auto h-auto">
                <img
                  src={ImageLondon}
                  alt="Image London"
                  className="rounded-2xl ml-10 sm:ml-0"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-black text-left mb-5 ml-10 sm:ml-0">
                <p data-aos="fade-right" className="text-4xl font-extrabold">
                  Mélissa Nefti
                </p>
                <p className="text-4xl font-extrabold">
                  {" "}
                  {letters1.map((letter, index) => (
                    <span
                      key={index}
                      data-aos={animationConfig1[index].dataAos}
                      data-aos-delay={animationConfig1[index].dataAosDelay}
                    >
                      {letter}
                    </span>
                  ))}
                </p>
                <animated.h1
                  style={props}
                  className="text-4xl font-extrabold tracking-wide"
                >
                  London
                </animated.h1>
              </div>

              <div className="w-72">
                <p className="text-black text-left text-base mb-10 ml-10 sm:ml-0 p">
                  <span className="font-extrabold">Mélissa est designer.</span>{" "}
                  Résidante à Londres, elle pratique celui-ci avec beaucoup de
                  créativité et rigueur.{" "}
                  <span className="font-extrabold">
                    Venez connaître son histoire en cliquant sur «{" "}
                    <span className="text-C22E2E underline">
                      <NavLink to="/designer">Designer</NavLink>
                    </span>{" "}
                    ».
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
              <NavLink
                to="/designer"
                className="animate-formbounce inline-flex items-center gap-2 rounded-full mr-6 mb-10 bg-black px-8 py-3 text-FFF6E4"
              >
                <span className="text-3xl mr-3 font-semibold">
                  {translations[language].btnMoreFr}
                  {translations[language].btnMoreEn}{" "}
                </span>
                <svg
                  width="44"
                  height="38"
                  viewBox="0 0 44 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                    fill="#FFF6E4"
                  />
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col justify-center mb-10">
            <div className="flex space-x-3 flex-col-reverse sm:flex-row">
              <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                <NavLink
                  to="/webdev"
                  className="animate-formbounce inline-flex items-center gap-2 rounded-full mr-2 sm:mr-0 bg-black px-8 py-3 text-FFF6E4"
                >
                  <svg
                    width="44"
                    height="38"
                    viewBox="0 0 44 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41 21.5C42.3807 21.5 43.5 20.3807 43.5 19C43.5 17.6193 42.3807 16.5 41 16.5L41 21.5ZM1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85787C21.654 3.88156 21.654 2.29864 20.6777 1.32233C19.7014 0.346022 18.1184 0.346022 17.1421 1.32233L1.23223 17.2322ZM41 16.5L3 16.5L3 21.5L41 21.5L41 16.5Z"
                      fill="#FFF6E4"
                    />
                  </svg>
                  <span className="text-3xl ml-3 font-semibold">
                    {translations[language].btnMoreFr}
                    {translations[language].btnMoreEn}{" "}
                  </span>
                </NavLink>
              </div>

              <div className="mb-10 sm:mb-0">
                <div className="w-auto h-auto">
                  <img
                    src={ImageParis}
                    alt="Image London"
                    className="rounded-2xl ml-10 sm:ml-0"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-black text-left mb-5 ml-10 sm:ml-0">
                  <p data-aos="fade-left" className="text-4xl font-extrabold">
                    Louisa Fernandez
                    {/* <span className="absolute h-screen w-1 bg-0C3E78 -right-20 -bottom-1 hidden sm:block"></span> */}
                  </p>
                  <p className="text-4xl font-extrabold">
                    {" "}
                    {letters2.map((letter, index) => (
                      <span
                        key={index}
                        data-aos={animationConfig2[index].dataAos}
                        data-aos-delay={animationConfig2[index].dataAosDelay}
                      >
                        {letter}
                      </span>
                    ))}
                  </p>
                  <animated.h1
                    style={props}
                    className="text-4xl font-extrabold tracking-wide"
                  >
                    Paris
                  </animated.h1>
                </div>

                <div className="w-72">
                  <p className="text-black text-left text-base ml-10 sm:ml-0 z">
                    <span className="font-extrabold">
                      Louisa est développeuse web.
                    </span>{" "}
                    Résidante à Paris, elle pratique celui-ci avec beaucoup de
                    passion et plaisir.{" "}
                    <span className="font-extrabold">
                      Venez connaître son histoire en cliquant sur «{" "}
                      <span className="text-C22E2E underline">
                        <NavLink to="/webdev">Web Developer</NavLink>
                      </span>{" "}
                      ».
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="contact" className="pb-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;

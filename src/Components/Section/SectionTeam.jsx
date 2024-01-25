import { useTheme } from "../../context/ThemeProvider.jsx";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import ImgText from "../../assets/logo-4.png";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.png";
import ModalImage from "react-modal-image";
import SectionExploration from "./SectionExploration.jsx";
import SvgHeart from "./SvgHeart.jsx";

const SectionTeam = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
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
  const text = "Team #navi";
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
    <section className="bg-FFF6E4 pt-28">
      <div className="flex justify-center mt-10">
        <div data-aos="fade-left">
          <SvgHeart />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="w-4/5 sm:w-1/2">
          <h3
            data-aos="fade-right"
            className="text-center font-extrabold mt-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
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
              <div className="flex justify-center">
                <span className="absolute w-28 h-1 bg-C22E2E"></span>
              </div>
            </span>
          </h3>
        </div>
      </div>
      <div
        className={`flex justify-center mb-16 ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <div className="w-4/5 sm:w-1/2 rounded-lg shadow-md">
          <p
            data-aos="fade-up"
            mb-10
            data-aos-anchor-placement="top-bottom"
            className="px-5 text-center text-lg md:text-center lg:text-center sm:text-2xl mt-10 mb-5"
          >
            <span className="font-extrabold">
              {translations[language].textSectionTeamBold1Fr}
              {translations[language].textSectionTeamBold1En}{" "}
              <img
                src={ImgText}
                className="h-6 ml-1 mr-2 sm:h-8 inline"
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
      <div
        className={`flex justify-center mt-16 ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col space-x-3 mb-5 sm:flex-row">
            <div className="mb-10 sm:mb-0">
              <div className="w-auto h-auto">
                <ModalImage
                  small={ImageLondon}
                  large={ImageLondon}
                  className="rounded-2xl ml-10 sm:ml-0 transition hover:opacity-90"
                />
                <p className="text-sm sm:ml-0 ml-10">
                  📍 London, United Kingdom.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-left mb-5 ml-10 sm:ml-0">
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
                <p className="text-left text-base mb-10 ml-10 sm:ml-0 p">
                  <span className="font-extrabold">
                    {" "}
                    › {translations[language].textSectionTeamBioBold1MelissaFr}
                    {translations[language].textSectionTeamBioBold1MelissaEn}
                  </span>{" "}
                  {
                    translations[language]
                      .textSectionTeamBioWithoutBold1MelissaFr
                  }
                  {
                    translations[language]
                      .textSectionTeamBioWithoutBold1MelissaEn
                  }{" "}
                  <span className="font-extrabold">
                    {translations[language].textSectionTeamBioBold2MelissaFr}
                    {
                      translations[language].textSectionTeamBioBold2MelissaEn
                    } «{" "}
                    <span className="text-C22E2E font-inter underline">
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
                className="animate-formbounce inline-flex items-center gap-2 rounded-full shadow-2xl mr-6 mb-10 bg-black px-8 py-3 text-FFF6E4"
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

          <div className="flex flex-col justify-center">
            <div className="flex space-x-3 flex-col-reverse sm:flex-row">
              <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                <NavLink
                  to="/dev"
                  className="animate-formbounce inline-flex items-center gap-2 rounded-full shadow-2xl mr-2 sm:mr-0 bg-black px-8 py-3 text-FFF6E4"
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
                  <ModalImage
                    small={ImageParis}
                    large={ImageParis}
                    className="rounded-2xl ml-10 sm:ml-0 transition hover:opacity-90"
                  />
                </div>
                <p className="text-sm sm:ml-0 ml-10">
                  📍 Paris, Île-de-France, France.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="text-left mb-5 ml-10 sm:ml-0">
                  <p data-aos="fade-left" className="text-4xl font-extrabold">
                    Louisa Fernandez
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
                  <p className=" text-left text-base mb-10 ml-10 sm:ml-0 p">
                    <span className="font-extrabold">
                      {" "}
                      › {translations[language].textSectionTeamBioBold1LouisaFr}
                      {translations[language].textSectionTeamBioBold1LouisaEn}
                    </span>{" "}
                    {
                      translations[language]
                        .textSectionTeamBioWithoutBold1LouisaFr
                    }
                    {
                      translations[language]
                        .textSectionTeamBioWithoutBold1LouisaEn
                    }{" "}
                    <span className="font-extrabold">
                      {translations[language].textSectionTeamBioBold2LouisaFr}
                      {
                        translations[language].textSectionTeamBioBold2LouisaEn
                      } «{" "}
                      <span className="text-C22E2E font-inter underline">
                        <NavLink to="/dev">Web Developer</NavLink>
                      </span>{" "}
                      ».
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-FFF6E4">
              <SectionExploration />
            </div>
            <div id="contact" className="pb-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;

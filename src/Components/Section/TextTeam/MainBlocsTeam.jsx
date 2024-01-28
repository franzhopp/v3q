import { useTheme } from "../../../context/ThemeProvider.jsx";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { useSpring, animated } from "react-spring";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RiBardLine } from "react-icons/ri";
import translations from "../translate.jsx";
import SvgHeart from "../Svg/SvgHeart.jsx";
import TitleTeamNavi from "./Title.jsx";
import ModalImage from "react-modal-image";
import ImageLondon from "../../../assets/london.png";
import ImageParis from "../../../assets/paris.png";
import SectionExploration from "../Carousel/SectionExploration.jsx";

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
  const text2 = "Designer";
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
  ];
  const text1 = "Web Developper";
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
    { dataAos: "fade-left", dataAosDelay: 700 },
    { dataAos: "fade-left", dataAosDelay: 800 },
  ];

  return (
    <section className="bg-FFF6E4 pt-24">
      <div className="flex justify-center mt-10">
        <div data-aos="fade-left">
          <SvgHeart />
        </div>
      </div>
      <TitleTeamNavi />
      <div
        className={`flex justify-center mb-16 ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <div className="w-4/5 sm:w-1/2">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="font-arial px-5 text-center tracking-tighter text-lg md:text-center lg:text-center sm:text-2xl mt-10 mb-5"
          >
            <span className="font-extrabold">
              {translations[language].textSectionTeamBold1Fr}
              {translations[language].textSectionTeamBold1En} navi studio.™{" "}
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
                  large={ImageParis}
                  small={ImageParis}
                  className="rounded-2xl ml-10 sm:ml-0 transition hover:opacity-90"
                />
                <p className="text-sm sm:ml-0 ml-10">
                  📍 Paris, Île-de-France, France.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-left mb-5 ml-10 sm:ml-0">
                <p data-aos="fade-right" className="text-4xl font-extrabold">
                  Louisa Fernandez
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
                  Paris
                </animated.h1>
              </div>

              <div className="w-72">
                <p className="text-left text-base mb-10 ml-10 sm:ml-0 p">
                  <span className="font-extrabold">
                    {" "}
                    <RiBardLine className="inline" />{" "}
                    {translations[language].textSectionTeamBioBold1LouisaFr}
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
                    }{" "}
                    <span className="text-C22E2E hover:text-0C3E78 font-inter">
                      <NavLink to="/developer">Web Developer</NavLink>
                    </span>
                    .
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
              <NavLink
                to="/designer"
                className="inline-flex items-center gap-2 rounded-full mr-6 mb-10 bg-black px-8 py-3 text-FFF6E4"
              >
                <span className="text-3xl mr-3 font-semibold">
                  {translations[language].btnMoreFr}
                  {translations[language].btnMoreEn}{" "}
                </span>
                <FaArrowRight className="h-10 w-10" />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex space-x-3 flex-col-reverse sm:flex-row">
              <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                <NavLink
                  to="/developer"
                  className="inline-flex items-center gap-2 rounded-full mr-2 sm:mr-0 bg-black px-8 py-3 text-FFF6E4"
                >
                  <FaArrowLeft className="h-10 w-10" />
                  <span className="text-3xl ml-3 font-semibold">
                    {translations[language].btnMoreFr}
                    {translations[language].btnMoreEn}{" "}
                  </span>
                </NavLink>
              </div>

              <div className="mb-10 sm:mb-0">
                <div className="w-auto h-auto">
                  <ModalImage
                    small={ImageLondon}
                    large={ImageLondon}
                    className="rounded-2xl ml-10 sm:ml-0 transition hover:opacity-90"
                  />
                </div>
                <p className="text-sm sm:ml-0 ml-10">
                  📍 London, United Kingdom.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="text-left mb-5 ml-10 sm:ml-0">
                  <p data-aos="fade-left" className="text-4xl font-extrabold">
                    Mélissa Nefti
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
                    London
                  </animated.h1>
                </div>
                <div className="w-72">
                  <p className=" text-left text-base mb-10 ml-10 sm:ml-0 p">
                    <span className="font-extrabold">
                      {" "}
                      <RiBardLine className="inline" />{" "}
                      {translations[language].textSectionTeamBioBold1MelissaFr}
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
                      }{" "}
                      <span className="text-C22E2E hover:text-0C3E78 font-inter">
                        <NavLink to="/designer">Designer</NavLink>
                      </span>
                      .
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-FFF6E4">
              <SectionExploration />
            </div>
            <div id="contact" className="pb-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
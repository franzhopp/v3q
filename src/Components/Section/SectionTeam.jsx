import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import ImgText from "../../assets/logo-4.png";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.pnborder-b border-gray-300g";

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
    <section className="bg-FFF6E4 pt-14">
      <div className="flex justify-center mb-6">
        <div className="w-4/5 sm:w-1/2">
          <div data-aos="fade-left">
            <svg
              className="relative top-5 sm:top-16 left-0 sm:left-28 -rotate-12"
              fill="#C22E2E"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="114px"
              height="114px"
              viewBox="0 0 441.111 441.111"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M306.908,30.556c-30.396,0-58.969,9.82-82.633,28.407l-3.717,2.926l-3.725-2.929 c-23.654-18.584-52.224-28.404-82.616-28.404c-38.436,0-73.153,16.251-97.646,42.236c10.043,4.86,32.966,12.719,78.952,15.005 c11.071,0.552,43.763,2.589,45.542,3.002c1.995,0.238,4.546,1.047,4.705,3.097c0.694,9.313-7.771,13.423-14.524,13.643 c-5.294,0.172-32.764-0.723-37.209,7.499c-2.029,3.744,9.065,12.56,12.508,15.789c4.288,4.028,8.586,8.054,12.885,12.079 c11.717,10.976,23.825,22.321,35.658,33.564c2.412,2.292,11.896,12.127,6.955,17.07c-4.944,4.942-14.658-3.259-18.087-6.45 c-8.789-8.178-40.172-34.782-41.443-33.652l-0.11,0.101c-1.473,1.475,47.752,50.258,47.752,50.258s14.82,13.814,9.274,19.36 c-5.548,5.549-19.359-7.84-22.712-10.969c-10.664-9.925-49.205-43.213-50.412-42.008c-0.85,0.869,33.358,36.715,43.582,46.501 c3.576,3.43,15.428,14.944,10.271,20.101c-5.152,5.16-17.305-5.748-20.313-8.531c-9.601-8.88-48.327-41.804-49.173-40.961 l-0.072,0.072c-0.866,0.898,22.18,26.296,31.482,35.036c2.754,2.578,5.505,5.469,6.995,9.096c1.482,3.604,1.413,5.81-0.244,7.612 c-0.059,0.069-0.122,0.129-0.186,0.192c-1.789,1.79-4.264,2.008-7.348,0.65c-3.609-1.592-6.529-3.41-8.669-5.4 c-22.82-21.193-41.785-38.273-58.484-54.975c-7.179-7.172-14.909-26.012-22.709-40.438c-4.646-8.592-14.908-17.136-22.448-22.64 C3.184,131.485,0,147.765,0,164.778c0,97.776,72.822,146.692,131.353,186c23.824,15.993,46.318,31.12,60.939,47.354 c7.115,7.902,17.256,12.424,27.889,12.424c0.038,0,0.067,0,0.094,0c10.677-0.031,20.825-4.598,27.918-12.568 c14.294-16.037,36.779-31.106,60.596-47.065c8.285-5.558,16.855-11.306,25.469-17.345c-5.33-7.596-14.812-19.695-24.367-24.858 c-14.422-7.8-33.264-15.536-40.437-22.708c-16.7-16.7-33.783-35.665-54.978-58.485c-1.985-2.146-3.803-5.065-5.395-8.675 c-1.362-3.084-1.145-5.556,0.645-7.347c0.064-0.062,0.129-0.122,0.192-0.187c1.804-1.654,4.007-1.724,7.62-0.241 c3.619,1.493,6.511,4.244,9.097,6.992c8.73,9.31,34.133,32.354,35.03,31.482l0.071-0.072c0.839-0.84-32.084-39.572-40.963-49.17 c-2.784-3.008-13.692-15.157-8.532-20.315c5.156-5.156,16.671,6.698,20.104,10.277c9.78,10.221,45.627,44.428,46.498,43.577 c1.203-1.202-32.084-39.749-42.006-50.407c-3.133-3.355-16.516-17.17-10.973-22.712c5.549-5.548,19.363,9.272,19.363,9.272 s48.779,49.222,50.254,47.751l0.104-0.11c1.129-1.274-25.477-32.655-33.654-41.444c-3.188-3.428-11.393-13.142-6.449-18.086 c4.941-4.944,14.785,4.542,17.07,6.958c11.244,11.83,22.592,23.941,33.568,35.655c4.02,4.299,8.051,8.594,12.074,12.888 c3.23,3.439,12.049,14.537,15.791,12.507c8.221-4.449,7.324-31.915,7.5-37.213c0.221-6.754,4.326-15.219,13.641-14.519 c2.053,0.153,2.857,2.71,3.1,4.703c0.414,1.779,2.449,34.47,3.002,45.544c2.139,43.055,9.166,65.896,14.039,76.868 c36.488-32.783,65.844-75.106,65.844-136.723C441.111,90.769,380.91,30.556,306.908,30.556z" />{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
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
              <div className="flex justify-center">
                <span className="absolute w-28 h-1 bg-C22E2E"></span>
              </div>
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
                  <span className="font-extrabold">
                    {" "}
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
                    } «{" "}
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

          <div className="flex flex-col justify-center mb-10">
            <div className="flex space-x-3 flex-col-reverse sm:flex-row">
              <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                <NavLink
                  to="/webdev"
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
                  <p className="text-black text-left text-base mb-10 ml-10 sm:ml-0 z">
                    <span className="font-extrabold">
                      {" "}
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
                      } «{" "}
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

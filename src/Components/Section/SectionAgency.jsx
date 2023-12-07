import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import TitleAgency from "../UI/Title/TitleAgency";
import ImgText from "../../assets/logo-4.png";
import SectionTeam from "./SectionTeam";
import ButtonAgency from "../UI/Button/ButtonAgency";
import { NavLink } from "react-router-dom";

const SectionAgency = () => {
  const { language } = useLanguage();
  const props = useSpring({
    from: { color: "#E18AB0" },
    to: async (next) => {
      while (true) {
        await next({ color: "#0C3E78" });
        await next({ color: "#E18AB0" });
      }
    },
    config: { duration: 1000 },
  });
  return (
    <section className="bg-FFF6E4 h-1/2">
      <TitleAgency className="mt-20" />
      <section className="test4">
        <div className="h-1/3">
          <div className="flex justify-center">
            <div className="w-4/5 sm:w-1/2">
              <h3
                data-aos="fade-right"
                className="text-center font-extrabold mt-28 text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {translations[language].welcomeAgencyFr}
                {translations[language].welcomeAgencyEn}{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-12 sm:h-16 mr-1 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                – {translations[language].sloganAgencyFr}
                {translations[language].sloganAgencyEn}{" "}
                <animated.span style={props}>
                  {translations[language].wordAgencyFr}
                  {translations[language].wordAgencyEn}
                </animated.span>
                .
              </h3>
              <div className="flex justify-center">
                <animated.span
                  style={props}
                  className="absolute w-28 h-1 bg-0C3E78"
                ></animated.span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-4/5 sm:w-1/2">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="px-5 text-black text-arial text-center text-lg sm:text-2xl mt-10"
              >
                {translations[language].textAgency1Fr}
                {translations[language].textAgency1En}{" "}
                <span className="font-extrabold text-C22E2E">{"Mélissa"}</span>
                {" & "}
                <span className="font-extrabold text-C22E2E">Louisa</span>.{" "}
                <span className="text-black">
                  {translations[language].textAgency2Fr}
                  {translations[language].textAgency2En}
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].textAgency3Fr}
                    {translations[language].textAgency3En}
                  </span>{" "}
                  :
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].textAgencyBold4Fr}
                    {translations[language].textAgencyBold4En}
                  </span>
                  . {translations[language].textAgency5Fr}
                  {translations[language].textAgency5En}.
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
            >
              <path
                d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
                fill="#0C3E78"
              />
            </svg>
          </div>
        </div>
        <ButtonAgency />
      </section>
      <section className="bg-0C3E78 py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-300">
        <div className="pt-3 pb-16 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -left-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">04.</h1>
              <span className="font-extrabold">
                {translations[language].textSectionAgencyBold1Fr}
                {translations[language].textSectionAgencyBold1En}{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-5 ml-1 mr-1 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                ? {translations[language].textSectionAgencyBold2Fr}
                {translations[language].textSectionAgencyBold2En}{" "}
              </span>
              {translations[language].textSectionAgencyWithoutBold2Fr}
              {translations[language].textSectionAgencyWithoutBold2En}
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">05.</h1>
              <span className="font-extrabold">
                {translations[language].textSectionAgencyBold3Fr}
                {translations[language].textSectionAgencyBold3En}{" "}
              </span>
              {translations[language].textSectionAgencyBold4Fr}
              {translations[language].textSectionAgencyBold4En}{" "}
              <span className="font-extrabold">
                {translations[language].textSectionAgencyBold5Fr}
                {translations[language].textSectionAgencyBold5En}
              </span>
            </p>{" "}
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -right-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">06.</h1>
              <span className="font-extrabold">
                {translations[language].textSectionAgencyBold6Fr}
                {translations[language].textSectionAgencyBold6En}{" "}
              </span>
              {translations[language].textSectionAgencyBold7Fr}
              {translations[language].textSectionAgencyBold7En}
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center mt-6">
          <NavLink
            to="/portfolio"
            className="text-FFF6E4 text-center font-extrabold underline transition hover:text-C22E2E"
          >
            {translations[language].linkPortfolioFr}
            {translations[language].linkPortfolioEn}
          </NavLink>
          <NavLink
            to="/services"
            className="text-FFF6E4 text-center font-extrabold underline transition hover:text-C22E2E"
          >
            {translations[language].linkServicesFr}
            {translations[language].linkServicesEn}
          </NavLink>
        </div> */}
      </section>
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;

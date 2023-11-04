import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import TitleAgency from "../UI/Title/TitleAgency";
import ImgText from "../../assets/logo-4.png";
import SectionTeam from "./SectionTeam";
import ButtonAgency from "../UI/Button/ButtonAgency";

const SectionAgency = () => {
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
  return (
    <section className="bg-FFF6E4 h-1/2">
      <section className="">
        <TitleAgency className="mt-20" />
        <div className="h-1/3">
          <div className="flex justify-center">
            <div className="w-4/5 sm:w-1/2">
              <h3
                data-aos="fade-right"
                className="text-center font-extrabold mt-28 text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {/* <span className="absolute h-96 w-1 bg-0C3E78 -left-32 -top-28 hidden sm:block"></span> */}
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
        </div>
        <ButtonAgency />
      </section>
      <section className="bg-0C3E78 py-24 px-4 sm:px-6 lg:px-8 border-b border-t border-gray-400">
        <div className="pt-10 pb-16 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
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
                    className="h-6 inline"
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
      </section>
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;

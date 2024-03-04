import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import { useSpring, animated } from "react-spring";
import translations from "../translate.jsx";

const BlocAgency = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const props = useSpring({
    from: { color: "#e18ab0" },
    to: async (next) => {
      while (true) {
        await next({ color: "#0c3e78" });
        await next({ color: "#e18ab0" });
      }
    },
    config: { duration: 1000 },
  });
  return (
    <>
      <div id="team" className="pt-40"></div>
      <div
        className={`flex justify-center h-1/3 ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <div className="w-4/5 xl:w-1/2">
          <h3
            data-aos="fade-right"
            className="text-center font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {translations[language].welcomeAgencyFr}
            {translations[language].welcomeAgencyEn} <span>navi studio.™</span>{" "}
            – {translations[language].sloganAgencyFr}
            {translations[language].sloganAgencyEn}{" "}
            <animated.span style={props}>
              {translations[language].wordAgencyFr}
              {translations[language].wordAgencyEn}
            </animated.span>
            .
          </h3>
          <div className="flex justify-center">
            <animated.span style={props}></animated.span>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center ${
          isDarkMode ? "text-black" : "text-fff6e4"
        }`}
      >
        <div className="w-4/5 xl:w-1/2">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="font-arial tracking-tighter px-5 text-center text-lg sm:text-2xl my-10"
          >
            <span>
              {translations[language].textAgency2Fr}
              {translations[language].textAgency2En}
              <span className="font-extrabold">
                {" "}
                {translations[language].textAgency3Fr}
                {translations[language].textAgency3En}
              </span>{" "}
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
    </>
  );
};

export default BlocAgency;

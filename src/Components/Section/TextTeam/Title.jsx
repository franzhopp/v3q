const TitleWelcome = () => {
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
  return (
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
  );
};

export default TitleWelcome;

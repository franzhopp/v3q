import SubLine from "../../UI/Highlighting/SubLine";

const TitleTeamNavi = () => {
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
  return (
    <div className="flex justify-center mb-6">
      <div className="w-4/5 sm:w-1/2">
        <h3
          data-aos="fade-right"
          className="text-center font-extrabold mt-6 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          <span className="text-c22e2e tracking-tighter">
            {letters.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig[index].dataAos}
                data-aos-delay={animationConfig[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
            {/* <div className={`flex justify-center`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="116"
                height="20"
                viewBox="0 0 116 20"
                fill="none"
              >
                <path d="M0 0L61 20L116 0H0Z" fill="#c22e2e" />
              </svg>
            </div> */}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default TitleTeamNavi;

import SubLine from "../../UI/Highlighting/SubLine";

const TitleWebsiteFr = () => {
  const text = "Sites Web";
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
    <div className="flex justify-center">
      <h1
        data-aos="fade-in"
        className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            data-aos={animationConfig[index].dataAos}
            data-aos-delay={animationConfig[index].dataAosDelay}
          >
            {letter}
          </span>
        ))}
        <SubLine />
      </h1>
    </div>
  );
};

export default TitleWebsiteFr;
import SubLine from "../../UI/Highlighting/SubLine";

const TitleMarketing = () => {
  const text2 = "Marketing";
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
  return (
    <div className="flex justify-center">
      <h1
        data-aos="fade-in"
        className="text-c22e2e text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
      >
        {letters2.map((letter, index) => (
          <span
            key={index}
            data-aos={animationConfig2[index].dataAos}
            data-aos-delay={animationConfig2[index].dataAosDelay}
          >
            {letter}
          </span>
        ))}
        <SubLine />
      </h1>
    </div>
  );
};

export default TitleMarketing;

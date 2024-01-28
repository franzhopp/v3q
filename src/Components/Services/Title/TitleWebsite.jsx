const TitleWebsite = () => {
  const text = "Websites";
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
    <h1
      data-aos="fade-right"
      className="text-C22E2E font-inter text-center text-4xl pt-20 pb-10 font-extrabold sm:text-5xl md:text-6xl"
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
      <div className="flex justify-center">
        <span className="absolute w-32 h-1 bg-C22E2E"></span>
      </div>
    </h1>
  );
};

export default TitleWebsite;

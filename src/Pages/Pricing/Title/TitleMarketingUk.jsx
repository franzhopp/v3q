const TitleMarketingUk = () => {
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
    <div className={`flex justify-center`}>
      <h1
        data-aos="fade-in"
        className={`text-0c3e78 text-center text-4xl lg:text-5xl md:text-6xl font-extrabold py-10`}
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
        <div className={`flex justify-center`}>
          <span className={`bg-0c3e78 absolute h-1 w-32`}></span>
        </div>
      </h1>
    </div>
  );
};

export default TitleMarketingUk;

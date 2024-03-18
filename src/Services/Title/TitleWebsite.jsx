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
      className={`text-c22e2e font-inter text-center text-4xl py-20 font-extrabold sm:text-5xl md:text-6xl`}
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
      <div className={`flex justify-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="116"
          height="20"
          viewBox="0 0 116 20"
          fill="none"
        >
          <path d="M0 0L61 20L116 0H0Z" fill="#c22e2e" />
        </svg>
      </div>
    </h1>
  );
};

export default TitleWebsite;

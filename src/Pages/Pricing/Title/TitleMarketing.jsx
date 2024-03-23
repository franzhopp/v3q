import SubLine from "../../../Components/UI/Highlighting/SubLine";

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
    <div className={`flex justify-center`}>
      <h1
        data-aos="fade-in"
        className={`text-c22e2e tracking-tighter text-4xl lg:text-5xl md:text-6xl font-extrabold py-10`}
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
      </h1>
    </div>
  );
};

export default TitleMarketing;

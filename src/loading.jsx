import { useEffect } from "react";
import Logo from "./assets/logo-bit.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = () => {
  const text = "navi";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
  ];

  const text2 = "studio";
  const letters2 = text2.split("");
  const animationConfig2 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];

  const text3 = ".";
  const letters3 = text3.split("");
  const animationConfig3 = [{ dataAos: "fade-left", dataAosDelay: 100 }];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="bg-C22E2E flex flex-col justify-center items-center pt-80">
        <img src={Logo} className="animate-pulse h-14 w-14" />
        <div className="flex justify-center mt-10 font-gexo text-FFF6E4">
          <div data-aos="fade-right" className="mr-1">
            {letters.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig[index].dataAos}
                data-aos-delay={animationConfig[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </div>
          <div data-aos="fade-up" data-aos-duration="600" className="flex">
            {letters2.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig2[index].dataAos}
                data-aos-delay={animationConfig2[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </div>
          <div data-aos="fade-right" className="flex animate-bounce ml-1">
            {letters3.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig3[index].dataAos}
                data-aos-delay={animationConfig3[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;

import Logo from "./assets/logo-3.png";
import TitleLogo from "./assets/logo-loading.png";

const Loader = () => {
  // const text = "navi";
  // const letters = text.split("");
  // const animationConfig = [
  //   { dataAos: "fade-left", dataAosDelay: 100 },
  //   { dataAos: "fade-left", dataAosDelay: 200 },
  //   { dataAos: "fade-left", dataAosDelay: 300 },
  //   { dataAos: "fade-left", dataAosDelay: 400 },
  //   { dataAos: "fade-left", dataAosDelay: 500 },
  // ];

  // const text2 = "studio";
  // const letters2 = text2.split("");
  // const animationConfig2 = [
  //   { dataAos: "fade-left", dataAosDelay: 100 },
  //   { dataAos: "fade-left", dataAosDelay: 200 },
  //   { dataAos: "fade-left", dataAosDelay: 300 },
  //   { dataAos: "fade-left", dataAosDelay: 400 },
  //   { dataAos: "fade-left", dataAosDelay: 500 },
  //   { dataAos: "fade-left", dataAosDelay: 600 },
  // ];

  // const text3 = ".";
  // const letters3 = text3.split("");
  // const animationConfig3 = [{ dataAos: "fade-left", dataAosDelay: 100 }];

  return (
    <section>
      <div className="bg-C22E2E flex flex-col justify-center items-center h-screen">
        <img src={Logo} className="h-14 w-auto mr-1 animate-pulse" />
        <div className="flex justify-center mt-3">
          <img src={TitleLogo} className="h-3 ml-1 animate-formbounce" />
        </div>
      </div>
    </section>
  );
};

export default Loader;

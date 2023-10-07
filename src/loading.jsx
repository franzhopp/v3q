import Logo from "./assets/logo-bit.png";
import LogoNaviStudio from "./assets/logo-5.png";

const Loader = () => {
  return (
    <>
      <div className="bg-FFF6E4 flex justify-center h-screen pt-80">
        <img src={Logo} className="animate-pulse h-16 w-16" />
      </div>
      <div className=" flex justify-center">
        <img
          src={LogoNaviStudio}
          className="animate-bounce h-10 w-auto sm:h-10"
        />
      </div>
    </>
  );
};

export default Loader;

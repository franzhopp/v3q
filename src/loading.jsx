import Logo from "./assets/logo-bit.png";
import LogoNaviStudio from "./assets/logo-5.png";

const Loader = () => {
  return (
    <>
      <div className="bg-FFF6E4 flex justify-center h-screen pt-80">
        <img src={Logo} className="animate-spin h-14 w-14" />
      </div>
    </>
  );
};

export default Loader;

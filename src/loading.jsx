import Logo from "./assets/logo-bit.png";
import LogoNaviStudio from "./assets/logo-5.png";

const Loader = () => {
  return (
    <>
      <div className="bg-C22E2E flex justify-center h-screen pt-80">
        <img src={Logo} className="animate-spin h-14 w-14" />
      </div>
    </>
  );
};

export default Loader;

import Logo from "./assets/logo-bit.png";

const Loader = () => {
  return (
    <div className="bg-FFF6E4 flex justify-center h-screen pt-80">
      <img src={Logo} className="animate-pulse h-16 w-16" />
    </div>
  );
};

export default Loader;

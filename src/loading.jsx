import Logo from "./assets/logo-bit.png";

const Loader = () => {
  return (
    <div className="bg-C22E2E flex justify-center h-screen pt-80">
      <img src={Logo} className="animate-spin h-16 w-16" />
    </div>
  );
};

export default Loader;

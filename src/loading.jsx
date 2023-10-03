import Logo from "./assets/logo-bit.png";

const Loader = () => {
  return (
    <div className="bg-C22E2E flex justify-center h-screen pt-96">
      <img src={Logo} className="animate-pulse h-16 w-16" />
    </div>
  );
};

export default Loader;

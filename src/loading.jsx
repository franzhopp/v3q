import Logo from "./assets/logo-bit.png";

const Loader = () => {
  return (
    <>
      <div className="bg-C22E2E flex flex-col justify-center items-center pt-96">
        <img src={Logo} className="animate-pulse h-14 w-14" />
      </div>
    </>
  );
};

export default Loader;

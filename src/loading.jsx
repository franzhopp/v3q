import Logo from "./assets/logo-bit.png";

const Loader = () => {
  return (
    <>
      <body className="bg-C22E2E">
        <div className="bg-C22E2E flex justify-center h-screen pt-80">
          <img src={Logo} className="animate-pulse h-16 w-16" />
        </div>
      </body>
    </>
  );
};

export default Loader;

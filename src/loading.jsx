import { useEffect } from "react";
import Logo from "./assets/logo-3.png";
import TitleLogo from "./assets/logo-loading.png";

const Loader = () => {
  useEffect(() => {
    const logo = document.getElementById("logo");
    if (logo) {
      logo.classList.add("zoom-in");
    }
  }, []);
  return (
    <section className="overflow-x-hidden">
      <div className="bg-C22E2E flex flex-col justify-center items-center pt-80 pb-10">
        <img id="logo" src={Logo} className="h-14 w-auto mr-1 animate-pulse" />
        <div className="flex justify-center mt-3">
          <img src={TitleLogo} className="h-3 ml-1 animate-formbounce" />
        </div>
      </div>
    </section>
  );
};

export default Loader;

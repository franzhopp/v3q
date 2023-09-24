import NavbarServices from "../Navbar/NavbarServices/n-services";
import Gears from "../../assets/gears-star.png";
import DetailsServices from "./DetailsService/d-services";

const Services = () => {
  return (
    <>
      <section>
        <NavbarServices />
        <h1 className="text-black text-center text-4xl mt-10 font-extrabold sm:text-5xl md:text-6xl">
          Websites
        </h1>
        <div className="flex justify-center">
          <img src={Gears} alt="Icône Gears" className="mt-10" />
        </div>
        <div className="flex justify-center mt-10 mb-20">
          <div className="w-96 sm:w-1/3">
            <p className="text-black text-center text-2xl font-extrabold">
              Ou besoin de modifications sur votre site web ? Nous pouvons le
              faire rapidement !
            </p>
          </div>
        </div>
        <DetailsServices/>
      </section>
    </>
  );
};

export default Services;

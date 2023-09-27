import NavbarServices from "../Navbar/NavbarServices/n-services";
import Gears from "../../assets/gears-star.png";
import DetailsServices from "./DetailsService/d-services";
import Footer from "../Footer/footer";
import ImgCards from "../../assets/cards.png";

const Services = () => {
  return (
    <>
      <section>
        <NavbarServices />
        <h1 className="text-black text-center text-4xl mt-20 font-extrabold sm:text-5xl md:text-6xl">
          Websites
          <div className="flex justify-center">
            <img src={ImgCards} alt="Cards" className="" />
          </div>
        </h1>
        <div className="flex justify-center">
          <img src={Gears} alt="Icône Gears" className="mt-10" />
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-96 sm:w-1/3 px-5">
            <p className="text-black text-center text-2xl font-extrabold">
              Ou besoin de modifications sur votre site web ? Nous pouvons le
              faire rapidement !
            </p>
          </div>
        </div>
        <DetailsServices />
      </section>
      <Footer />
    </>
  );
};

export default Services;

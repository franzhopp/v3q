import NavbarServices from "../Navbar/NavbarServices/s-navbar";
import DetailsServices from "./DetailsService/details-services";
import Gears from "../../assets/gears-star.png";
import ImgCards from "../../assets/cards.png";
import Footer from "../Footer/footer";

const Services = () => {
  return (
    <>
      <section>
        <NavbarServices />
        <h1 className="text-black text-center text-4xl mt-20 font-extrabold sm:text-5xl md:text-6xl">
          Websites
        </h1>
        <div className="flex justify-center flex-row space-x-4">
        <img src={ImgCards} alt="Icône Gears" className="" />
          {/* <div className="test-1 w-96">
            <div className="flex justify-end">
              <div className="w-44">
                <div className="text-2xl font-extrabold text-FFF6E4 mt-10 mb-10">
                Site vitrine
                </div>
                <div className="w-32">
                  <p className="text-FFF6E4 text-center text-sm">
                    {" "}
                    Un site vitrine qui{" "}
                    <span className="font-extrabold">vous ressemble</span>.
                    Impressionnez vos visiteurs{" "}
                    <span className="font-extrabold">
                      dès la première visite
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center">
          <img src={Gears} alt="Icône Gears" className="mt-10 h-20 button-design-formbounce animate-bounce-bounce" />
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

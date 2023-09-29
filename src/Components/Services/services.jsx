import NavbarServices from "../Navbar/NavbarServices/s-navbar";
import DetailsServices from "./DetailsService/details-services";
import Gears from "../../assets/gears-star.png";
import ImgService1 from "../../assets/home1.png";
import ImgService2 from "../../assets/home2.png";
import ImgService3 from "../../assets/home3.png";
import ImgService4 from "../../assets/home4.png";
import Footer from "../Footer/footer";

const Services = () => {
  return (
    <>
      <section>
        <NavbarServices />
        <h1
          data-aos="fade-right"
          className="text-black text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Websites
        </h1>

        <div class="flex justify-center mt-10">
          <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Site vitrine
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  Un site vitrine qui{" "}
                  <span className="font-extrabold">vous ressemble</span>.{" "}
                  <span className="font-extrabold">Impressionnez</span> vos
                  visiteurs{" "}
                  <span className="font-extrabold">dès la première visite</span>
                  .
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService1} alt="Icône Gears" className="" />
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Site e-commerce
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  Construction{" "}
                  <span className="font-extrabold">
                    d'un site e-commerce puissant
                  </span>{" "}
                  et <span className="font-extrabold">performant</span> pour{" "}
                  <span className="font-extrabold">plus de ventes</span>.
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService2} alt="Icône Gears" className="" />
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Landing page
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  Nous créons des landing pages{" "}
                  <span className="font-extrabold">impactantes</span> avec une{" "}
                  <span className="font-extrabold">
                    expérience utilisateur optimisée
                  </span>
                  .
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService3} alt="Icône Gears" className="" />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Refonte
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  Vous avez déjà un site internet ? Nous pouvons{" "}
                  <span className="font-extrabold">l'améliorer</span> ou
                  <span className="font-extrabold">le refaire entièrement</span>
                  .
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService4} alt="Icône Gears" />
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div className="h-96 w-56 rounded-2xl shadow-2xl bg-C22E2E">
          <div className="flex justify-center">
            <div className="">
              <div className="text-2xl font-extrabold text-FFF6E4 mt-10 mb-5">
                Site vitrine
              </div>
              <div className="w-32 mb-10">
                <p className="text-FFF6E4 text-center text-sm">
                  {" "}
                  Un site vitrine qui{" "}
                  <span className="font-extrabold">vous ressemble</span>.
                  Impressionnez vos visiteurs{" "}
                  <span className="font-extrabold">dès la première visite</span>
                  .
                </p>
                </div>
                </div>
                </div>
              </div> */}

        <div className="flex justify-center mt-20">
          <img
            src={Gears}
            alt="Icône Gears"
            className="button-design-formbounce animate-bounce-bounce"
          />
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-96 sm:w-1/3 px-5">
            <p
              data-aos="fade-left"
              className="text-black text-center text-2xl font-extrabold"
            >
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

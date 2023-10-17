import NavbarServices from "../Navigation/ServicesNavbar/ServicesNavbar";
import DetailsServices from "./AllServices/DetailsServices";
import ImgService1 from "../../assets/home1.png";
import ImgService2 from "../../assets/home2.png";
import ImgService3 from "../../assets/home3.png";
import ImgService4 from "../../assets/home4.png";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="bg-FFF6E4">
        <NavbarServices />
        <h1
          data-aos="fade-right"
          className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Websites
        </h1>

        <div className="flex justify-center">
          <div className="w-96">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-black text-center"
            >
              Dans cette page, vous trouverez{" "}
              <span className="font-extrabold">tous les services</span> de notre
              agence adaptés selon{" "}
              <span className="font-extrabold">vos besoins</span>.
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
            <div
              data-aos="fade-left"
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
                <img src={ImgService1} alt="Icône Services" className="" />
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="300"
              class="bg-cards p-6 rounded-2xl shadow-2xl mb-5"
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
                <img src={ImgService2} alt="Icône Services" className="" />
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="300"
              class="bg-cards-2 p-6 rounded-2xl shadow-2xl mb-5"
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
                <img src={ImgService3} alt="Icône Services" className="" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Refonte
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  Vous avez déjà un site internet ? Nous pouvons{" "}
                  <span className="font-extrabold">l'améliorer</span> ou
                  <span className="font-extrabold">
                    {" "}
                    le refaire entièrement
                  </span>
                  .
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService4} alt="Icône Services" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <svg
            className="animate-bounce-bounce h-14 w-14"
            width="192"
            height="193"
            viewBox="0 0 192 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.5 0L54.9987 28.0013L83 41.5L54.9987 54.9987L41.5 83L28.0013 54.9987L0 41.5L28.0013 28.0013L41.5 0Z"
              fill="#E18AB0"
            />
            <path
              d="M116.5 42L141.058 92.9422L192 117.5L141.058 142.058L116.5 193L91.9422 142.058L41 117.5L91.9422 92.9422L116.5 42Z"
              fill="#E18AB0"
            />
          </svg>
        </div>
        <div className="flex justify-center pt-10 pb-10">
          <div className="w-96 sm:w-1/3 px-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-black text-center text-2xl font-extrabold"
            >
              Ou besoin de modifications sur votre site web ? Nous pouvons le
              faire rapidement !
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink
            to="/rate"
            className="text-black font-extrabold underline transition hover:text-0C3E78"
          >
            Découvrir Tarification ➔
          </NavLink>
        </div>
        <DetailsServices />
      </section>
      <Footer />
    </>
  );
};

export default Services;

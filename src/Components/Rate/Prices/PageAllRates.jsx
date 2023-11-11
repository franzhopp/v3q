import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import NavbarPages from "../../Navigation/PagesNavbar/PagesNavbar";
import TitleRate from "../../UI/Title/TitleRate";
import Footer from "../../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Rate = () => {
  const [openStates, setOpenStates] = useState({});
  const toggleSubList = (category) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [category]: !prevOpenStates[category],
    }));
  };
  const text = "Sites Web";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];
  const text2 = "Marketing";
  const letters2 = text2.split("");
  const animationConfig2 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];
  const Pink = "bg-pink";
  const Blue = "bg-0c3e78";
  const InformationsSitesWeb = [
    {
      title: "Site vitrine",
      price: "à partir de 650€*",
      details: ["5 pages — À partir de 300€", "10 pages — À partir de 650€"],
      subDetails: [
        "Page « d'Accueil » avec présentation de votre entreprise.",
        "Page « À propos » pour partager votre histoire et votre mission.",
        "Page « Services » pour présenter vos offres.",
        "Page « Nous » pour votre équipe ou votre entreprise.",
        "Page de « Contact » pour vos clients potentiels.",
      ],
    },
    {
      title: "Maquette graphique",
      price: "à partir de 250€*",
      details: [
        "2 pages — À partir de 250€",
        "5 pages avec logo — À partir de 450€",
      ],
      subDetails: [
        "5 : Conception graphique pour des pages spécifiques du site.",
        "10 : Conception graphique pour de plusieurs pages avec l'inclusion d'un logo personnalisé.",
      ],
    },
    {
      title: "Landing page",
      price: "à partir de 300€*",
      details: ["5 pages — À partir de 300€", "10 pages — À partir de 600€"],
      subDetails: [
        "5 : Conception d'une page impactante et convaincante.",
        "10 : Inclut une extension d'une page avec des fonctionnalités supplémentaires.",
      ],
    },
    {
      title: "Site e-commerce",
      price: "à partir de 800€*",
      details: ["5 pages — À partir de 500€", "10 pages — À partir de 800€"],
      subDetails: [
        "5 : Page d'accueil, catalogue de produits, pages de produits individuelles, panier, page de paiement.",
        "10 : Inclut des fonctionnalités avancées telles que des options de filtrage, des avis clients, etc.",
      ],
    },
    {
      title: "Site sur-mesure",
      price: "à partir de 900€*",
      details: ["5 pages — À partir de 600€", "10 pages — À partir de 900€"],
      subDetails: [
        "5 : Conception personnalisée en fonction des besoins spécifiques du client.",
        "10 : Inclut des fonctionnalités avancées et une conception hautement personnalisée.",
      ],
    },
    {
      title: "Refonte totale",
      price: "à partir de 750€*",
      details: ["5 pages — À partir de 350€", "10 pages — À partir de 750€"],
      subDetails: [
        "5 : Analyse complète de l'interface utilisateur et mise à jour du design.",
        "10 : Inclut des améliorations significatives pour une expérience utilisateur optimisée.",
      ],
    },
    {
      title: "Modifications",
      price: "à partir de 100€*",
      details: ["5 pages — À partir de 100€", "10 pages — À partir de 300€"],
      subDetails: [
        "5 : Modifications spécifiques sur cinq pages existantes du site.",
        "10 : Inclut des ajustements plus approfondis sur l'ensemble du site.",
      ],
    },
  ];
  const InformationsMarketing = [
    {
      title: "Startégie de marque",
      price: "à partir de 250€*",
    },
    {
      title: "Réseaux sociaux & SEO",
      price: "à partir de 150€*",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [openStates]);
  return (
    <section className="bg-FFF6E4">
      <NavbarPages />
      <TitleRate />
      <div className="test2">
        <div className="flex justify-center">
          <h1
            data-aos="fade-in"
            className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig[index].dataAos}
                data-aos-delay={animationConfig[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
            <div className="flex justify-center">
              <span className="absolute w-32 h-1 bg-C22E2E"></span>
            </div>
          </h1>
        </div>
        <div className="flex justify-center pb-10">
          <div className="w-96">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className=" text-C22E2E text-center"
            >
              {/* <span className="absolute h-56 w-1 bg-C22E2E -left-96 bottom-1 hidden sm:block"></span> */}
              Dans cette page, vous trouverez{" "}
              <span className="font-extrabold">
                toutes les tarifications des services
              </span>
              .
            </p>
          </div>
        </div>
        {InformationsSitesWeb.map((info, index) => (
          <div className="flex justify-center font-inter">
            <div className="w-96 sm:w-1/2 px-5">
              <div className={`flex ${index % 2 === 0 ? Pink : Blue}`}>
                <div
                  key={index}
                  className="mt-10 mb-10 ml-0 mr-0 sm:ml-5 sm:mr-5"
                >
                  <div className="flex flex-wrap justify-center text-center space-x-0 sm:space-x-6">
                    <div
                      data-aos="fade-left"
                      className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                    >
                      {info.title}
                    </div>
                    <div
                      data-aos="fade-right"
                      className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                    >
                      {info.price}
                    </div>
                  </div>
                  <div className="text-FFF6E4 text-center sm:text-left">
                    <button onClick={() => toggleSubList(info.title)}>
                      <div className="flex hover:opacity-70 transition">
                        En savoir plus <IoIosArrowDown className="mt-1  ml-1" />
                      </div>
                    </button>
                    {openStates[info.title] && (
                      <ul data-aos="fade-left" className="mt-3 font-arial">
                        {info.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                        <ul className="text-FFF6E4 font-extrabold font-inter mt-3 mb-3 text-sm sm:text-left text-justify px-16 sm:px-4">
                          {info.subDetails.map((subDetail, subDetailIndex) => (
                            <li className="list-disc" key={subDetailIndex}>
                              {subDetail}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/devis"
                          className="pt-5 font-extrabold font-inter underline"
                        >
                          › Demander un devis gratuit
                        </a>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center pt-20">
          <svg
            className="animate-formbounce"
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
          >
            <path
              d="M41.5 0L55.2921 27.7079L83 41.5L55.2921 55.2921L41.5 83L27.7079 55.2921L0 41.5L27.7079 27.7079L41.5 0Z"
              fill="#C22E2E"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <h1
            data-aos="fade-in"
            className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
          >
            {letters2.map((letter, index) => (
              <span
                key={index}
                data-aos={animationConfig2[index].dataAos}
                data-aos-delay={animationConfig2[index].dataAosDelay}
              >
                {letter}
              </span>
            ))}
            <div className="flex justify-center">
              <span className="absolute w-32 h-1 bg-C22E2E"></span>
            </div>
          </h1>
        </div>
        {InformationsMarketing.map((info, index) => (
          <div className="flex justify-center font-inter">
            <div className="w-96 sm:w-1/2 px-5">
              <div className={`flex ${index % 2 === 0 ? Pink : Blue}`}>
                <div
                  key={index}
                  className="mt-10 mb-10 ml-0 mr-0 sm:ml-5 sm:mr-5"
                >
                  <div className="flex flex-wrap  justify-center text-center space-x-0 sm:space-x-6">
                    <div
                      data-aos="fade-left"
                      className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                    >
                      {info.title}
                    </div>
                    <div
                      data-aos="fade-right"
                      className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                    >
                      {info.price}
                    </div>
                  </div>
                  {/* <div className="text-FFF6E4 text-center sm:text-left">
                    <button onClick={() => toggleSubList(info.title)}>
                      <div className="flex hover:opacity-70 transition">
                        En savoir plus <IoIosArrowDown className="mt-1  ml-1" />
                      </div>
                    </button>
                    {openStates[info.title] && (
                      <ul data-aos="fade-left" className="mt-2 font-arial">
                        {info.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                        <a href="/devis" className="mt-3 font-inter underline">
                          › Demander un devis gratuit
                        </a>
                      </ul>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center pt-2">
          <div className="w-96 sm:w-full">
            <p className="text-center text-C22E2E px-6">
              *tarifs variables suivant les fonctionnalités désirées, pour plus
              d'informations demandez{" "}
              <span className="font-extrabold">un devis gratuit</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center pt-6 pb-20">
          <a
            href="/services"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            › Découvrir Prestations ➔
          </a>
          <a
            href="/devis"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            › Découvrir Devis Gratuit ➔
          </a>
          <NavLink
            to="/"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            › Retourner à la page d'Accueil ➔
          </NavLink>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Rate;

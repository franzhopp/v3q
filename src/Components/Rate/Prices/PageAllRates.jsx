import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import NavbarPages from "../../Navigation/PagesNavbar/PagesNavbar";
import TitleRate from "../../UI/Title/TitleRate";
import Footer from "../../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Rate = () => {
  const { isDarkMode } = useTheme();
  const [openStates, setOpenStates] = useState({});
  const toggleSubList = (category) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [category]: !prevOpenStates[category],
    }));
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
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
  const Blue = "bg-0c3e78";
  const Pink = "bg-pink";
  const InformationsSitesWeb = [
    {
      id: 1,
      title: "Site vitrine",
      price: "à partir de 650€*",
      details: ["5 pages — À partir de 300€", "10 pages — À partir de 650€"],
      subDetails: [
        "Page « d'Accueil » avec présentation de votre entreprise.",
        "Page « À propos » pour partager votre histoire et votre mission.",
        "Page « Services » pour présenter vos offres.",
        "Page « Nous » concernant votre production.",
        "Page de « Contact » pour vos clients potentiels.",
        "Inclut de plusieurs pages pour plus de contenus, d'informations concernant votre entreprise.",
      ],
    },
    {
      id: 2,
      title: "Maquette graphique",
      price: "à partir de 250€*",
      details: [
        "2 pages — À partir de 250€",
        "5 pages avec logo — À partir de 450€",
      ],
      subDetails: [
        "Conception graphique pour des pages spécifiques de la maquette du site.",
        "Conception graphique pour plusieurs pages avec l'inclusion d'un logo personnalisé.",
      ],
    },
    {
      id: 3,
      title: "Landing page",
      price: "à partir de 300€*",
      details: ["5 pages — À partir de 300€", "10 pages — À partir de 600€"],
      subDetails: [
        "Conception d'une page impactante et convaincante.",
        "Inclut une extension d'une page avec des fonctionnalités supplémentaires.",
      ],
    },
    {
      id: 4,
      title: "Site e-commerce",
      price: "à partir de 800€*",
      details: ["5 pages — À partir de 500€", "10 pages — À partir de 800€"],
      subDetails: [
        "Page d'accueil, catalogue de produits, pages de produits individuelles, panier, page de paiement.",
        "Inclut des fonctionnalités avancées telles que des options de filtrage, des avis clients, etc.",
      ],
    },
    {
      id: 5,
      title: "Site sur-mesure",
      price: "à partir de 900€*",
      details: ["5 pages — À partir de 600€", "10 pages — À partir de 900€"],
      subDetails: [
        "Conception personnalisée en fonction des besoins spécifiques du client.",
        "Inclut des fonctionnalités avancées et une conception hautement personnalisée.",
      ],
    },
    {
      id: 6,
      title: "Refonte totale",
      price: "à partir de 750€*",
      details: ["5 pages — À partir de 350€", "10 pages — À partir de 750€"],
      subDetails: [
        "Analyse complète de l'interface utilisateur et mise à jour du design.",
        "Inclut des améliorations significatives pour une expérience utilisateur optimisée.",
      ],
    },
    {
      id: 7,
      title: "Modifications",
      price: "à partir de 100€*",
      details: ["5 pages — À partir de 100€", "10 pages — À partir de 300€"],
      subDetails: [
        "Modifications spécifiques sur plusieurs pages existantes du site.",
        "Inclut des ajustements plus approfondis sur l'ensemble du site.",
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
        <div className="flex justify-center">
          <div className="flex flex-col justify-center pb-10 text-center">
            <div className="w-96">
              <NavLink
                to="/rateuk"
                className="text-C22E2E text-center font-extrabold underline"
              >
                See UK prices.
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-96 sm:w-1/2">
            {InformationsSitesWeb.map((info) => (
              <div
                className={`flex flex-col justify-center font-inter  ${
                  info.id % 2 === 0 ? Blue : Pink
                }`}
                key={info.id}
              >
                <div className="w-96 sm:w-full">
                  <div className="flex flex-wrap justify-between text-FFF6E4 p-10 text-3xl sm:text-4xl">
                    <div data-aos="fade-left" className="">
                      <RiBardLine className="inline" /> {info.title}
                    </div>
                    <div data-aos="fade-right" className="text-right">
                      {info.price}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start ml-10 mb-10">
                  <div className="text-FFF6E4">
                    <button
                      onClick={() => toggleSubList(info.title)}
                      className={`bg-FFF6E4 p-3 rounded-3xl shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
                        isDarkMode ? "text-0C3E78" : "text-FFF6E4 "
                      }`}
                    >
                      <div className="flex ml-1 number">
                        En savoir plus <IoIosArrowDown className="mt-2 ml-1" />
                      </div>
                    </button>
                    {openStates[info.title] && (
                      <ul className="mt-3 font-arial">
                        {info.details.map((detail, detailIndex) => (
                          <li
                            data-aos="fade-left"
                            data-aos-duration="500"
                            key={detailIndex}
                          >
                            <RiBardLine className="inline" /> {detail}
                          </li>
                        ))}
                        <div className="flex justify-start">
                          <ul className="text-FFF6E4  mt-3 mb-3 text-sm px-10 sm:text-left text-justify">
                            <p className="number mb-2 underline">
                              Informations détaillées :
                            </p>
                            {info.subDetails.map(
                              (subDetail, subDetailIndex) => (
                                <li
                                  data-aos="fade-right"
                                  data-aos-duration="600"
                                  className="list-disc"
                                  key={subDetailIndex}
                                >
                                  {subDetail}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <NavLink
                          to="/devis"
                          className="pt-5 font-extrabold number underline"
                        >
                          Demander un devis gratuit
                        </NavLink>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <div className="flex justify-center">
          <div className="w-96 sm:w-1/2">
            {InformationsMarketing.map((info, index) => (
              <div
                className={`flex flex-col justify-center font-inter ${
                  index % 2 === 0 ? Pink : Blue
                }`}
                key={index}
              >
                <div className="w-96 sm:w-full">
                  <div className="flex flex-wrap justify-between text-FFF6E4 p-10 text-3xl sm:text-4xl">
                    <div data-aos="fade-left" className="">
                      <RiBardLine className="inline" /> {info.title}
                    </div>
                    <div data-aos="fade-right" className="text-right">
                      {info.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div className="w-96 sm:w-full">
            <p className="text-center text-sm text-C22E2E px-6">
              *tarifs variables suivant les fonctionnalités désirées, pour plus
              d'informations demandez <span>un devis gratuit</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center pt-6 pb-20">
          {/* <NavLink
            to="/services"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            <RiBardLine className="inline" /> Découvrir Prestations ➔
          </NavLink>
          <NavLink
            to="/devis"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            <RiBardLine className="inline" /> Découvrir Devis Gratuit ➔
          </NavLink>
          <NavLink
            to="/"
            className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
          >
            <RiBardLine className="inline" /> Retourner à la page d'Accueil ➔
          </NavLink> */}
          <div className="flex justify-center mt-10 mb-10">
            <a onClick={scrollToTop}>
              <svg
                className="rounded-full shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
              >
                <g clip-path="url(#clip0_15_2)">
                  <path
                    d="M47.5 95C73.7335 95 95 73.7335 95 47.5C95 21.2665 73.7335 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95Z"
                    fill="#E18AB0"
                  />
                  <path
                    d="M49.8064 23.584C48.4393 22.2174 46.2233 22.2177 44.8566 23.5847L22.5859 45.8618C21.2192 47.2287 21.2195 49.4448 22.5866 50.8115C23.9536 52.1782 26.1697 52.1779 27.5363 50.8108L47.3325 31.009L67.1343 50.8052C68.5013 52.1719 70.7174 52.1716 72.084 50.8045C73.4507 49.4375 73.4504 47.2214 72.0833 45.8548L49.8064 23.584ZM50.8383 72.0588L50.8318 26.0588L43.8318 26.0598L43.8383 72.0598L50.8383 72.0588Z"
                    fill="#FFF6E4"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Rate;

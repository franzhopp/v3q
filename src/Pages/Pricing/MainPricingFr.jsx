import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import NavbarPages from "../../Components/Navigation/NavbarPages/NavbarPages.jsx";
import TitlePricing from "../../Components/UI/Title/TitlePricing.jsx";
import TitleWebsiteFr from "./Title/TitleWebsiteFr.jsx";
import TitleMarketing from "./Title/TitleMarketing.jsx";
import LinksUk from "./Links/LinksUk.jsx";
import SvgStar from "./Svg/SvgStar.jsx";
import ConditionFr from "./Title/ConditionFr.jsx";
import SvgReturnQuote from "./Svg/SvgReturnQuote.jsx";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton.jsx";
import Footer from "../../Components/Footer/MainFooter.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingFr = () => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [openStates, setOpenStates] = useState({});
  const toggleSubList = (category) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [category]: !prevOpenStates[category],
    }));
    setIsExpanded(!isExpanded);
  };
  const Blue = "bg-0c3e78";
  const e18ab0 = "bg-e18ab0";
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
    <section className={`bg-fff6e4`}>
      <NavbarPages />
      <TitlePricing />
      <TitleWebsiteFr />
      <div className={`flex justify-center`}>
        <div className={`flex flex-col justify-center pb-10 text-center`}>
          <div className={`w-96`}>
            <LinksUk />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center"
      >
        <div className={`w-96 lg:w-1/2`}>
          {InformationsSitesWeb.map((info) => (
            <div
              className={`flex flex-col justify-center font-inter shadow-md ${
                info.id % 2 === 0 ? Blue : e18ab0
              }`}
              key={info.id}
            >
              <div className={`w-96 lg:w-full`}>
                <div
                  className={`text-fff6e4 flex flex-wrap justify-between p-10 text-3xl lg:text-4xl`}
                >
                  <div data-aos="fade-left">{info.title}</div>
                  <div data-aos="fade-right">{info.price}</div>
                </div>
              </div>
              <div className={`flex justify-start ml-10 mb-10`}>
                <div className={`text-fff6e4`}>
                  <button
                    onClick={() => toggleSubList(info.title)}
                    className={`bg-fff6e4 p-3 rounded-3xl shadow-md cursor-pointer transform active:scale-75 transition-transform ${
                      isDarkMode ? "text-0c3e78" : "text-fff6e4"
                    }`}
                  >
                    <div className={`flex ml-1 number`}>
                      En savoir plus{" "}
                      {isExpanded ? (
                        <RxCross2 className={`mt-1 ml-1`} />
                      ) : (
                        <IoIosArrowDown className={`mt-1 ml-1`} />
                      )}
                    </div>
                  </button>
                  {openStates[info.title] && (
                    <ul className={`text-md font-arial mt-3`}>
                      {info.details.map((detail, detailIndex) => (
                        <li
                          data-aos="fade-left"
                          data-aos-duration="500"
                          key={detailIndex}
                        >
                          <RiBardLine className={`inline`} /> {detail}
                        </li>
                      ))}
                      <div className={`flex justify-start`}>
                        <ul
                          className={`text-fff6e4 text-md py-3 px-10 lg:text-left text-justify`}
                        >
                          <p className={`FontNumber mb-2`}>
                            Informations détaillées :
                          </p>
                          {info.subDetails.map((subDetail, subDetailIndex) => (
                            <li
                              data-aos="fade-right"
                              data-aos-duration="600"
                              className={`list-decimal`}
                              key={subDetailIndex}
                            >
                              {subDetail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <NavLink
                        to="/quote"
                        className={`text-md pt-5 font-extrabold FontNumber underline`}
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
      <BackToTopButton />
      <SvgStar />
      <TitleMarketing />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`flex justify-center`}
      >
        <div className={`w-96 lg:w-1/2`}>
          {InformationsMarketing.map((info, index) => (
            <div
              className={`flex flex-col justify-center font-inter shadow-md ${
                index % 2 === 0 ? e18ab0 : Blue
              }`}
              key={index}
            >
              <div className={`w-96 lg:w-full`}>
                <div
                  className={`text-fff6e4 flex flex-wrap justify-between p-10 text-3xl lg:text-4xl`}
                >
                  <div data-aos="fade-left">{info.title}</div>
                  <div data-aos="fade-right">{info.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConditionFr />
      <SvgReturnQuote />
      <Footer />
    </section>
  );
};

export default PricingFr;

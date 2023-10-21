import { useSpring, animated } from "react-spring";
import TitleAgency from "../UI/Title/TitleAgency";
import ImgText from "../../assets/logo-4.png";
import SectionTeam from "./SectionTeam";
import ButtonAgency from "../UI/Button/ButtonAgency";

const SectionAgency = () => {
  const props = useSpring({
    from: { color: "#C22E2E" },
    to: async (next) => {
      while (true) {
        await next({ color: "#0C3E78" });
        await next({ color: "#C22E2E" });
      }
    },
    config: { duration: 1000 },
  });
  const text = "numérique";
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
  return (
    <section className="bg-FFF6E4 h-1/2">
      <div>
        <TitleAgency className="mt-20" />
      </div>
      <div className="h-1/3">
        <div className="flex justify-center">
          <div className="w-4/5 sm:w-1/2">
            <h3
              data-aos="fade-right"
              className="text-center font-extrabold mt-28 text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Bienvenue chez{" "}
              <span>
                <img
                  src={ImgText}
                  className="h-12 sm:h-16 mr-1 inline"
                  alt="Icône navi studio."
                />
              </span>{" "}
              – Votre partenaire{" "}
              <animated.span style={props}>
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    data-aos={animationConfig[index].dataAos}
                    data-aos-delay={animationConfig[index].dataAosDelay}
                  >
                    {letter}
                  </span>
                ))}
              </animated.span>
              .
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5 sm:w-1/2">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="px-5 text-black text-arial text-center text-lg sm:text-2xl mt-10"
            >
              {`Cette agence a été créée par`}{" "}
              <span className="font-extrabold text-C22E2E">{"Mélissa"}</span>
              {" & "}
              <span className="font-extrabold text-C22E2E">Louisa</span>.{" "}
              <span className="text-black">
                {
                  "Nous avons décidé de collaborer pour créer des expériences exceptionnelles. Notre "
                }
                <span className="font-extrabold">{"Voyage"}</span> a débuté avec
                une vision commune :
                <span className="font-extrabold">
                  {" "}
                  celle de repousser les limites de la créativité et
                  l'intuitivité
                </span>
                .{" "}
                {` Notre vision repose sur la fusion de nos compétences et de notre expérience.`}
                <span className="font-extrabold">{" Design, "}</span>
                <span className="font-extrabold">Développement web</span> ou
                <span className="font-extrabold">{" Marketing Digital "}</span>
                {"sont notre art."}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ButtonAgency />
      <section className="bg-0C3E78 py-24 px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-16 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">04.</h1>
              <span className="font-extrabold">
                Qu'est-ce que{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-6 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                ? C'est une agence qui confectionne des sites internet.
              </span>
              {
                " Ils sont optimisés pour des performances exceptionnelles. La convivialité est au cœur de nos créations, nous trouvons la solution pour convertir les visiteurs en clients. Voir la page « Portfolio » afin de connaître toutes les réalisations."
              }
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">05.</h1>
              <span className="font-extrabold">
                Donnez vie à vos projets pour une expérience unique.
              </span>
              {
                " Nos créations offrent une navigation intuitive, un contenu engageant et des fonctionnalités, garantissant que chaque visiteur se sent connecté à votre marque. "
              }
              <span className="font-extrabold">
                Votre site est la représentation de votre marque et de votre
                production.
              </span>
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">06.</h1>
              <span className="font-extrabold">
                {`Votre site internet n'est pas seulement une dépense.`}
              </span>
              {` Il a un lien sur la conversion, nous créons des sites qui génèrent un retour. Obtenez plus de visites, plus de ventes et plus de croissance grâce à nos services. Vous ne serez pas déçus de choisir ceux-ci pour le déploiment de votre projet. Rendez-vous sur la page « Prestations ». `}
            </p>
          </div>
        </div>
      </section>
      <SectionTeam />
    </section>
  );
};

export default SectionAgency;

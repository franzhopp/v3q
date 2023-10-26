import { NavLink } from "react-router-dom";
import NavbarEthics from "../Navigation/EthicsNavbar/EthicsNavbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import ImgText from "../../assets/logo-5.png";
import Footer from "../Footer/Footer";

const EthicsPage = () => {
  return (
    <section className="bg-FFF6E4">
      <NavbarEthics />
      <div class="flex justify-center mt-10">
        <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-left"
              class="text-8xl number text-E18AB0 font-bold mb-2"
            >
              01.
            </h2>

            <p className="text-black text-xl font-extrabold mb-5">
              Engagement & Confiance
            </p>
            <div className="w-72">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black"
              >
                <span className="absolute h-72 w-1 bg-E18AB0 -left-20 bottom-10 hidden sm:block"></span>
                Nous prenons soin de nos collaborateurs et de notre entreprise,
                <span className="font-extrabold">
                  {" "}
                  en nous assurant de les faire grandir et de les développer sur
                  le long terme.
                </span>{" "}
                Nous nous consacrons à la réussite de nos collaborateurs et à
                faire de notre entreprise un endroit où il fait bon travailler.
                <span className="font-extrabold">
                  {" "}
                  L’éthique est au coeur de notre travail et est notre priorité.
                </span>
              </p>
            </div>
          </div>

          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-right"
              class="text-8xl number text-E18AB0 font-bold mb-2"
            >
              02.
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">
              Satisfaction client
            </p>

            <div className="w-72">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black"
              >
                Nous nous consacrons entièrement au succès et au développement à
                long terme de nos clients et collaborateurs,{" "}
                <span className="font-extrabold">
                  afin de leur fournir des résultats mesurables et de qualité
                </span>
                . Satisfaire nos clients et dépasser leurs attentes, est notre
                premier objectif.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-left"
              class="text-8xl number text-E18AB0 font-bold mb-2"
            >
              03.
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">Passion</p>
            <div className="w-72">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black"
              >
                Nous aimons ce que nous faisons et ce que nous représentons.
                Nous nous consacrons entièrement{" "}
                <span className="font-extrabold">
                  au succès de nos clients et de nos collaborateurs.{" "}
                </span>
                Nous déployons tous les efforts nécessaires pour améliorer nos
                performances.
                <span className="absolute h-72 w-1 bg-E18AB0 -right-20 bottom-10 hidden sm:block"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-20">
          <div className="px-10">
            <img src={ImgMac} alt="Image Ethics" className="rounded-lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center mt-20">
          <h1
            data-aos="fade-right"
            className="text-black font-extrabold text-2xl sm:text-4xl mb-10"
          >
            Environnement de travail
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-center"
              >
                Notre environnement de travail est{" "}
                <span className="font-extrabold">
                  une fusion créative où le design et le développement web se
                  rencontrent
                </span>
                . C'est un espace vibrant et inspirant où l'innovation prend
                vie, où les écrans brillent de projets en constante évolution,
                et où{" "}
                <span className="font-extrabold">
                  la collaboration est le moteur de notre succès
                </span>
                .
              </p>
              <div className="text-transparent mb-6"></div>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-center"
              >
                {/* <span className="absolute h-72 w-1 bg-C22E2E -left-20 bottom-10 hidden sm:block"></span> */}
                En somme, notre environnement de travail est bien plus qu'un
                lieu physique où nous accomplissons nos tâches. C'est un lieu où
                l'innovation,{" "}
                <span className="font-extrabold">
                  la passion et la collaboration se rencontrent pour donner vie
                  à des projets web extraordinaires
                </span>
                . Chez nous, chaque journée est une nouvelle opportunité de
                repousser les limites du design et du développement web, de
                créer{" "}
                <span className="font-extrabold">
                  des expériences mémorables pour nos clients et de se réaliser
                  professionnellement
                </span>
                .
                {/* <span className="absolute h-72 w-1 bg-C22E2E -right-20 bottom-10 hidden sm:block"></span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-28 mb-20">
        <svg
          className="animate-formbounce animate-formbounce"
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
        >
          <path
            d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
            fill="#E18AB0"
          />
        </svg>
      </div>
      <section className="bg-E18AB0 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mb-10 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -left-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">07.</h1>
              <span className="font-extrabold">Évolution perpétuelle.</span>
              {
                " L'industrie du design et du développement web est en constante évolution. Nous restons constamment à l'affût des dernières tendances, technologies et meilleures pratiques pour assurer que nos projets sont à la pointe de l'innovation. Nos réalisations sont revues."
              }
            </p>
          </div>
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">08.</h1>
              <span className="font-extrabold">Collaboration dynamique.</span>
              {
                " La collaboration est le moteur de notre succès. Nous croyons en l'importance de travailler main dans la main, tant en interne qu'avec nos clients. Nous encourageons l'échange constant d'expertise pour réaliser "
              }
              <span className="font-extrabold">
                des projets web extraordinaires
              </span>
              .
            </p>
          </div>

          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -right-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">09.</h1>
              <span className="font-extrabold">
                {`Créativité inépuisable.`}
              </span>
              {` Nous croyons en la puissance de la créativité. Elle est le carburant qui alimente notre studio. Chaque projet est une opportunité d'explorer de nouvelles idées, de repousser les limites du design et du développement web, et de créer des expériences mémorables.`}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-ethics-blur pt-28 pb-20">
        <div className="flex justify-center">
          <svg
            className="animate-formbounce"
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
              fill="#FFF6E4"
            />
          </svg>
        </div>
        <div className="text-center">
          <h1
            data-aos="fade-left"
            className="text-FFF6E4 font-extrabold text-2xl sm:text-4xl mb-10 mt-20"
          >
            <div className="flex justify-center">
              <p
                data-aos="fade-left"
                className="mt-4 sm:mt-3 text-3xl sm:text-4xl"
              >
                Faites confiance à{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-20 sm:h-24 mb-3 mr-1 mt-3 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                🙏{" "}
              </p>
            </div>
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-FFF6E4 text-center"
              >
                Nous sommes bien plus qu'un simple studio créatif.{" "}
                <span className="font-extrabold">
                  Nous sommes dévoués à faire de vos projets : une réussite.
                </span>{" "}
                Évolution perpétuelle, collaboration dynamique, créativité
                inépuisable sont la clé de nos secrets.{" "}
                <span className="font-extrabold">
                  Nous sommes votre source d'inspiration
                </span>
                .
              </p>
              <div className="text-transparent mb-6"></div>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-FFF6E4 text-center"
              >
                Nous comprenons que chaque projet est unique, c'est pourquoi
                nous nous engageons à apporter une approche sur mesure à chaque
                collaboration.{" "}
                <span className="font-extrabold">
                  Notre équipe dévouée travaille avec passion pour donner vie à
                  vos idées, en veillant à ce que chaque détail soit
                  parfaitement exécuté
                </span>
                . Votre réussite est notre plus grande fierté. Nous croyons en
                la puissance de la créativité et de la collaboration pour créer
                des expériences uniques et mémorables.{" "}
                <span className="font-extrabold">
                  Faites-nous confiance pour faire de votre vision une réalité.
                  Ensemble, nous pouvons atteindre de nouveaux sommets
                </span>
                .
              </p>
              <div className="flex flex-col mt-10">
                <NavLink
                  to="/services"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  Découvrir Prestations ➔
                </NavLink>
                <NavLink
                  to="/"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  Retourner à la page d'Accueil ➔
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28 pb-28">
          <svg
            className="animate-formbounce"
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
              fill="#E18AB0"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default EthicsPage;

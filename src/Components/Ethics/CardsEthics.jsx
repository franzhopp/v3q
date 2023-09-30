import NavbarEthics from "../Navigation/EthicsNavbar/EthicsNavbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import ImgLogo from "../../assets/logo-6.png";
import Footer from "../Footer/Footer";

const EthicsPage = () => {
  return (
    <>
      <NavbarEthics />

      <div class="flex justify-center mt-10">
        <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-down-left"
              class="text-7xl number text-E18AB0 font-bold mb-2"
            >
              01
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">
              Engagement & Confiance
            </p>
            <div className="w-72">
              <p className="text-black">
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
              class="text-7xl number text-E18AB0 font-bold mb-2"
            >
              02
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">
              Satisfaction client
            </p>

            <div className="w-72">
              <p className="text-black">
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
              data-aos="fade-down-right"
              class="text-7xl number text-E18AB0 font-bold mb-2"
            >
              03
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">Passion</p>
            <div className="w-72">
              <p className="text-black">
                Nous aimons ce que nous faisons et ce que nous représentons.
                Nous nous consacrons entièrement{" "}
                <span className="font-extrabold">
                  au succès de nos clients et de nos collaborateurs.{" "}
                </span>
                Nous déployons tous les efforts nécessaires pour améliorer nos
                performances.
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
            data-aos="fade-left"
            className="text-black font-extrabold text-2xl sm:text-4xl mb-10"
          >
            Environnement de travail
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
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
              <div className="text-transparent">Division invisible</div>
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-black text-center"
              >
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
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-28 mb-20">
        <svg
          className="button-design-formbounce animate-bounce-bounce"
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
          {/* Step 1 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">01</h1>
              <span className="font-extrabold">
                La performance rencontre la beauté.
              </span>
              {
                " Nos sites internet ne sont pas seulement esthétiquement plaisants, ils sont optimisés pour des performances exceptionnelles. Charge rapide, navigation fluide et convivialité mobile font de nos sites la solution idéale pour convertir les visiteurs en clients."
              }
            </p>
          </div>

          {/* Step 2 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">02</h1>
              <span className="font-extrabold">
                Donnez à vos clients une expérience en ligne mémorable.
              </span>
              {
                " Nos sites internet offrent une navigation intuitive, un contenu engageant et des fonctionnalités conviviales, garantissant que chaque visiteur se sent connecté à votre marque. "
              }
              <span className="font-extrabold">
                Créez des relations solides grâce à une présence en ligne
                exceptionnelle.
              </span>
            </p>
          </div>

          {/* Step 3 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">03</h1>
              <span className="font-extrabold">
                {`Un site internet n'est pas seulement une dépense.`}
              </span>
              {` Avec notre approche axée sur la conversion, nous créons des sites qui génèrent un retour sur investissement tangible. Obtenez plus de prospects, plus de ventes et plus de croissance grâce à notre expertise. Ceci n'est qu'un exemple de texte, car notre site est perpétuellement.`}
              {/* <span className="font-extrabold">
                      Corem ipsum dolor sit amet
                    </span> */}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-ethics-blur pt-28 pb-20">
        <div className="flex justify-center">
          <svg
            className="button-design-formbounce animate-bounce-bounce"
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
              <p className="mt-4 sm:mt-3 text-2xl sm:text-4xl">Faites confiance à navi studio.™</p>
              <span className="sm:px-0 px-1">
                {/* <img src={ImgLogo} alt="" className="h-20 w-full" /> */}
              </span>
            </div>
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-FFF6E4 text-center"
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
              <div className="text-transparent">Division invisible</div>
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-FFF6E4 text-center"
              >
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
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28 pb-28">
          <svg
            className="button-design-formbounce animate-bounce-bounce"
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
    </>
  );
};

export default EthicsPage;

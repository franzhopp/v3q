import ButtonAgency from "../UI/Button/button-agency";
import TitleAgency from "../UI/Button/title-agency";
import SectionTeam from "./section-team";

const SectionAgency = () => {
  return (
    <>
      <div id="contact">
        <section
          className="bg-FFF6E4 h-1/2"
          //id="contact"
        >
          <div>
            <TitleAgency className="mt-20" />
          </div>

          <div className="h-1/3">
            <div className="flex justify-center">
              <div className="w-4/5 sm:w-1/2">
                <h3
                  data-aos="fade-right"
                  className="text-center font-extrabold mt-20 text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  Bienvenue chez navi studio.™ – Votre partenaire numérique.
                </h3>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-4/5 sm:w-1/2">
                <p className="px-5 text-black text-arial text-justify sm:text-center text-lg sm:text-2xl mt-10">
                  {`Nous sommes bien plus qu'une simple agence digitale. Nous
                  sommes des `}
                  <span className="font-extrabold">
                    {"architectes de l'expérience numérique"}
                  </span>
                  {" et les "}
                  <span className="font-extrabold">artisans du web.</span>
                  <br />
                  <span className="text-black">
                    {"Si vous recherchez une équipe"}
                    <span className="font-extrabold">{" passionnée"}</span> et
                    <span className="font-extrabold"> compétente</span>{" "}
                    {` pour vous
                    accompagner dans le domaine du`}
                    <span className="font-extrabold">{" Design, "}</span>
                    <span className="font-extrabold">Développement web</span> ou
                    <span className="font-extrabold">
                      {" Marketing Digital "}
                    </span>
                    {"ne cherchez pas plus loin."}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <ButtonAgency />

          <section className="bg-0C3E78 py-24 px-4 sm:px-6 lg:px-8">
            <div className="mt-8 mb-10 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
              {/* Step 1 */}
              <div className="min-h-500 w-80 rounded-lg mt-5">
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1000"
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
                  data-aos-duration="1000"
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
                  data-aos-duration="1000"
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

          <SectionTeam />
        </section>
      </div>
    </>
  );
};

export default SectionAgency;

const SectionDuplicate = () => {
  return (
    <>
      <div className="bg-C22E2E h-1/2">
        <div className="border-beige">
          <section className="max-w-6xl mx-auto py-60 px-4 sm:px-6 lg:px-8">
            <h3
              className="text-left ml-8 font-extrabold text-3xl text-FFF6E4"
              data-aos="fade-right"
            >
              Découvrez des offres adaptées à vos besoins
            </h3>
            <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
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
        </div>
      </div>
    </>
  );
};

export default SectionDuplicate;

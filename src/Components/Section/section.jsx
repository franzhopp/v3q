import ButtonContact from "../UI/Button/button-contact";

const Section = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          {/* Step 1 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-left"
              className="mt-2 font-extrabold text-black text-4xl"
            >
              Confiez votre image à des professionnels
            </p>
          </div>

          {/* Step 2 */}
          <div className="min-h-500 w-96 rounded-lg mt-5">
            <div className="p-6">
              <p className="mt-2 text-center text-black">
                <span className="font-extrabold">
                  {`Découvrez l'avenir en ligne de votre entreprise avec nos sites internet sur mesure.`}
                </span>{" "}
                {`Du design moderne à la fonctionnalité intuitive, nous créons des plateformes`}
                <span className="font-extrabold">{` qui captivent les visiteurs et génèrent des conversions`}</span>
                . Augmentez votre présence en ligne dès aujourd'hui !
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="min-h-500 w-96 rounded-lg mt-5">
            <div className="p-6">
              <p className="mt-2 font-extrabold text-right text-black">
                {`Votre site internet, votre vision. Chez nous, chaque site est conçu avec votre marque à l'esprit. Notre équipe experte en conception web crée des expériences unique  reflètent votre identité et vos objectifs. Obtenez un sit  se démarque dans un monde en ligne saturé.`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ButtonContact />
    </>
  );
};

export default Section;

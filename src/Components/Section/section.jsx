import ButtonContact from "../UI/Button/button-contact";

const Section = () => {
  return (
    <>
      <div className="border-red">
        <section
          id="about"
          className="max-w-6xl mx-auto py-40 px-4 sm:px-6 lg:px-8"
        >
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
            <div className="min-h-500 w-80 rounded-lg mt-5">
              <div className="p-6">
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mt-2 text-base text-black text-arial"
                >
                  <span className="font-extrabold">
                    {`Découvrez l'avenir en ligne de votre entreprise avec nos sites internet sur mesure.`}
                  </span>{" "}
                  {`Du design moderne à la fonctionnalité intuitive, nous créons des plateformes qui captivent les visiteurs et génèrent des conversions. Augmentez votre présence en ligne dès aujourd'hui !`}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="min-h-500 w-80 rounded-lg mt-5">
              <div className="p-6">
                <p
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mt-2 font-extrabold text-base text-black text-arial"
                >
                  {`Votre site internet, votre vision. Chez nous, chaque site est conçu avec votre marque à l'esprit. Notre équipe experte en conception web crée des expériences uniques qui reflètent votre identité et vos objectifs. Obtenez un site qui se démarque dans un monde en ligne saturé.`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <ButtonContact />
      </div>
    </>
  );
};

export default Section;

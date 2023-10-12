import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionDuplicate = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="bg-C22E2E h-1/2">
      <div className="pt-32 pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="text-left ml-5 sm:ml-10 font-extrabold text-3xl text-FFF6E4"
          data-aos="fade-right"
        >
          Découvrez des offres adaptées à vos besoins
        </h3>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="w-80 mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">01.</h1>
              <span className="font-extrabold">Efficacité.</span> Nos sites
              internet ne sont pas seulement esthétiquement plaisants, ils sont
              élaborés et travaillés sur-mesure pour répondre à vos besoins.
              Nous nous inspirons de vous et votre histoire,{" "}
              <span className="font-extrabold">
                chaque histoire est différente et chaque site l'est aussi !
              </span>{" "}
              Cet aspect unique et pratique font de nos réalisations digitales :{" "}
              <span className="font-extrabold">la solution</span>.
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">02.</h1>
              <span className="font-extrabold">
                Expérience utilisateur.
              </span>{" "}
              Nos sites internet sont dotés d'une navigation fluide, de contenus
              uniques & personnalisés.{" "}
              <span className="font-extrabold">
                Notre approche est axée sur la qualité de l'expérience que les
                utilisateurs auront en naviguant à travers votre site
              </span>
              , cela vous permet de bâtir des relations solides, de transmettre
              votre message avec{" "}
              <span className="font-extrabold">efficacité</span>.
            </p>
          </div>
          <div className="w-80 mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">03.</h1>
              <span className="font-extrabold">Qualité.</span> Nous nous
              engageons à fournir un travail de qualité. Ce que nous créons, est
              une interface en harmonie avec votre image de votre marque.{" "}
              <span className="font-extrabold">
                Soyez connectés à celle-ci, car cela nous permet de mieux
                comprendre vos besoins.
              </span>{" "}
              Préparez ce qui vous semble nécessaire pour votre site, pour le
              reste ? On s'occupe de tout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDuplicate;

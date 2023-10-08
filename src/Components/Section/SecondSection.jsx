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
          <div className="w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">01</h1>
              <span className="font-extrabold">
                Nous visons la performance.
              </span>{" "}
              Nos sites internet ne sont esthétiquement pas plaisants, ils sont
              élaborés pour une identité visuelle qui contribue à votre
              perception. Nous nous inspirons de vous et votre histoire,{" "}
              <span className="font-extrabold">
                chaque histoire est différente de chaque site
              </span>
              . Chaque navigation font de nos sites :{" "}
              <span className="font-extrabold">la solution</span>.
            </p>
          </div>

          {/* Step 2 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">02</h1>
              <span className="font-extrabold">
                Nous visons une expérience en ligne mémorable.
              </span>{" "}
              Nos sites internet sont créés avec une navigation fluide, des
              contenus liés à vous, une identité visuelle qui vous est propre.{" "}
              <span className="font-extrabold">
                Notre approche est axée sur le fait que votre site puisse se
                démarquer,
              </span>{" "}
              créer des relations solides grâce à une présence,{" "}
              <span className="font-extrabold">en ligne exceptionnelle</span>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="200"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">03</h1>
              <span className="font-extrabold">Nous visons la qualité.</span> Ce
              que nous créons, est une interface en harmonie avec la qualité de
              votre marque.{" "}
              <span className="font-extrabold">
                Il est essentiel que vous soyez connectés à celle-ci, car cela
                nous permet de mieux comprendre vos besoins
              </span>
              . Préparez ce qui vous semble nécessaire pour votre site, pour le
              reste ?{" "}
              <span className="font-extrabold">On s'occupe de tout</span> !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDuplicate;

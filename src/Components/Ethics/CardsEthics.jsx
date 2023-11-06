import { useLanguage } from "../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import translations from "./translate.jsx";
import NavbarEthics from "../Navigation/EthicsNavbar/EthicsNavbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import ImgText from "../../assets/logo-5.png";
import Footer from "../Footer/Footer";
import ButtonServices from "../UI/Button/ButtonServices.jsx";

const EthicsPage = () => {
  const { language } = useLanguage();
  const props = useSpring({
    from: { color: "#FFF6E4" },
    to: async (next) => {
      while (true) {
        await next({ color: "#4457BE" });
        await next({ color: "#E18AB0" });
      }
    },
    config: { duration: 1000 },
  });
  return (
    <section className="bg-FFF6E4">
      <NavbarEthics />
      <div className="test3">
        <div class="flex justify-center mt-10">
          <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
            <div class="p-6 rounded-lg shadow-md">
              <h2
                data-aos="fade-left"
                class="text-8xl number text-E18AB0 font-bold mb-2"
              >
                01.
              </h2>

              <p className="text-black text-xl font-inter font-extrabold mb-5">
                {translations[language].title1EthicsFr}
                {translations[language].title1EthicsEn}
              </p>
              <div className="w-72">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black"
                >
                  <span className="absolute h-72 w-1 bg-E18AB0 -left-20 bottom-10 hidden sm:block"></span>
                  {translations[language].describe1EthicsFr}
                  {translations[language].describe1EthicsEn}
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].describe1BoldEthicsFr}
                    {translations[language].describe1BoldEthicsEn}
                  </span>{" "}
                  {translations[language].describeWithoutBold1Fr}
                  {translations[language].describeWithoutBold1En}
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].describe1Bold1Fr}
                    {translations[language].describe1Bold1En}
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
              <p className="text-black text-xl font-inter font-extrabold mb-5">
                {translations[language].title2EthicsFr}
                {translations[language].title2EthicsEn}
              </p>

              <div className="w-72">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black"
                >
                  {translations[language].describe2EthicsFr}
                  {translations[language].describe2EthicsEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe2BoldEthicsFr}
                    {translations[language].describe2BoldEthicsEn}{" "}
                  </span>
                  {translations[language].describeWithoutBold2Fr}
                  {translations[language].describeWithoutBold2En}
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
              <p className="text-black text-xl font-inter font-extrabold mb-5">
                Passion
              </p>
              <div className="w-72">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black"
                >
                  {translations[language].describe3EthicsFr}
                  {translations[language].describe3EthicsEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe3BoldEthicsFr}
                    {translations[language].describe3BoldEthicsEn}{" "}
                  </span>
                  {translations[language].describe3Bold1Fr}
                  {translations[language].describe3Bold1En}
                  {translations[language].describeWithoutBold3Fr}
                  {translations[language].describeWithoutBold3En}
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
          <div className="text-center mt-10">
            <animated.h1
              style={props}
              data-aos="fade-right"
              className="text-black font-extrabold font-inter text-2xl sm:text-4xl mb-10"
            >
              {" "}
              {translations[language].titleWorkEthicsFr}
              {translations[language].titleWorkEthicsEn}
            </animated.h1>
            <div className="flex justify-center px-3">
              <div className="rounded-lg shadow-md w-full sm:w-1/3 sm:px-0 px-3">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black text-center p-5 mt-10"
                >
                  {translations[language].describe4EthicsWorkFr}
                  {translations[language].describe4EthicsWorkEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe4BoldEthicsWorkFr}
                    {translations[language].describe4BoldEthicsWorkEn}{" "}
                  </span>
                  {translations[language].describeWithoutBold4Fr}
                  {translations[language].describeWithoutBold4En}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe4Bold4Fr}
                    {translations[language].describe4Bold4En}
                  </span>
                </p>
                <div className="text-transparent mb-6"></div>
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black text-center p-5 mb-10"
                >
                  {translations[language].describe5EthicsWorkFr}
                  {translations[language].describe5EthicsWorkEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe5BoldEthicsWorkFr}
                    {translations[language].describe5BoldEthicsWorkEn}{" "}
                  </span>
                  {translations[language].describeWithoutBold5Fr}
                  {translations[language].describeWithoutBold5En}{" "}
                  <span className="font-extrabold">
                    {translations[language].describe5Bold5Fr}
                    {translations[language].describe5Bold5En}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 pb-5">
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
        <div className="flex justify-center sm:justify-end relative right-24 top-20 sm:right-96">
          <svg
            // onClick={SectionToSectionContactServices}
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="137"
            viewBox="0 0 86 137"
            fill="none"
          >
            <rect width="86" height="137" rx="43" fill="#4457BE" />
            <path
              d="M47 28C47 25.7909 45.2091 24 43 24C40.7909 24 39 25.7909 39 28L47 28ZM40.1716 110.828C41.7337 112.391 44.2663 112.391 45.8284 110.828L71.2843 85.3726C72.8464 83.8105 72.8464 81.2778 71.2843 79.7157C69.7222 78.1536 67.1895 78.1536 65.6274 79.7157L43 102.343L20.3726 79.7157C18.8105 78.1536 16.2778 78.1536 14.7157 79.7157C13.1536 81.2778 13.1536 83.8105 14.7157 85.3726L40.1716 110.828ZM39 28L39 108L47 108L47 28L39 28Z"
              fill="#FFF6E4"
            />
          </svg>
        </div>
      </div>
      <section className="bg-E18AB0 py-24 px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-10 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <span className="absolute h-full w-1 bg-FFF6E4 -left-14 -top-1 hidden sm:block"></span>
              <h1 className="text-4xl number font-semibold pb-5">07.</h1>
              <span className="font-extrabold">
                {translations[language].titleDetailsEthics1Fr}
                {translations[language].titleDetailsEthics1En}{" "}
              </span>
              {translations[language].describeDetailsEthics1Fr}
              {translations[language].describeDetailsEthics1En}
            </p>
          </div>
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">08.</h1>
              <span className="font-extrabold">
                {translations[language].titleDetailsEthics2Fr}
                {translations[language].titleDetailsEthics2En}{" "}
              </span>
              {translations[language].describeDetailsEthics2Fr}
              {translations[language].describeDetailsEthics2En}
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
                {translations[language].titleDetailsEthics3Fr}
                {translations[language].titleDetailsEthics3En}{" "}
              </span>
              {translations[language].describeDetailsEthics3Fr}
              {translations[language].describeDetailsEthics3En}
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
                className="px-10 font-inter mt-4 sm:mt-3 text-3xl sm:text-4xl"
              >
                {translations[language].titleTrust1Fr}
                {translations[language].titleTrust1En}{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-20 sm:h-24 mb-3 mr-1 mt-3 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                {translations[language].titleTrust2En} 🙏{" "}
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
                nous nous engageons à apporter une approche sur-mesure à chaque
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
                  {translations[language].linkServicesFr}
                  {translations[language].linkServicesEn}
                </NavLink>
                <NavLink
                  to="/rate"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  {translations[language].linkRateFr}
                  {translations[language].linkRateEn}
                </NavLink>
                <NavLink
                  to="/"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  {translations[language].linkHomeFr}
                  {translations[language].linkHomeEn}
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

import ButtonContactServices from "../../UI/Button/button-contact-services";
import ButtonDevis from "../../UI/Button/button-devis";
import Artwork from "../../../assets/artworkheart.png";
import ButtonSend from "../../UI/Button/button-send";
import DetailsMarketingServices from "./d-m-services.jsx";
import ButtonServices from "../../UI/Button/button-services";

const DetailsServices = () => {
  return (
    <>
      <ButtonServices />
      <div className="bg-0C3E78 py-20 px-4 sm:px-6 lg:px-8">
        <h3
          className="text-center font-extrabold text-3xl text-FFF6E4 px-5"
          data-aos="fade-right"
        >
          Des offres adaptées à vos besoins
        </h3>
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 px-5"
            >
              Nous mettons notre expertise à votre service, grâce à notre
              diagnostic personnalisé. Découvrez des solutions sur mesure
              adaptées à votre business & situation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="min-h-500 w-80 mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 px-5"
            >
              Vous disposez d’un suivi de production complet, notre équipe reste
              disponible et à votre écoute 24/7. Nous travaillons main dans la
              main avec nos clients.
            </p>
          </div>

          {/* Step 3 */}
          <div className="min-h-500 w-80 mt-5">
            <p
              data-aos="zoom-in"
              data-aos-duration="300"
              className="mt-2 text-FFF6E4 px-5"
            >
              Obtenez un devis gratuit dès maintenant et commencez votre
              aventure dans le monde du digital à nos côtés !
            </p>
          </div>
        </div>
        <ButtonDevis />
        {/* <DetailsMarketingServices /> */}
      </div>
      <div className="image-navi-studio-service">
        <h1 className="text-center text-FFF6E4 text-4xl sm:text-5xl font-extrabold pt-10">
          Marketing digital
        </h1>
        <div className="mt-10 sm:mt-20">
          <div className="flex flex-wrap justify-center">
            {/* Texts */}
            <div className="font-extrabold text-FFF6E4 text-left mr-20">
              <p className="text-2xl mb-10 font-extrabold text-FFF6E4">
                <div className="w-44">Stratégie de marque</div>
              </p>
              <div className="w-60">
                <p className="text-base mb-10 text-FFF6E4">
                  Bénéficiez d’une analyse complète de votre marque et d’une
                  stratégie digitale adaptée au marché actuel. Profitez d’un
                  Benchmark complet et d’une analyse secteur.
                </p>
              </div>
            </div>
            <div className="font-extrabold text-FFF6E4 text-left mr-20">
              <p className="text-2xl mb-10 font-extrabold text-FFF6E4">
                <div className="w-44">Social Media & Référencement</div>
              </p>
              <div className="w-60">
                <p className="text-base text-FFF6E4">
                  Du SEO en passant par le Social Media Marketing profitez de
                  nos services complémentaires. Boostez votre présence en ligne
                  & générez des conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-center mt-10">
          <svg
            width="108"
            height="181"
            viewBox="0 0 108 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2518 111.2C15.0251 111.2 12.8251 109.293 11.6518 105.48C10.4785 102.987 9.8918 98.0733 9.8918 90.74C9.8918 87.8067 9.96513 85.6067 10.1118 84.14V78.42C10.1118 72.8467 11.9451 68.8133 15.6118 66.32C17.2251 64.8533 19.2051 63.68 21.5518 62.8C28.8851 59.5733 33.6518 57.3 35.8518 55.98C38.3451 54.5133 40.9118 52.68 43.5518 50.48C45.1651 49.16 46.4118 47.9133 47.2918 46.74C48.7585 45.5667 49.4918 44.2467 49.4918 42.78C49.4918 39.9933 48.2451 38.2333 45.7518 37.5C42.2318 36.3267 36.3651 35.74 28.1518 35.74C19.4985 35.74 11.2118 36.7667 3.2918 38.82L2.8518 39.04C1.5318 39.04 0.871797 37.7933 0.871797 35.3C0.871797 33.3933 0.945131 31.9267 1.0918 30.9C1.23846 30.1667 1.38513 29.4333 1.5318 28.7C1.67846 27.9667 1.7518 27.2333 1.7518 26.5C1.7518 20.4867 1.9718 15.8667 2.4118 12.64C2.99846 8.09333 3.36513 5.52666 3.5118 4.93999C3.9518 3.47332 4.53846 2.51999 5.2718 2.07999C6.00513 1.63999 7.0318 1.42 8.3518 1.42C19.4985 0.833327 27.7118 0.539993 32.9918 0.539993C47.6585 0.539993 59.9785 1.63999 69.9518 3.83999C81.5385 6.18666 90.4118 10.44 96.5718 16.6C103.758 23.0533 107.352 32 107.352 43.44C107.352 46.96 106.545 50.1867 104.932 53.12C103.318 56.0533 101.045 58.9867 98.1118 61.92C95.1785 64.7067 90.1918 68.1533 83.1518 72.26C82.2718 72.9933 80.8051 73.9467 78.7518 75.12C69.8051 79.96 63.5718 83.9933 60.0518 87.22V90.52C60.1985 91.9867 60.2718 94.1133 60.2718 96.9C60.4185 99.2467 60.4918 102.693 60.4918 107.24C60.4918 109.88 59.6851 111.2 58.0718 111.2H54.7718L48.6118 110.98C47.1451 110.687 45.2385 110.54 42.8918 110.54C41.4251 110.54 40.5451 110.76 40.2518 111.2H18.2518ZM16.7118 180.06C13.0451 180.06 10.9918 178.96 10.5518 176.76C10.2585 173.827 9.96513 166.42 9.6718 154.54C9.6718 153.22 9.59846 149.993 9.4518 144.86C9.30513 139.58 8.93846 135.62 8.3518 132.98L9.6718 131.44L16.7118 129.9H29.6918C31.1585 129.9 32.5518 129.68 33.8718 129.24H37.3918H42.6718L44.2118 129.9C45.0918 129.46 45.7518 129.24 46.1918 129.24C46.6318 129.387 47.0718 129.46 47.5118 129.46C48.0985 129.313 48.4651 129.24 48.6118 129.24C49.0518 129.68 49.5651 129.9 50.1518 129.9C50.8851 129.9 51.3251 129.973 51.4718 130.12L56.7518 130.78L58.2918 131.22C58.7318 131.22 58.9518 131.147 58.9518 131H60.0518C62.8385 132.027 64.5251 132.76 65.1118 133.2C65.8451 133.933 66.2118 135.327 66.2118 137.38C67.2385 138.407 67.8985 141.853 68.1918 147.72C68.3385 150.8 68.4118 154.907 68.4118 160.04C68.8518 164 69.0718 166.64 69.0718 167.96C69.0718 168.693 68.9985 169.207 68.8518 169.5V170.6V171.92C68.5585 172.36 68.4118 172.947 68.4118 173.68V175C68.4118 175.733 68.5585 176.32 68.8518 176.76V176.98V177.42C68.8518 178.447 68.4118 179.107 67.5318 179.4C66.6518 179.84 65.2585 180.06 63.3518 180.06C61.2985 180.06 59.8318 179.913 58.9518 179.62H54.5518H53.4518H50.8118C50.3718 179.913 49.5651 180.06 48.3918 180.06H45.9718C41.4251 180.06 38.1985 179.913 36.2918 179.62L28.3718 179.4L22.8718 179.62C21.9918 179.913 19.9385 180.06 16.7118 180.06Z"
              fill="#E18AB0"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <div className="w-96 sm:w-1/2 mt-10">
            <p className="text-black text-center text-2xl font-extrabold px-5">
              Des questions ? Une demande ? N’hésitez pas à nous contacter
              directement, notre équipe saura vous aiguiller répondre a toutes
              vos questions.
            </p>
          </div>
        </div>
        <ButtonContactServices />
        <img src={Artwork} alt="Artwork Heart" className="mt-10" />
      </div>
    </>
  );
};

export default DetailsServices;

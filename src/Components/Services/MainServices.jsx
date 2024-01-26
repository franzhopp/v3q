import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import SvgSettings from "./Svg/SvgSettings.jsx";
import NavbarServices from "../Navigation/ServicesNavbar/ServicesNavbar";
import DetailsServices from "./AllServices/DetailsServices";
import ImgService1 from "../../assets/home1.png";
import ImgService2 from "../../assets/home2.png";
import ImgService3 from "../../assets/home3.png";
import ImgService4 from "../../assets/home4.png";
import Footer from "../Footer/Footer";
import ButtonServices from "../UI/Button/ButtonServices";
import ButtonDevis from "../UI/Button/ButtonFormDevis";

const Services = () => {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();
  const text = "Websites";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    { dataAos: "fade-left", dataAosDelay: 400 },
    { dataAos: "fade-left", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 100 },
    { dataAos: "fade-right", dataAosDelay: 200 },
    { dataAos: "fade-right", dataAosDelay: 300 },
    { dataAos: "fade-right", dataAosDelay: 400 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-right", dataAosDelay: 500 },
    { dataAos: "fade-left", dataAosDelay: 600 },
  ];
  return (
    <>
      <NavbarServices />
      <section className="bg-FFF6E4">
        <h1
          data-aos="fade-right"
          className="text-C22E2E font-inter text-center text-4xl pt-20 pb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              data-aos={animationConfig[index].dataAos}
              data-aos-delay={animationConfig[index].dataAosDelay}
            >
              {letter}
            </span>
          ))}
          <div className="flex justify-center">
            <span className="absolute w-32 h-1 bg-C22E2E"></span>
          </div>
        </h1>
        <div
          className={`flex justify-center ${
            isDarkMode ? "text-black" : " text-FFF6E4"
          }`}
        >
          <div className="w-96 px-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className={`text-center`}
            >
              {translations[language].describeServices1Fr}
              {translations[language].describeServices1En}{" "}
              <span className="font-extrabold">
                {translations[language].describeServicesBold1Fr}
                {translations[language].describeServicesBold1En}
              </span>{" "}
              {translations[language].wordServicesFr}{" "}
              <span className="font-extrabold">
                {translations[language].describeServices2Fr}
                {translations[language].describeServices2En}
              </span>
              .
            </p>
          </div>
        </div>

        <div class="flex justify-center mt-10">
          <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
            <div
              data-aos="fade-left"
              data-aos-duration="300"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                {translations[language].title1ServicesFr}
                {translations[language].title1ServicesEn}
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  {translations[language].blocd1ServicesFr}
                  {translations[language].blocd1ServicesEn}{" "}
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].blocd1BoldServicesFr}
                    {translations[language].blocd1BoldServicesEn}
                  </span>{" "}
                  {translations[language].blocd3ServicesFr}
                  {translations[language].blocd3ServicesEn}
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService1} alt="Icône Services" className="" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="300"
              class="bg-cards p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                {translations[language].title2ServicesFr}
                {translations[language].title2ServicesEn}
              </p>
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  {translations[language].bloc4ServicesFr}
                  {translations[language].bloc4ServicesEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].bloc5BoldServicesFr}
                    {translations[language].bloc5BoldServicesEn}
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService2} alt="Icône Services" className="" />
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="300"
              class="bg-cards-2 p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                Landing page
              </p>
              <div className="w-64">
                {" "}
                <p className="text-FFF6E4 text-center">
                  {translations[language].bloc6ServicesFr}
                  {translations[language].bloc6ServicesEn}{" "}
                  <span className="font-extrabold">
                    {translations[language].bloc6BoldServicesFr}
                    {translations[language].bloc6BoldServicesEn}
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService3} alt="Icône Services" className="" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              class="bg-C22E2E p-6 rounded-2xl shadow-2xl mb-5"
            >
              <p className="text-FFF6E4 text-center text-xl font-extrabold mb-5">
                {translations[language].title3ServicesFr}
                {translations[language].title3ServicesEn}
              </p>{" "}
              <div className="w-64">
                <p className="text-FFF6E4 text-center">
                  {translations[language].bloc7BoldServicesFr}
                  {translations[language].bloc7BoldServicesEn}
                  <span className="font-extrabold">
                    {" "}
                    {translations[language].bloc7ServicesFr}
                    {translations[language].bloc7ServicesEn}
                  </span>
                </p>
              </div>
              <div className="flex justify-center mt-10">
                <img src={ImgService4} alt="Icône Services" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-16">
          <SvgSettings />
        </div>
        <div
          className={`flex justify-center pt-16 ${
            isDarkMode ? "text-black" : " text-FFF6E4"
          }`}
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="w-96 xl:w-1/3 px-5"
          >
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className={`text-center text-2xl font-extrabold`}
            >
              {translations[language].textServices1Fr}
              {translations[language].textServices1En}
            </p>
          </div>
        </div>
        <ButtonServices />
        <div className="bg-0C3E78 pt-28 pb-28 px-4 sm:px-6 lg:px-8">
          <h3
            className="text-center font-extrabold text-3xl text-FFF6E4 px-5"
            data-aos="fade-left"
          >
            {translations[language].titleServices3Fr}
            {translations[language].titleServices3En}
          </h3>
          <div className="flex justify-center">
            <span className="absolute w-32 h-1 line"></span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
            <div className="min-h-500 w-80 rounded-lg mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                <RiBardLine className="inline" />{" "}
                {translations[language].bloc1ServicesFr}
                {translations[language].bloc1ServicesEn}
              </p>
            </div>
            <div className="min-h-500 w-80 mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                <RiBardLine className="inline" />{" "}
                {translations[language].bloc2ServicesFr}
                {translations[language].bloc2ServicesEn}
              </p>
            </div>
            <div className="min-h-500 w-80 mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                <RiBardLine className="inline" />{" "}
                {translations[language].bloc3ServicesFr}
                {translations[language].bloc3ServicesEn}
              </p>
            </div>
          </div>
          <ButtonDevis />
        </div>
        <DetailsServices />
      </section>
      <Footer />
    </>
  );
};

export default Services;

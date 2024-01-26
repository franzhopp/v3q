import { useTheme } from "../../context/ThemeProvider";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { RiBardLine } from "react-icons/ri";
import translations from "./translate.jsx";
import SvgFontRight from "./Svg/SvgFontRight";
import SvgFontLeft from "./Svg/SvgFontLeft";
import NavbarEthics from "../Navigation/EthicsNavbar/EthicsNavbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import ImgText from "../../assets/logo-5.png";
import Footer from "../Footer/Footer";

const EthicsPage = () => {
  const { isDarkMode } = useTheme();
  const [scrollSection, setScrollSection] = useState();
  const { language } = useLanguage();
  const text = "01.";
  const letters = text.split("");
  const animationConfig = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  const text2 = "02.";
  const letters2 = text2.split("");
  const animationConfig2 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  const text3 = "03.";
  const letters3 = text3.split("");
  const animationConfig3 = [
    { dataAos: "fade-left", dataAosDelay: 100 },
    { dataAos: "fade-left", dataAosDelay: 200 },
    { dataAos: "fade-left", dataAosDelay: 300 },
    ,
  ];
  const ScrollToSectionEthics = () => {
    const sectionToScrollEthics = document.getElementById("ethics");
    if (sectionToScrollEthics) {
      sectionToScrollEthics.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollSection(true);
      } else {
        setScrollSection(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="bg-FFF6E4">
      <NavbarEthics />

      <div class="flex justify-center mt-10">
        <div
          class={`mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6 ${
            isDarkMode ? "text-black" : "text-FFF6E4"
          }`}
        >
          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-left"
              class="text-8xl number text-E18AB0 font-bold mb-2"
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
            </h2>
            <p className="text-xl font-inter font-extrabold">
              <RiBardLine className="inline" />{" "}
              {translations[language].title1EthicsFr}
              {translations[language].title1EthicsEn}
            </p>
            <span className="absolute w-48 h-1 bg-E18AB0"></span>
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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
              {letters2.map((letter, index) => (
                <span
                  key={index}
                  data-aos={animationConfig2[index].dataAos}
                  data-aos-delay={animationConfig2[index].dataAosDelay}
                >
                  {letter}
                </span>
              ))}
            </h2>
            <p className="text-xl font-inter font-extrabold">
              <RiBardLine className="inline" />{" "}
              {translations[language].title2EthicsFr}
              {translations[language].title2EthicsEn}
            </p>
            <span className="absolute w-48 h-1 bg-E18AB0"></span>
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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
              {letters3.map((letter, index) => (
                <span
                  key={index}
                  data-aos={animationConfig3[index].dataAos}
                  data-aos-delay={animationConfig3[index].dataAosDelay}
                >
                  {letter}
                </span>
              ))}
            </h2>
            <p className=" text-xl font-inter font-extrabold">
              <RiBardLine className="inline" /> Passion & Motivation
            </p>
            <span className="absolute w-48 h-1 bg-E18AB0"></span>
            <div className="w-72 mt-5">
              <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
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
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-16">
          <div className="flex justify-end mt-16">
            <SvgFontRight />
          </div>
          <div className="px-10">
            <img src={ImgMac} alt="Image Ethics" className="rounded-lg" />
          </div>
          <SvgFontLeft />
        </div>
      </div>
      <div
        className={`flex justify-center ${
          isDarkMode ? "text-black" : "text-FFF6E4"
        }`}
      >
        <div className="text-center mt-5">
          <h1
            data-aos="fade-right"
            className="font-extrabold font-inter text-2xl sm:text-4xl"
          >
            {" "}
            {translations[language].titleWorkEthicsFr}
            {translations[language].titleWorkEthicsEn}{" "}
          </h1>
          <div className="flex justify-center">
            <span className="absolute w-48 h-1 bg-E18AB0"></span>
          </div>
          <div className="flex justify-center px-3 pt-6">
            <div className="rounded-lg shadow-md w-96 sm:w-1/3 sm:px-0 px-3">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className=" text-center p-5 mt-10"
              >
                <RiBardLine className="inline" />{" "}
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
                className="text-center p-5 mb-10"
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
      <div className="flex justify-center pt-16">
        <svg
          className="animate-formbounce"
          width="70"
          height="70"
          viewBox="0 0 192 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.5 0L54.9987 28.0013L83 41.5L54.9987 54.9987L41.5 83L28.0013 54.9987L0 41.5L28.0013 28.0013L41.5 0Z"
            fill="#E18AB0"
          />
          <path
            d="M116.5 42L141.058 92.9422L192 117.5L141.058 142.058L116.5 193L91.9422 142.058L41 117.5L91.9422 92.9422L116.5 42Z"
            fill="#E18AB0"
          />
        </svg>
      </div>
      <div className="flex justify-center sm:justify-end relative right-24 top-20 sm:right-96">
        <svg
          onClick={ScrollToSectionEthics}
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="137"
          viewBox="0 0 86 137"
          fill="none"
        >
          <rect width="86" height="137" rx="43" fill="black" />
          <path
            d="M47 28C47 25.7909 45.2091 24 43 24C40.7909 24 39 25.7909 39 28L47 28ZM40.1716 110.828C41.7337 112.391 44.2663 112.391 45.8284 110.828L71.2843 85.3726C72.8464 83.8105 72.8464 81.2778 71.2843 79.7157C69.7222 78.1536 67.1895 78.1536 65.6274 79.7157L43 102.343L20.3726 79.7157C18.8105 78.1536 16.2778 78.1536 14.7157 79.7157C13.1536 81.2778 13.1536 83.8105 14.7157 85.3726L40.1716 110.828ZM39 28L39 108L47 108L47 28L39 28Z"
            fill="#FFF6E4"
          />
        </svg>
      </div>

      <section className="bg-E18AB0 py-24 px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-10 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="mt-2 text-FFF6E4 text-arial"
            >
              <h1 className="text-4xl number font-semibold pb-5">07.</h1>
              <span className="font-extrabold">
                <RiBardLine className="inline" />{" "}
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
                <RiBardLine className="inline" />{" "}
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
              <h1 className="text-4xl number font-semibold pb-5">09.</h1>
              <span className="font-extrabold">
                <RiBardLine className="inline" />{" "}
                {translations[language].titleDetailsEthics3Fr}
                {translations[language].titleDetailsEthics3En}{" "}
              </span>
              {translations[language].describeDetailsEthics3Fr}
              {translations[language].describeDetailsEthics3En}
            </p>
          </div>
        </div>
        <div id="ethics"></div>
      </section>
      <div className="bg-ethics-blur pt-32 pb-20">
        <div className="flex justify-center">
          <svg
            className="animate-formbounce"
            width="70"
            height="70"
            viewBox="0 0 192 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.5 0L54.9987 28.0013L83 41.5L54.9987 54.9987L41.5 83L28.0013 54.9987L0 41.5L28.0013 28.0013L41.5 0Z"
              fill="#FFF6E4"
            />
            <path
              d="M116.5 42L141.058 92.9422L192 117.5L141.058 142.058L116.5 193L91.9422 142.058L41 117.5L91.9422 92.9422L116.5 42Z"
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
              <h1
                data-aos="fade-left"
                className="px-10 font-inter mt-4 sm:mt-3 text-3xl sm:text-4xl"
              >
                {translations[language].titleTrust1Fr}
                {translations[language].titleTrust1En}{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-20 sm:h-24 mb-4 mr-1 mt-3 inline"
                    alt="Icône navi studio."
                  />
                </span>{" "}
                {translations[language].titleTrust2En} 🙏{" "}
              </h1>
            </div>
          </h1>

          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-FFF6E4 text-center"
              >
                <RiBardLine className="inline" />{" "}
                {translations[language].describe6EthicsWorkFr}
                {translations[language].describe6EthicsWorkEn}{" "}
                <span className="font-extrabold">
                  {translations[language].describe6BoldEthicsWorkFr}
                  {translations[language].describe6BoldEthicsWorkEn}{" "}
                </span>
                {translations[language].describeWithoutBold6Fr}
                {translations[language].describeWithoutBold6En}{" "}
                <span className="font-extrabold">
                  {translations[language].describe6Bold6Fr}
                  {translations[language].describe6Bold6En}
                </span>
              </p>
              <div className="text-transparent mb-6"></div>
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className=" text-FFF6E4 text-center mb-10"
              >
                {translations[language].describe7EthicsWorkFr}
                {translations[language].describe7EthicsWorkEn}{" "}
                <span className="font-extrabold">
                  {translations[language].describe7BoldEthicsWorkFr}
                  {translations[language].describe7BoldEthicsWorkEn}{" "}
                </span>
                {translations[language].describeWithoutBold7Fr}
                {translations[language].describeWithoutBold7En}{" "}
                <span className="font-extrabold">
                  {translations[language].describe7Bold7Fr}
                  {translations[language].describe7Bold7En}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 pb-28">
          <svg
            className="animate-formbounce"
            width="70"
            height="70"
            viewBox="0 0 192 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.5 0L54.9987 28.0013L83 41.5L54.9987 54.9987L41.5 83L28.0013 54.9987L0 41.5L28.0013 28.0013L41.5 0Z"
              fill="#E18AB0"
            />
            <path
              d="M116.5 42L141.058 92.9422L192 117.5L141.058 142.058L116.5 193L91.9422 142.058L41 117.5L91.9422 92.9422L116.5 42Z"
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

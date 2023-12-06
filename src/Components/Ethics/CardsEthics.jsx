import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
import NavbarEthics from "../Navigation/EthicsNavbar/EthicsNavbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import ImgText from "../../assets/logo-5.png";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const EthicsPage = () => {
  const [scrollSection, setScrollSection] = useState();
  const { language } = useLanguage();
  // const props = useSpring({
  //   from: { color: "#FFF6E4" },
  //   to: async (next) => {
  //     while (true) {
  //       await next({ color: "#4457BE" });
  //       await next({ color: "#E18AB0" });
  //     }
  //   },
  //   config: { duration: 1000 },
  // });
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
      <div className="test2">
        <div class="flex justify-center mt-10">
          <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
            <div class="p-6 rounded-lg shadow-md">
              <h2
                data-aos="fade-left"
                class="text-8xl number text-E18AB0 font-bold mb-2"
              >
                01.
              </h2>

              <p className="text-black text-xl font-inter font-extrabold">
                › {translations[language].title1EthicsFr}
                {translations[language].title1EthicsEn}
              </p>
              <span className="absolute w-48 h-1 bg-E18AB0"></span>
              <div className="w-72 mt-5">
                <p
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  className="text-black"
                >
                  <span className="absolute h-72 w-1 bg-C22E2E -left-20 bottom-0 hidden sm:block"></span>
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
              <p className="text-black text-xl font-inter font-extrabold">
                › {translations[language].title2EthicsFr}
                {translations[language].title2EthicsEn}
              </p>
              <span className="absolute w-48 h-1 bg-E18AB0"></span>
              <div className="w-72 mt-5">
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
              <p className="text-black text-xl font-inter font-extrabold">
                › Passion & Motivation
              </p>
              <span className="absolute w-48 h-1 bg-E18AB0"></span>
              <div className="w-72 mt-5">
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
                  <span className="absolute h-72 w-1 bg-C22E2E -right-20 bottom-10 hidden sm:block"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center pt-16">
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
              fill="#4457BE"
            />
            <path
              d="M116.5 42L141.058 92.9422L192 117.5L141.058 142.058L116.5 193L91.9422 142.058L41 117.5L91.9422 92.9422L116.5 42Z"
              fill="#4457BE"
            />
          </svg>
        </div> */}
        <div className="flex justify-center">
          <div className="mt-16">
            <div className="flex justify-end">
              <svg
                data-aos="fade-up-right"
                className="relative top-10 right-4"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 202 202"
                fill="none"
              >
                <path
                  d="M101 0L107.22 45.7993L123.475 2.53228L119.347 48.5673L144.822 10.0021L130.554 53.9645L163.972 22.035L140.28 61.7202L179.965 38.0275L148.036 71.4456L191.998 57.1777L153.433 82.653L199.468 78.5254L156.201 94.7804L202 101L156.201 107.22L199.468 123.475L153.433 119.347L191.998 144.822L148.036 130.554L179.965 163.972L140.28 140.28L163.972 179.965L130.554 148.036L144.822 191.998L119.347 153.433L123.475 199.468L107.22 156.201L101 202L94.7804 156.201L78.5254 199.468L82.653 153.433L57.1777 191.998L71.4456 148.036L38.0275 179.965L61.7202 140.28L22.035 163.972L53.9645 130.554L10.0021 144.822L48.5673 119.347L2.53228 123.475L45.7993 107.22L0 101L45.7993 94.7804L2.53228 78.5254L48.5673 82.653L10.0021 57.1777L53.9645 71.4456L22.035 38.0275L61.7202 61.7202L38.0275 22.035L71.4456 53.9645L57.1777 10.0021L82.653 48.5673L78.5254 2.53228L94.7804 45.7993L101 0Z"
                  fill="#E18AB0"
                />
              </svg>
            </div>
            <div className="px-10">
              <img src={ImgMac} alt="Image Ethics" className="rounded-lg" />
            </div>
            <svg
              data-aos="fade-up-left"
              className="relative bottom-9 left-3"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 191 190"
              fill="none"
            >
              <path
                d="M90.325 38.9305L95.5 10.1342L100.675 38.9305C101.266 42.2213 105.694 42.8886 107.229 39.9184L120.662 13.9268L117.119 42.9691C116.714 46.288 120.749 48.2308 123.091 45.8449L143.588 24.9674L131.643 51.6753C130.277 54.7274 133.56 57.773 136.501 56.1835L162.242 42.2753L142.954 64.2755C140.75 66.7896 142.989 70.6674 146.268 70.0156L174.965 64.3124L150.05 79.6501C147.203 81.4028 148.199 85.7682 151.525 86.1121L180.627 89.1206L152.298 96.4331C149.061 97.2687 148.726 101.734 151.803 103.043L178.726 114.496L149.5 113.133C146.16 112.977 144.524 117.146 147.078 119.303L169.429 138.183L141.903 128.266C138.757 127.133 135.966 130.634 137.771 133.449L153.563 158.078L130.184 140.488C127.512 138.478 123.812 141.001 124.707 144.222L132.539 172.412L115.382 148.713C113.421 146.004 109.143 147.324 109.048 150.666L108.223 179.912L98.8141 152.209C97.7388 149.043 93.2612 149.043 92.1859 152.209L82.7769 179.912L81.9516 150.666C81.8573 147.324 77.5786 146.004 75.6179 148.713L58.4612 172.412L66.2929 144.222C67.1879 141.001 63.4884 138.478 60.8165 140.488L37.4365 158.078L53.2294 133.449C55.0342 130.634 52.2425 127.133 49.0969 128.266L21.571 138.183L43.9219 119.303C46.4761 117.146 44.8403 112.977 41.5003 113.133L12.2745 114.496L39.1973 103.043C42.274 101.734 41.9394 97.2687 38.7019 96.4331L10.3729 89.1206L39.4754 86.1121C42.8012 85.7682 43.7976 81.4029 40.9503 79.6501L16.0352 64.3124L44.7316 70.0156C48.011 70.6674 50.2498 66.7896 48.0456 64.2755L28.7583 42.2753L54.4987 56.1835C57.4403 57.7729 60.7227 54.7274 59.3575 51.6753L47.4117 24.9675L67.909 45.8449C70.2514 48.2308 74.2857 46.288 73.8808 42.9691L70.338 13.9268L83.7709 39.9184C85.306 42.8887 89.7336 42.2213 90.325 38.9305ZM134.124 51.7846C134.125 51.784 134.127 51.7835 134.128 51.7829L134.124 51.7846ZM136.207 53.7167L136.208 53.7138C136.208 53.7148 136.207 53.7158 136.207 53.7167ZM153.548 101.274L153.551 101.274C153.55 101.274 153.549 101.274 153.548 101.274ZM111.332 151.645L111.335 151.648C111.334 151.647 111.333 151.646 111.332 151.645ZM37.4523 101.274L37.5121 101.043L37.4523 101.274C37.451 101.274 37.4498 101.274 37.4485 101.273L37.4523 101.274ZM37.24 98.4417L37.2366 98.4431C37.2377 98.4426 37.2389 98.4422 37.24 98.4417L37.3337 98.6618L37.24 98.4417ZM44.2859 67.5716C44.2853 67.5709 44.2847 67.5702 44.2841 67.5695L44.2859 67.5716ZM45.7062 65.1115L45.704 65.1111L45.7062 65.1115Z"
                stroke="#E18AB0"
                stroke-width="5"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center mt-5">
            <h1
              data-aos="fade-right"
              className="text-black font-extrabold font-inter text-2xl sm:text-4xl"
            >
              {" "}
              <span className="text-E18AB0 animate-formbounce">✦</span>{" "}
              {translations[language].titleWorkEthicsFr}
              {translations[language].titleWorkEthicsEn}{" "}
              <span className="text-E18AB0 animate-formbounce">✧</span>
            </h1>
            <div className="flex justify-center">
              <span className="absolute w-48 h-1 bg-E18AB0"></span>
            </div>
            <div className="flex justify-center px-3 pt-6">
              <div className="rounded-lg shadow-md w-96 sm:w-1/3 sm:px-0 px-3">
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
              <div className="flex flex-col mt-10">
                <NavLink
                  to="/services"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  {translations[language].linkServicesFr}
                  {translations[language].linkServicesEn}
                </NavLink>
                {/* <NavLink
                  to="/rate"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-E18AB0"
                >
                  {translations[language].linkRateFr}
                  {translations[language].linkRateEn}
                </NavLink> */}
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

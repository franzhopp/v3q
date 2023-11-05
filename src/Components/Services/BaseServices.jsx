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
        <div className="test">
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
          </h1>

          <div className="flex justify-center">
            <div className="w-96">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-center"
              >
                <span className="absolute h-56 w-1 bg-C22E2E -left-96 bottom-1 hidden sm:block"></span>
                Dans cette page, vous trouverez{" "}
                <span className="font-extrabold">tous les services</span>{" "}
                adaptés à <span className="font-extrabold">vos besoins</span>.
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
                  Site vitrine
                </p>
                <div className="w-64">
                  <p className="text-FFF6E4 text-center">
                    Un site vitrine qui{" "}
                    <span className="font-extrabold">vous ressemble</span>.{" "}
                    <span className="font-extrabold">Impressionnez</span> vos
                    visiteurs{" "}
                    <span className="font-extrabold">
                      dès la première visite
                    </span>
                    .
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
                  Site e-commerce
                </p>
                <div className="w-64">
                  <p className="text-FFF6E4 text-center">
                    Construction{" "}
                    <span className="font-extrabold">
                      d'un site e-commerce puissant
                    </span>{" "}
                    et <span className="font-extrabold">performant</span> pour{" "}
                    <span className="font-extrabold">plus de ventes</span>.
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
                  <p className="text-FFF6E4 text-center">
                    Nous créons des landing pages{" "}
                    <span className="font-extrabold">impactantes</span> avec une{" "}
                    <span className="font-extrabold">
                      expérience utilisateur optimisée
                    </span>
                    .
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
                  Refonte
                </p>
                <div className="w-64">
                  <p className="text-FFF6E4 text-center">
                    Vous avez déjà un site internet ? Nous pouvons{" "}
                    <span className="font-extrabold">l'améliorer</span> ou
                    <span className="font-extrabold">
                      {" "}
                      le refaire entièrement
                    </span>
                    .
                  </p>
                </div>
                <div className="flex justify-center mt-10">
                  <img src={ImgService4} alt="Icône Services" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-16">
            <svg
              className="animate-formbounce"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_14_10)">
                <path
                  d="M54.107 51.319L48.9094 50.7561C48.1982 50.6792 47.5969 50.2116 47.3238 49.5506C47.3205 49.5428 47.3172 49.5348 47.3141 49.527C47.04 48.8663 47.1344 48.1106 47.5828 47.5534L50.8602 43.4801C51.4781 42.7122 51.4182 41.602 50.7211 40.9049L44.5861 34.77C43.8891 34.0729 42.7791 34.0129 42.0109 34.6309L37.9359 37.9096C37.3801 38.3569 36.6266 38.4518 35.9668 38.1803C35.9596 38.1774 35.9523 38.1745 35.9451 38.1715C35.2818 37.8993 34.8125 37.2969 34.7354 36.584L34.1723 31.384C34.0662 30.404 33.2389 29.6614 32.2531 29.6614H23.577C22.5912 29.6614 21.7639 30.404 21.6578 31.384L21.0947 36.584C21.0176 37.2967 20.548 37.8993 19.8848 38.1715C19.8775 38.1745 19.8703 38.1774 19.8633 38.1803C19.2035 38.452 18.45 38.3569 17.8941 37.9096L13.8187 34.6309C13.0508 34.0129 11.9406 34.0729 11.2438 34.77L5.10879 40.9049C4.41172 41.602 4.35176 42.7122 4.96973 43.4801L8.24707 47.5534C8.69551 48.1108 8.78984 48.8663 8.51582 49.527C8.5125 49.5348 8.50937 49.5428 8.50605 49.5506C8.23281 50.2116 7.63164 50.6792 6.92051 50.7561L1.72266 51.319C0.742578 51.425 0 52.2524 0 53.2381V61.9143C0 62.9001 0.742578 63.7274 1.72266 63.8334L6.92031 64.3961C7.63145 64.4731 8.23281 64.9407 8.50586 65.6016C8.50918 65.6094 8.5123 65.6174 8.51562 65.6252C8.78965 66.286 8.69531 67.0416 8.24687 67.5991L4.96953 71.6723C4.35156 72.4403 4.41152 73.5504 5.10859 74.2475L11.2436 80.3825C11.9406 81.0795 13.0508 81.1395 13.8187 80.5215L17.8937 77.2428C18.4496 76.7954 19.2031 76.7004 19.8629 76.9721C19.8701 76.975 19.8773 76.978 19.8846 76.9809C20.5479 77.2532 21.0172 77.8555 21.0943 78.5684L21.6574 83.7684C21.7635 84.7485 22.5908 85.4911 23.5766 85.4911H32.2527C33.2385 85.4911 34.0658 84.7485 34.1719 83.7684L34.735 78.5684C34.8121 77.8557 35.2814 77.2532 35.9447 76.9809C35.952 76.978 35.9592 76.975 35.9662 76.9721C36.626 76.7004 37.3795 76.7954 37.9355 77.2428L42.0105 80.5215C42.7785 81.1395 43.8887 81.0795 44.5857 80.3825L50.7207 74.2475C51.4178 73.5504 51.4775 72.4403 50.8598 71.6723L47.5824 67.5991C47.134 67.0418 47.0396 66.2862 47.3137 65.6252C47.3168 65.6174 47.3201 65.6096 47.3234 65.6016C47.5967 64.9407 48.1979 64.4731 48.909 64.3961L54.1066 63.8334C55.0865 63.7272 55.8293 62.8999 55.8293 61.9143V53.2381C55.8297 52.2524 55.0871 51.425 54.107 51.319ZM27.9148 66.2792C23.1084 66.2792 19.2119 62.3827 19.2119 57.5762C19.2119 52.7698 23.1084 48.8733 27.9148 48.8733C32.7213 48.8733 36.6178 52.7698 36.6178 57.5762C36.6178 62.3827 32.7213 66.2792 27.9148 66.2792Z"
                  fill="#8F8F8F"
                  stroke="#8F8F8F"
                  stroke-width="0.195312"
                />
                <path
                  className="animate-pulse"
                  d="M99.1151 42.6196L95.5469 39.8018C94.9786 39.353 94.6629 38.6649 94.6626 37.9405C94.6626 37.9328 94.6626 37.9252 94.6626 37.9174C94.6614 37.1914 94.9772 36.5016 95.5469 36.0518L99.1151 33.2338C99.9323 32.5885 100.221 31.4789 99.8229 30.517L98.2555 26.733C97.8571 25.7709 96.868 25.1908 95.834 25.3123L91.3184 25.8428C90.5973 25.9276 89.8862 25.6631 89.3739 25.1489C89.3686 25.1434 89.3631 25.1379 89.3577 25.1326C88.8456 24.6201 88.5823 23.9104 88.6669 23.191L89.1973 18.6756C89.3188 17.6416 88.7385 16.6526 87.7766 16.2541L83.9926 14.6869C83.0307 14.2885 81.9211 14.5776 81.2758 15.3946L78.4579 18.9625C78.0088 19.5311 77.3208 19.8465 76.5965 19.8469C76.5887 19.8469 76.5811 19.8469 76.5735 19.8469C75.8477 19.8481 75.1579 19.5323 74.7079 18.9625L71.8899 15.3944C71.2446 14.5772 70.1348 14.2881 69.1729 14.6865L65.3889 16.2539C64.427 16.6524 63.8467 17.6414 63.9682 18.6756L64.4987 23.1912C64.5835 23.9121 64.319 24.6233 63.8047 25.1358C63.7993 25.1412 63.7938 25.1467 63.7883 25.1522C63.2758 25.6643 62.5663 25.9276 61.8467 25.843L57.3313 25.3125C56.2971 25.191 55.3083 25.7713 54.9098 26.7332L53.3424 30.5172C52.944 31.4791 53.2331 32.5889 54.0503 33.2342L57.6182 36.052C58.1868 36.501 58.5022 37.1889 58.5026 37.9133C58.5026 37.9211 58.5026 37.9287 58.5026 37.9364C58.504 38.6623 58.1879 39.3522 57.6182 39.802L54.0501 42.6199C53.2329 43.2653 52.9438 44.3748 53.3424 45.3367L54.9096 49.1207C55.3081 50.0826 56.2971 50.6629 57.3311 50.5414L61.8469 50.011C62.5678 49.9262 63.279 50.1907 63.7915 50.7049C63.7969 50.7104 63.8022 50.7158 63.8077 50.7211C64.3198 51.2336 64.5831 51.9432 64.4985 52.6627L63.968 57.1783C63.8465 58.2125 64.4268 59.2014 65.3887 59.5998L69.1727 61.1672C70.1346 61.5656 71.2442 61.2766 71.8897 60.4594L74.7075 56.8914C75.1565 56.3229 75.8444 56.0074 76.5688 56.0071C76.5764 56.0071 76.584 56.0071 76.5919 56.0071C77.3176 56.0057 78.0077 56.3217 78.4575 56.8914L81.2754 60.4596C81.9208 61.2768 83.0303 61.5658 83.9924 61.1674L87.7764 59.6C88.7383 59.2016 89.3186 58.2125 89.1971 57.1785L88.6667 52.6629C88.5819 51.942 88.8463 51.2307 89.3606 50.7184C89.3661 50.7129 89.3715 50.7074 89.377 50.7022C89.8895 50.1903 90.5991 49.9268 91.3186 50.0114L95.8342 50.5418C96.8684 50.6633 97.8573 50.083 98.2557 49.1211L99.8231 45.3371C100.221 44.3746 99.9323 43.2649 99.1151 42.6196ZM78.8961 44.6682C75.2665 46.1717 71.1051 44.4481 69.6016 40.8182C68.0981 37.1883 69.8219 33.0272 73.4516 31.5237C77.0813 30.0201 81.2426 31.7438 82.7462 35.3737C84.2495 39.0033 82.5258 43.1649 78.8961 44.6682Z"
                  fill="#8F8F8F"
                  stroke="#8F8F8F"
                  stroke-width="0.195312"
                />
                <g clip-path="url(#clip1_14_10)">
                  <path
                    d="M73 66L79.1306 76.8694L90 83L79.1306 89.1306L73 100L66.8694 89.1306L56 83L66.8694 76.8694L73 66Z"
                    fill="#E18AB0"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="flex justify-center pt-16">
            <div className="w-96 sm:w-1/3 px-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-center text-2xl font-extrabold"
              >
                Ou besoin de modifications sur votre site web ? Nous pouvons le
                faire rapidement !
              </p>
            </div>
          </div>
          <ButtonServices />
        </div>
        <div className="bg-0C3E78 pt-28 pb-28 px-4 sm:px-6 lg:px-8">
          <h3
            className="text-center font-extrabold text-3xl text-FFF6E4 px-5"
            data-aos="fade-left"
          >
            Des offres adaptées à vos besoins
          </h3>
          <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
            <div className="min-h-500 w-80 rounded-lg mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                <span className="absolute h-full w-1 bg-FFF6E4 -left-14 -top-1 hidden sm:block"></span>
                Nous mettons notre expertise à votre service, grâce à notre
                diagnostic personnalisé. Découvrez des solutions sur mesure
                adaptées à votre business & situation.
              </p>
            </div>
            <div className="min-h-500 w-80 mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                Vous disposez d'un suivi de production complet, notre équipe
                reste disponible et à votre écoute 24/7. Nous travaillons main
                dans la main avec nos clients.
              </p>
            </div>
            <div className="min-h-500 w-80 mt-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="mt-2 text-FFF6E4 px-5"
              >
                Obtenez un devis gratuit dès maintenant et commencez votre
                aventure dans le monde du digital à nos côtés !
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

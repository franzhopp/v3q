import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiBardLine } from "react-icons/ri";
import { useTheme } from "../../context/ThemeProvider.jsx";
import NavbarPages from "../Navigation/PagesNavbar/PagesNavbar.jsx";
import Footer from "../Footer/MainFooter.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTopButton from "../UI/ScrollToTop/BackToTopButton.jsx";
import ConditionUk from "./Title/ConditionUk.jsx";

const Rate = () => {
  const { isDarkMode } = useTheme();
  const [openStates, setOpenStates] = useState({});
  const toggleSubList = (category) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [category]: !prevOpenStates[category],
    }));
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
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
  const text2 = "Marketing";
  const letters2 = text2.split("");
  const animationConfig2 = [
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
  const Blue = "bg-0c3e78";
  const Pink = "bg-pink";
  const InformationsSitesWeb = [
    {
      id: 1,
      title: "Showcase site",
      price: "starting at £590*",
      details: ["5 pages, starting at £280", "10 pages, starting at £580"],
      subDetails: [
        "« Home » page with an overview of your company.",
        "« About » page to share your story and vision.",
        "« Services » page to introduce your offers.",
        "« About us » page to introduce your business.",
        "« Contact » page for your potential customers to reach you out.",
        "Includes multiple pages for additional content or information about your business.",
      ],
    },
    {
      id: 2,
      title: "Website mock-up design",
      price: " starting at £220*",
      details: ["2 pages, starting at £220", "5 pages, starting at £400"],
      subDetails: [
        "Graphic design for specific pages of the site layout.",
        "Graphic design for multiple pages with the inclusion of a custom logo.",
      ],
    },
    {
      id: 3,
      title: "Landing page",
      price: "starting at £280*",
      details: ["5 pages, starting at £280", "10 pages, starting at £550"],
      subDetails: [
        "Design of an impactful and eye-catching page.",
        "Includes a page extension with additional features.",
      ],
    },
    {
      id: 4,
      title: "E-commerce site",
      price: "starting at £720*",
      details: ["5 pages, starting at £450", "10 pages, starting at £720"],
      subDetails: [
        "Homepage, product catalog, individual product pages, shopping cart, payment page.",
        "Includes advanced features such as filtering options, customer reviews, etc.",
      ],
    },
    {
      id: 5,
      title: "Custom site",
      price: "starting at £800*",
      details: ["5 pages, starting at £550", "10 pages, starting at £800"],
      subDetails: [
        "Customized design according to customer's specific needs.",
        "Includes advanced features and highly customized design.",
      ],
    },
    {
      id: 6,
      title: "Redesign",
      price: "starting at £680*",
      details: ["5 pages, starting at £325", "10 pages, starting at £680"],
      subDetails: [
        "Comprehensive user interface analysis and design update.",
        "Includes significant improvements for an optimized user experience.",
      ],
    },
    {
      id: 5,
      title: "Changes",
      price: "starting at £80*",
      details: ["5 pages, starting at £80", "10 pages, starting at £280"],
      subDetails: [
        "Specific changes on several existing pages of the site.",
        "Includes more in-depth site-wide adjustments.",
      ],
    },
  ];
  const InformationsMarketing = [
    {
      title: "Brand strategy",
      price: "starting at £220*",
    },
    {
      title: "Socials & SEO ",
      price: "starting at  £140*",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [openStates]);
  return (
    <section className="bg-FFF6E4">
      <NavbarPages />
      <div className="image-navi-studio-title-rate pb-24 pt-12 sm:pt-0">
        <div
          className="pt-28 text-FFF6E4 sm:ml-44 sm:text-left text-center font-extrabold"
          data-aos="fade-left"
        >
          <p className="mt-10 sm:mt-4 mr-5 text-4xl sm:text-6xl">Pricing</p>
        </div>
      </div>
      <div className="test2">
        <div className="flex justify-center">
          <h1
            data-aos="fade-in"
            className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
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
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center pb-10 text-center">
            <div className="w-96">
              <NavLink
                to="/pricingfr"
                className="text-C22E2E text-center font-extrabold underline"
              >
                Voir les tarifications FR.
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-96 sm:w-1/2">
            {InformationsSitesWeb.map((info) => (
              <div
                className={`flex flex-col justify-center font-inter  ${
                  info.id % 2 === 0 ? Blue : Pink
                }`}
                key={info.id}
              >
                <div className="w-96 sm:w-full">
                  <div className="flex flex-wrap justify-between text-FFF6E4 p-10 text-3xl sm:text-4xl">
                    <div data-aos="fade-left" className="">
                      <RiBardLine className="inline" /> {info.title}
                    </div>
                    <div data-aos="fade-right" className="text-right">
                      {info.price}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start ml-10 mb-10">
                  <div className="text-FFF6E4">
                    <button
                      onClick={() => toggleSubList(info.title)}
                      className={`bg-FFF6E4 p-3 rounded-3xl shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
                        isDarkMode ? "text-0C3E78" : "text-FFF6E4 "
                      }`}
                    >
                      <div className="flex ml-1 number">
                        Learn more <IoIosArrowDown className="mt-2 ml-1" />
                      </div>
                    </button>
                    {openStates[info.title] && (
                      <ul className="mt-3 font-arial">
                        {info.details.map((detail, detailIndex) => (
                          <li
                            data-aos="fade-left"
                            data-aos-duration="500"
                            key={detailIndex}
                          >
                            <RiBardLine className="inline" /> {detail}
                          </li>
                        ))}
                        <div className="flex justify-start">
                          <ul className="text-FFF6E4  mt-3 mb-3 text-sm px-10 sm:text-left text-justify">
                            <p className="number mb-2">
                              Detailed informations :
                            </p>
                            {info.subDetails.map(
                              (subDetail, subDetailIndex) => (
                                <li
                                  data-aos="fade-right"
                                  data-aos-duration="600"
                                  className="list-disc"
                                  key={subDetailIndex}
                                >
                                  {subDetail}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <NavLink
                          to="/quote"
                          className="pt-5 font-extrabold number underline"
                        >
                          Request a free quote
                        </NavLink>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <svg
            className="animate-formbounce"
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="83"
            viewBox="0 0 83 83"
            fill="none"
          >
            <path
              d="M41.5 0L55.2921 27.7079L83 41.5L55.2921 55.2921L41.5 83L27.7079 55.2921L0 41.5L27.7079 27.7079L41.5 0Z"
              fill="#C22E2E"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <h1
            data-aos="fade-in"
            className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
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
            <div className="flex justify-center">
              <span className="absolute w-32 h-1 bg-C22E2E"></span>
            </div>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-96 sm:w-1/2">
            {InformationsMarketing.map((info, index) => (
              <div
                className={`flex flex-col justify-center font-inter ${
                  index % 2 === 0 ? Pink : Blue
                }`}
                key={index}
              >
                <div className="w-96 sm:w-full">
                  <div className="flex flex-wrap justify-between text-FFF6E4 p-10 text-3xl sm:text-4xl">
                    <div data-aos="fade-left" className="">
                      <RiBardLine className="inline" /> {info.title}
                    </div>
                    <div data-aos="fade-right" className="text-right">
                      {info.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ConditionUk />
        <BackToTopButton />
        <div className="flex flex-col text-center justify-center pt-6 pb-20">
          <div className="flex justify-center mt-10 mb-10">
            <NavLink to="/quote">
              <svg
                className="rounded-full shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="95"
                viewBox="0 0 95 95"
                fill="none"
              >
                <g clip-path="url(#clip0_15_2)">
                  <path
                    d="M47.5 95C73.7335 95 95 73.7335 95 47.5C95 21.2665 73.7335 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95Z"
                    fill="#E18AB0"
                  />
                  <path
                    d="M73.4749 50.4749C74.8417 49.108 74.8417 46.892 73.4749 45.5251L51.201 23.2513C49.8342 21.8844 47.6181 21.8844 46.2513 23.2513C44.8844 24.6181 44.8844 26.8342 46.2513 28.201L66.0503 48L46.2513 67.799C44.8844 69.1658 44.8844 71.3819 46.2513 72.7487C47.6181 74.1156 49.8342 74.1156 51.201 72.7487L73.4749 50.4749ZM25 51.5L71 51.5V44.5L25 44.5V51.5Z"
                    fill="#FFF6E4"
                  />
                </g>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Rate;

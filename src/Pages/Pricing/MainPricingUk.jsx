import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { RiBardLine } from "react-icons/ri";
import { useTheme } from "../../context/ThemeProvider.jsx";
import NavbarPages from "../../Components/Navigation/NavbarPages/NavbarPages.jsx";
import TitleWebsiteUk from "./Title/TitleWebsiteUk.jsx";
import TitleUk from "./Title/TitleUk.jsx";
import LinksFr from "./Links/LinksFr.jsx";
import ConditionUk from "./Title/ConditionUk.jsx";
import SvgReturnQuote from "./Svg/SvgReturnQuoteUk.jsx";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton.jsx";
import Footer from "../../Components/Footer/MainFooter.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleMarketingUk from "./Title/TitleMarketingUk.jsx";
import SvgStarUk from "./Svg/SvgStarUk.jsx";

const PricingUk = () => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [openStates, setOpenStates] = useState({});
  const toggleSubList = (category) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [category]: !prevOpenStates[category],
    }));
    setIsExpanded(!isExpanded);
  };
  const Blue = "bg-fc7a44";
  const e18ab0 = "bg-ec307a";
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
    <section className={`bg-fff6e4`}>
      <NavbarPages />
      <TitleUk />
      <TitleWebsiteUk />
      <div className={`flex justify-center`}>
        <div className={`flex flex-col justify-center pb-10 text-center`}>
          <div className={`w-96`}>
            <LinksFr />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex justify-center"
      >
        <div className={`w-96 md:w-2/3 lg:w-1/2`}>
          {InformationsSitesWeb.map((info) => (
            <div
              className={`flex flex-col justify-center font-inter shadow-md ${
                info.id % 2 === 0 ? Blue : e18ab0
              }`}
              key={info.id}
            >
              <div className={`w-96 lg:w-full`}>
                <div
                  className={`text-fff6e4 flex flex-wrap justify-between p-10 text-3xl lg:text-4xl`}
                >
                  <div data-aos="fade-left">{info.title}</div>
                  <div data-aos="fade-right">{info.price}</div>
                </div>
              </div>
              <div className={`flex justify-start ml-10 mb-10`}>
                <div className={`text-fff6e4`}>
                  <button
                    onClick={() => toggleSubList(info.title)}
                    className={`bg-fff6e4 p-3 rounded-3xl shadow-md cursor-pointer transform active:scale-75 transition-transform ${
                      isDarkMode ? "text-0c3e78" : "text-fff6e4"
                    }`}
                  >
                    <div className={`flex ml-1 number`}>
                      Learn more{" "}
                      {isExpanded ? (
                        <RxCross2 className={`mt-1 ml-1`} />
                      ) : (
                        <IoIosArrowDown className={`mt-1 ml-1`} />
                      )}
                    </div>
                  </button>
                  {openStates[info.title] && (
                    <ul className={`text-md font-arial mt-3`}>
                      {info.details.map((detail, detailIndex) => (
                        <li
                          data-aos="fade-left"
                          data-aos-duration="500"
                          key={detailIndex}
                        >
                          <RiBardLine className={`inline`} /> {detail}
                        </li>
                      ))}
                      <div className={`flex justify-start`}>
                        <ul
                          className={`text-fff6e4 text-md py-3 px-10 lg:text-left text-justify`}
                        >
                          <p className={`FontNumber mb-2`}>
                            Detailed informations:
                          </p>
                          {info.subDetails.map((subDetail, subDetailIndex) => (
                            <li
                              data-aos="fade-right"
                              data-aos-duration="600"
                              className={`list-decimal`}
                              key={subDetailIndex}
                            >
                              {subDetail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <NavLink
                        to="/quote"
                        className={`text-md pt-5 font-extrabold FontNumber underline`}
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
      <BackToTopButton />
      <SvgStarUk />
      <TitleMarketingUk />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`flex justify-center`}
      >
        <div className={`w-96 md:w-2/3 lg:w-1/2`}>
          {InformationsMarketing.map((info, index) => (
            <div
              className={`flex flex-col justify-center font-inter shadow-md ${
                index % 2 === 0 ? e18ab0 : Blue
              }`}
              key={index}
            >
              <div className={`w-96 lg:w-full`}>
                <div
                  className={`text-fff6e4 flex flex-wrap justify-between p-10 text-3xl lg:text-4xl`}
                >
                  <div data-aos="fade-left">{info.title}</div>
                  <div data-aos="fade-right">{info.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ConditionUk />
      <BackToTopButton />
      <SvgReturnQuote />
      <Footer />
    </section>
  );
};

export default PricingUk;

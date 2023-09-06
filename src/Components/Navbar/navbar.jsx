import Image from "../../assets/logo-5.png";
// import { AiOutlineSearch } from "react-icons/ai";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Button from "../UI/Button/button";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../Section/section.jsx";
// import Home from "../Hompage/homepage";

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleAnimateButtonClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // const closeMobileMenu = () => {
  //   setToggleMenu(false);
  // };

  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
  };

  const SectionToSectionContact = () => {
    const ContactToScroll = document.getElementById("contact");
    if (ContactToScroll) {
      ContactToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  const SectionToScroll = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Gestion de l'évènement du scroll :
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-navi-studio sm:pb-24 mb:min-h-650 min-h-500">
      <nav
        className="bg-FFF6E4 border-b-4 border-C22E2E h-28 items-center transition duration-300 ease-in-out fixed w-full top-0 left-0 shadow-md z-max"
        data-aos="fade-left"
      >
        <div className="container mt-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <img className="ml-4 w-auto h-12" src={Image} />
            </div>
            <div className="flex items-center">
              <NavLink
                to="/"
                href="about"
                onClick={SectionToScroll}
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md text-lg font-extrabold"
              >
                Agence
              </NavLink>
              <NavLink
                to="/"
                href="about"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md text-lg font-extrabold"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/"
                onClick={SectionToSectionContact}
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md text-lg font-extrabold"
              >
                Contact
              </NavLink>
              <NavLink className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md text-lg font-extrabold">
                FR
              </NavLink>
              {/* <NavLink
                to="/"
                href="contact"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 text-lg font-extrabold"
              >
                <AiOutlineSearch />
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed w-full top-0 left-0 shadow-md md:hidden bg-FFF6E4 z-max">
        {/* 2 items */}
        <div className="px-5 h-28 flex items-center justify-between">
          <a href="">
            <img src={Image} alt="" className="h-10 w-auto sm:h-10" />
          </a>

          <div className="-mr-2">
            <a
              onClick={toggleMenuMobile}
              className="icon-toggle bg-C22E2E cursor-pointer rounded-md p-2 inline-flex items-center justify-center ring-1 ring-white ring-opacity-20"
            >
              <svg
                className={`rotateAnimation ${
                  isAnimating ? "animate-rotate" : ""
                }`}
                onClick={handleAnimateButtonClick}
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26.5"
                  cy="26.5"
                  r="26.5"
                  transform="rotate(90 26.5 26.5)"
                  fill="#C22E2E"
                />
                <path
                  d="M26 12L26 41"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M17 18L17 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M35 18L35 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* end 2 items */}

        <ul className={`toggle-menu ${toggleMenu ? "block" : "hidden"} p-2`}>
          <NavLink
            to="/"
            href="about"
            onClick={SectionToScroll}
            className="text-C22E2E block px-3 py-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Agence
          </NavLink>
          <NavLink
            to="/"
            href="portfolio"
            className="text-C22E2E block px-3 py-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/"
            onClick={SectionToSectionContact}
            className="text-C22E2E block px-3 py-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Contact
          </NavLink>
          <NavLink
            to="/"
            href="translate"
            className="text-C22E2E block px-3 py-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            FR
          </NavLink>
          {/* <NavLink
            to="/"
            href="contact"
            className="text-C22E2E block px-3 py-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            <AiOutlineSearch />
          </NavLink> */}
        </ul>
      </nav>

      <div className="pt-52 text-center sm:mt-28">
        <h1 className="text-4xl tracking-tight font-extrabold text-FFF6E4 sm:text-5xl md:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="block xl:inline test-text"
          >
            Agence digitale
          </motion.span>
        </h1>
        <span className="block xl:inline text-FFF6E4 font-extrabold test-text">
          PARIS X LONDON
        </span>
      </div>
      <Button />

      <p className="text-center mt-10">
        <span className="text-black text-xl font-extrabold sm:text-5xl mt-5 sm:mt-10 whitespace-nowrap animation-scrolling-rtl">
          DESIGN | DÉVELOPPEMENT | MARKETING DIGITAL | STRATÉGIE DE MARQUE
        </span>
      </p>
    </div>
  );
};

export default Navbar;

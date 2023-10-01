import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Section/FirstSection.jsx";

const Button = () => {
  const [scrollNavbar, setScrollNavbar] = useState();

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
    <>
      <div className="button-design-formbounce animate-bounce-bounce flex justify-center sm:justify-end px-48 mt-60">
        <NavLink
          to="/"
          href="about"
          onClick={SectionToScroll}
          className="inline-flex items-center gap-2 border rounded-full bg-FFF6E4 px-8 py-3 text-black"
        >
          <span className="text-3xl mr-3 font-semibold heading-responsive">
            Découvrir{" "}
          </span>

          <svg
            className="hidden sm:block"
            width="44"
            height="38"
            viewBox="0 0 44 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
              fill="black"
            />
          </svg>

          <svg
            className="sm:hidden"
            width="44"
            height="38"
            viewBox="0 0 44 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default Button;
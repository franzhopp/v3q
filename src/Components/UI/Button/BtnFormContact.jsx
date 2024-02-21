import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Section/TextHome/MainBlocsHome.jsx";

const ButtonContact = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const SectionToScrollContact = () => {
    const contactSection = document.getElementById("team");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
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
    <div className="animate-formbounce flex justify-center sm:justify-end relative right-20 top-20 xl:right-96">
      <NavLink to="/" onClick={SectionToScrollContact}>
        <svg
          width="86"
          height="137"
          viewBox="0 0 86 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="86" height="137" rx="43" fill="#171614" />
          <path
            d="M47 28C47 25.7909 45.2091 24 43 24C40.7909 24 39 25.7909 39 28L47 28ZM40.1716 110.828C41.7337 112.391 44.2663 112.391 45.8284 110.828L71.2843 85.3726C72.8464 83.8105 72.8464 81.2778 71.2843 79.7157C69.7222 78.1536 67.1895 78.1536 65.6274 79.7157L43 102.343L20.3726 79.7157C18.8105 78.1536 16.2778 78.1536 14.7157 79.7157C13.1536 81.2778 13.1536 83.8105 14.7157 85.3726L40.1716 110.828ZM39 28L39 108L47 108L47 28L39 28Z"
            fill="#fff6e4"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default ButtonContact;

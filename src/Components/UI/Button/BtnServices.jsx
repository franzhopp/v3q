import { useEffect, useState } from "react";
import "../../Section/TextHome/MainBlocsHome.jsx";

const ButtonServices = () => {
  const [scrollNavbar, setScrollNavbar] = useState();
  const SectionToSectionContactServices = () => {
    const ContactToScroll = document.getElementById("contact-services");
    if (ContactToScroll) {
      ContactToScroll.scrollIntoView({ behavior: "smooth" });
    }
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
  };
  return (
    <>
      <div
        className={`flex justify-center sm:justify-end relative right-20 top-20 xl:right-96`}
      >
        <svg
          onClick={SectionToSectionContactServices}
          width="200"
          height="195"
          viewBox="0 0 200 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.8591 0L107.406 50.4276L130.162 4.80731L123.741 55.5615L158.683 18.8021L137.865 65.3732L181.888 40.7409L148.523 78.9908L197.716 68.6742L154.768 95.2043L203 110H98.8591H0L42.9499 95.2043L0.00200543 68.6742L49.1951 78.9908L15.83 40.7409L59.8532 65.3732L39.0355 18.8021L73.9771 55.5615L67.5566 4.80731L90.3119 50.4276L98.8591 0Z"
            fill="#e18ab0"
          />
          <rect x="56" y="58" width="86" height="137" rx="43" fill="#171614" />
          <path
            d="M103 87C103 84.7909 101.209 83 99 83C96.7909 83 95 84.7909 95 87L103 87ZM96.1716 169.828C97.7337 171.391 100.266 171.391 101.828 169.828L127.284 144.373C128.846 142.81 128.846 140.278 127.284 138.716C125.722 137.154 123.19 137.154 121.627 138.716L99 161.343L76.3726 138.716C74.8105 137.154 72.2778 137.154 70.7157 138.716C69.1536 140.278 69.1536 142.81 70.7157 144.373L96.1716 169.828ZM95 87L95 167L103 167L103 87L95 87Z"
            fill="#fff6e4"
          />
        </svg>
      </div>
    </>
  );
};

export default ButtonServices;

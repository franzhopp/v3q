import { useEffect } from "react";
import ButtonSend from "../UI/Button/button-send";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/footer";
import NavbarDevis from "../Navbar/NavbarDevis/d-navbar";
import { NavLink } from "react-router-dom";
import Pattern from "../../assets/pattern.png";
import TitlePorfolio from "../UI/Button/title-porfolio";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="">
      <NavbarDevis />
      <div>
        <TitlePorfolio />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="sm:h-auto w-52">
          <img src={Pattern} className="" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;

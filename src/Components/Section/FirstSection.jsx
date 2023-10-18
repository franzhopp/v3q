import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ImgText from "../../assets/logo-4.png";
import ButtonContact from "../UI/Button/ButtonFormContact";

const Section = () => {
  const [scrollNavbar, setScrollNavbar] = useState();

  const SectionToScroll = () => {
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
    <>
      <section className="bg-FFF6E4 pt-24">
        <div className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          <div className="w-80">
            <p
              data-aos="fade-left"
              className="mt-2 font-extrabold text-black text-4xl sm:text-left text-center"
            >
              Confiez votre image à des professionnels
            </p>
          </div>
          <div className="w-80 mt-10">
            <div className="p-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-center text-black"
              >
                <span className="font-extrabold">
                  {`Notre agence design et développe des sites qui sauront faire briller vos projets.`}
                </span>{" "}
                {`Notre équipe produit des sites modernes et intuitifs qui sauront attirer l'oeil`}
                <span className="font-extrabold">{` des visiteurs`}</span> de la
                meilleure des manières ! Venez découvrir{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-6 mr-1 inline"
                    alt="Icône Navi Studio"
                  />
                </span>{" "}
                dès aujourd'hui.
              </p>
            </div>
          </div>
          <div className="w-80 mt-3 sm:mt-10">
            <div className="p-5">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="font-extrabold text-center text-black"
              >
                {`Votre site est votre vision. Chaque site raconte une histoire que notre équipe restranscrit en développant des expériences uniques qui reflètent l'identité de votre marque. Découvrez son histoire,  `}
                <NavLink
                  href="about"
                  onClick={SectionToScroll}
                  className="font-extrabold underline text-C22E2E"
                >
                  en cliquant sur ce lien
                </NavLink>
                .
              </p>
            </div>
          </div>
        </div>
        <ButtonContact />
      </section>
    </>
  );
};

export default Section;

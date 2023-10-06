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
      <section className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6">
          {/* Step 1 */}
          <div className="min-h-500 w-80 rounded-lg mt-5">
            <p
              data-aos="fade-left"
              className="mt-2 font-extrabold text-black text-4xl"
            >
              Confiez votre image à des professionnels
            </p>
          </div>

          {/* Step 2 */}
          <div className="min-h-500 w-96 rounded-lg mt-5">
            <div className="p-6">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="mt-2 text-center text-black"
              >
                <span className="font-extrabold">
                  {`Imaginez que vous avez déjà vu une agence qui design et développe des sites rien que pour vous ?`}
                </span>{" "}
                {`Des projets élaborés à deux. Du design moderne à la fonctionnalité intuitive, nous créons des sites`}
                <span className="font-extrabold">{` qui attirent les visiteurs`}</span>
                . Venez découvrir{" "}
                <span>
                  <img
                    src={ImgText}
                    className="h-10 mr-1 inline"
                    alt="Icône Navi Studio"
                  />
                </span>{" "}
                dès aujourd'hui !
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="min-h-500 w-96 rounded-lg mt-5">
            <div className="p-6">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="mt-2 font-extrabold text-center text-black"
              >
                {`Votre site est votre perception.`}{" "}
                {`Chaque site représente son histoire, son originalité, sa vision. Notre équipe en conception web développe des expériences uniques qui reflètent l'identité de votre marque. Découvrez navi studio.™ son histoire, `}
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
      </section>
      <ButtonContact />
    </>
  );
};

export default Section;

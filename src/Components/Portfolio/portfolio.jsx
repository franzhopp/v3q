import { useEffect, useState } from "react";
import ButtonSend from "../UI/Button/button-send";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/footer";
import NavbarDevis from "../Navbar/NavbarDevis/d-navbar";
import { NavLink } from "react-router-dom";
import Pattern from "../../assets/pattern.png";
import TitlePorfolio from "../UI/Button/title-porfolio";
import Image1 from "../../assets/cards.png";
import ImgMade from "../../assets/madewithlove.png";

const Portfolio = () => {
  const cards = [
    {
      image: Image1,
      title: "By Sarah Cuisine",
      url: "http://bysarahcuisine.com",
      content:
        "Nous avons l'heureux de vous annoncer que le site By Sarah Cuisine a été créé par la société navi studio.™ Développé et designé par Louisa, ce projet a été riche en développement car il permet à Sarah de promouvoir sa marque influente en tant que traiteur. Nous te souhaitons toute la réussite ainsi que de belles choses avec ce site, nous espérons que ta marque de fabrique puisse davantage s'accroîte dans les meilleures années à venir, encore et plus fort !",
    },
    {
      image: Image1,
      title: "Test",
      content:
        "Nous avons l'heureux de vous annoncer que le site By Sarah Cuisine a été créé par la société navi studio.™ Développé et designé par Louisa, ce projet a été riche en développement car il permet à Sarah de promouvoir sa marque influente en tant que traiteur.",
    },
    {
      image: Image1,
      title: "Test",
      content:
        "Nous avons l'heureux de vous annoncer que le site By Sarah Cuisine a été créé par la société navi studio.™ Développé et designé par Louisa, ce projet a été riche en développement car il permet à Sarah de promouvoir sa marque influente en tant que traiteur.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

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
      <div className="mb-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* <div className="sm:h-auto">
          <img src={Pattern} className="h-auto w-32" />
        </div> */}
        <div className="flex justify-center mt-10">
          <div className="p-6  h-1/2 w-96 rounded-xl shadow-xl">
            <div className="mt-4">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className="w-full h-60 object-cover rounded"
              />
            </div>
            <p className="mt-6 text-black text-xl font-extrabold ">
              <span className="text-E18AB0 font-bold number">
                {currentIndex + 1}.
              </span>{" "}
              {cards[currentIndex].title}
              <div className="flex flex-col">
                <NavLink
                  to={cards[currentIndex].url}
                  className="underline text-C22E2E text-base mb-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Lien vers le site ➔ 
                </NavLink>
              </div>
            </p>
            <div className="">
              <p className="text-black overflow-auto p-5 h-40">
                {cards[currentIndex].content}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-black font-extrabold text-FFF6E4 px-4 py-2 rounded-full mr-2"
                onClick={handlePrev}
              >
                Précédent
              </button>
              <button
                className="bg-black font-extrabold text-FFF6E4 px-4 py-2 rounded-full"
                onClick={handleNext}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={ImgMade}
            alt="Icône made with love"
            className="button-design-formbounce animate-bounce-bounce"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Portfolio;

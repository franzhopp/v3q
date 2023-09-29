import { useEffect } from "react";
import ButtonSend from "../UI/Button/button-send";
import Title from "../UI/Button/title-contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/footer";
import NavbarDevis from "../Navbar/NavbarDevis/d-navbar";
import TitleDevis from "../UI/Button/title-devis";
import { NavLink } from "react-router-dom";

const DevisGratuit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="bg-devis-blur">
      <NavbarDevis />
      <div>
        <TitleDevis />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p className="text-black font-extrabold text-2xl sm:text-4xl max-w-xl ml-6 sm:ml-0">
              Les devis ne servent qu'à des cas différents, veuillez bien lire
              ces lignes !
            </p>

            <div className="mt-8">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-black text-lg sm:text-2xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                N'hésitez pas à revoir notre page « Services », {" "}
                <a
                  href="/services"
                  className="font-extrabold underline text-C22E2E"
                >
                  en cliquant sur ce lien
                </a>
                , avant d'effectuer un envoi de devis.
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Prénom"
                      type="name"
                    />
                  </div>

                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                      placeholder="Nom"
                      type="name"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="E-mail"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Numéro de téléphone"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-2"
                    placeholder="Le meilleur moyen de vous contacter ?"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-4"
                    placeholder="Quel est le type de projet souhaitez-vous réaliser ?"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-4"
                    placeholder="Votre budget approximatif"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-4"
                    placeholder="Disposez vous d'une charte graphique existante ?"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-4"
                    placeholder="Quels services établissez-vous pour la réalisation de votre projet ?"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mt-20"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-block w-full px-5 sm:w-auto"
              >
                <ButtonSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DevisGratuit;

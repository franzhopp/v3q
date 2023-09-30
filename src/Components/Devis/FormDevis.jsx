import { useEffect } from "react";
import NavbarDevis from "../Navigation/DevisNavbar/DevisNavbar.jsx";
import TitleDevis from "../UI/Title/TitleFormDevis.jsx";
import ButtonSend from "../UI/Button/ButtonSend.jsx";
import Footer from "../Footer/Footer.jsx";

const DevisFree = () => {
  return (
    <section className="bg-devis-blur">
      <NavbarDevis />
      <div>
        <TitleDevis />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-20 grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p className="text-black font-extrabold text-2xl sm:text-3xl max-w-xl ml-6 sm:ml-0">
              Le devis revêt une importance particulière, car il ne devrait être
              envoyé que lorsque vous êtes certain de votre demande. Avant de
              soumettre un devis, nous vous invitons à lire attentivement ces
              lignes.
            </p>
            <div className="mt-8">
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-black text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                Le devis permet de sécuriser le traitement de votre demande.
                Prenez le temps de bien comprendre les questions qui vous sont
                posées et veillez à fournir des réponses claires. Nous ne
                pourrons pas traiter un devis si les informations fournies sont
                illisibles.{" "}
              </p>
              <br />
              <p
                data-aos="zoom-in"
                data-aos-duration="300"
                className="text-black text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span className="font-extrabold underline">
                  Veuillez prendre en considération ces directives essentielles
                  :
                </span>
                <ul>
                  <br />
                  <li>
                    1. Assurez-vous de fournir des informations complètes afin
                    que nous puissions vous recontacter rapidement.
                  </li>
                  <li>
                    2. Renseignez le service que vous souhaitez afin que nous
                    puissions élaborer votre projet en conséquence. N'hésitez
                    pas à consulter notre page «{" "}
                    <span className="font-extrabold">Services</span> »{" "}
                    <a
                      href="/services"
                      className="underline font-extrabold text-C22E2E "
                    >
                      {" "}
                      en suivant ce lien
                    </a>{" "}
                    avant de soumettre votre devis.
                  </li>
                  <li>
                    3. Indiquez vos moyens budgétaires pour nous aider à
                    déterminer les tarifs qui correspondent à votre service.
                    Avant de soumettre votre devis, consultez notre page «{" "}
                    <span className="font-extrabold">Tarifs</span> »{" "}
                    <a
                      href="/tarifs"
                      className="underline font-extrabold text-C22E2E "
                    >
                      {" "}
                      en suivant ce lien.
                    </a>
                  </li>
                  <li>
                    4. Si vous possédez déjà une charte graphique, veuillez
                    simplement répondre « oui » et nous l'envoyer à notre
                    adresse de contact, ou contactez-nous directement.
                  </li>
                  <br />
                  Toute l'équipe de navi studio.™ vous souhaite une excellente
                  journée ! Merci et à bientôt. ✨😎
                </ul>
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                      placeholder="Prénom"
                      type="name"
                    />
                  </div>

                  <div>
                    <input
                      className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                      placeholder="Nom"
                      type="name"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                    placeholder="E-mail"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                    placeholder="Numéro de téléphone"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                    placeholder="Code postal"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                    placeholder="Quels services établissez-vous pour la réalisation de votre projet ?"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-8"
                    placeholder="Votre budget approximatif"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mb-24"
                    placeholder="Disposez vous d'une charte graphique existante ?"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="rounded-3xl w-full p-4 outline-none input-secondary border-gray-200 text-md mt-24"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                />
                <span className="text-black">
                  {" "}
                  J'ai lu et j'accepte la Politique de confidentialité et et les
                  Conditions d'utilisation.
                </span>
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

export default DevisFree;

import NavbarDevis from "../Navigation/DevisNavbar/DevisNavbar.jsx";
import TitleDevis from "../UI/Title/TitleFormDevis.jsx";
import ImgText from "../../assets/logo-4.png";
import ButtonSend from "../UI/Button/ButtonSend.jsx";
import Footer from "../Footer/Footer.jsx";
import { useState } from "react";

const DevisFree = ({ label, type, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };
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
              <p className="text-black mb-5 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
                <span className="font-extrabold underline">
                  Veuillez prendre en considération ces directives essentielles
                  :
                </span>
                <ul>
                  <br />
                  <li data-aos="zoom-in" data-aos-duration="300">
                    <span className="font-extrabold">1</span>. Assurez-vous de
                    fournir des informations complètes afin que nous puissions
                    vous recontacter rapidement.
                  </li>
                  <br />
                  <li data-aos="zoom-in" data-aos-duration="300">
                    <span className="font-extrabold">2</span>. Renseignez le
                    service que vous souhaitez afin que nous puissions élaborer
                    votre projet en conséquence. N'hésitez pas à consulter notre
                    page « <span className="font-extrabold">Services</span> »{" "}
                    <a
                      href="/services"
                      className="underline font-extrabold text-C22E2E"
                    >
                      {" "}
                      en cliquant sur ce lien
                    </a>{" "}
                    avant de soumettre votre devis.
                  </li>
                  <br />
                  <li data-aos="zoom-in" data-aos-duration="300">
                    <span className="font-extrabold">3</span>. Indiquez vos
                    moyens budgétaires pour nous aider à déterminer les tarifs
                    qui correspondent à votre service. Avant de soumettre votre
                    devis, consultez notre page «{" "}
                    <span className="font-extrabold">Tarifications</span> »{" "}
                    <a
                      href="/tarifs"
                      className="underline font-extrabold text-C22E2E"
                    >
                      {" "}
                      en cliquant sur ce lien
                    </a>
                    .
                  </li>
                  <br />
                  <li data-aos="zoom-in" data-aos-duration="300">
                    <span className="font-extrabold">4</span>. Si vous possédez
                    déjà une charte graphique, veuillez simplement répondre «{" "}
                    <span className="font-extrabold">oui</span> » et nous
                    l'envoyer à notre adresse de contact, ou contactez-nous
                    directement.
                  </li>
                </ul>
              </p>
              <div className="flex justify-center">
                <a
                  className="text-FFF6E4 font-extrabold underline transition hover:text-C22E2E"
                  href="/"
                >
                  Retourner à la page d'Accueil ➔
                </a>
              </div>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <label
                      className={`mt-1 absolute left-2 transition-all duration-300 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-500"
                      }`}
                      htmlFor={label}
                    >
                      {"Prénom"}
                    </label>
                    <input
                      type={type}
                      id={label}
                      className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                      value={value}
                      onChange={onChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="relative">
                    <label
                      className={`mt-1 absolute left-2 transition-all duration-300 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-500"
                      }`}
                      htmlFor={label}
                    >
                      {"Nom"}
                    </label>
                    <input
                      type={type}
                      id={label}
                      className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                      value={value}
                      onChange={onChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Adresse mail"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Numéro de téléphone"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Code postal"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {
                      "Quels services établissez-vous pour la réalisation de votre projet ?"
                    }
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Votre budget approximatif ?"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Disposez-vous d'une charte graphique existante ?"}
                  </label>
                  <input
                    type={type}
                    id={label}
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm"
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Écrivez-nous"}
                  </label>
                  <textarea
                    className="rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm "
                    rows="8"
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                />
                <span className="text-black">
                  {" "}
                  En fournissant vos informations personnelles, vous consentez à
                  ce que{" "}
                  <span>
                    <img
                      src={ImgText}
                      className="h-10 mr-1 inline"
                      alt="Icône Navi Studio"
                    />
                  </span>
                  collecte et traite ces données conformément à sa Politique de
                  Confidentialité.{" "}
                  <a
                    href="/privacy"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Lire la Politique de Confidentialité
                  </a>{" "}
                  et{" "}
                  <a
                    href="/privacy"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Conditions d'Utilisation
                  </a>
                  .
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

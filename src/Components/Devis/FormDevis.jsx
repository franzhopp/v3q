import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import NavbarDevis from "../Navigation/PagesNavbar/PagesNavbar.jsx";
import TitleDevis from "../UI/Title/TitleFormDevis.jsx";
import ImgText from "../../assets/logo-4.png";
import ButtonSend from "../UI/Button/ButtonSend.jsx";
import Footer from "../Footer/Footer.jsx";

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

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    codepostal: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
    message: "",
    privacy: "",
    conditions: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    codepostal: "",
    info1: "",
    info2: "",
    info3: "",
    info4: "",
    message: "",
    privacy: "",
    conditions: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "Veuillez entrer un prénom.";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Veuillez entrer un nom.";
    }

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    }

    if (!formData.codepostal) {
      newErrors.codepostal = "Veuillez entrer un code postal.";
    }

    if (!formData.info1) {
      newErrors.info1 = "Veuillez entrer une information.";
    }

    if (!formData.info2) {
      newErrors.info2 = "Veuillez entrer une information.";
    }

    if (!formData.info3) {
      newErrors.info3 = "Veuillez entrer une information.";
    }

    if (!formData.info4) {
      newErrors.info4 = "Veuillez entrer une information.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
    }

    if (!formData.privacy) {
      newErrors.privacy =
        "Vous devez accepter la politique de confidentialité pour continuer.";
    }

    if (!formData.conditions) {
      newErrors.conditions =
        "Vous devez accepter la condition d'utilisation.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const emailParams = {
      to_name: "Mélissa & Louisa",
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      tel: formData.tel,
      codepostal: formData.codepostal,
      info1: formData.info1,
      info2: formData.info2,
      info3: formData.info3,
      info4: formData.info4,
      message: formData.message,
      privacy: formData.privacy,
      conditions: formData.conditions,
    };

    try {
      const response = await emailjs.send(
        "service_564zhfb6",
        "template_m6iriey",
        emailParams
      );

      // console.log("Email envoyé !", response.status, response.text);
      setStatus("Merci ! Votre contact a bien été envoyé.");
    } catch (error) {
      // console.error("Erreur d'envoi d'e-mail.", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);

  return (
    <section className="bg-FFF6E4 bg-contact-blur">
      <NavbarDevis />
      <div>
        <TitleDevis />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p className="text-black font-extrabold text-2xl sm:text-3xl max-w-xl ml-6 sm:ml-0">
              Avant de soumettre un devis, nous vous invitons à lire
              attentivement ces lignes.
            </p>
            <div className="mt-8">
              <p className="text-black text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
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
                  <li data-aos="fade-right" data-aos-duration="200">
                    <span className="font-extrabold">1</span>. Assurez-vous de
                    fournir des informations complètes afin que nous puissions
                    vous recontacter rapidement.
                  </li>
                  <br />
                  <li data-aos="fade-left" data-aos-duration="200">
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
                  <li data-aos="fade-right" data-aos-duration="200">
                    <span className="font-extrabold">3</span>. Indiquez vos
                    moyens budgétaires pour nous aider à déterminer les tarifs
                    qui correspondent à votre service. Avant de soumettre votre
                    devis, consultez notre page «{" "}
                    <span className="font-extrabold">Tarification</span> »{" "}
                    <a
                      href="/rate"
                      className="underline font-extrabold text-C22E2E"
                    >
                      {" "}
                      en cliquant sur ce lien
                    </a>
                    .
                  </li>
                  <br />
                  <li data-aos="fade-left" data-aos-duration="200">
                    <span className="font-extrabold">4</span>. Si vous possédez
                    déjà une charte graphique, veuillez simplement répondre «{" "}
                    <span className="font-extrabold">oui</span> » et nous
                    l'envoyer à notre adresse de contact, ou contactez-nous
                    directement, merci.
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
              <div onSubmit={handleSubmit} class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative pb-5">
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
                      className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                        errors.firstname ? "input-error border-red-700" : ""
                      }`}
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {errors.firstname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.firstname}
                      </p>
                    )}
                  </div>

                  <div className="relative pb-5">
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
                      className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                        errors.lastname ? "input-error border-red-700" : ""
                      }`}
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    {errors.lastname && (
                      <p className="text-left font-sans-serif text-red-700">
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative pb-5">
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
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.email ? "input-error border-red-700" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
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
                    type={"tel"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.tel ? "input-error border-red-700" : ""
                    }`}
                    id="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.tel && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.tel}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
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
                    type={"tel"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.codepostal ? "input-error border-red-700" : ""
                    }`}
                    id="codepostal"
                    name="codepostal"
                    value={formData.codepostal}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.codepostal && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.codepostal}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Quels services établissez-vous ?"}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info1 ? "input-error border-red-700" : ""
                    }`}
                    id="info1"
                    name="info1"
                    value={formData.info1}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info1 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info1}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
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
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info2 ? "input-error border-red-700" : ""
                    }`}
                    id="info2"
                    name="info2"
                    value={formData.info2}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info2 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info2}
                    </p>
                  )}
                </div>
                <div className="relative pb-5">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"À quelle date ?"}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info3 ? "input-error border-red-700" : ""
                    }`}
                    id="info3"
                    name="info3"
                    value={formData.info3}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info3 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info3}
                    </p>
                  )}
                </div>
                <div className="relative pb-28">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Avez-vous une charte graphique ?"}
                  </label>
                  <input
                    type={"text"}
                    className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                      errors.info4 ? "input-error border-red-700" : ""
                    }`}
                    id="info4"
                    name="info4"
                    value={formData.info4}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {errors.info4 && (
                    <p className="text-left font-sans-serif text-red-700">
                      {errors.info4}
                    </p>
                  )}
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
                  {"Écrivez-nous afin d'en savoir plus"}
                </label>
                <textarea
                  className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                    errors.firstname ? "input-error border-red-700" : ""
                  }`}
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                  value={formData.privacy}
                />
                <span className="text-black">
                  {" "}
                  En cochant cette case, je certifie avoir pris connaissance et
                  accepté les Conditions d'Utilisation et la Politique de
                  Confidentialité.
                </span>
                {errors.privacy && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.privacy}
                  </p>
                )}
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                  value={formData.conditions}
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
                {errors.conditions && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.conditions}
                  </p>
                )}
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
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

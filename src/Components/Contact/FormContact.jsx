import Title from "../UI/Title/TitleFormContact";
import ImgText from "../../assets/logo-4.png";
import emailjs from "emailjs-com";
import ButtonSend from "../UI/Button/ButtonSend";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Form = ({ label, type, value }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState("");

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
    info1: "",
    info2: "",
    message: "",
    privacy: "",
    conditions: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    info1: "",
    info2: "",
    message: "",
    privacy: "",
    conditions: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // text
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexNumber = /^\d+$/;

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
    } else if (!regexNumber.test(formData.tel)) {
      newErrors.tel =
        "Le numéro de téléphone doit contenir uniquement des chiffres.";
    }

    if (!formData.info1) {
      newErrors.info1 = "Veuillez entrer une information.";
    }

    if (!formData.info2) {
      newErrors.info2 = "Veuillez entrer une information.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
    }

    if (!formData.privacy) {
      newErrors.privacy =
        "Vous devez accepter la politique de Confidentialité pour continuer.";
    }

    if (!formData.conditions) {
      newErrors.conditions =
        "Vous devez accepter la politique de Condition d'Utilisation.";
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
      info1: formData.info1,
      info2: formData.info2,
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
      setStatus("Votre contact est envoyé. Merci !");
    } catch (error) {
      // console.error("Erreur d'envoi d'e-mail.", error);
      setStatus("Une erreur s'est produite.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);

  return (
    <section className="bg-FFF6E4 bg-contact-blur">
      <div>
        <Title />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p
              data-aos="fade-left"
              className="text-black font-extrabold text-2xl sm:text-4xl max-w-xl ml-6 sm:ml-0"
            >
              Si vous recherchez une agence digitale qui peut donner vie à votre
              projet numérique, qui excelle dans le design et le développement
              web, ne cherchez pas plus loin. Choisissez
              <img
                src={ImgText}
                className="h-8 sm:h-12 ml-1 inline"
                alt="Icône navi studio."
              />
            </p>

            <div className="mt-8">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-lg sm:text-2xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                {`Contactez-nous aujourd'hui pour discuter de
          votre projet et découvrir comment nous pouvons vous aider à briller
          sur le web. Votre succès numérique est notre mission.`}
              </p>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div action="" class="space-y-4">
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
                    {"Le meilleur moyen de vous contacter ?"}
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

                <div className="relative pb-20">
                  <label
                    className={`mt-1 absolute left-2 transition-all duration-300 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-500"
                    }`}
                    htmlFor={label}
                  >
                    {"Le meilleur moment de vous contacter ?"}
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
              </div>

              <div>
                <input
                  className="outline-none input-secondary border-gray-200 mr-1"
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
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
                  name="conditions"
                  checked={formData.conditions}
                  onChange={handleCheckboxChange}
                />
                <span className="text-black">
                  {" "}
                  En fournissant vos informations personnelles, vous consentez à
                  ce que{" "}
                  <span>
                    <img
                      src={ImgText}
                      className="h-6 mr-1 inline"
                      alt="Icône Navi Studio"
                    />
                  </span>
                  collecte et traite ces données conformément à sa Politique de
                  Confidentialité.{" "}
                  <NavLink
                    to="/privacy"
                    rel="noreferrer"
                    target="_blank"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Lire la Politique de Confidentialité
                  </NavLink>{" "}
                  et{" "}
                  <NavLink
                    to="/terms"
                    rel="noreferrer"
                    target="_blank"
                    className="underline font-extrabold text-0C3E78"
                  >
                    Conditions d'Utilisation
                  </NavLink>
                  .
                </span>
                {errors.conditions && (
                  <p className="text-left font-sans-serif text-red-700">
                    {errors.conditions}
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-5">
                <button type="submit" onClick={handleSubmit}>
                  {isLoading ? (
                    <div
                      className="animate-spin inline-block w-6 h-6 mt-2 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <ButtonSend />
                  )}
                </button>
              </div>
            </form>
            <div className="text-00E189 text-center font-extrabold pt-5">
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

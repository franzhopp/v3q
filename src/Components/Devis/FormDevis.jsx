import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import NavbarDevis from "../Navigation/PagesNavbar/PagesNavbar.jsx";
import TitleDevis from "../UI/Title/TitleFormDevis.jsx";
import ImgText from "../../assets/logo-4.png";
import ButtonSend from "../UI/Button/ButtonSend.jsx";
import Footer from "../Footer/Footer.jsx";

const DevisFree = ({ label, type, value }) => {
  const [status, setStatus] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { language } = useLanguage();
  const handleFocus = () => {
    setIsFocused(true);
  };
  // const offFocusClick = () => {
  //   setIsFocused(false);
  // };
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
      newErrors.email = "Veuillez entrer une adresse E-mail* valide.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    } else if (!regexNumber.test(formData.tel)) {
      newErrors.tel =
        "Le numéro de téléphone doit contenir uniquement des chiffres.";
    }

    if (!formData.codepostal) {
      newErrors.codepostal = "Veuillez entrer un code postal.";
    } else if (!regexNumber.test(formData.codepostal)) {
      newErrors.codepostal =
        "Le code postal doit contenir uniquement des chiffres.";
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
      newErrors.conditions = "Vous devez accepter la condition d'utilisation.";
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
      setStatus("Votre devis est enregistré. Merci !");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setStatus("Une erreur s'est produite.");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    emailjs.init("E-u_BQRxlwXZIR-_Y");
  }, []);
  return (
    <section className="bg-FFF6E4 bg-contact-blur">
      <NavbarDevis />
      <TitleDevis />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p
              data-aos="fade-right"
              className="text-black text-2xl sm:text-3xl font-extrabold max-w-xl ml-6 sm:ml-0"
            >
              {translations[language].titleInfoFreeFr}
              {translations[language].titleInfoFreeEn}
              <div className="flex justify-start">
                <span className="absolute w-16 h-1 bg-C22E2E"></span>
              </div>
            </p>
            <div className="mt-8">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span>
                  {translations[language].describeInfoFree1Fr}
                  {translations[language].describeInfoFree1En}{" "}
                </span>
              </p>
              <br />
              <p
                data-aos="fade-left"
                className="text-black mb-5 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span className="font-extrabold underline">
                  {translations[language].describleInfoFree2Fr}
                  {translations[language].describleInfoFree2En}
                </span>
              </p>

              <p className="text-black mb-5 text-lg sm:text-xl w-80 sm:w-96 ml-6 sm:ml-0">
                <ul>
                  <br />
                  <li data-aos="fade-right">
                    <span className="font-extrabold">1</span>.
                    {translations[language].bloc1FreeFr}
                    {translations[language].bloc1FreeEn}
                  </li>
                  <br />
                  <li data-aos="fade-left">
                    <span className="font-extrabold">2</span>.{" "}
                    {translations[language].bloc2FreeFr}
                    {translations[language].bloc2FreeEn}{" "}
                    <a
                      href="/services"
                      className="underline font-extrabold text-C22E2E"
                    >
                      {" "}
                      {translations[language].linkBlocFreeFr}
                      {translations[language].linkBlocFreeEn}
                    </a>{" "}
                    {translations[language].bloc2dFreeFr}
                    {translations[language].bloc2dFreeEn}
                  </li>
                  <br />
                  <li data-aos="fade-right">
                    <span className="font-extrabold">3</span>.{" "}
                    {translations[language].bloc3FreeFr}
                    {translations[language].bloc3FreeEn}{" "}
                    <a
                      href="/rate"
                      className="underline font-extrabold text-C22E2E"
                    >
                      {" "}
                      {translations[language].linkBlocFreeFr}
                      {translations[language].linkBlocFreeEn}
                    </a>
                    .
                  </li>
                  <br />
                  <li data-aos="fade-left">
                    <span className="font-extrabold">4</span>.{" "}
                    {translations[language].bloc4FreeFr}
                    {translations[language].bloc4FreeEn}
                  </li>
                </ul>
              </p>
              <div className="flex flex-col text-left mx-6">
                <NavLink
                  to="/services"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-C22E2E"
                >
                  {translations[language].linkServicesFr}
                  {translations[language].linkServicesEn}
                </NavLink>
                <NavLink
                  to="/rate"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-C22E2E"
                >
                  {translations[language].linkRateFr}
                  {translations[language].linkRateEn}
                </NavLink>
                <NavLink
                  to="/"
                  className="text-FFF6E4 font-extrabold underline transition hover:text-C22E2E"
                >
                  {translations[language].linkHomeFr}
                  {translations[language].linkHomeEn}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div onSubmit={handleSubmit} class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative pb-5">
                    <label
                      // onClick={offFocusClick}
                      className={`mt-1 absolute left-2 transition-all duration-200 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-700"
                      }`}
                      htmlFor={label}
                    >
                      {translations[language].nameFr}
                      {translations[language].nameEn}
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
                      // onClick={offFocusClick}
                      className={`mt-1 absolute left-2 transition-all duration-200 ${
                        isFocused || value
                          ? "ml-2 mt-1 text-xs text-0C3E78"
                          : "ml-2 top-3 text-gray-700"
                      }`}
                      htmlFor={label}
                    >
                      {translations[language].surnameFr}
                      {translations[language].surnameEn}
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {"E-mail*"}
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].phoneFr}
                    {translations[language].phoneEn}
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
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
                  // onClick={offFocusClick}
                  className={`mt-1 absolute left-2 transition-all duration-200 ${
                    isFocused || value
                      ? "ml-2 mt-1 text-xs text-0C3E78"
                      : "ml-2 top-3 text-gray-700"
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
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleCheckboxChange}
                />
                <span className="text-black">
                  {" "}
                  {translations[language].conditions1Fr}
                  {translations[language].conditions1En}
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
                  {translations[language].conditions2Fr}
                  {translations[language].conditions2En}{" "}
                  <span>
                    <img
                      src={ImgText}
                      className="h-6 mr-1 inline"
                      alt="Icône navi studio."
                    />
                  </span>
                  {translations[language].conditions3Fr}
                  {translations[language].conditions3En}{" "}
                  <NavLink
                    to="/privacy"
                    rel="noreferrer"
                    target="_blank"
                    className="underline font-extrabold text-0C3E78"
                  >
                    {translations[language].linkConditions1Fr}
                    {translations[language].linkConditions1En}
                  </NavLink>
                  ,{" "}
                  <NavLink
                    to="/mentions"
                    rel="noreferrer"
                    target="_blank"
                    className="underline font-extrabold text-0C3E78"
                  >
                    {translations[language].linkConditions2Fr}
                    {translations[language].linkConditions2En}
                  </NavLink>
                  , &{" "}
                  <NavLink
                    to="/terms"
                    rel="noreferrer"
                    target="_blank"
                    className="underline font-extrabold text-0C3E78"
                  >
                    {translations[language].linkConditions3Fr}
                    {translations[language].linkConditions3En}
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
      <Footer />
    </section>
  );
};

export default DevisFree;

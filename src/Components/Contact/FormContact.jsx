import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../UI/Title/TitleFormContact";
import ImgText from "../../assets/logo-4.png";
import emailjs from "emailjs-com";
import ButtonSend from "../UI/Button/ButtonSend";
import "../Navigation/BaseNavbar.jsx";

const Form = ({ label, type, value }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState("");
  const { language } = useLanguage();
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
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
      setStatus("Votre contact est enregistré. Merci !");
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
      <Title />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <p className="text-black text-2xl font-extrabold sm:text-4xl max-w-xl ml-6 sm:ml-0">
              {translations[language].describeContactFr}
              {translations[language].describeContactEn}
              <img
                src={ImgText}
                className="h-8 sm:h-12 ml-1 inline"
                alt="Icône navi studio."
              />
            </p>

            <div className="mt-10">
              <p
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-black text-lg sm:text-2xl w-80 sm:w-96 ml-6 sm:ml-0"
              >
                <span className="absolute h-72 w-1 bg-C22E2E -left-7 bottom-20 hidden sm:block"></span>
                <span className="absolute h-64 w-1 bg-C22E2E -left-10 bottom-2 hidden sm:block"></span>
                {translations[language].textContactFr}
                {translations[language].textContactEn}
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <Link onClick={scrollToTop}>
                <svg
                  className="shadow-2xl rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="95"
                  height="95"
                  viewBox="0 0 95 95"
                  fill="none"
                >
                  <g clip-path="url(#clip0_15_2)">
                    <path
                      d="M47.5 95C73.7335 95 95 73.7335 95 47.5C95 21.2665 73.7335 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95Z"
                      fill="#171614"
                    />
                    <path
                      d="M49.8064 23.584C48.4393 22.2174 46.2233 22.2177 44.8566 23.5847L22.5859 45.8618C21.2192 47.2287 21.2195 49.4448 22.5866 50.8115C23.9536 52.1782 26.1697 52.1779 27.5363 50.8108L47.3325 31.009L67.1343 50.8052C68.5013 52.1719 70.7174 52.1716 72.084 50.8045C73.4507 49.4375 73.4504 47.2214 72.0833 45.8548L49.8064 23.584ZM50.8383 72.0588L50.8318 26.0588L43.8318 26.0598L43.8383 72.0598L50.8383 72.0588Z"
                      fill="#FFF6E4"
                    />
                  </g>
                </svg>
                {/* {translations[language].linkTopContactFr}
                {translations[language].linkTopContactEn} */}
              </Link>
            </div>
          </div>

          <div className="bg-contact p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div action="" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative pb-5">
                    <label
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
                    {"E-mail"}
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
                    {translations[language].info1Fr}
                    {translations[language].info1En}
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
                    // onClick={offFocusClick}
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].info2Fr}
                    {translations[language].info2En}
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
                    className={`mt-1 absolute left-2 transition-all duration-200 ${
                      isFocused || value
                        ? "ml-2 mt-1 text-xs text-0C3E78"
                        : "ml-2 top-3 text-gray-700"
                    }`}
                    htmlFor={label}
                  >
                    {translations[language].messageFr}
                    {translations[language].messageEn}
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
    </section>
  );
};

export default Form;

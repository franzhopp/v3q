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
      newErrors.email = "Veuillez entrer une adresse E-mail* valide.";
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
        <div className="grid grid-cols-1 gap-x-16 gap-y-5 lg:grid-cols-5">
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
              <div className="flex justify-center">
                <span className="absolute w-28 h-1 bg-C22E2E"></span>
              </div>
            </div>
            <div className="flex justify-start sm:justify-center mt-10 mb-10 w-80 sm:w-96 ml-6 sm:ml-0">
              <Link onClick={scrollToTop}>
                <svg
                  className="rounded-full shadow-lg"
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
            <div className="flex justify-end">
              <svg
                // data-aos="fade-up-right"
                className="absolute top-32 -right-16"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 202 202"
                fill="none"
              >
                <path
                  d="M101 0L107.22 45.7993L123.475 2.53228L119.347 48.5673L144.822 10.0021L130.554 53.9645L163.972 22.035L140.28 61.7202L179.965 38.0275L148.036 71.4456L191.998 57.1777L153.433 82.653L199.468 78.5254L156.201 94.7804L202 101L156.201 107.22L199.468 123.475L153.433 119.347L191.998 144.822L148.036 130.554L179.965 163.972L140.28 140.28L163.972 179.965L130.554 148.036L144.822 191.998L119.347 153.433L123.475 199.468L107.22 156.201L101 202L94.7804 156.201L78.5254 199.468L82.653 153.433L57.1777 191.998L71.4456 148.036L38.0275 179.965L61.7202 140.28L22.035 163.972L53.9645 130.554L10.0021 144.822L48.5673 119.347L2.53228 123.475L45.7993 107.22L0 101L45.7993 94.7804L2.53228 78.5254L48.5673 82.653L10.0021 57.1777L53.9645 71.4456L22.035 38.0275L61.7202 61.7202L38.0275 22.035L71.4456 53.9645L57.1777 10.0021L82.653 48.5673L78.5254 2.53228L94.7804 45.7993L101 0Z"
                  fill="#E18AB0"
                />
              </svg>
            </div>
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
              <div className="flex justify-start">
                <svg
                  // data-aos="fade-up-left"
                  className="absolute -rotate-6 -left-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 191 190"
                  fill="none"
                >
                  <path
                    d="M90.325 38.9305L95.5 10.1342L100.675 38.9305C101.266 42.2213 105.694 42.8886 107.229 39.9184L120.662 13.9268L117.119 42.9691C116.714 46.288 120.749 48.2308 123.091 45.8449L143.588 24.9674L131.643 51.6753C130.277 54.7274 133.56 57.773 136.501 56.1835L162.242 42.2753L142.954 64.2755C140.75 66.7896 142.989 70.6674 146.268 70.0156L174.965 64.3124L150.05 79.6501C147.203 81.4028 148.199 85.7682 151.525 86.1121L180.627 89.1206L152.298 96.4331C149.061 97.2687 148.726 101.734 151.803 103.043L178.726 114.496L149.5 113.133C146.16 112.977 144.524 117.146 147.078 119.303L169.429 138.183L141.903 128.266C138.757 127.133 135.966 130.634 137.771 133.449L153.563 158.078L130.184 140.488C127.512 138.478 123.812 141.001 124.707 144.222L132.539 172.412L115.382 148.713C113.421 146.004 109.143 147.324 109.048 150.666L108.223 179.912L98.8141 152.209C97.7388 149.043 93.2612 149.043 92.1859 152.209L82.7769 179.912L81.9516 150.666C81.8573 147.324 77.5786 146.004 75.6179 148.713L58.4612 172.412L66.2929 144.222C67.1879 141.001 63.4884 138.478 60.8165 140.488L37.4365 158.078L53.2294 133.449C55.0342 130.634 52.2425 127.133 49.0969 128.266L21.571 138.183L43.9219 119.303C46.4761 117.146 44.8403 112.977 41.5003 113.133L12.2745 114.496L39.1973 103.043C42.274 101.734 41.9394 97.2687 38.7019 96.4331L10.3729 89.1206L39.4754 86.1121C42.8012 85.7682 43.7976 81.4029 40.9503 79.6501L16.0352 64.3124L44.7316 70.0156C48.011 70.6674 50.2498 66.7896 48.0456 64.2755L28.7583 42.2753L54.4987 56.1835C57.4403 57.7729 60.7227 54.7274 59.3575 51.6753L47.4117 24.9675L67.909 45.8449C70.2514 48.2308 74.2857 46.288 73.8808 42.9691L70.338 13.9268L83.7709 39.9184C85.306 42.8887 89.7336 42.2213 90.325 38.9305ZM134.124 51.7846C134.125 51.784 134.127 51.7835 134.128 51.7829L134.124 51.7846ZM136.207 53.7167L136.208 53.7138C136.208 53.7148 136.207 53.7158 136.207 53.7167ZM153.548 101.274L153.551 101.274C153.55 101.274 153.549 101.274 153.548 101.274ZM111.332 151.645L111.335 151.648C111.334 151.647 111.333 151.646 111.332 151.645ZM37.4523 101.274L37.5121 101.043L37.4523 101.274C37.451 101.274 37.4498 101.274 37.4485 101.273L37.4523 101.274ZM37.24 98.4417L37.2366 98.4431C37.2377 98.4426 37.2389 98.4422 37.24 98.4417L37.3337 98.6618L37.24 98.4417ZM44.2859 67.5716C44.2853 67.5709 44.2847 67.5702 44.2841 67.5695L44.2859 67.5716ZM45.7062 65.1115L45.704 65.1111L45.7062 65.1115Z"
                    stroke="#E18AB0"
                    stroke-width="5"
                  />
                </svg>
              </div>
            </form>
            <div className="text-00E189 text-center pt-5">
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

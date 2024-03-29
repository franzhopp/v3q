import { useEffect, useState } from "react";
import { useLanguage } from "../../../../../context/LanguageProvider";
import ImgLogo from "../../../../../assets/Logo/LogoMainNaviStudio.png";
import translations from "../translate.jsx";
import ButtonSend from "../../../Button/BtnSend";
import emailjs from "emailjs-com";

const FormEmailJs = ({ label, type, value }) => {
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
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
    conditions: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    message: "",
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
      newErrors.email = "Veuillez entrer une adresse e-mail* valide.";
    }

    if (!formData.tel) {
      newErrors.tel = "Veuillez entrer un numéro de téléphone.";
    } else if (!regexNumber.test(formData.tel)) {
      newErrors.tel =
        "Le numéro de téléphone doit contenir uniquement des chiffres.";
    }

    if (!formData.message) {
      newErrors.message = "Veuillez entrer un message.";
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
      message: formData.message,
      conditions: formData.conditions,
    };

    try {
      const response = await emailjs.send(
        "service_564zhfb6",
        "template_m6iriey",
        emailParams
      );
      console.log(response);
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
    <>
      <form
        onSubmit={handleSubmit}
        className={`BgColorFilterForm rounded-3xl p-9 pb-12 shadow-lg space-y-4`}
      >
        <div className={`space-y-4`}>
          <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2`}>
            <div className={`relative pb-5`}>
              <label
                className={`mt-1 absolute left-2 transition-all duration-200 ${
                  isFocused || value
                    ? "ml-2 mt-1 text-xs text-0c3e78"
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
                  errors.firstname ? "InputError input-primary" : ""
                }`}
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {errors.firstname && (
                <p className={`text-red-700 text-left font-sans-serif`}>
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className={`relative pb-5`}>
              <label
                className={`mt-1 absolute left-2 transition-all duration-200 ${
                  isFocused || value
                    ? "ml-2 mt-1 text-xs text-0c3e78"
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
                  errors.lastname ? "InputError border-red-700" : ""
                }`}
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {errors.lastname && (
                <p className={`text-red-700 text-left font-sans-serif`}>
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>
          <div className={`relative pb-5`}>
            <label
              className={`mt-1 absolute left-2 transition-all duration-200 ${
                isFocused || value
                  ? "ml-2 mt-1 text-xs text-0c3e78"
                  : "ml-2 top-3 text-gray-700"
              }`}
              htmlFor={label}
            >
              {"E-mail*"}
            </label>
            <input
              type={type}
              className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                errors.email ? "InputError border-red-700" : ""
              }`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className={`text-red-700 text-left font-sans-serif`}>
                {errors.email}
              </p>
            )}
          </div>
          <div className={`relative pb-5`}>
            <label
              className={`mt-1 absolute left-2 transition-all duration-200 ${
                isFocused || value
                  ? "ml-2 mt-1 text-xs text-0c3e78"
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
                errors.tel ? "InputError border-red-700" : ""
              }`}
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.tel && (
              <p className={`text-red-700 text-left font-sans-serif`}>
                {errors.tel}
              </p>
            )}
          </div>
          <div className={`relative pb-5`}>
            <label
              className={`mt-1 absolute left-2 transition-all duration-200 ${
                isFocused || value
                  ? "ml-2 mt-1 text-xs text-0c3e78"
                  : "ml-2 top-3 text-gray-700"
              }`}
              htmlFor={label}
            >
              {translations[language].messageFr}
              {translations[language].messageEn}
            </label>
            <textarea
              className={`rounded-3xl w-full p-4 pb-5 outline-none input-secondary border-gray-200 text-sm ${
                errors.firstname ? "InputError border-red-700" : ""
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
              <p className={`text-red-700 text-left font-sans-serif`}>
                {errors.message}
              </p>
            )}
          </div>
        </div>
        <input
          className={`border-gray-200 outline-none input-secondary mr-1`}
          type="checkbox"
          name="conditions"
          checked={formData.conditions}
          onChange={handleCheckboxChange}
        />
        <span className={`text-fff6e4 font-extrabold`}>
          {" "}
          {translations[language].conditions2Fr}
          {translations[language].conditions2En}{" "}
          <span>
            <img
              src={ImgLogo}
              className={`h-10 mr-2 inline`}
              alt="Icône navi studio."
            />
          </span>
          {translations[language].conditions3Fr}
          {translations[language].conditions3En}{" "}
        </span>
        {errors.conditions && (
          <p className={`text-red-700 text-left font-sans-serif`}>
            {errors.conditions}
          </p>
        )}
        <div className={`flex justify-center pt-5`}>
          <button type="submit" onClick={handleSubmit}>
            {isLoading ? (
              <div
                className={`text-white animate-spin inline-block w-6 h-6 mt-2 border-[3px] border-current border-t-transparent rounded-full`}
                role="status"
                aria-label="loading"
              >
                <span className={`sr-only`}>Loading...</span>
              </div>
            ) : (
              <ButtonSend />
            )}
          </button>
        </div>
      </form>
      <div className={`text-3be69e tracking-tighter text-center pt-8`}>
        {status && <p>{status}</p>}
      </div>
    </>
  );
};

export default FormEmailJs;

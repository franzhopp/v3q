import translations from "./translate.jsx";
import { useLanguage } from "../../context/LanguageProvider.jsx";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Image from "../../assets/logo-4.png";
import LogoInsta from "../../assets/instagram2.png";
import LogoTwitter from "../../assets/twitter.png";
import LogoLinkedin from "../../assets/linkedin.png";
import LogoSnap from "../../assets/snapchat.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
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

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse E-mail* valide.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailParams = {
      to_name: "Mélissa & Louisa",
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        "service_564zhfb6",
        "template_m6iriey",
        emailParams
      );
      setStatus("Merci, vous êtes inscrit à la newletter.");
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
    <footer className="bg-C22E2E">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Icône navi studio."
            className="h-auto mx-auto max-w-xs"
          />
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          <div className="text-center text-black mt-8 font-semibold">
            &copy; {translations[language].copy1Fr}
            {translations[language].copy1En}{" "}
            <span className="text-FFF6E4 ">Mélissa</span> &{" "}
            <span className="text-FFF6E4 ">Louisa</span>.{" "}
            {translations[language].copy2Fr}
            {translations[language].copy2En}
          </div>
        </p>
        <div className="number text-sm text-center text-black pt-5">
          {translations[language].newletterFr}
          {translations[language].newletterEn}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center pt-1">
            <input
              type="text"
              placeholder="E-mail*"
              className={`italic rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-none w-50 p-2 pb-2 outline-none border-gray-200 text-sm ${
                errors.email ? "border-red-700" : ""
              }`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="rounded-tl-none rounded-bl-none rounded-tr-2xl rounded-br-2xl p-2 bg-FFF6E4 text-black font-extrabold transition"
            >
              {translations[language].sendFooterFr}
              {translations[language].sendFooterEn}
            </button>
          </div>
          <div className="flex justify-center pt-1">
            {errors.email && (
              <p className="text-FFF6E4 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="text-center text-sm text-FFF6E4">
            {status && <p>{status}</p>}
          </div>
        </form>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <NavLink to="/" className="text-black transition hover:text-0C3E78">
              {translations[language].navAgence}
              {translations[language].navAgency}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ethics"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navSousValuesFr}
              {translations[language].navSousValuesEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navSousAboutUsFr}
              {translations[language].navSousAboutUsEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/designer"
              className="text-black transition hover:text-0C3E78"
            >
              Designer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/webdev"
              className="text-black transition hover:text-0C3E78"
            >
              Web Developer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navServices}
              {translations[language].navServicesEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navSousServicesFr}
              {translations[language].navSousServicesEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rate"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navSousPricingFr}
              {translations[language].navSousPricingEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/devis"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].navSousFreeFr}
              {translations[language].navSousFreeEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="text-black transition hover:text-0C3E78"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-black transition hover:text-0C3E78">
              Contact
            </NavLink>
          </li>
          <li>
            <a className="text-black transition hover:text-0C3E78" href="/">
              <a href="/">🇫🇷</a> / <a href="/">🇬🇧</a>
            </a>
          </li>

          <li>
            <NavLink
              to="/privacy"
              rel="noreferrer"
              target="_blank"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].footerPrivacyFr}
              {translations[language].footerPrivacyEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              rel="noreferrer"
              target="_blank"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].footerTermsFr}
              {translations[language].footerTermsEn}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentions"
              rel="noreferrer"
              target="_blank"
              className="text-black transition hover:text-0C3E78"
            >
              {translations[language].footerMentionsFr}
              {translations[language].footerMentionsEn}
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center pt-10">
          <div className="text-black font-extrabold underline">
            {translations[language].findFr}
            {translations[language].findEn}
          </div>
        </div>
        <ul className="mt-5 flex justify-center gap-6 md:gap-8">
          <li>
            <a href="" rel="noreferrer" target="_blank">
              <img
                src={LogoTwitter}
                alt="Icône Twitter"
                className="flex-shrink-0 h-10 w-10 transition-transform transform hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/navistudio.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              <img
                src={LogoInsta}
                alt="Icône Instagram"
                className="flex-shrink-0 h-10 w-10 transition-transform transform hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a href="" rel="noreferrer" target="_blank">
              {" "}
              <img
                src={LogoLinkedin}
                alt="Icône Linkedin"
                className="flex-shrink-0 h-10 w-10 transition-transform transform hover:scale-105"
              />
            </a>
          </li>
          <li>
            <a
              href="https://t.snapchat.com/BYKwKD2r"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <img
                src={LogoSnap}
                alt="Icône Snapchat"
                className="flex-shrink-0 h-10 w-10 transition-transform transform hover:scale-105"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

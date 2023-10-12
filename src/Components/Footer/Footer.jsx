import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Image from "../../assets/logo-4.png";
import LogoInsta from "../../assets/instagram2.png";
import LogoTwitter from "../../assets/twitter.png";
import LogoLinkedin from "../../assets/linkedin.png";
import LogoSnap from "../../assets/snapchat.png";

const Footer = () => {
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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

    if (!formData.email || !regexEmail.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

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
    <>
      <footer className="bg-C22E2E">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img src={Image} alt="" className="h-auto mx-auto max-w-xs" />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            <div className="text-center text-black mt-8 font-semibold">
              &copy; Ce site web a été imaginé et mis en œuvre par{" "}
              <span className="text-FFF6E4">Mélissa</span> et{" "}
              <span className="text-FFF6E4">Louisa</span>. Tous droits réservés
              en vertu de la législation sur les droits d'auteur. Toute
              reproduction est interdite.
            </div>
          </p>

          <div className="number text-sm text-center text-black pt-5">
            Inscrivez-vous à la newletter
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center pt-1">
              <input
                type="text"
                placeholder="Votre email*"
                className={`italic rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-br-none w-50 p-2 pb-2 outline-none border-gray-200 text-sm ${
                  errors.email ? "border-red-700" : ""
                }`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <button
                onSubmit={handleSubmit}
                className="rounded-tl-none rounded-bl-none rounded-tr-2xl rounded-br-2xl p-2 bg-FFF6E4 text-black font-extrabold transition"
              >
                Valider
              </button>
            </div>
            <div className="flex justify-center pt-1">
              {errors.email && (
                <p className="text-FFF6E4 text-sm">{errors.email}</p>
              )}
            </div>
          </form>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                id="about"
                className="text-black transition hover:text-0C3E78"
                href="/"
              >
                Agence
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/ethics"
              >
                Nos Valeurs
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/services"
              >
                Qui sommes-nous ?
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/designer"
              >
                Designer
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/webdev"
              >
                Web Developer
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a className="text-black transition hover:text-0C3E78" href="/">
                Prestations
              </a>
            </li>
            <li>
              <a className="text-black transition hover:text-0C3E78" href="/">
                Tarification
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/devis"
              >
                Devis Gratuit
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href="/" className="text-black transition hover:text-0C3E78">
                Contact
              </a>
            </li>
            <li>
              <a className="text-black transition hover:text-0C3E78" href="/">
                🇬🇧 / <a href="/">🇫🇷</a>
              </a>
            </li>

            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/privacy"
              >
                Politique de Confidentialité
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/terms"
              >
                Condition d'Utilisation
              </a>
            </li>
            <li>
              <a
                className="text-black transition hover:text-0C3E78"
                href="/mentions"
              >
                Mentions Légales
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="" rel="noreferrer" target="_blank">
                <img
                  src={LogoTwitter}
                  alt="Icône Twitter"
                  className="flex-shrink-0 h-10 w-10"
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
                  className="flex-shrink-0 h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="" rel="noreferrer" target="_blank">
                {" "}
                <img
                  src={LogoLinkedin}
                  alt="Icône Linkedin"
                  className="flex-shrink-0 h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="">
                <a
                  href="https://t.snapchat.com/BYKwKD2r"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={LogoSnap}
                    alt="Icône Snapchat"
                    className="flex-shrink-0 h-10 w-10"
                  />
                </a>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

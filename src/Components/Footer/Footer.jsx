import Image from "../../assets/logo-4.png";
import LogoInsta from "../../assets/instagram2.png";
import LogoTwitter from "../../assets/twitter.png";
import LogoLinkedin from "../../assets/linkedin.png";
import LogoSnap from "../../assets/snapchat.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-C22E2E">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img src={Image} alt="" className="h-auto mx-auto max-w-xs" />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            <div className="text-center text-black mt-8 font-semibold">
              &copy; Designé, développé par{" "}
              <span className="text-FFF6E4">Mélissa</span> et{" "}
              <span className="text-FFF6E4">Louisa</span>.{" "}
              {`Les droits d'auteur de ce contenu sont protégés par la loi.`}
            </div>
          </p>

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
                href="/services"
              >
                Services
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
              <a className="text-black transition hover:text-0C3E78" href="/">
                Prestations
              </a>
            </li>
            <li>
              <a className="text-black transition hover:text-0C3E78" href="/">
                Tarifications
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

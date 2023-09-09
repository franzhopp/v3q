import Image from "../../assets/logo-4.png";
import LogoInsta from "../../assets/instagram2.png";
import LogoTwitter from "../../assets/twitter.png";
import LogoLinkedin from "../../assets/linkedin.png";

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
              <span className="text-FFF6E4">Louisa</span>. {`Les droits d'auteur de ce contenu sont protégés par la loi.`}
            </div>
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-black transition hover:text-gray-700/75"
                href="/"
              >
                À propos
              </a>
            </li>

            <li>
              <a
                className="text-black transition hover:text-gray-700/75"
                href="/"
              >
                Histoire
              </a>
            </li>

            <li>
              <a
                className="text-black transition hover:text-gray-700/75"
                href="/"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-black transition hover:text-gray-700/75"
                href="/"
              >
                Projects
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <img
                src={LogoTwitter}
                alt="icône twitter"
                className="flex-shrink-0 h-10 w-10"
              />
            </li>

            <li>
              <a href="" className="">
                {" "}
                <img
                  src={LogoInsta}
                  alt="icône instagram"
                  className="flex-shrink-0 h-10 w-10"
                />
              </a>
            </li>
            <li>
              <a href="">
                <a href="" className="">
                  {" "}
                  <img
                    src={LogoLinkedin}
                    alt="icône linkedin"
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

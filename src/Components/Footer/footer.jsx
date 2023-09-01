import Image from "../../assets/logo-4.png";
import LogoInsta from "../../assets/instagram2.png";
import LogoTwitter from "../../assets/twitter.png";
import LogoLinkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-FFF6E4 flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <img src={Image} alt="" className="h-auto mx-auto max-w-xs" />
        <div className="flex space-x-6 justify-center text-white">
          <a href="" className="">
            {" "}
            <img src={LogoInsta} alt="icône insta" className="flex-shrink-0 h-10 w-10" />
          </a>
          <a href="" className="">
            {" "}
            <img src={LogoTwitter} alt="icône twitter" className="flex-shrink-0 h-10 w-10" />
          </a>
          <a href="" className="">
            {" "}
            <img src={LogoLinkedin} alt="icône linkedin" className="flex-shrink-0 h-10 w-10" />
          </a>
        </div>
        <div className="text-center text-black mt-8 font-semibold">
          &copy; Développé, designé par <span className="text-C22E2E">Mélissa</span> et <span className="text-C22E2E">Louisa</span>. | Tous droits réservés.
        </div>
      </footer>
    </>
  );
};

export default Footer;

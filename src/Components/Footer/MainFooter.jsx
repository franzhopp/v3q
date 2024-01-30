import ImgLogo from "./Image/ImgLogo.jsx";
import FormNewletters from "./Newletters/FormNewletters.jsx";
import LinksFooter from "./LinksFooter/LinksFooter.jsx";
import LinksNetwork from "./Network/LinksNetwork.jsx";
import Copyright from "./Copyright/FooterCopyright.jsx";
import TitleNewletter from "./Newletters/TitleNewletter.jsx";

const Footer = () => {
  return (
    <footer className="bg-c22e2e">
      <div className="mx-auto max-w-5xl px-5 py-28">
        <div className="flex justify-center mr-3">
          <ImgLogo />
        </div>
        <Copyright />
        <TitleNewletter />
        <FormNewletters />
        <LinksFooter />
        <LinksNetwork />
      </div>
    </footer>
  );
};

export default Footer;

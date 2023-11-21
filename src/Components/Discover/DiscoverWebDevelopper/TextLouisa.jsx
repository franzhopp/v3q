import { NavLink } from "react-router-dom";
import PrivacyNavbar from "../../Navigation/PrivacyNavbar/PrivacyNavbar.jsx";
import ImgText from "../../../assets/logo-4.png";
import Footer from "../../Footer/Footer";

const TextLouisa = () => {
  return (
    <>
      {" "}
      <PrivacyNavbar />
      <div className="bg-FFF6E4 flex justify-center pt-40 sm:pt-20">
        <div className="w-full md:max-w-3xl p-4">
          <p className="text-black text-justify mb-4"></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TextLouisa;

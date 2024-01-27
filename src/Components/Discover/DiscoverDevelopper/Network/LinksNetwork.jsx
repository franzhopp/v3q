import { NavLink } from "react-router-dom";
import LogoInsta from "../../../../assets/instagram1.png";
import LogoLinkedin from "../../../../assets/linkedin1.png";
import LogoSnap from "../../../../assets/snapchat1.png";

const LinksNetwork = () => {
  return (
    <>
      <li>
        <NavLink
          to="https://www.instagram.com/navistudio.fr/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img
            src={LogoInsta}
            alt="Icône Instagram"
            className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="" rel="noreferrer" target="_blank">
          {" "}
          <img
            src={LogoLinkedin}
            alt="Icône Linkedin"
            className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://t.snapchat.com/BYKwKD2r"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img
            src={LogoSnap}
            alt="Icône Snapchat"
            className="flex-shrink-0 h-20 w-20 transition-transform transform hover:scale-105"
          />
        </NavLink>
      </li>
    </>
  );
};

export default LinksNetwork;

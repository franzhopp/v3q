import { NavLink } from "react-router-dom";
import LogoInsta from "../../../assets/instagram2.png";
import LogoTwitter from "../../../assets/twitter.png";
import LogoLinkedin from "../../../assets/linkedin.png";
import LogoSnap from "../../../assets/snapchat.png";

const LinksNetwork = () => {
  return (
    <ul className="flex justify-center gap-6 md:gap-8 pt-16">
      <li>
        <NavLink to="/" rel="noreferrer" target="_blank">
          <img
            src={LogoTwitter}
            alt="Icône Twitter"
            className="flex-shrink-0 h-14 w-14 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://www.instagram.com/navistudio.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          {" "}
          <img
            src={LogoInsta}
            alt="Icône Instagram"
            className="flex-shrink-0 h-14 w-14 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="" rel="noreferrer" target="_blank">
          {" "}
          <img
            src={LogoLinkedin}
            alt="Icône Linkedin"
            className="flex-shrink-0 h-14 w-14 transform active:scale-75 transition-transform"
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
            className="flex-shrink-0 h-14 w-14 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
    </ul>
  );
};

export default LinksNetwork;

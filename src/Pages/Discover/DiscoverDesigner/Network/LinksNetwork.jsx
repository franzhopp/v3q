import { NavLink } from "react-router-dom";
import LogoInsta from "../../../../assets/Network/InstagramBlack.png";
import LogoLinkedin from "../../../../assets/Network/LinkedinBlack.png";
import LogoSnap from "../../../../assets/Network/SnapchatBlack.png";

const LinksNetwork = () => {
  return (
    <>
      <li>
        <NavLink
          to="https://www.instagram.com/navistudio.uk/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img
            src={LogoInsta}
            alt="Icône Instagram"
            className="flex-shrink-0 h-20 w-20 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="" rel="noreferrer" target="_blank">
          {" "}
          <img
            src={LogoLinkedin}
            alt="Icône Linkedin"
            className="flex-shrink-0 h-20 w-20 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="https://t.Snapchat.com/BYKwKD2r"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <img
            src={LogoSnap}
            alt="Icône Snapchat"
            className="flex-shrink-0 h-20 w-20 transform active:scale-75 transition-transform"
          />
        </NavLink>
      </li>
    </>
  );
};

export default LinksNetwork;

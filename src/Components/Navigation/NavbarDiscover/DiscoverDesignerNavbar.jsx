import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../Homepage/Homepage";

const NavbarDiscoverDesigner = () => {
  return (
    <div className="picture-bannier-melissa pt-96 bg-no-repeat bg-cover">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default NavbarDiscoverDesigner;

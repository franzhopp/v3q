import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../../Home/Homepage";

const NavbarDiscoverDesigner = () => {
  return (
    <div className="PictureBannierMelissa h-96 bg-cover bg-left lg:bg-center">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default NavbarDiscoverDesigner;

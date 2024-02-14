import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../Homepage/Homepage.jsx";

const NavbarDiscoverDesigner = () => {
  return (
    <div className="picture-bannier-melissa h-96 bg-left lg:bg-center bg-cover">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default NavbarDiscoverDesigner;

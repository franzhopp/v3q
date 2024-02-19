import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../../Home/Homepage";

const NavbarDiscoverWebDevelopper = () => {
  return (
    <div className="bg-c22e2e h-96 w-full bg-cover bg-center">
      <LinksNavbarDesktop />
      <LinksNavbarMobile />
    </div>
  );
};

export default NavbarDiscoverWebDevelopper;

import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../../Home/Homepage";

const NavbarDiscoverWebDevelopper = () => {
  return (
    <div className={`WireBannier`}>
      <div className={`PictureBannierLouisa h-96 w-full`}>
        <LinksNavbarDesktop />
        <LinksNavbarMobile />
      </div>
    </div>
  );
};

export default NavbarDiscoverWebDevelopper;

import LinksNavbarDesktop from "../LinksNavbarDestkop.jsx";
import LinksNavbarMobile from "../LinksNavbarMobile.jsx";
import "../../Section/TextHome/MainBlocsHome.jsx";
import "../../../Home/Homepage";

const NavbarDiscoverDesigner = () => {
  return (
    <div className={`WireBannier`}>
      <div
        className={`PictureBannierMelissa h-96 bg-left lg:bg-center`}
      >
        <LinksNavbarDesktop />
        <LinksNavbarMobile />
      </div>
    </div>
  );
};

export default NavbarDiscoverDesigner;

import ImageLogo from "../../../assets/Logo/LogoWhiteNaviStudio.png";

const ImgLogo = () => {
  return (
    <img
      src={ImageLogo}
      alt="Icône navi studio."
      className="h-14 w-auto transform active:scale-75 transition-transform"
    />
  );
};

export default ImgLogo;

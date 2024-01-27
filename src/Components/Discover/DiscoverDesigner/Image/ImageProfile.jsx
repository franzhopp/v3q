import ImageDesigner from "../../../../assets/picture-melissa.png";

const ImageProfile = () => {
  return (
    <img
      src={ImageDesigner}
      className="h-80 w-80 sm:h-96 sm:w-96 transition hover:opacity-90"
    />
  );
};

export default ImageProfile;

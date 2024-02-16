import ImageDesigner from "../../../../assets/Picture/PictureMelissa.png";

const ImageProfile = () => {
  return (
    <img
      src={ImageDesigner}
      className="h-80 w-80 sm:h-96 sm:w-96 transition duration-500 hover:opacity-90"
    />
  );
};

export default ImageProfile;

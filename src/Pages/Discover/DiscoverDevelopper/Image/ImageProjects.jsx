import ImgP from "../../../../assets/Picture/PictureProjectsLouisa.png";
import ImgT from "../../../../assets/Picture/PictureHoverProjectsLouisa.png";
import { useState } from "react";

const ImageProjects = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <img
      src={`${isHovered ? ImgP : ImgT}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ImageProjects;

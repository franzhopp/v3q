import ImgP from "../../../../assets/projectslouisans.png";
import ImgT from "../../../../assets/hoverimg.png";
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

import ImageGallery1 from "../../../../assets/art1.png";
import ImageGallery2 from "../../../../assets/art2.png";
import ImageGallery3 from "../../../../assets/art3.png";

const ImageGallery = () => {
  return (
    <>
      <img src={ImageGallery1} data-aos="fade-in" />
      <img src={ImageGallery2} data-aos="fade-in" />
      <img src={ImageGallery3} data-aos="fade-in" />
    </>
  );
};

export default ImageGallery;

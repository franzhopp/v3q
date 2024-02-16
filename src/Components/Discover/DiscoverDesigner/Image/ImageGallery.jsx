import ImageGallery1 from "../../../../assets/Artwork/Art1.png";
import ImageGallery2 from "../../../../assets/Artwork/Art2.png";
import ImageGallery3 from "../../../../assets/Artwork/Art3.png";

const ImageGallery = () => {
  return (
    <>
      <img
        src={ImageGallery1}
        data-aos="fade-in"
        className="transition duration-500 hover:opacity-90"
      />
      <img
        src={ImageGallery2}
        data-aos="fade-in"
        className="transition duration-500 hover:opacity-90"
      />
      <img
        src={ImageGallery3}
        data-aos="fade-in"
        className="transition duration-500 hover:opacity-90"
      />
    </>
  );
};

export default ImageGallery;

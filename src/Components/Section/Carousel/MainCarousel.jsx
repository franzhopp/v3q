import Carousel from "./Carousel.jsx";
// import { useTheme } from "../../../context/ThemeProvider.jsx";
import Img0 from "../../../assets/Pays/Toulouse.png";
import Img1 from "../../../assets/Pays/Strasbourg.png";
import Img2 from "../../../assets/Pays/Versailles.png";
import Img3 from "../../../assets/Pays/Bruges.png";
import Img4 from "../../../assets/Pays/Atonium.png";
// import Img5 from "../../../assets/Pays/Bruxelles.png";
import Img6 from "../../../assets/Pays/LondonUk.png";
import Img7 from "../../../assets/Pays/Espagne.png";
import Img8 from "../../../assets/Pays/Floride.png";
import Img9 from "../../../assets/Pays/Boston.png";

const slides = [
  {
    image: Img0,
    title: "Toulouse, 31000",
    country: "France 🇫🇷",
  },
  {
    image: Img1,
    title: "Strasbourg, 67000",
    country: "France 🇫🇷",
  },
  {
    image: Img2,
    title: "Versailles, 78646",
    country: "France 🇫🇷",
  },
  {
    image: Img3,
    title: "Bruges, 8000",
    country: "Belgique 🇧🇪",
  },
  {
    image: Img4,
    title: "Atomium, 1020",
    country: "Belgique 🇧🇪",
  },
  // {
  //   image: Img5,
  //   title: "Bruxelles, 3000",
  //   country: "Belgique 🇧🇪",
  // },
  {
    image: Img6,
    title: "Londres, SW1X 7LX",
    country: "Royaume-Uni 🇬🇧",
  },
  {
    image: Img7,
    title: "Barcelone, 08001",
    country: "Espagne 🇪🇸",
  },
  {
    image: Img8,
    title: "Atlantic Beach, 32233",
    country: "États-Unis 🇺🇸",
  },
  {
    image: Img9,
    title: "Boston Massachusetts, 02186",
    country: "États-Unis 🇺🇸",
  },
];

export default function MainCarousel() {
    // const { isDarkMode } = useTheme();
  return (
    <div className={`flex justify-center pt-10`}>
      <Carousel autoSlide={true} autoSlideInterval={1000}>
        {slides.map((slide, index) => (
          <img key={index} src={slide.image} />
        ))}
        {/* <p
          className={`font-arial tracking-tighter mt-6 text-center font-extrabold text-base overflow-auto p-5 h-40 ${
            isDarkMode ? "text-black" : "text-fff6e4"
          }`}
        >
          <div className="flex flex-col justify-center">
            <span>{slides.title}</span>
            <span>{slides.country}</span>
          </div>
        </p> */}
      </Carousel>
    </div>
  );
}

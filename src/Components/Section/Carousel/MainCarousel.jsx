import Carousel from "./Carousel.jsx";
import Img1 from "../../../assets/Pays/Toulouse.png";
import Img3 from "../../../assets/Pays/Bruges.png";
import Img5 from "../../../assets/Pays/Boston.png";
import Img6 from "../../../assets/Pays/Espagne.png";
// import Img7 from "../../../assets/Pays/Mexique.png";
import Img8 from "../../../assets/Pays/Japon.png";
import Img9 from "../../../assets/Pays/Malaisie.png";
import Img10 from "../../../assets/Pays/Luxembourg.png";

const cards = [
  {
    image: Img1,
    title: "Toulouse, 31000",
    country: "France 🇫🇷",
  },
  {
    image: Img3,
    title: "Bruges, 8000",
    country: "Belgique 🇧🇪",
  },
  {
    image: Img10,
    title: "Palais Grand-Ducal, 1728",
    country: "Luxembourg 🇱🇺",
  },
  {
    image: Img6,
    title: "Barcelone, 08001",
    country: "Espagne 🇪🇸",
  },
  
  {
    image: Img5,
    title: "Boston Massachusetts, 02186",
    country: "États-Unis 🇺🇸",
  },
  // {
  //   image: Img7,
  //   title: "Guadalajara Jalisco, 44100",
  //   country: "Mexique 🇲🇽",
  // },
  {
    image: Img9,
    title: "Kuala Lumpur, 50088",
    country: "Malaisie 🇲🇾",
  },
  {
    image: Img8,
    title: "Toyko, 〒160-0022",
    country: "Japon 🇯🇵",
  },
];

export default function MainCarousel() {
  return (
    <div className={`flex justify-center py-32`}>
      <Carousel autoSlide={true} autoSlideInterval={3000}>
        {cards.map((cards, index) => (
          <>
            <img
              key={index}
              src={cards.image}
              alt={cards.title}
              className={`rounded-3xl`}
            />
            <div className={`pt-1 relative`}>
              <svg
                className={`absolute left-32`}
                width="110"
                height="60"
                viewBox="0 0 64 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="21" rx="10.5" fill="black" />
              </svg>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
}

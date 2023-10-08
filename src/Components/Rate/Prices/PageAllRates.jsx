import Footer from "../../Footer/Footer";
import NavbarPages from "../../Navigation/PagesNavbar/PagesNavbar";
import TitleRate from "../../UI/Title/TitleRate";

const Rate = () => {
  const Pink = "bg-pink";
  const Blue = "bg-0c3e78";

  const informations = [
    {
      title: "Site vitrine",
      price: "à partir de 650€*",
    },
    {
      title: "Landing page",
      price: "à partir de 300€*",
    },
    {
      title: "Site e-commerce",
      price: "à partir de 800€*",
    },
    {
      title: "Site sur-mesure",
      price: "à partir de 900€*",
    },
    {
      title: "Refonte totale",
      price: "à partir de 750€*",
    },
    {
      title: "Modifications",
      price: "à partir de 100€*",
    },
  ];

  return (
    <section className="bg-FFF6E4">
      <NavbarPages />
      <div>
        <TitleRate />
      </div>
      <div className="flex justify-center">
        <h1
          data-aos="fade-in"
          className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Sites Web
        </h1>
      </div>
      {informations.map((info, index) => (
        <div className="flex justify-center font-inter">
          <div className="w-96 sm:w-1/2">
            <div className={`flex ${index % 2 === 0 ? Pink : Blue}`}>
              <div
                key={index}
                className="mt-10 mb-10 ml-0 mr-0 sm:ml-5 sm:mr-5"
              >
                <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6">
                  <div
                    data-aos="fade-left"
                    className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                  >
                    {info.title}
                  </div>
                  <div
                    data-aos="fade-right"
                    className="mt-5 mb-5 text-FFF6E4 text-3xl sm:text-4xl"
                  >
                    {info.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center pt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="83"
          height="83"
          viewBox="0 0 83 83"
          fill="none"
        >
          <path
            d="M41.5 0L55.2921 27.7079L83 41.5L55.2921 55.2921L41.5 83L27.7079 55.2921L0 41.5L27.7079 27.7079L41.5 0Z"
            fill="#C22E2E"
          />
        </svg>
      </div>
      <div className="flex justify-center">
        <h1
          data-aos="fade-in"
          className="text-C22E2E text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Marketing
        </h1>
      </div>
      <Footer />
    </section>
  );
};

export default Rate;

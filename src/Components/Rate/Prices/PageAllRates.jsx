import Footer from "../../Footer/Footer";
import NavbarPages from "../../Navigation/PagesNavbar/PagesNavbar";
import TitleRate from "../../UI/Title/TitleRate";

const Rate = () => {
  return (
    <section className="bg-FFF6E4">
      <NavbarPages />
      <div>
        <TitleRate />
      </div>
      <div className="flex justify-center">
        <h1
          data-aos="fade-right"
          className="text-0C3E78 text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Sites Web
        </h1>
      </div>
      <div className="flex justify-center">
        <h1
          data-aos="fade-left"
          className="text-0C3E78 text-center text-4xl mt-20 mb-10 font-extrabold sm:text-5xl md:text-6xl"
        >
          Marketing
        </h1>
      </div>
      <Footer />
    </section>
  );
};

export default Rate;

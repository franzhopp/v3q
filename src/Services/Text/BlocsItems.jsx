import translations from "../translate.jsx";
import ImgBloc1 from "../Image/home1.png";
import ImgBloc2 from "../Image/home2.png";
import ImgBloc3 from "../Image/home3.png";
import ImgBloc4 from "../Image/home4.png";
import { useLanguage } from "../../context/LanguageProvider.jsx";

const BlocsItems = () => {
  const { language } = useLanguage();
  return (
    <div className="flex justify-center mt-10">
      <div className="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="bg-c22e2e p-6 rounded-2xl shadow-2xl mb-5"
        >
          <p className="text-fff6e4 text-center text-xl font-extrabold mb-5">
            {translations[language].title1ServicesFr}
            {translations[language].title1ServicesEn}
          </p>
          <div className="w-64">
            <p className="text-fff6e4 text-center">
              {translations[language].blocd1ServicesFr}
              {translations[language].blocd1ServicesEn}{" "}
              <span className="font-extrabold">
                {" "}
                {translations[language].blocd1BoldServicesFr}
                {translations[language].blocd1BoldServicesEn}
              </span>{" "}
              {translations[language].blocd3ServicesFr}
              {translations[language].blocd3ServicesEn}
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ImgBloc1} alt="Icône Services" className="" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className="BgCards bg-cover bg-no-repeat p-6 rounded-2xl shadow-2xl mb-5"
        >
          <p className="text-fff6e4 text-center text-xl font-extrabold mb-5">
            {translations[language].title2ServicesFr}
            {translations[language].title2ServicesEn}
          </p>
          <div className="w-64">
            <p className="text-fff6e4 text-center">
              {translations[language].bloc4ServicesFr}
              {translations[language].bloc4ServicesEn}{" "}
              <span className="font-extrabold">
                {translations[language].bloc5BoldServicesFr}
                {translations[language].bloc5BoldServicesEn}
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ImgBloc2} alt="Icône Services" className="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="BgCardsTwo bg-cover bg-no-repeat p-6 rounded-2xl shadow-2xl mb-5"
        >
          <p className="text-fff6e4 text-center text-xl font-extrabold mb-5">
            Landing page
          </p>
          <div className="w-64">
            {" "}
            <p className="text-fff6e4 text-center">
              {translations[language].bloc6ServicesFr}
              {translations[language].bloc6ServicesEn}{" "}
              <span className="font-extrabold">
                {translations[language].bloc6BoldServicesFr}
                {translations[language].bloc6BoldServicesEn}
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ImgBloc3} alt="Icône Services" className="" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="bg-c22e2e p-6 rounded-2xl shadow-2xl mb-5"
        >
          <p className="text-fff6e4 text-center text-xl font-extrabold mb-5">
            {translations[language].title3ServicesFr}
            {translations[language].title3ServicesEn}
          </p>{" "}
          <div className="w-64">
            <p className="text-fff6e4 text-center">
              {translations[language].bloc7BoldServicesFr}
              {translations[language].bloc7BoldServicesEn}
              <span className="font-extrabold">
                {" "}
                {translations[language].bloc7ServicesFr}
                {translations[language].bloc7ServicesEn}
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img src={ImgBloc4} alt="Icône Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocsItems;

import { useLanguage } from "../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";
import ImgBloc1 from "../Image/Img1.png";
import ImgBloc2 from "../Image/Img2.png";
import ImgBloc3 from "../Image/Img3.png";
import ImgBloc4 from "../Image/Img4.png";

const BlocsItems = () => {
  const { language } = useLanguage();
  return (
    <div className={`flex justify-center`}>
      <div
        className={`flex flex-wrap justify-center mt-5 space-x-0 lg:space-x-3`}
      >
        <div data-aos="fade-left" data-aos-duration="300">
          <div
            className={`bg-c22e2e rounded-2xl shadow-2xl p-6 mb-5 transition-transform transform hover:scale-90`}
          >
            <p
              className={`text-fff6e4 text-center text-xl font-extrabold mb-5`}
            >
              {translations[language].title1ServicesFr}
              {translations[language].title1ServicesEn}
            </p>
            <div className={`w-64`}>
              <p className={`text-fff6e4 text-center`}>
                {translations[language].blocd1ServicesFr}
                {translations[language].blocd1ServicesEn}{" "}
                <span className={`font-extrabold`}>
                  {" "}
                  {translations[language].blocd1BoldServicesFr}
                  {translations[language].blocd1BoldServicesEn}
                </span>{" "}
                {translations[language].blocd3ServicesFr}
                {translations[language].blocd3ServicesEn}
              </p>
            </div>
            <div className={`flex justify-center mt-10`}>
              <img src={ImgBloc1} alt="Icône Services" />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="300">
          <div
            className={`BgCards bg-cover bg-no-repeat p-6 rounded-2xl shadow-2xl mb-5 transition-transform transform hover:scale-90`}
          >
            <p className="text-fff6e4 text-center text-xl font-extrabold mb-5">
              {translations[language].title2ServicesFr}
              {translations[language].title2ServicesEn}
            </p>
            <div className={`w-64`}>
              <p className={`text-fff6e4 text-center`}>
                {translations[language].bloc4ServicesFr}
                {translations[language].bloc4ServicesEn}{" "}
                <span className={`font-extrabold`}>
                  {translations[language].bloc5BoldServicesFr}
                  {translations[language].bloc5BoldServicesEn}
                </span>
              </p>
            </div>
            <div className={`flex justify-center mt-10`}>
              <img src={ImgBloc2} alt="Icône Services" />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="300">
          <div
            className={`BgCardsTwo bg-cover bg-no-repeat p-5 rounded-2xl shadow-2xl mb-5 transition-transform transform hover:scale-90`}
          >
            <p
              className={`text-fff6e4 text-center text-xl font-extrabold mb-5`}
            >
              Landing page
            </p>
            <div className={`w-64`}>
              {" "}
              <p className={`text-fff6e4 text-center`}>
                {translations[language].bloc6ServicesFr}
                {translations[language].bloc6ServicesEn}{" "}
                <span className={`font-extrabold`}>
                  {translations[language].bloc6BoldServicesFr}
                  {translations[language].bloc6BoldServicesEn}
                </span>
              </p>
            </div>
            <div className={`flex justify-center mt-10`}>
              <img src={ImgBloc3} alt="Icône Services" />
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="300">
          <div
            className={`bg-c22e2e p-5 rounded-2xl shadow-2xl mb-5 transition-transform transform hover:scale-90`}
          >
            <p
              className={`text-fff6e4 text-center text-xl font-extrabold mb-5`}
            >
              {translations[language].title3ServicesFr}
              {translations[language].title3ServicesEn}
            </p>{" "}
            <div className={`w-64`}>
              <p className={`text-fff6e4 text-center`}>
                {translations[language].bloc7BoldServicesFr}
                {translations[language].bloc7BoldServicesEn}
                <span className={`font-extrabold`}>
                  {" "}
                  {translations[language].bloc7ServicesFr}
                  {translations[language].bloc7ServicesEn}
                </span>
              </p>
            </div>
            <div className={`flex justify-center mt-10`}>
              <img src={ImgBloc4} alt="Icône Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocsItems;

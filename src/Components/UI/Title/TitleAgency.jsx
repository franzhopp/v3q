import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const TitleAgency = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className="image-title-agency mt-20 pb-24">
        <div
          className="pt-20 text-FFF6E4 sm:ml-44 sm:text-left text-center font-extrabold"
          data-aos="fade-left"
        >
          <p className="mt-4 mr-5 text-4xl sm:text-6xl">
            {translations[language].titleAgencyFr}
            {translations[language].titleAgencyEn}
          </p>
        </div>
      </div>
    </>
  );
};

export default TitleAgency;

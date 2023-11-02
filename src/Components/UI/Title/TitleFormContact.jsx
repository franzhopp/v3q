import translations from "../translate.jsx";
import { useLanguage } from "../../../context/LanguageProvider.jsx";

const Title = () => {
  const { language } = useLanguage();
  return (
    <div className="image-navi-studio-title-contact pb-24 border-t border-gray-400">
      <div
        className="pt-20 text-FFF6E4 sm:ml-44 sm:text-left text-center font-extrabold"
        data-aos="fade-right"
      >
        <p className="mt-4 mr-5 text-4xl sm:text-6xl">
          {" "}
          {translations[language].titleContactFr}
          {translations[language].titleContactEn}
        </p>
      </div>
    </div>
  );
};

export default Title;

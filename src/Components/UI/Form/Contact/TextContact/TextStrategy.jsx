import ImgLogo from "../../../../../assets/Logo/LogoMainNaviStudio.png";
import { useLanguage } from "../../../../../context/LanguageProvider";
import translations from "../translate.jsx";

const TextStrategy = () => {
  const { language } = useLanguage();
  return (
    <>
      <p className="text-fff6e4 text-2xl font-extrabold sm:text-4xl max-w-xl ml-6 sm:ml-0">
        {translations[language].describeContactFr}
        {translations[language].describeContactEn}
        <img
          src={ImgLogo}
          className="h-14 ml-1 sm:h-20 inline"
          alt="Icône navi studio."
        />
      </p>
      <div className="mt-10">
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-fff6e4 text-left text-lg sm:text-2xl w-80 sm:w-96 ml-6 sm:ml-0"
        >
          {translations[language].textContactFr}
          {translations[language].textContactEn}
        </p>
      </div>
    </>
  );
};

export default TextStrategy;

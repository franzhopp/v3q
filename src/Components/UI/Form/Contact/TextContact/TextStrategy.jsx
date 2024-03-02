import ImgLogo from "../../../../../assets/Logo/LogoMainNaviStudio.png";
import { useLanguage } from "../../../../../context/LanguageProvider";
import translations from "../translate.jsx";

const TextStrategy = () => {
  const { language } = useLanguage();
  return (
    <>
      <p
        className={`text-fff6e4 text-2xl lg:text-4xl font-extrabold ml-6 lg:ml-0`}
      >
        {translations[language].describeContactFr}
        {translations[language].describeContactEn}
        <img
          src={ImgLogo}
          className={`h-14 lg:h-20 ml-1 inline`}
          alt="Icône navi studio."
        />
      </p>
      <div className={`mt-10`}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={`text-fff6e4 w-80 text-left text-lg lg:text-2xl lg:w-96 ml-6 lg:ml-0`}
        >
          {translations[language].textContactFr}
          {translations[language].textContactEn}
        </p>
      </div>
    </>
  );
};

export default TextStrategy;

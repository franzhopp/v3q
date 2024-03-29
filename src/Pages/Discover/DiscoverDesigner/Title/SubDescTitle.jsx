import { useLanguage } from "../../../../context/LanguageProvider.jsx";
import translations from "../../translate.jsx";
import SvgAlgeria from "../Svg/SvgAlgeria";
import SvgAroundMexico from "../Svg/SvgAroundMexico";

const SubDescTitle = () => {
  const { language } = useLanguage();
  return (
    <>
      <p data-aos="fade-right" className={`text-fff6e4 text-center`}>
        {translations[language].describeDesignerFr}
        {translations[language].describeDesignerEn}
      </p>
      <p data-aos="fade-left" className={`text-fff6e4 text-center`}>
        {translations[language].describeDesigner2Fr}
        {translations[language].describeDesigner2En}
      </p>
      <div className={`flex justify-start relative`}>
        <SvgAroundMexico />
      </div>
      <div className={`flex justify-start relative`}>
        <SvgAlgeria />
      </div>
      <p data-aos="fade-right" className={`text-fff6e4 text-center`}>
        {translations[language].describeDesigner3Fr}
        {translations[language].describeDesigner3En}{" "}
        {translations[language].describeDesigner4Fr}
        {translations[language].describeDesigner4En}
      </p>
    </>
  );
};

export default SubDescTitle;

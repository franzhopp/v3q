import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageProvider.jsx";
import translations from "../translate.jsx";

const Title = () => {
  const { language } = useLanguage();
  return (
    <div className={`BgTitleContact pb-24`}>
      <div
        className={`text-fff6e4 pt-20 lg:ml-44 lg:text-left text-center font-extrabold`}
      >
        {" "}
        <motion.span
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
          className={`mt-4 mr-5 text-4xl sm:text-6xl`}
        >
          {translations[language].titleContactFr}
          {translations[language].titleContactEn}
        </motion.span>
      </div>
    </div>
  );
};

export default Title;

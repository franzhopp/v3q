import { motion } from "framer-motion";
import SvgLineRight from "../../../Pages/Portfolio/Svg/SvgLineRight";

const TitlePorfolio = () => {
  return (
    <>
      <SvgLineRight />
      <div className={`WireTitle relative`}>
        <div className={`BgTitlePortfolio bg-cover bg-center py-32`}>
          <div
            className={`text-fff6e4 flex justify-center lg:justify-start font-extrabold pt-20 px-20 lg:px-28`}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`text-5xl md:text-6xl lg:text-8xl`}
            >
              Portfolio
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitlePorfolio;

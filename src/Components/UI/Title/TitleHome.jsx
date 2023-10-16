import { motion } from "framer-motion";
import ButtonDiscover from "../Button/ButtonDiscover";

const TitleHome = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-my-screen">
        <h1 className="font-extrabold tracking-tight text-FFF6E4 text-4xl sm:text-8xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Agence digitale
          </motion.span>
        </h1>
        <div className="flex justify-center">
          <span data-aos="fade-right" className="font-extrabold text-FFF6E4">
            PARIS X LONDON
          </span>
        </div>
      </div>
      <ButtonDiscover />
      <p className="pt-14 pb-14">
        <span className="whitespace-nowrap animation-scrolling-rtl text-black text-2xl sm:text-4xl">
          DESIGN | DÉVELOPPEMENT | MARKETING DIGITAL | STRATÉGIE DE MARQUE
        </span>
      </p>
    </>
  );
};

export default TitleHome;

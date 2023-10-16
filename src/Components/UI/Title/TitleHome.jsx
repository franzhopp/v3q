import { motion } from "framer-motion";
import ButtonDiscover from "../Button/ButtonDiscover";

const TitleHome = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-my-screen">
        <div className="h-10">
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
            <span className="font-extrabold text-FFF6E4">PARIS X LONDON</span>
          </div>
        </div>
      </div>
      <div className="h-auto mb-10">
        <ButtonDiscover />
      </div>
      <div className="h-20">
        <p className="mt-10">
          <span className="whitespace-nowrap animation-scrolling-rtl text-black text-2xl sm:text-4xl">
            DESIGN | DÉVELOPPEMENT | MARKETING DIGITAL | STRATÉGIE DE MARQUE
          </span>
        </p>
      </div>
    </>
  );
};

export default TitleHome;

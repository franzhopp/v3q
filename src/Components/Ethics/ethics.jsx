import NavbarEthics from "../Navbar/NavbarEthics/e-navbar";
import ImgMac from "../../assets/bg-ethics-mac.png";
import Footer from "../Footer/footer";

const EthicsPage = () => {
  return (
    <>
      <NavbarEthics />

      <div class="flex justify-center mt-10">
        <div class="mt-5 flex flex-wrap justify-center space-x-0 sm:space-x-6">
          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-down-left"
              class="text-7xl number text-E18AB0 font-bold mb-2"
            >
              01
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">
              Engagement & Confiance
            </p>
            <div className="w-72">
              <p className="text-black">
                Nous prenons soin de nos collaborateurs et de notre entreprise,
                <span className="font-extrabold">
                  {" "}
                  en nous assurant de les faire grandir et de les développer sur
                  le long terme.
                </span>{" "}
                Nous nous consacrons à la réussite de nos collaborateurs et à
                faire de notre entreprise un endroit où il fait bon travailler.
                <span className="font-extrabold">
                  L’éthique est au coeur de notre travail et est notre priorité.
                </span>
              </p>
            </div>
          </div>

          <div class="p-6 rounded-lg shadow-md">
            <h2  data-aos="fade-right" class="text-7xl number text-E18AB0 font-bold mb-2">02</h2>
            <p className="text-black text-xl font-extrabold mb-5">
              Satisfaction client
            </p>

            <div className="w-72">
              <p className="text-black">
                Nous nous consacrons entièrement au succès et au développement à
                long terme de nos clients et collaborateurs,{" "}
                <span className="font-extrabold">
                  afin de leur fournir des résultats mesurables et de qualité
                </span>
                . Satisfaire nos clients et dépasser leurs attentes, est notre
                premier objectif.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-lg shadow-md">
            <h2
              data-aos="fade-down-right"
              class="text-7xl number text-E18AB0 font-bold mb-2"
            >
              03
            </h2>
            <p className="text-black text-xl font-extrabold mb-5">Passion</p>
            <div className="w-72">
              <p className="text-black">
                Nous aimons ce que nous faisons et ce que nous représentons.
                Nous nous consacrons entièrement{" "}
                <span className="font-extrabold">
                  au succès de nos clients et de nos collaborateurs.{" "}
                </span>
                Nous déployons tous les efforts nécessaires pour améliorer nos
                performances.
              </p>
            </div>
          </div>
        </div>
      </div>


      
      <div className="flex justify-center">
        <div className="mt-20">
          <div className="px-10">
            <img src={ImgMac} alt="Image Ethics" className="rounded-lg" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-center mt-20">
          <h1
            data-aos="fade-left"
            className="text-black font-extrabold text-2xl sm:text-4xl mb-10"
          >
            Environnement de travail
          </h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-1/3 sm:px-0 px-10">
              <p className="text-black font-extrabold">
                Notre environnement de travail est une fusion créative où le
                design et le développement web se rencontrent. C'est un espace
                vibrant et inspirant où l'innovation prend vie, où les écrans
                brillent de projets en constante évolution, et où la
                collaboration est le moteur de notre succès.
              </p>
              <div className="text-transparent">Division invisible</div>
              <p className="text-black font-extrabold">
                En somme, notre environnement de travail est bien plus qu'un
                lieu physique où nous accomplissons nos tâches. C'est un lieu où
                l'innovation, la passion et la collaboration se rencontrent pour
                donner vie à des projets web extraordinaires. Chez nous, chaque
                journée est une nouvelle opportunité de repousser les limites du
                design et du développement web, de créer des expériences
                mémorables pour nos clients et de se réaliser
                professionnellement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-28 mb-20">
        <svg
          className="button-design-formbounce animate-bounce-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
        >
          <path
            d="M25.5 0L32.1716 18.8284L51 25.5L32.1716 32.1716L25.5 51L18.8284 32.1716L0 25.5L18.8284 18.8284L25.5 0Z"
            fill="#E18AB0"
          />
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default EthicsPage;

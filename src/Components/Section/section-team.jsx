import { NavLink } from "react-router-dom";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.png";
import { useSpring, animated } from "react-spring";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTeam = () => {
  const props = useSpring({
    from: { color: "#C22E2E" },
    to: async (next) => {
      while (true) {
        await next({ color: "#0C3E78" });
        await next({ color: "#C22E2E" });
      }
    },
    config: { duration: 1000 },
  });
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <section className="bg-FFF6E4">
        <div className="flex justify-center">
          <div className="w-4/5 sm:w-1/2">
            <h3
              data-aos="fade-left"
              className="text-center font-extrabold mt-20 text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Notre équipe
            </h3>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-4/5 sm:w-1/2">
            <p className="px-5 text-black text-arial text-center md:text-center lg:text-center text-lg sm:text-2xl mt-10 mb-16">
              {`Quoi de mieux que de connaître navi studio.™ et son équipe ?`}{" "}
              <span className="font-extrabold">
                {
                  "Nous vous laissons parcourir entre ces lignes pour en savoir davantage"
                }
              </span>
              <br />
              <span className="text-black">
                {"concernant les concepteurs de ce site et son expérience."}
                {/* <span className="font-extrabold">{" passionnée"}</span> et
                <span className="font-extrabold"> compétente</span>{" "}
                {` pour vous
                    accompagner dans le domaine du`}
                <span className="font-extrabold">{" Design, "}</span>
                <span className="font-extrabold">Développement web</span> ou
                <span className="font-extrabold">{" Marketing Digital "}</span>
                {"ne cherchez pas plus loin."} */}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col space-x-3 mb-20 sm:flex-row">
                {/* Image */}

                <div className="mb-10 sm:mb-0">
                  <div className="w-auto h-auto">
                    <img
                      src={ImageLondon}
                      alt="Image London"
                      className="rounded-lg ml-10 sm:ml-0"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-black text-left mb-5 ml-10 sm:ml-0">
                    <p className="text-4xl font-extrabold">Mélissa Nefti</p>
                    <p className="text-4xl font-extrabold">Designer</p>
                    <animated.h1
                      style={props}
                      className="text-4xl font-extrabold tracking-wide"
                    >
                      London
                    </animated.h1>
                    {/* <HiLocationMarker className="h-10 w-10 ml-60" /> */}
                  </div>

                  <div className="w-72">
                    <p className="text-black text-left text-base mb-10 ml-10 sm:ml-0 p">
                      <span className="font-extrabold">
                        Mélissa est designer et exerce le métier UX/UI Designer
                        depuis 5 ans.
                      </span>{" "}
                      Résidante à Londres, elle pratique celui-ci avec beaucoup
                      de créativité et rigueur.{" "}
                      <span className="font-extrabold">
                        Venez connaître son histoire en cliquant sur «{" "}
                        <span className="text-C22E2E underline">
                          {" "}
                          Découvrir
                        </span>{" "}
                        ».
                      </span>
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                  <NavLink
                    to="/"
                    href="about"
                    className="inline-flex items-center gap-2 border rounded-full mr-6 bg-black px-8 py-3 text-FFF6E4"
                  >
                    <span className="text-3xl mr-3 font-semibold">
                      Découvrir{" "}
                    </span>
                    <svg
                      width="44"
                      height="38"
                      viewBox="0 0 44 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                        fill="#FFF6E4"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>

              <div className="flex flex-col justify-center mb-10">
                <div className="flex space-x-3 flex-col-reverse sm:flex-row">
                  {/* Button */}
                  <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                    <NavLink
                      to="/"
                      href="about"
                      className="inline-flex items-center gap-2 border rounded-full mr-2 sm:mr-0 bg-black px-8 py-3 text-FFF6E4"
                    >
                      <svg
                        width="44"
                        height="38"
                        viewBox="0 0 44 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41 21.5C42.3807 21.5 43.5 20.3807 43.5 19C43.5 17.6193 42.3807 16.5 41 16.5L41 21.5ZM1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85787C21.654 3.88156 21.654 2.29864 20.6777 1.32233C19.7014 0.346022 18.1184 0.346022 17.1421 1.32233L1.23223 17.2322ZM41 16.5L3 16.5L3 21.5L41 21.5L41 16.5Z"
                          fill="#FFF6E4"
                        />
                      </svg>
                      <span className="text-3xl ml-3 font-semibold">
                        Découvrir{" "}
                      </span>
                    </NavLink>
                  </div>

                  <div className="mb-10 sm:mb-0">
                    <div className="w-auto h-auto">
                      <img
                        src={ImageParis}
                        alt="Image London"
                        className="rounded-lg ml-10 sm:ml-0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-black text-left mb-5 ml-10 sm:ml-0">
                      <p className="text-4xl font-extrabold">
                        Louisa Fernandez
                      </p>
                      <p className="text-4xl font-extrabold">Web Developper</p>
                      <animated.h1
                        style={props}
                        className="text-4xl font-extrabold tracking-wide"
                      >
                        Paris
                      </animated.h1>
                      {/* <HiLocationMarker className="h-10 w-10 ml-60" /> */}
                    </div>

                    <div className="w-72">
                      <p className="text-black text-left text-base mb-10 ml-10 sm:ml-0 z">
                        <span className="font-extrabold">
                          Louisa est développeuse web et exerce le métier du
                          développement web depuis depuis 2 ans.
                        </span>{" "}
                        Résidante à Paris, elle pratique celui-ci avec beaucoup
                        de passion et plaisir.{" "}
                        <span className="font-extrabold">
                          Venez connaître son histoire en cliquant sur «{" "}
                          <span className="text-C22E2E underline">
                            {" "}
                            Découvrir
                          </span>{" "}
                          ».
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="mb-24"></div>
      </section>
    </>
  );
};

export default SectionTeam;

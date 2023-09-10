import { NavLink } from "react-router-dom";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.png";
import { HiLocationMarker } from "react-icons/hi"
import { useSpring, animated } from "react-spring";

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

  return (
    <>
      <section className="bg-FFF6E4">
        <div className="">
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
              <p className="px-5 text-black text-arial text-justify sm:text-center md:text-center lg:text-center text-lg sm:text-2xl mt-10 mb-16">
                {`Nous sommes bien plus qu'une simple agence digitale. Nous
                  sommes des `}
                <span className="font-extrabold">
                  {"architectes de l'expérience numérique"}
                </span>
                {" et les "}
                <span className="font-extrabold">artisans du web.</span>
                <br />
                <span className="text-black">
                  {"Si vous recherchez une équipe"}
                  <span className="font-extrabold">{" passionnée"}</span> et
                  <span className="font-extrabold"> compétente</span>{" "}
                  {` pour vous
                    accompagner dans le domaine du`}
                  <span className="font-extrabold">{" Design, "}</span>
                  <span className="font-extrabold">Développement web</span> ou
                  <span className="font-extrabold">
                    {" Marketing Digital "}
                  </span>
                  {"ne cherchez pas plus loin."}
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center mb-10">
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
                      <p
                        data-aos="fade-down-left"
                        className="text-4xl font-extrabold"
                      >
                        Designer
                      </p>
                      <animated.h1
                        style={props}
                        className="text-4xl font-extrabold tracking-wide"
                      >
                         London
                      </animated.h1>
                      <HiLocationMarker className="h-10 w-10 ml-60"/>
                    </div>

                    <div className="w-72">
                      <p className="text-black text-left text-base mb-10 ml-10 sm:ml-0 p">
                        <span className="font-extrabold">
                          Corem ipsum dolor sit amet
                        </span>
                        , consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim, metus nec
                        fringilla accumsan, risus sem.{" "}
                        <span className="font-extrabold">
                          Corem ipsum dolor sit amet
                        </span>
                        , consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center items-center h-24 w-96 mt-0 sm:mt-32">
                    <NavLink
                      to="/"
                      className="p-6 inline-flex gap-2 border rounded-full bg-black text-FFF6E4"
                    >
                      <span className="text-4xl mt-2 mr-3 font-semibold">
                        Découvrir{" "}
                      </span>

                      <svg
                        width="69"
                        height="60"
                        viewBox="0 0 69 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 26C1.79086 26 -1.93129e-07 27.7909 0 30C1.93129e-07 32.2091 1.79086 34 4 34L4 26ZM67.8284 32.8284C69.3905 31.2663 69.3905 28.7337 67.8284 27.1716L42.3726 1.71573C40.8105 0.153628 38.2778 0.153628 36.7157 1.71573C35.1536 3.27782 35.1536 5.81048 36.7157 7.37258L59.3431 30L36.7157 52.6274C35.1536 54.1895 35.1536 56.7222 36.7157 58.2843C38.2778 59.8464 40.8105 59.8464 42.3726 58.2843L67.8284 32.8284ZM4 34L65 34L65 26L4 26L4 34Z"
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
                        className="p-6 inline-flex gap-2 border rounded-full bg-black text-FFF6E4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="77"
                          height="60"
                          viewBox="0 0 77 60"
                          fill="none"
                        >
                          <path
                            d="M73 34C75.2091 34 77 32.2091 77 30C77 27.7909 75.2091 26 73 26L73 34ZM1.17157 27.1716C-0.390526 28.7337 -0.390526 31.2663 1.17157 32.8284L26.6274 58.2843C28.1895 59.8464 30.7222 59.8464 32.2843 58.2843C33.8464 56.7222 33.8464 54.1895 32.2843 52.6274L9.65685 30L32.2843 7.37259C33.8464 5.81049 33.8464 3.27783 32.2843 1.71573C30.7222 0.153635 28.1895 0.153635 26.6274 1.71573L1.17157 27.1716ZM73 26L4 26L4 34L73 34L73 26Z"
                            fill="#FFF6E4"
                          />
                        </svg>
                        <span className="text-4xl mt-2 ml-3 font-semibold">
                          Découvrir{" "}
                        </span>
                      </NavLink>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-black text-right mb-5 mr-9 sm:mr-0">
                        <p className="text-4xl font-extrabold">
                          Louisa Fernandez
                        </p>
                        <p
                          data-aos="fade-down-left"
                          className="text-4xl font-extrabold"
                        >
                          Web Developper
                        </p>
                        <animated.h1
                          style={props}
                          className="text-4xl font-extrabold tracking-wide"
                        >
                          Paris
                        </animated.h1> 
                        <HiLocationMarker className="h-10 w-10"/>
                      </div>

                      <div className="w-96 sm:w-80">
                        <p className="text-black text-right text-base mb-10 ml-6 sm:ml-3 z">
                          <span className="font-extrabold">
                            Corem ipsum dolor sit amet
                          </span> 
                          , consectetur adipiscing elit. Etiam eu turpis
                          molestie, dictum est a, mattis tellus. Sed dignissim,
                          metus nec fringilla accumsan, risus sem.{" "}
                          <span className="font-extrabold">
                            Corem ipsum dolor sit amet
                          </span>
                          , consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>

                    <div className="mb-10 sm:mb-0">
                      <div className="w-auto h-auto">
                        <img
                          src={ImageParis}
                          alt="Image Paris"
                          className="rounded-lg ml-10 sm:ml-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTeam;

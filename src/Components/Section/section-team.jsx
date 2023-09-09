import { NavLink } from "react-router-dom";
import ImageLondon from "../../assets/london.png";
import ImageParis from "../../assets/paris.png";

const SectionTeam = () => {
  return (
    <>
      <div id="contact">
        <section
          className="bg-FFF6E4"
          //id="contact"
        >
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

            <div className="flex justify-center py-20 p-3 sm:p-11">
              <div className="flex flex-col justify-center mb-10">
                <div className="flex flex-col space-x-3 mb-20 sm:flex-row">
                  {/* Image */}
                  <div className="mb-10 sm:mb-0">
                    <div className="w-auto h-auto ml-3">
                      <img src={ImageLondon} alt="Image London" className="" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-black text-left mb-5 ml-3">
                      <p className="text-4xl font-extrabold">Mélissa Nefti</p>
                      <p className="text-4xl font-extrabold">Designer</p>
                      <p className="text-4xl font-extrabold">London</p>
                    </div>

                    <div className="w-72">
                      <p className="text-black text-left text-base ml-3 mb-10">
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
                      <span className="text-3xl mr-3 font-semibold">
                        Découvrir{" "}
                      </span>

                      <svg
                        className="hidden sm:block"
                        width="44"
                        height="38"
                        viewBox="0 0 44 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                          fill="black"
                        />
                      </svg>

                      <svg
                        className="sm:hidden"
                        width="44"
                        height="38"
                        viewBox="0 0 44 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
                          fill="black"
                        />
                      </svg>
                    </NavLink>
                  </div>
                </div>

                <div className="flex flex-col justify-center mb-32">
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
                      <div className="text-black text-right mb-5 mr-3">
                        <p className="text-4xl font-extrabold">
                          Louisa Fernandez
                        </p>
                        <p className="text-4xl font-extrabold">
                          Web Developper
                        </p>
                        <p className="text-4xl font-extrabold">Paris</p>
                      </div>

                                            
                      <div className="w-96 sm:w-80">
                        <p className="text-black text-right text-base mr-4 mb-10">
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
                        <img src={ImageParis} alt="Image Paris" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionTeam;

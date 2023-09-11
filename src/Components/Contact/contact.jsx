// import { useEffect, useState } from "react";
import ButtonSend from "../UI/Button/button-send";
import Title from "../UI/Button/title-contact";
import FloatSvg from "./float-svg";

const Form = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <div className="bg-FFF6E4 bg-contact-blur">
      <section>
        <div>
          <Title />
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-3 flex-col sm:flex-row mt-10 p-10">
            <p>test</p>
            {/*          
          <div className="w-96 h-3/6 mr-64 sm:mb-5 sm:text-left md:text-left">
            <p className="font-extrabold text-2xl sm:text-4xl text-black w-80 sm:w-96 md:w-96 lg:w-96">
              Si vous recherchez une agence digitale qui peut donner vie à votre
              projet numérique, qui excelle dans le design et le développement
              web, ne cherchez pas plus loin.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-black text-lg sm:text-2xl w-80 sm:w-96 md:w-96 lg:w-96 mt-10"
            >
              {`Contactez-nous aujourd'hui pour discuter de
          votre projet et découvrir comment nous pouvons vous aider à briller
          sur le web. Votre succès numérique est notre mission.`}
            </p>
          </div> */}

            <div>
              <svg
                className="relative top-2 left-svg"
                width="138"
                height="140"
                viewBox="0 0 138 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.9375 0.5H69.1875C72.6875 21.6667 74.6875 33.3333 75.1875 35.5H75.4375C85.6458 16.9583 91.4792 6.70833 92.9375 4.75C88.9375 26.375 86.8542 38.0417 86.6875 39.75L113.688 16.75V17L95.9375 47.75H96.1875C113.229 41.25 124.229 37.1667 129.188 35.5L101.938 58.5H102.188C114.604 58.3333 124.938 58.25 133.188 58.25H137.438V58.5L104.438 70.25V70.75C104.812 70.75 115.812 74.6667 137.438 82.5V82.75H137.188C123.479 82.5833 112.729 82.5 104.938 82.5H101.938V82.75C105.062 85.0417 114.146 92.625 129.188 105.5H128.938C109.438 98.1667 98.4375 94.0833 95.9375 93.25L113.688 124H113.438C98.1042 110.833 89.1875 103.25 86.6875 101.25V101.5C86.8542 102.917 88.9375 114.5 92.9375 136.25C90.6875 132.833 84.8542 122.583 75.4375 105.5H74.9375V105.75C73.7708 113.375 71.8542 124.792 69.1875 140H68.9375C65.1042 118 63.1875 106.5 63.1875 105.5H62.6875C53.2708 122.583 47.4375 132.833 45.1875 136.25C49.1875 114.583 51.2708 102.917 51.4375 101.25C48.9375 103.25 40.0208 110.833 24.6875 124H24.4375L42.1875 93.25H41.9375C20.1875 101.417 9.1875 105.5 8.9375 105.5C23.9792 92.625 33.0625 85.0417 36.1875 82.75V82.5H33.1875C25.3958 82.5 14.6458 82.5833 0.9375 82.75H0.6875V82.5C22.3125 74.6667 33.3125 70.75 33.6875 70.75V70.25L0.6875 58.5V58.25H4.9375C12.3125 58.25 22.7292 58.3333 36.1875 58.5L8.9375 35.5H9.4375L42.1875 47.75C32.1042 30.3333 26.1875 20 24.4375 16.75L51.4375 39.75V39.5C50.1042 31.5417 48.0208 19.9583 45.1875 4.75C46.6458 6.70833 52.4792 16.9583 62.6875 35.5C63.1458 35.5 64.0625 30.5 65.4375 20.5C65.7708 19.6667 66.9375 13 68.9375 0.5Z"
                  fill="#E18AB0"
                />
              </svg>
              <div className="flex flex-col sm:mt-6">
                <div className=" ">
                  <div className="bg-contact relative bottom-10 sm:bottom-72 mb-20 rounded-rounded-form-56 p-10">
                    <form>
                      {/* <div className="flex space-x-2 sm:justify-center"> */}
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="rounded-input-rounded-form-22 p-6 mr-1 outline-none input-bordered input-secondary bg-white w-full mt-10"
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-5"
                      />
                      {/* </div> */}
                      <input
                        type="text"
                        placeholder="E-mail"
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                      />
                      <input
                        type="text"
                        placeholder="Numéro de téléphone"
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                      />
                      <input
                        type="text"
                        placeholder="Le meilleur moyen de vous contacter ?"
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                      />
                      <input
                        type="text"
                        placeholder="Le meilleur moment de vous contacter ?"
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                      />
                      <textarea
                        className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-20"
                        placeholder="Votre message"
                        rows="5"
                      ></textarea>
                      <ButtonSend />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;

// const Form = () => {
//   return (
//     <>
//       <section id="contact" className="image-navi-studio-contact bg-FFF6E4">
//         <div className="px-10 py-10 sm:py-10 md:px-20">
//           <div
//             className="sm:text-left text-FFF6E4 text-center mt-24 font-extrabold pb-12 text-4xl md:text-6xl"
//             data-aos="fade-right"
//           >
//             Contactez-nous
//           </div>
//           <div className="w-80 h-48 ">
//             <p
//               className="text-left text-black"
//               data-aos="zoom-in"
//               data-aos-duration="1000"
//             >
//               <span className="font-extrabold">
//                 Nous sommes impatients de vous entendre !{" "}
//               </span>
//               {`Veuillez fournir toutes les informations nécessaires dans le formulaire de contact ci-dessous afin que nous puissions vous assister au mieux.`}
//             </p>
//           </div>
//         </div>

import Button from "../UI/Button/button";
import ButtonSend from "../UI/Button/button-send";
import Title from "../UI/Button/title-contact";

//         {/* <div className="flex justify-center sm:justify-end sm:px-20 pb-48">
//           <div className="mr-32 mx-auto sm:mr-32 sm:ml-20">
//             <div className="border border-3E9BF0 rounded-rounded-form-56 h-h-form-900 w-4/6 sm:w-w-form-648">
//               <div className="md:px-10">
//                 <div className="flex justify-center space-x-0 sm:flex-col">
//                   <input
//                     type="text"
//                     placeholder="Prénom"
//                     className="rounded-input-rounded-form-22 p-5 mt-10 sm:mt-20 outline-none input-bordered input-secondary bg-white"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Nom"
//                     className="rounded-input-rounded-form-22 p-5 mt-20 sm:mt-10 primary outline-none input-bordered input-secondary bg-white"
//                   />
//                 </div>
//               <div className="flex justify-center items-center sm:px-20  px-20">
//                 <div className="flex flex-col">
//                   <input
//                     type="text"
//                     placeholder="E-mail"
//                     className="rounded-input-rounded-form-22 p-5 mt-20 sm:mt-10 outline-none input-bordered input-secondary bg-white"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Numéro de téléphone"
//                     className="rounded-input-rounded-form-22 p-5 mt-10 outline-none input-bordered input-secondary bg-white"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Le meilleur moyen de vous contacter ?"
//                     className="rounded-input-rounded-form-22 p-5 mt-10 outline-none input-bordered input-secondary bg-white"
//                   />
//                   <textarea
//                     className="rounded-input-rounded-form-22 p-5 mt-10 outline-none input-bordered input-secondary bg-white"
//                     placeholder="Message"
//                     cols="30"
//                     rows="10"
//                     ></textarea>
//                 </div>
//                     </div>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className="flex justify-center sm:justify-end sm:px-40">
//           <div className="w-5/6 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
//             <div className="bg-0c3e78 mb-20 border border-3E9BF0 rounded-rounded-form-56 p-10">
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Prénom"
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Nom"
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="E-mail"
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Numéro de téléphone"
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Quand peut-on vous contacter ?"
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   className="rounded-input-rounded-form-22 p-3 outline-none input-bordered input-secondary bg-white w-full"
//                   placeholder="Message"
//                   rows="5"
//                 ></textarea>
//               </div>
//               <div className="flex justify-center">
//                 {/* <button className="bg-black rounded-2xl text-FFF6E4 hover:bg-C22E2E font-bold py-2 px-4 duration-300 ">
//           Envoyer
//         </button> */}

//                 <div className="flex justify-center sm:justify-end px-48">
//                   <button
//                     data-aos="fade-left"
//                     className="inline-flex items-center gap-2 border rounded-full bg-black px-8 py-3 text-FFF6E4"
//                   >
//                     <span className="text-3xl font-extrabold heading-responsive">
//                       Envoyer{" "}
//                     </span>

//                     <svg
//                       className="hidden sm:block"
//                       width="44"
//                       height="38"
//                       viewBox="0 0 44 38"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
//                         fill="black"
//                       />
//                     </svg>

//                     <svg
//                       className="sm:hidden"
//                       width="44"
//                       height="38"
//                       viewBox="0 0 44 38"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM42.7678 20.7678C43.7441 19.7915 43.7441 18.2085 42.7678 17.2322L26.8579 1.32233C25.8816 0.346021 24.2986 0.346021 23.3223 1.32233C22.346 2.29864 22.346 3.88155 23.3223 4.85787L37.4645 19L23.3223 33.1421C22.346 34.1184 22.346 35.7014 23.3223 36.6777C24.2986 37.654 25.8816 37.654 26.8579 36.6777L42.7678 20.7678ZM3 21.5L41 21.5L41 16.5L3 16.5L3 21.5Z"
//                         fill="black"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Form;

const Form = () => {
  return (
    <section id="contact">
      <div className="title">
        <Title />
      </div>

      <div className="flex justify-center sm:flex-row md:flex-row lg:flex-row flex-col m-10 mt-20 sm:mt-72">
        <div className="w-96 h-3/6 mr-64 mb-20 sm:mb-10 sm:text-left md:text-left">
          <p className="font-extrabold text-2xl sm:text-4xl text-black w-80 sm:w-96 md:w-96 lg:w-96">
            Si vous recherchez une agence digitale qui peut donner vie à votre
            projet numérique, qui excelle dans le design et le développement
            web, ne cherchez pas plus loin.
          </p>
          <p  data-aos="zoom-in"
                data-aos-duration="1000" className="text-black text-medium w-80 sm:w-96 md:w-96 lg:w-96 mt-10">
          {`Contactez-nous aujourd'hui pour discuter de
          votre projet et découvrir comment nous pouvons vous aider à briller
          sur le web. Votre succès numérique est notre mission.`}
          </p>
        </div>

        <div>
          <div className="flex flex-col">
            <div className="sm:w-w-f md:w-w-f lg:w-w-f">
              <div className="bg-0c3e78 relative bottom-10 sm:bottom-40 mb-20 rounded-rounded-form-56 p-10">
                <div className="flex justify-center sm:space-x-2">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-10"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-10"
                  />
                </div>
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
            <ButtonSend/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

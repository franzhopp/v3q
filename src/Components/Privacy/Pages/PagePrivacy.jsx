// import { NavLink } from "react-router-dom";
// import { RiBardLine } from "react-icons/ri";
// import PrivacyNavbar from "../../Navigation/PrivacyNavbar/PrivacyNavbar.jsx";
// import ImgText from "../../../assets/logo-4.png";
// import Footer from "../../Footer/MainFooter.jsx";

// const PagePrivacy = () => {
//   return (
//     <>
//       {" "}
//       <PrivacyNavbar />
//       <div className="bg-fff6e4 flex justify-center pt-40 sm:pt-20">
//         <div className="w-full md:max-w-3xl p-4">
//           <h1 className="text-2xl text-center font-inter md:text-3xl font-semibold mb-16 text-c22e2e">
//             Politique de Confidentialité
//           </h1>

//           <p className="text-black font-extrabold italic text-justify mb-10">
//             Chez
//             <img
//               src={ImgText}
//               className="h-6 ml-2 inline"
//               alt="Icône navi studio."
//             />
//             , nous accordons une grande importance à la protection de vos
//             informations personnelles. Cette politique de confidentialité
//             explique comment nous collectons, utilisons, et protégeons vos
//             données.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Collecte des Données
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Lorsque vous utilisez notre site
//             web, nous collectons des informations telles que votre nom, prénom,
//             numéro de téléphone, et détails de commande. Certaines de ces
//             informations sont essentielles pour vous fournir nos services.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Finalités et Bases Légales
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Vos données sont utilisées pour
//             gérer vos commandes, paiements, et livraisons. Nous pouvons
//             également les utiliser pour des promotions ou des offres sur des
//             produits similaires à vos achats précédents. Notre traitement des
//             données est basé sur l'exécution de contrats, nos intérêts
//             légitimes, ou votre consentement, le cas échéant.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Destinataires des Données
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Vos informations sont accessibles
//             uniquement à notre entreprise et à nos partenaires de livraison. Si
//             vous le souhaitez, nous pouvons partager votre adresse E-mail* avec
//             nos partenaires commerciaux pour des offres spéciales.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Durée de Conservation
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Nous conservons les données
//             nécessaires à la gestion des commandes et à la facturation pendant
//             la durée de votre relation commerciale, plus dix (10) ans pour les
//             obligations comptables. Les données liées à la fidélisation et à la
//             prospection sont conservées pendant la durée de votre relation
//             commerciale, plus trois (3) ans après votre dernier achat.
//           </p>

//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> La sécurité de vos données est
//             notre priorité. Si vous avez des questions ou souhaitez exercer vos
//             droits en matière de confidentialité, veuillez nous contacter. Votre
//             confiance est précieuse, et nous nous engageons à respecter les
//             réglementations en vigueur pour protéger vos données personnelles.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Sécurité et Confidentialité
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> La sécurité de vos données est
//             notre priorité. Nous prenons des mesures techniques et
//             organisationnelles pour protéger vos informations personnelles
//             contre les accès non autorisés, la perte, la divulgation, la
//             modification ou la destruction. Nous nous engageons à respecter les
//             réglementations en vigueur pour protéger vos données personnelles.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Droits des Utilisateurs
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Vous avez le droit d'accéder à vos
//             données personnelles, de les rectifier, de les supprimer ou de
//             limiter leur traitement. Vous avez également le droit de vous
//             opposer au traitement de vos données à des fins de marketing direct.
//             Pour exercer vos droits ou pour toute question concernant la
//             protection de la vie privée, veuillez nous contacter.
//           </p>

//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Vous pouvez également déposer une
//             plainte auprès de l'autorité de protection des données compétente si
//             vous estimez que le traitement de vos données personnelles viole les
//             lois en vigueur.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Modifications de la Politique de Confidentialité
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Nous nous réservons le droit de
//             modifier cette politique de confidentialité à tout moment. Toute
//             modification sera publiée sur notre site web et vous sera notifiée
//             si nécessaire.
//           </p>

//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-c22e2e underline font-inter">
//             Contact
//           </h2>
//           <p className="text-black text-justify mb-4">
//             <RiBardLine className="inline" /> Pour toute question ou
//             préoccupation concernant notre politique de confidentialité des
//             données, veuillez nous contacter à l'adresse
//             <span className="font-extrabold font-inter">
//               {" "}
//               contact@navistudio.io
//             </span>
//             .
//           </p>
//         </div>
//       </div>
//       <div className="bg-fff6e4 flex flex-col text-center justify-center pt-5 pb-10">
//         <NavLink
//           to="/terms"
//           className="text-c22e2e font-extrabold underline transition hover:text-0C3E78"
//         >
//           Conditions d'Utilisation ➔
//         </NavLink>
//         <NavLink
//           to="/mentions"
//           className="text-c22e2e font-extrabold underline transition hover:text-0C3E78"
//         >
//           Mentions Légales ➔
//         </NavLink>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PagePrivacy;

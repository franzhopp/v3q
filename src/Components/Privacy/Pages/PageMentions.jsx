import { NavLink } from "react-router-dom";
import PrivacyNavbar from "../../Navigation/PrivacyNavbar/PrivacyNavbar.jsx";
import ImgText from "../../../assets/logo-4.png";
import Footer from "../../Footer/Footer";

const PageMentions = () => {
  const keywordsStyle = "font-extrabold";
  return (
    <>
      <PrivacyNavbar />
      <div className="bg-FFF6E4 flex justify-center pt-40 sm:pt-20 pb-16">
        <div className="w-full md:max-w-3xl p-4">
          <h1 className="text-C22E2E text-center font-inter mb-16 text-2xl md:text-3xl font-semibold">
            Mentions légales
          </h1>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2">
            Identité
          </h2>
          <p className="text-black mb-4">
            ›<span className={keywordsStyle}> Nom du site web :</span>
            <img
              src={ImgText}
              className="h-6 ml-2 inline"
              alt="Icône navi studio."
            />
            <br />›<span className={keywordsStyle}> Site URL :</span>{" "}
            <NavLink
              to="http://navistudio.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink underline"
            >
              http://navistudio.io/
            </NavLink>
            .
            <br />›<span className={keywordsStyle}> Propriétaire :</span>{" "}
            Fernandez Louisa, Nefti Mélissa.
            <br />›<span className={keywordsStyle}> Activité :</span>{" "}
            Entrepreneur en freelance.
            <br />›<span className={keywordsStyle}> E-mail* :</span>{" "}
            contact@navistudio.io
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Responsable de publication :
            </span>{" "}
            Fernandez Louisa, Nefti Mélissa.
            <br />›<span className={keywordsStyle}> Les lieux :</span> Paris,
            Île-de-France / London, United Kingdom.
            <br />› <span className={keywordsStyle}>
              Hébergement du site :
            </span>{" "}
            IONOS.
            <br />
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2">
            Conditions d'utilisation
          </h2>
          <p className="text-black text-justify mb-4">
            › L'utilisation du site implique l'acceptation des conditions
            d'utilisation décrites ci-dessous. Ces conditions peuvent être
            modifiées à tout moment.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2">
            Informations
          </h2>
          <p className="text-black text-justify mb-4">
            › Les informations du site sont indicatives et non exhaustives. Le
            propriétaire du site n'est pas responsable des dommages résultant de
            l'accès au site.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2">
            Interactivité
          </h2>
          <p className="text-black text-justify mb-4">
            › Les utilisateurs peuvent déposer du contenu sur le site, mais ce
            contenu doit respecter la charte déontologique du site et la
            législation en vigueur.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p className="text-black text-justify">
            › Tous les éléments du site sont la propriété exclusive de leurs
            auteurs. Toute utilisation non autorisée est interdite.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Liens
          </h2>
          <p className="text-black text-justify">
            › Le propriétaire autorise les liens vers le site sous certaines
            conditions.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Politique de confidentialité des données
          </h2>
          <p className="text-black text-justify">
            › Tout utilisateur a droit d'accès, de rectification et d'opposition
            à ses données personnelles.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Objet du traitement
          </h2>
          <p className="text-black text-justify">
            › L'entreprise
            <img
              src={ImgText}
              className="h-6 ml-2 inline"
              alt="Icône navi studio."
            />{" "}
            traite les données pour gérer les commandes, le marketing, et la
            transmission de données aux partenaires.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Bases légales
          </h2>
          <p className="text-black text-justify">
            › Le traitement est basé sur l'exécution de contrats, l'intérêt
            légitime, le consentement, et l'obligation légale.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Destinataires des données
          </h2>
          <p className="text-black text-justify">
            › Les données sont destinées à l'entreprise et à ses sous-traitants
            de livraison. Les adresses électroniques peuvent être transmises à
            des partenaires commerciaux.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Durée de conservation des données
          </h2>
          <p className="text-black text-justify">
            › Les données sont conservées selon les besoins légaux.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Droits de l'utilisateur
          </h2>
          <p className="text-black text-justify">
            › L'utilisateur peut exercer ses droits sur ses données en
            contactant l'entreprise.
          </p>

          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mb-2 mt-2">
            Consentement
          </h2>
          <p className="text-black text-justify">
            › Un consentement explicite est requis pour certaines autorisations.
          </p>
          <h2 className="text-C22E2E font-inter underline text-2xl md:text-3xlfont-semibold mt-16 mb-2">
            Crédits
          </h2>
          <p className="mb-4 text-black">
            ›
            <span className={keywordsStyle}>
              {" "}
              Site imaginé et mis en œuvre par :
            </span>{" "}
            Nefti Mélissa, Fernandez Louisa.
            <br />›<span className={keywordsStyle}> Site URL :</span>{" "}
            <NavLink
              to="http://navistudio.io/defaultsite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink underline"
            >
              http://navistudio.io/
            </NavLink>
            ,
            <img
              src={ImgText}
              className="h-6 ml-2 inline"
              alt="Icône navi studio."
            />
            <br />›<span className={keywordsStyle}> Hébergeur :</span> IONOS.
            <br />›<span className={keywordsStyle}> Logo :</span> Nefti Mélissa.
            <br />›<span className={keywordsStyle}> Photographies : </span>
            Pexels.
            <br />›<span className={keywordsStyle}> Traductrice :</span> Nefti
            Mélissa.
            <br />›<span className={keywordsStyle}> Vidéos :</span> Nefti
            Mélissa, Fernandez Louisa.
            <br />›
            <span className={keywordsStyle}> Contenu des rubriques :</span>{" "}
            Nefti Mélissa, Fernandez Louisa.
            <br />›<span className={keywordsStyle}>
              {" "}
              Contenu des textes :
            </span>{" "}
            Nefti Mélissa, Fernandez Louisa.
            <br />›<span className={keywordsStyle}>
              {" "}
              Contenu des liens :
            </span>{" "}
            Nefti Mélissa, Fernandez Louisa.
            <br />›
            <span className={keywordsStyle}> Montages des visuels :</span> Nefti
            Mélissa, Fernandez Louisa.
            <br />›<span className={keywordsStyle}>
              {" "}
              Montages des vidéos :
            </span>{" "}
            Nefti Mélissa, Fernandez Louisa.
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Icônes utilisées pour les visuels :
            </span>{" "}
            Photoshop, Illustrator, Figma, Procreate.
            <br />›<span className={keywordsStyle}>
              {" "}
              Éditeur de code :
            </span>{" "}
            PhpStorm (JetBrains).
            <br />›
            <span className={keywordsStyle}>
              {" "}
              Technologies utilisées :
            </span>{" "}
            React, Tailwind CSS, etc.
            <br />
            <div className="text-justify font-inter mt-16 font-extrabold text-C22E2E">
              Modèle de formule de collecte de données à caractère personnel
              pour la conception de la rubrique "MENTIONS LÉGALES" : Site du
              CNIL - Version 2019 /{" "}
              <NavLink
                to="https://www.cnil.fr/professionnel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink underline"
              >
                https://www.cnil.fr/professionnel
              </NavLink>
              .
            </div>
          </p>
          <div className="flex flex-col text-center justify-center pt-10">
            <NavLink
              to="/privacy"
              className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
            >
              Politique de Confidentialité ➔
            </NavLink>
            <NavLink
              to="/terms"
              className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
            >
              Conditions d'Utilisation ➔
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageMentions;

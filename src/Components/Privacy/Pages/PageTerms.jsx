import { NavLink } from "react-router-dom";
import PrivacyNavbar from "../../Navigation/PrivacyNavbar/PrivacyNavbar.jsx";
import Footer from "../../Footer/Footer";
import { RiBardLine } from "react-icons/ri";

const PageConditions = () => {
  return (
    <>
      <PrivacyNavbar />
      <div className="bg-FFF6E4 flex justify-center pt-40 sm:pt-20">
        <div className="w-full md:max-w-3xl p-4">
          <h1 className="text-C22E2E text-center font-inter mb-16 text-2xl md:text-3xl font-semibold">
            Conditions d'Utilisation
          </h1>
          <p className="text-black font-extrabold text-justify mb-10 italic">
            L'utilisation de ce site implique l'acceptation sans réserve des
            conditions générales d'utilisation énoncées ci-dessous. Ces
            conditions peuvent être modifiées ou complétées à tout moment.
          </p>

          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Informations
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Les informations et documents sur
            ce site sont à titre indicatif et ne sont pas exhaustifs. Le
            propriétaire du site ne peut être tenu responsable des dommages
            directs ou indirects résultant de l'accès au site.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Interactivité
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Les utilisateurs peuvent soumettre
            du contenu sur le site, notamment via les commentaires. Ce contenu
            reste sous la responsabilité de leurs auteurs, qui en assument la
            pleine responsabilité juridique. Le propriétaire se réserve le droit
            de retirer tout contenu qui ne respecterait pas la charte
            déontologique du site ou la loi, sans préavis ni justification.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Sauf indication contraire, tous
            les éléments du site restent la propriété exclusive de leurs auteurs
            en matière de droits de propriété intellectuelle. Toute utilisation
            non autorisée est interdite.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Liens sortants
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Le propriétaire du site n'assume
            aucune responsabilité pour les liens vers des ressources tierces sur
            Internet en ce qui concerne leur contenu ou leur pertinence.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Liens entrants
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Les liens vers ce site sont
            autorisés à condition qu'ils s'ouvrent dans une nouvelle fenêtre et
            soient clairement identifiés pour éviter toute confusion avec le
            site source et respecter les lois en vigueur. Le propriétaire se
            réserve le droit de demander la suppression de liens ne respectant
            pas ces règles.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Responsabilité
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Le propriétaire du site ne peut
            être tenu responsable de tout préjudice, perte ou dommage, qu'il
            soit direct ou indirect, résultant de l'utilisation de ce site ou de
            son contenu. Les informations fournies sont à titre informatif
            seulement et ne constituent pas des conseils juridiques, médicaux ou
            professionnels.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Sécurité
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Le propriétaire du site s'engage à
            prendre des mesures raisonnables pour protéger la sécurité et la
            confidentialité des données des utilisateurs. Cependant, il ne peut
            garantir la sécurité absolue des informations transmises par les
            utilisateurs via Internet.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Modifications des Conditions
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Le propriétaire se réserve le
            droit de modifier ces conditions d'utilisation à tout moment. Les
            utilisateurs sont encouragés à consulter régulièrement les
            conditions pour rester informés des mises à jour.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Contact
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Pour toute question ou
            préoccupation concernant ces conditions d'utilisation, veuillez nous
            contacter à l'adresse{" "}
            <span className="font-extrabold font-inter">
              {" "}
              contact@navistudio.io
            </span>
            .
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Droit applicable et juridiction
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Ces conditions d'utilisation sont
            régies par les lois en vigueur en France / United Kingdom. Tout
            litige découlant de l'utilisation de ce site sera soumis à la
            compétence exclusive des tribunaux de nos villes.
          </p>
          <h2 className="text-C22E2E underline font-inter text-2xl md:text-3xl font-semibold mb-2">
            Dispositions finales
          </h2>
          <p className="text-black text-justify mb-4">
            <RiBardLine className="inline" /> Ces conditions d'utilisation
            constituent l'accord complet entre l'utilisateur et le propriétaire
            du site. Elles remplacent toutes les communications antérieures,
            qu'elles soient écrites ou orales, en ce qui concerne l'utilisation
            du site.
          </p>
        </div>
      </div>
      <div className="bg-FFF6E4 flex flex-col text-center justify-center pt-5 pb-10">
        <NavLink
          to="/privacy"
          className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
        >
          Politique de Confidentialité ➔
        </NavLink>
        <NavLink
          to="/mentions"
          className="text-C22E2E font-extrabold underline transition hover:text-0C3E78"
        >
          Mentions Légales ➔
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default PageConditions;

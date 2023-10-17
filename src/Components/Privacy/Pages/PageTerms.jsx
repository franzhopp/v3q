import PrivacyNavbar from "../../Navigation/PrivacyNavbar/PrivacyNavbar.jsx";
import Footer from "../../Footer/Footer";

const PageConditions = () => {
  return (
    <>
      <PrivacyNavbar />
      <div className="bg-FFF6E4 flex justify-center pt-40 sm:pt-20 pb-16">
        <div className="w-full md:max-w-3xl p-4">
          <h1 className="text-C22E2E text-center font-inter mb-16 text-2xl md:text-3xl font-semibold">
            Conditions d'Utilisation
          </h1>
          
          <p className="text-black text-justify mb-4">
            L'utilisation de ce site implique l'acceptation sans réserve des
            conditions générales d'utilisation énoncées ci-dessous. Ces
            conditions peuvent être modifiées ou complétées à tout moment.
          </p>

          <h2 className="text-C22E2E font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Informations
          </h2>
          <p className="text-black text-justify mb-4">
            • Les informations et documents sur ce site sont à titre indicatif
            et ne sont pas exhaustifs. Le propriétaire du site ne peut être tenu
            responsable des dommages directs ou indirects résultant de l'accès
            au site.
          </p>

          <h2 className="text-C22E2E font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Interactivité
          </h2>
          <p className="text-black text-justify mb-4">
            • Les utilisateurs peuvent soumettre du contenu sur le site,
            notamment via les commentaires. Ce contenu reste sous la
            responsabilité de leurs auteurs, qui en assument la pleine
            responsabilité juridique. Le propriétaire se réserve le droit de
            retirer tout contenu qui ne respecterait pas la charte déontologique
            du site ou la loi, sans préavis ni justification.
          </p>

          <h2 className="text-C22E2E font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Propriété intellectuelle
          </h2>
          <p className="text-black text-justify mb-4">
            • Sauf indication contraire, tous les éléments du site restent la
            propriété exclusive de leurs auteurs en matière de droits de
            propriété intellectuelle. Toute utilisation non autorisée est
            interdite.
          </p>

          <h2 className="text-C22E2E font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Liens sortants
          </h2>
          <p className="text-black text-justify mb-4">
            • Le propriétaire du site n'assume aucune responsabilité pour les
            liens vers des ressources tierces sur Internet en ce qui concerne
            leur contenu ou leur pertinence.
          </p>

          <h2 className="text-C22E2E font-sans-recursive text-xl md:text-2xl font-semibold mb-2">
            Liens entrants
          </h2>
          <p className="text-black text-justify mb-4">
            • Les liens vers ce site sont autorisés à condition qu'ils s'ouvrent
            dans une nouvelle fenêtre et soient clairement identifiés pour
            éviter toute confusion avec le site source et respecter les lois en
            vigueur. Le propriétaire se réserve le droit de demander la
            suppression de liens ne respectant pas ces règles.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageConditions;

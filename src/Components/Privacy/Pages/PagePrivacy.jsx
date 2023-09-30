import Footer from "../../Footer/Footer";
import Navbar from "../../Navigation/BaseNavbar";

const PagePrivacy = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="flex justify-center font-sans-serif mb-16 mt-10">
        <div className="w-full md:max-w-3xl p-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-16 text-C22E2E">
            Politique de Confidentialité des Données
          </h1>

          <p className="text-black text-justify mb-4">
            • Chez{" "}
            <span className="text-C22E2E font-extrabold">navi studio.™</span>,
            nous accordons une grande importance à la protection de vos
            informations personnelles. Cette politique de confidentialité
            explique comment nous collectons, utilisons, et protégeons vos
            données.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-C22E2E">
            Collecte des Données
          </h2>
          <p className="text-black text-justify mb-4">
            • Lorsque vous utilisez notre site web, nous collectons des
            informations telles que votre nom, prénom, numéro de téléphone, et
            détails de commande. Certaines de ces informations sont essentielles
            pour vous fournir nos services.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-C22E2E">
            Finalités et Bases Légales
          </h2>
          <p className="text-black text-justify mb-4">
            • Vos données sont utilisées pour gérer vos commandes, paiements, et
            livraisons. Nous pouvons également les utiliser pour des promotions
            ou des offres sur des produits similaires à vos achats précédents.
            Notre traitement des données est basé sur l'exécution de contrats,
            nos intérêts légitimes, ou votre consentement, le cas échéant.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-C22E2E">
            Destinataires des Données
          </h2>
          <p className="text-black text-justify mb-4">
            • Vos informations sont accessibles uniquement à notre entreprise et
            à nos partenaires de livraison. Si vous le souhaitez, nous pouvons
            partager votre adresse e-mail avec nos partenaires commerciaux pour
            des offres spéciales.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-C22E2E">
            Durée de Conservation
          </h2>
          <p className="text-black text-justify mb-4">
            • Nous conservons les données nécessaires à la gestion des commandes
            et à la facturation pendant la durée de votre relation commerciale,
            plus dix (10) ans pour les obligations comptables. Les données liées
            à la fidélisation et à la prospection sont conservées pendant la
            durée de votre relation commerciale, plus trois (3) ans après votre
            dernier achat.
          </p>

          <p className="text-black text-justify mb-4">
            • La sécurité de vos données est notre priorité. Si vous avez des
            questions ou souhaitez exercer vos droits en matière de
            confidentialité, veuillez nous contacter. Votre confiance est
            précieuse, et nous nous engageons à respecter les réglementations en
            vigueur pour protéger vos données personnelles.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PagePrivacy;

import Header from "../Navigation/BaseNavbar.jsx";
import FirstSection from "../Section/FirstSection.jsx";
import SecondSection from "../Section/SecondSection.jsx";
import SectionAgency from "../Section/SectionAgency.jsx";
import Form from "../Contact/FormContact.jsx";
import Footer from "../Footer/Footer.jsx";
import CookieModal from "../Cookie/Cookie.jsx";
import { useState } from "react";

const Home = () => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true); // Vous pouvez initialiser ceci comme vous le souhaitez

  // Fonction pour gérer l'acceptation des cookies
  const handleAcceptCookies = () => {
    setIsCookieModalOpen(false); // Ferme le modal lorsque les cookies sont acceptés
    // Vous pouvez également gérer le stockage des cookies ici
  };

  // Fonction pour gérer la fermeture du modal sans accepter les cookies
  const handleRequestClose = () => {
    setIsCookieModalOpen(false);
  };
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <SectionAgency />
      <Form />
      {isCookieModalOpen && (
        <CookieModal
          isOpen={isCookieModalOpen}
          onRequestClose={handleRequestClose}
          onAccept={handleAcceptCookies}
        />
      )}
      <Footer />
    </>
  );
};

export default Home;

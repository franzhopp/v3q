import Header from "../Navigation/BaseNavbar.jsx";
import FirstSection from "../Section/FirstSection.jsx";
import SecondSection from "../Section/SecondSection.jsx";
import SectionAgency from "../Section/SectionAgency.jsx";
import Form from "../Contact/FormContact.jsx";
import Footer from "../Footer/Footer.jsx";
import CookieModal from "../Cookie/Cookie.jsx";
import { useState } from "react";

const Home = () => {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);
  const handleAcceptCookies = () => {
    setIsCookieModalOpen(false);
  };

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

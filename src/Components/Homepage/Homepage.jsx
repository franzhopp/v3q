import Header from "../Navigation/BaseNavbar.jsx";
import FirstSection from "../Section/FirstSection.jsx";
import SecondSection from "../Section/SecondSection.jsx";
import SectionAgency from "../Section/SectionAgency.jsx";
import Form from "../Contact/FormContact.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <SectionAgency />
      <Form />
      <Footer />
    </>
  );
};

export default Home;

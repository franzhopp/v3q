import Header from "../Navigation/BaseNavbar.jsx";
import Section from "../Section/FirstSection.jsx";
import SectionAgency from "../Section/SectionAgency.jsx";
import SectionDuplicate from "../Section/SecondSection.jsx";
import Form from "../Contact/FormContact.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <SectionDuplicate />
      <SectionAgency />
      <Form />
      <Footer />
    </>
  );
};

export default Home;

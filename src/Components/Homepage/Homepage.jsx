import Header from "../Navigation/MainNavbarDesktop.jsx";
import FirstSection from "../Section/FirstSection.jsx";
import SecondSection from "../Section/SecondSection.jsx";
import SectionAgency from "../Section/SectionAgency.jsx";
import Form from "../Contact/MainPageContact.jsx";
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

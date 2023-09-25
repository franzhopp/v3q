import Header from "../Navbar/navbar.jsx";
import Section from "../Section/section.jsx";
import SectionAgency from "../Section/section-agency.jsx";
import SectionDuplicate from "../Section/section-duplicate.jsx";
import Form from "../Contact/contact.jsx";
import Footer from "../Footer/footer.jsx";

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

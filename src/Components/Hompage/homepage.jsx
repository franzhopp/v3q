import Form from "../Contact/contact";
import Footer from "../Footer/footer";
import Section from "../Section/section";
import SectionAgency from "../Section/section-agency";
import SectionDuplicate from "../Section/section-duplicate";

const Home = () => {
  return (
    <>
    <Section/>
    <SectionDuplicate/>
    <SectionAgency/>
    <Form/>
    <Footer/>
    </>
  );
};

export default Home;

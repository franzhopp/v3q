import Header from "../Components/Navigation/MainNavbarDesktop.jsx";
import BlocsItemsHome from "../Components/Section/TextHome/MainBlocsHome.jsx";
import BlocsItemsStrategy from "../Components/Section/TextStrategy/MainBlocsStrategy.jsx";
import BlocsItemsAgency from "../Components/Section/TextAgency/MainBlocsAgency.jsx";
import Contact from "../Components/UI/Form/Contact/MainPageContact.jsx";
import Footer from "../Components/Footer/MainFooter.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <BlocsItemsHome />
      <BlocsItemsStrategy />
      <BlocsItemsAgency />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

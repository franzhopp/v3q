import Header from "../Navigation/MainNavbarDesktop.jsx";
import BlocsItemsHome from "../Section/TextHome/MainBlocsHome.jsx";
import BlocsItemsStrategy from "../Section/TextStrategy/MainBlocsStrategy.jsx";
import BlocsItemsAgency from "../Section/TextAgency/MainBlocsAgency.jsx";
import Contact from "../Contact/MainPageContact.jsx";
import Footer from "../Footer/MainFooter.jsx";

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

import NavbarServices from "../Navigation/NavbarServices/NavbarServices.jsx";
import TitleWebsite from "./Title/TitleWebsite.jsx";
import SubTitle from "./Title/SubTitle.jsx";
import BlocsItems from "./Text/BlocsItems.jsx";
import TextServices from "./Text/TextServices.jsx";
import SvgSettings from "./Svg/SvgSettings.jsx";
import TextOffers from "./Text/TextOffers.jsx";
import ButtonServices from "../UI/Button/ButtonServices";
import BackToTopButton from "../UI/ScrollToTop/BackToTopButton.jsx";
import TextMarketing from "./Text/TextMarketing";
import TextReturnContact from "./Text/TextReturnContact";
import Footer from "../Footer/MainFooter.jsx";

const Services = () => {
  return (
    <section className="bg-fff6e4">
      <NavbarServices />
      <TitleWebsite />
      <SubTitle />
      <BlocsItems />
      <SvgSettings />
      <BackToTopButton />
      <TextServices />
      <ButtonServices />
      <TextOffers />
      <TextMarketing />
      <TextReturnContact />
      <Footer />
    </section>
  );
};

export default Services;

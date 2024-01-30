import NavbarQuote from "../Navigation/NavbarPages/NavbarPages.jsx";
import TitleQuoteNavbar from "../UI/Title/TitleQuote.jsx";
import BlocsConditions from "./TextStrategy/BlocsConditionsQuote.jsx";
import FormQuote from "./Email/FormQuote.jsx";
import Footer from "../Footer/MainFooter.jsx";
import SvgFontRight from "./Svg/SvgFontRight.jsx";
import SvgFontLeft from "./Svg/SvgFontLeft.jsx";
import TitleQuoteBloc from "./TitleQuote/Title.jsx";

const MainPageQuote = () => {
  return (
    <section className="bg-fff6e4 bg-contact-blur">
      <NavbarQuote />
      <TitleQuoteNavbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="mr-10 lg:col-span-2 lg:py-12">
            <TitleQuoteBloc />
            <BlocsConditions />
          </div>
          <div className="lg:col-span-3 lg:p-12">
            <div className="flex justify-end relative">
              <SvgFontRight />
            </div>
            <div className="flex justify-start relative">
              <SvgFontLeft />
            </div>
            <FormQuote />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MainPageQuote;

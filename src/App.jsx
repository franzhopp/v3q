import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/UI/TopOfPage/ScrollToTop.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import Homepage from "./Home/Homepage.jsx";
import BlocsItemsHome from "./Components/Section/TextHome/MainBlocsHome.jsx";
import PageValues from "./Components/Values/MainPageValues.jsx";
import DiscoverDeveloper from "./Components/Discover/DiscoverDevelopper/MainPageDevelopper.jsx";
import DiscoverDesigner from "./Components/Discover/DiscoverDesigner/MainPageDesigner.jsx";
import Services from "./Services/MainServices.jsx";
import PricingFr from "./Components/Pricing/MainPricingFr.jsx";
import PricingUk from "./Components/Pricing/MainPricingUk.jsx";
import MainPageQuote from "./Components/UI/Form/Quote/MainPageQuote.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import PageNotFound from "./Pages/Error/PageNotFound.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<BlocsItemsHome />} />
            <Route path="/values" element={<PageValues />} />
            <Route path="/developer" element={<DiscoverDeveloper />} />
            <Route path="/designer" element={<DiscoverDesigner />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricingfr" element={<PricingFr />} />
            <Route path="/pricinguk" element={<PricingUk />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<MainPageQuote />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Section from "./Components/Section/FirstSection.jsx";
import EthicsPage from "./Components/Ethics/CardsEthics.jsx";
import Services from "./Components/Services/MainServices.jsx";
import DiscoverWebDeveloper from "./Components/Discover/DiscoverWebDevelopper/MainPageDevelopper.jsx";
import DiscoverDesigner from "./Components/Discover/DiscoverDesigner/Designer.jsx";
import Rate from "./Components/Rate/Prices/PageAllRates.jsx";
import Portfolio from "./Components/Portfolio/AllProjects/Portfolio.jsx";
import DevisFree from "./Components/Devis/FormDevis.jsx";
import PagePrivacy from "./Components/Privacy/Pages/PagePrivacy.jsx";
import PageConditions from "./Components/Privacy/Pages/PageTerms.jsx";
import PageMentions from "./Components/Privacy/Pages/PageMentions.jsx";
import PageNotFound from "./Components/404/Error/PageNotFound.jsx";
import RateUk from "./Components/Rate/Prices/PageAllRatesUk.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<Section />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<EthicsPage />} />
            <Route path="/developer" element={<DiscoverWebDeveloper />} />
            <Route path="/designer" element={<DiscoverDesigner />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricingfr" element={<Rate />} />
            <Route path="/pricinguk" element={<RateUk />} />
            <Route path="/quote" element={<DevisFree />} />
            <Route path="/privacy" element={<PagePrivacy />} />
            <Route path="/terms" element={<PageConditions />} />
            <Route path="/mentions" element={<PageMentions />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;

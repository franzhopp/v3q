import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Section from "./Components/Section/FirstSection.jsx";
import PageValues from "./Components/Values/MainPageValues.jsx";
import DiscoverDeveloper from "./Components/Discover/DiscoverDevelopper/MainPageDevelopper.jsx";
import DiscoverDesigner from "./Components/Discover/DiscoverDesigner/MainPageDesigner.jsx";
import Services from "./Components/Services/MainServices.jsx";
import PricingFr from "./Components/Rate/Prices/PageAllRates.jsx";
import PricingUk from "./Components/Rate/Prices/PageAllRatesUk.jsx";
import MainPageQuote from "./Components/Quote/MainPageQuote.jsx";
import Portfolio from "./Components/Portfolio/AllProjects/Portfolio.jsx";
import PageNotFound from "./Components/404/Error/PageNotFound.jsx";
// import PagePrivacy from "./Components/Privacy/Pages/PagePrivacy.jsx";
// import PageConditions from "./Components/Privacy/Pages/PageTerms.jsx";
// import PageMentions from "./Components/Privacy/Pages/PageMentions.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<Section />} />
            <Route path="/values" element={<PageValues />} />
            <Route path="/developer" element={<DiscoverDeveloper />} />
            <Route path="/designer" element={<DiscoverDesigner />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricingfr" element={<PricingFr />} />
            <Route path="/pricinguk" element={<PricingUk />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/quote" element={<MainPageQuote />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/privacy" element={<PagePrivacy />} />
            <Route path="/terms" element={<PageConditions />} />
            <Route path="/mentions" element={<PageMentions />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./loading.jsx";
import CookieModal from "./Components/Cookie/Cookie.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Section from "./Components/Section/FirstSection.jsx";
import EthicsPage from "./Components/Ethics/CardsEthics.jsx";
import Services from "./Components/Services/BaseServices.jsx";
import DiscoverWebDeveloper from "./Components/Discover/DiscoverWebDevelopper/WebDevelopper.jsx";
import DiscoverDesigner from "./Components/Discover/DiscoverDesigner/Designer.jsx";
import Rate from "./Components/Rate/Prices/PageAllRates.jsx";
import Portfolio from "./Components/Portfolio/AllProjects/Portfolio.jsx";
import DevisFree from "./Components/Devis/FormDevis.jsx";
import PagePrivacy from "./Components/Privacy/Pages/PagePrivacy.jsx";
import PageConditions from "./Components/Privacy/Pages/PageTerms.jsx";
import PageMentions from "./Components/Privacy/Pages/PageMentions.jsx";
import PageNotFound from "./Components/404/Error/PageNotFound.jsx";

const App = () => {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);
  useEffect(() => {
    const hasAcceptedCookie = localStorage.getItem("accept_cookie");
    if (!hasAcceptedCookie) {
      setCookieModalOpen(true);
    }
  }, []);
  const handleAcceptCookie = () => {
    localStorage.setItem("accept_cookie", "true", { expires: 365 });
    setCookieModalOpen(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 2000);
    }
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <LanguageProvider>
          <ThemeProvider>
            {isCookieModalOpen && (
              <CookieModal
                isOpen={isCookieModalOpen}
                onAccept={handleAcceptCookie}
                onRequestClose={() => setCookieModalOpen(false)}
              />
            )}
            <Router>
              <ScrollToTop />
              <Routes>
              <Route path="/test" element={<Loader />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/" element={<Section />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ethics" element={<EthicsPage />} />
                <Route path="/webdev" element={<DiscoverWebDeveloper />} />
                <Route path="/designer" element={<DiscoverDesigner />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/rate" element={<Rate />} />
                <Route path="/devis" element={<DevisFree />} />
                <Route path="/privacy" element={<PagePrivacy />} />
                <Route path="/terms" element={<PageConditions />} />
                <Route path="/mentions" element={<PageMentions />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </LanguageProvider>
      )}
    </main>
  );
};

export default App;

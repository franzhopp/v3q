import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage.jsx";
import Section from "./Components/Section/section.jsx";
import Services from "./Components/Services/services.jsx";
import EthicsPage from "./Components/Ethics/ethics.jsx";
import DevisGratuit from "./Components/Devis/devis.jsx";
import Portfolio from "./Components/Portfolio/portfolio.jsx";
import PagePrivacy from "./Components/Privacy/page-privacy.jsx";
import PageConditions from "./Components/Privacy/page-terms.jsx";
import PageMentions from "./Components/Privacy/page-mentions.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Section />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nosvaleurs" element={<EthicsPage />} />
          <Route path="/devis" element={<DevisGratuit />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy" element={<PagePrivacy />} />
          <Route path="/terms" element={<PageConditions />} />
          <Route path="/mentions" element={<PageMentions />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage.jsx";
import Section from "./Components/Section/section.jsx";
import Services from "./Components/Services/services.jsx";
import EthicsPage from "./Components/Ethics/ethics.jsx";
import DevisGratuit from "./Components/Devis/devis.jsx";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;

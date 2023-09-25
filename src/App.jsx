import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/homepage.jsx";
import Section from "./Components/Section/section.jsx";
import Services from "./Components/Services/services.jsx";
import EthicsPage from "./Components/Ethics/ethics.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Section />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nosvaleurs" element={<EthicsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

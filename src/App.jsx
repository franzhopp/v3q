import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Navbar/navbar.jsx";
import Homepage from "./Components/Hompage/homepage.jsx";
import Section from "./Components/Section/section.jsx";
import Services from "./Components/Services/services.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Section />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

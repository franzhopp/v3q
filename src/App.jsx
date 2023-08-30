import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Navbar/navbar.jsx";
import Homepage from "./Components/Hompage/homepage.jsx";
import Section from "./Components/Section/section.jsx";

const App = () => {
  return (
    <>
      <div className="fade-in">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/" element={<Section />} />
            </Routes>
          </Router>
      </div>
    </>
  );
};

export default App;
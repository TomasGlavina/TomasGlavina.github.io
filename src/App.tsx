import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Contact from "./pages/Contact";
//import SortingVisualizer from './pages/SortingVisualizer';

function App() {
  return (
    <div className="pt-20 mocha text-text bg-base ">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


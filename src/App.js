import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import SecondaryNav from "./components/SecondaryNav";
import ScrollNavs from "./components/ScrollNavs";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        
        <TopNavbar />
        <SecondaryNav />


        <ScrollNavs />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
// import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <>
      <div>  
      <Router>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/gallery" element={<Gallery/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>   
    </div>
    </>
  );
}

export default App;

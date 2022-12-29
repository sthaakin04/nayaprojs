import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

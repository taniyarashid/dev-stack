import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
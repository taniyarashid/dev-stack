import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection />
      <ToastContainer />
    </>
  );
}

export default App;
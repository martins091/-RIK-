import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventHighlights from "./components/EventHighlights";
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <EventHighlights />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;

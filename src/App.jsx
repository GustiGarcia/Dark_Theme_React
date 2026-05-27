import AppProvider from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  return (
    <AppProvider>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
import AppProvider from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer"; // El que armamos en el paso anterior

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Home />
      <Footer />
    </AppProvider>
  );
}

export default App;
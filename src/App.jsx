import CurrencyList from "./components/CurrencyList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CurrencyList />
      <Footer />
    </div>
  );
};

export default App;

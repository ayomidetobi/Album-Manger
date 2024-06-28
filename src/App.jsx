import Build from "./components/Home/build";
import Digit from "./components/Home/digit";
import Feature from "./components/Home/feature";
import Find from "./components/Home/find";
import Hero from "./components/Home/hero";
import Navbar from "./components/layout/navbar";
import "./App.css";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="bg-curve">
        <div className="hero">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Feature />
      <Find />
      <div className="bg-build">
        <div className="bg-line">
          <Build />
        </div>
      </div>
      <Digit />
      <div className="container-fluid bg-black text-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;

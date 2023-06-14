import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="sticky-header">
        <Header />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

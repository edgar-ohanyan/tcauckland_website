import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
 import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sticky-header">
          <Header/>
        </div>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<h3>ABOUT</h3>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

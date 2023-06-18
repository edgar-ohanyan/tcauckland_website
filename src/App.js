import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SubmitCV from "./components/SubmitCV";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import React from "react";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <div className="App">
          <div className="sticky-header">
            <Header/>
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/submit-cv" element={<SubmitCV/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </LocalizationProvider>
  );
}

export default App;

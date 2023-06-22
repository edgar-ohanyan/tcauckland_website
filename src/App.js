import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SubmitCV from "./components/SubmitCV";
import ApplyForStudy from "./components/ApplyForStudy";
import Layout from "./components/Layout";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/submit-cv" element={<SubmitCV />} />
            <Route path="/apply-for-study" element={<ApplyForStudy />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;

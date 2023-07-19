import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import Layout from "./components/Layout";
import Home from "./components/Home";
import SubmitCV from "./components/SubmitCV";
import ApplyForStudy from "./components/ApplyForStudy";
import VisasAndPermits from "./components/VisasAndPermits";
import StudyWithUs from "./components/StudyWithUs";
import EnglishPrograms from "./components/EnglishPrograms";
import FoundaationPrograms from "./components/FoundaationPrograms";
import Tutoring from "./components/Tutoring";
import ApplicationPage from "./components/ApplicationPage";
import FindAJob from "./components/FindAJob";

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
            <Route path="/study-with-us" element={<StudyWithUs />} />
            <Route path="/visas-and-permits" element={<VisasAndPermits />} />
            <Route path="/english-programs" element={<EnglishPrograms />} />
            <Route
              path="/foundation-programs"
              element={<FoundaationPrograms />}
            />
            <Route path="/tutoring" element={<Tutoring />} />
            <Route path="/student-application" element={<ApplicationPage />} />
            <Route path="/find-a-job" element={<FindAJob />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;

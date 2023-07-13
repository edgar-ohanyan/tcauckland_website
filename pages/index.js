import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import Layout from "../src/components/Layout";
import Home from "../src/components/Home";
import SubmitCV from "../src/components/SubmitCV";
import ApplyForStudy from "../src/components/ApplyForStudy";
import VisasAndPermits from "../src/components/VisasAndPermits";
import StudyWithUs from "../src/components/StudyWithUs";
import EnglishPrograms from "../src/components/EnglishPrograms";
import FoundaationPrograms from "../src/components/FoundaationPrograms";
import Tutoring from "../src/components/Tutoring";
import ApplicationPage from "../src/components/ApplicationPage";

function App() {
    return (
        <BrowserRouter>
            {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
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
                </Route>
            </Routes>
            {/*</LocalizationProvider>*/}
        </BrowserRouter>
    );
}

export default App;

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
import CareerHub from "./components/CareerHub";
import { ReasonsToTeachInternationally } from "./components/CareerHub/ReasonsToTeachInternationally";
import { InternationalTeaching } from "./components/CareerHub/InternationalTeaching";
import { TeachingAbroad } from "./components/CareerHub/TeachingAbroad";
import { LinkedInProfile } from "./components/CareerHub/LinkedInProfile";
import { Misconceptions } from "./components/CareerHub/Misconceptions";
import { WorkInKuwait } from "./components/CareerHub/WorkInKuwait";
import { GreatLeader } from "./components/CareerHub/GreatLeader";
import CandiateJourney from "./components/CandiateJourney";
import BecomePartner from "./components/BecomePartner";
import LeaderPostion from "./components/LeaderPostion";
import VirtualInterviews from "./components/VirtualInterviews";
import SubmitVacancy from "./components/SubmitVacancy";

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
            <Route path="/career-hub" element={<CareerHub />} />
            <Route
              path="/reasons-to-teach-internationally"
              element={<ReasonsToTeachInternationally />}
            />
            <Route
              path="/international-teaching"
              element={<InternationalTeaching />}
            />
            <Route path="/teaching-abroad" element={<TeachingAbroad />} />
            <Route path="/linkedin-profile" element={<LinkedInProfile />} />
            <Route path="/misconceptions" element={<Misconceptions />} />
            <Route path="/work-in-kuwait" element={<WorkInKuwait />} />
            <Route path="/great-leader" element={<GreatLeader />} />
            <Route path="/candiate-journey" element={<CandiateJourney />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/leader-postion" element={<LeaderPostion />} />
            <Route path="/virtual-interviews" element={<VirtualInterviews />} />
            <Route path="/submit-vacancy" element={<SubmitVacancy />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;

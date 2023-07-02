import React from "react";
import Button from "@mui/material/Button";
import foundationPage from "../../assets/pictures/foundationPage.jpeg";

export default function FoundaationPrograms() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={foundationPage} className="main-picture" alt="home_bg" />
      </div>{" "}
      <div className="page-content">
        <h1 className="page-title">What is a foundation course?</h1>
        <p className="page-content-text-primary">
          A foundation course is a programme that will prepare you for an
          undergraduate degree at New Zealand universities. They are
          specifically designed for international students who want to study
          abroad. Studying a foundation course will help you attain the correct
          level of qualifications and skills to pursue a degree at university -
          it will also help students who require additional English language
          support.
        </p>
        <div className="chapter-content-text">
          <h1 className="chapter-title">Why study a foundation programme?</h1>
          <p className="page-content-text">
            Foundation or pathway programmes are designed to prepare students
            for University education, but also to develop skills in:
          </p>

          <ul>
            <li>Critical and independent thinking</li>
            <li>Computer use and research</li>
            <li>
              Essential subject knowledge, for example in accounting, calculus,
              chemistry, computer science, design, economics, English,
              geography, physics, and statistics
            </li>
          </ul>
          <p>
            After completing your programme, you can gain guaranteed entry into
            Universities in New Zealand undergraduate degree programmes, if you
            meet the following requirements:
          </p>
          <ol>
            <li>
              The minimum overall foundation course average score for the
              relevant undergraduate degree programme
            </li>
            <li>
              English language proficiency at a level equivalent to the
              International English Language Testing System (IELTS) of at least
              6.0 overall, with no band below 5.5. (Note that some programmes
              may require higher scores)
            </li>
            <li>
              Meeting any additional programme entry requirements such as
              interviews, auditions or portfolios
            </li>
          </ol>
          <p>
            For detailed information on the requirements for admission into
            undergraduate degree programmes, please click on apply now.
          </p>
        </div>
      </div>
      <div className="apply-study-button-box">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}

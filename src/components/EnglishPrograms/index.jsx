import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

import englishProgrum from "../../assets/background/englishProgrum.jpg";

export default function EnglishPrograms() {
  return (
    <div className="englishPrograms">
      <div className="main-picture-box">
        <LazyLoadImage
          src={englishProgrum}
          className="main-picture"
          alt="home_bg"
        />
      </div>
      <div className="page-content">
        <h1 className="page-title">Learning English in New Zealand is easy</h1>
        <p className="page-content-text-primary">
          Learning English in New Zealand is easy with tailored programmes.
          English courses in New Zealand are flexible and you can start at any
          time to suit your needs. These courses are designed to help you meet
          international English standards and prepare you for future study and
          life in NZ and around the world.
        </p>

        <div class="chapter-content-text">
          <h2 className="chapter-title">
            List of popular English Courses to study in New Zealand:
          </h2>

          <h4>General English</h4>
          <p>
            If you are desirous of augmenting your English proficiency to
            facilitate effective communication, occupational pursuits, or travel
            endeavors, this meticulously crafted course is specifically designed
            to meet your needs. It comprehensively encompasses every facet of
            language acquisition, encompassing the realms of reading, writing,
            listening, and speaking. Irrespective of whether you possess
            rudimentary knowledge or possess an advanced grasp of the language,
            this course is adept at catering to learners across all proficiency
            levels.
          </p>

          <h4>IELTS and TOEFL courses</h4>
          <p>
            If your professional or academic pursuits necessitate English as the
            primary medium of communication, these meticulously curated courses
            are specifically tailored to aid you in achieving that objective.
            They are adept at evaluating your current language proficiency and
            diligently preparing you for the esteemed IELTS or TOEFL
            examinations, which serve as vital benchmarks of English language
            competence.
          </p>

          <h4>Cambridge Exam preparation</h4>
          <p>
            This comprehensive course aims to cultivate and refine your language
            skills while meticulously equipping you with the necessary expertise
            to excel in the esteemed Cambridge Exams. Widely recognized and
            accepted by universities, employers, and governments across the
            globe, these exams serve as a paramount benchmark of language
            proficiency. By successfully completing this course, you will not
            only enhance your linguistic aptitude but also position yourself
            favorably for various academic, professional, and governmental
            opportunities worldwide.
          </p>

          <h4>Academic English</h4>
          <p>
            If English is not your primary language and you aspire to pursue
            further education in New Zealand, embarking upon an Academic English
            or English for Academic Purposes (EAP) course would be highly
            advantageous. This specialized program is designed to prioritize the
            refinement of your English language proficiency while also honing
            crucial skills essential for academic success. These include
            proficient essay and report writing, effective listening and
            engaging in discussions, as well as enhancing reading comprehension
            abilities. By immersing yourself in this comprehensive curriculum,
            you will significantly enhance your linguistic competence and
            acquire the necessary tools to excel in your academic pursuits in
            New Zealand.
          </p>

          <h4>English + Work</h4>
          <p>
            By combining the study of English with invaluable real-world work
            experiences, such as Demi au Pair placements and internships, you
            have the exceptional opportunity to simultaneously enhance your
            language proficiency and acquire practical skills within a
            professional setting. This unique approach allows for the seamless
            integration of theoretical language learning with hands-on
            experiential learning, fostering a comprehensive development of both
            linguistic abilities and practical aptitude. By immersing yourself
            in these immersive work experiences, you will not only witness
            substantial growth in your language abilities but also gain
            invaluable insights and proficiency in a professional environment,
            thereby augmenting your future career prospects.
          </p>

          <h4>English for specific purposes</h4>
          <p>
            If your aspirations involve working within an English-speaking
            environment or increasing your employability, this specialized
            course is tailored to cater to your needs. Specifically designed for
            industries such as hospitality, tourism, and various other business
            sectors, it aims to amplify your language skills, enabling you to
            achieve professional success. By focusing on industry-specific
            language and communication, this course equips you with the
            linguistic dexterity required to thrive in your desired field. By
            enrolling in this program, you will enhance your overall
            professional acumen, thereby increasing your desirability to
            potential employers and broadening your career opportunities within
            these industries.
          </p>
        </div>
      </div>
      <div className="apply-study-button-box">
        <Link to="/student-application" className="card-nav-link">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
          >
            Apply to Study
          </Button>
        </Link>
      </div>
    </div>
  );
}

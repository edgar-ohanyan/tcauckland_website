import React from "react";
import home_bg from "../../assets/pictures/bg_home.jpg";

export default function index() {
  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="candidateJurneyContentBox">
        <div className="candidateJurneyContent">
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemPicBox">
              <img src={home_bg} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Leadership appointments</h2>
              <p className="candidateJurneyContentItemText">
                Teachanywhere has been recruiting and placing teachers, advisors
                and school leaders into international schools and organisations
                since 2005. With offices around the world, including Thailand,
                Dubai, the United Kingdom, Australia, New Zealand and North
                America, our specialist knowledge and experience is
                unparalleled. Appointing a school leader or member of the senior
                leadership team is one of the most important decisions a school
                owner or board have to make. Having the right leaders for your
                school will result in well-educated children, low staff
                turnover, satisfied parents and increased enrolment.
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Search & selection</h2>
              <p className="candidateJurneyContentItemText">
                Understanding the kind of leader your school requires is only
                the first step. As the widely acknowledged worldwide teacher
                shortage grows and the need for experienced leaders in an ever
                expanding international school market increase, the traditional
                method of print or online advertising is no longer a guaranteed
                success.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={home_bg} className="candidateJurneyContentItemPic" />
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemPicBox">
              <img src={home_bg} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">
                The Leadanywhere service provides:
              </h2>
              <p className="candidateJurneyContentItemText">
                - Dedicated account manager to work exclusively on your vacancy <br/>
                - Experienced worldwide recruiters supporting our Leadanywhere team  <br/>
                - Professional online & offline marketing campaigns  <br/>
                - Discreet and targeted headhunting (Domestic and international)  <br/>
                - Referrals to Teachanywhere’s existing database of professionals <br/>
                - Psychometric Testing (optional)  <br/>
                - Building a professional recruitment attraction microsite (optional) <br/>
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Your dedicated account manager</h2>
              <p className="candidateJurneyContentItemText">
              Our dedicated Leadanywhere Account Manager will engage with you to understand the requirements of the post, your school’s challenges and goals in order to match against prospective applicants. Understanding the key competencies of the leader required for your school is only the first step. Attracting a professional pool of candidates and devising a process to select the best fit leader is the next step.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={home_bg} className="candidateJurneyContentItemPic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

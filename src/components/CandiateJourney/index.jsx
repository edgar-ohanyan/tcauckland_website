import React from "react";
import GetInTouch from "../../assets/photos/Get in touch.jpg";
import CompliteYourProfile from "../../assets/photos/Complete your profile.jpg";
import Interview from "../../assets/photos/Interview.jpg";
import ConsiderJobOffer from "../../assets/photos/Consider job offer.jpg";
import PrepearToJob from "../../assets/photos/Prepare for new job.jpg";
import SpeakToUs from "../../assets/photos/teach the world.jpg";
import TeachTheWorld from "../../assets/photos/8 reasons to teach internationally.jpg";
import Commitment from "../../assets/photos/Our commitment.jpg";

import home_bg from "../../assets/pictures/generalPhoto.jpg";


import "./CandiateJourney.css";

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
              <img src={GetInTouch} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 1: Get in touch</h2>
              <p className="candidateJurneyContentItemText">
                If you’ve already made a CV you can apply to our advertised jobs
                or upload it through the website to express general interest. If
                you haven’t made a CV yet, don’t worry as we can help with that
                so just send us an email or give us a call. You may also want to
                take a look at our frequently asked questions about
                international teaching before you start.
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 2: Speak to us</h2>
              <p className="candidateJurneyContentItemText">
                If you meet our minimum requirements for international school
                teachers (see the FAQs above) then one of our consultants will
                be in touch with you to arrange an initial consultative call.
                We’ll ask you questions to get a good understanding of your
                situation, your academics and the type of schools you’ll fit
                into, what you are looking for and give you advice on your
                options. It’s worth taking a quick look at our top 5 tips for a
                good recruitment call beforehand to make sure you get the most
                out of this.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={SpeakToUs} className="candidateJurneyContentItemPic" />
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemPicBox">
              <img src={CompliteYourProfile} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 3: Complete your profile</h2>
              <p className="candidateJurneyContentItemText">
                To proceed with your job search after your call we’ll need to
                complete a profile for you. The main part of this is collecting
                your documents and getting references although you may be asked
                to provide some extra information about your teaching too. If
                you want to know what will be required take a look at our
                required documents for job applications - if any of them are an
                issue don’t panic and just let your consultant know.
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 4: Apply to jobs</h2>
              <p className="candidateJurneyContentItemText">
                Your consultant will advise you of what job options are
                available to you. You’ll then be sent a job description for each
                role so you can decide which international jobs to apply for.
                We’ll use our knowledge of the schools to ensure that they are
                well matched to you. Your consultant will be able to take care
                of the whole application process. There’s usually no need to
                write a cover letter (except for leadership roles) so it’s
                really simple.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={Commitment} className="candidateJurneyContentItemPic" />
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemPicBox">
              <img src={Interview} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 5: Interview</h2>
              <p className="candidateJurneyContentItemText">
                If all goes well you’ll have an opportunity to interview with
                some of your chosen schools. The process for this can vary -
                most interviews take place via video call although there are
                occasional opportunities for face-to-face interviews at some
                points in the year. We have interview tips and will help you
                prepare so you can give the best impression - if you have more
                than one option we’ll advise you how to approach the situation
                so you can treat all of them professionally. We will debrief you
                after the interview and follow up with the schools, which can
                help when you’ve forgotten to say that one thing... If you
                aren’t successful we’ll do our best to help you learn from it
                and be successful in your next application.
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">Step 6: Consider job offers</h2>
              <p className="candidateJurneyContentItemText">
                If you’re successful at interview you’ll receive a job offer
                from the school. We’ll ensure you don’t have any trouble with
                understanding an international school job offer and you’ll
                usually have a couple of days to decide if you want to accept.
                If there’s more than one option we’ll help you liaise with the
                schools professionally and weigh up the options to make a
                decision.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={ConsiderJobOffer} className="candidateJurneyContentItemPic" />
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemPicBox">
              <img src={PrepearToJob} className="candidateJurneyContentItemPic" />
            </div>
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">
                Step 7: Prepare for your new job
              </h2>
              <p className="candidateJurneyContentItemText">
                Once you have accepted a role we hand over to your new school,
                who will be in charge of your onboarding and visa application,
                and to our own onboarding specialist here who will be in touch
                to support throughout the entire process. They can give you
                advice on preparing your documents for a visa application, help
                with obtaining a criminal record clearance, better understanding
                of the expected costs and advice on how to prepare for the move.
                We’ll also support if you have any issues with your school or
                need any other emotional or practical support.
              </p>
            </div>
          </div>
          <div className="candidateJurneyContentItem">
            <div className="candidateJurneyContentItemTextBox">
              <h2 className="chapter-title">
                Step 8: Teach the world, live the dream
              </h2>
              <p className="candidateJurneyContentItemText">
                The last step of our candidate journey is the first step of your
                adventure! Time will fly by and before you know it you’ll be
                packing and ready to go, and in the airport lounge waiting for
                your flight. We’ll still check in with you occasionally to see
                how life is going in your new city and school. We’ve also got
                resources that can help you with settling into your new role,
                dealing with culture shock, managing your budget and progressing
                your career and more. If you can take the time to touch base
                with us and provide your feedback or write a review about the
                service you’ve received it really helps us, but if you’re too
                busy enjoying your new life we understand.
              </p>
            </div>
            <div className="candidateJurneyContentItemPicBox">
              <img src={TeachTheWorld} className="candidateJurneyContentItemPic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

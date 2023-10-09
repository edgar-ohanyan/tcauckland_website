import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormHelperText, Grid, Button } from "@mui/material";
import { SpinningCircles } from "react-loading-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tutoring from "../../assets/background/tutoring.jpg";

import "./tutoring.css";

export default function Tutoring() {
  const [requestBody, setRequestBody] = useState({});
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [showSending, setShowSending] = useState(false);
  const [application, setApplication] = useState({
    topic: "",
    name: "",
    edu: "",
    timing: "",
    area: "",
    email: "",
    phone: 0,
    specReq: "",
  });

  const onChange = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const submitForm = async () => {
    setShowSending((prev) => !prev);
    setSentError(false);
    setSentSuccessfully(false);
    await sendEmail();
  };

  const sendEmail = async () => {
    const formData = new FormData();
    for (const key in application) {
      formData.append(key, application[key]);
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/tutoring-req`,
        formData
      );
      setSentSuccessfully(true);
      setApplication({
        topic: "",
        name: "",
        edu: "",
        timing: "",
        area: "",
        email: "",
        phone: 0,
        specReq: "",
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
    }
  };

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending((prev) => !prev);
    }
  }, [sentSuccessfully, sentError]);

  useEffect(() => {
    console.log("requestBody: ", requestBody);
  }, [requestBody]);

  return (
    <div>
      <div className="main-picture-box">
        <LazyLoadImage src={tutoring} className="main-picture" alt="home_bg" />
      </div>
      <h1 className="tutoring-page-title">Tutoring</h1>
      <div className="tutoring-page-content">
        <div className="tutoring-page-content-left">
          <p className="page-content-text">
            As an organization driven by a profound commitment to the success
            and fulfillment of our students, our paramount objective is to
            provide unparalleled services that enable individuals to realize
            their aspirations in pursuing their educational journey in New
            Zealand. We firmly believe that with the right support and guidance
            from dedicated professionals, every student possesses the inherent
            capability to accomplish remarkable feats.
          </p>
          <p className="page-content-text">
            Our overarching mission centers on empowering students to achieve
            their goals, fostering an environment that nurtures their personal
            and academic growth. By offering a comprehensive range of services
            tailored to meet individual needs, we endeavor to ensure that each
            student receives the necessary resources and support to thrive in
            their chosen field of study.
          </p>
          <p className="page-content-text">
            Recognizing the unique and diverse requirements of students, we are
            prepared to extend our assistance across a wide spectrum of
            subjects. Whether you seek guidance in mathematics, science,
            humanities, social sciences, business, or any other academic
            discipline, our extensive network of proficient tutors stands ready
            to provide personalized mentorship and support, tailored to your
            specific needs.
          </p>
        </div>
        <div className="midle-line"></div>
        <div className="tutoring-page-content-right">
          <h1 className="form-title">Find A Tutor</h1>
          <form method="POST" id="contactForm" name="contactForm">
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="topic"
                    onChange={onChange}
                  >
                    <option>Maths</option>
                    <option>English</option>
                    <option>Science</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="edu"
                    id="edu"
                    placeholder="Education Level"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="timing"
                    id="timing"
                    placeholder="Select Timing"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="area"
                    id="area"
                    placeholder="Area"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="ph"
                    id="ph"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    name="specReq"
                    id="specReq"
                    placeholder="Special requirements?"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <Grid item xs={4} sm={4}>
                    <Button
                      onClick={submitForm}
                      variant="contained"
                      sx={{
                        backgroundColor: "#4daeda",
                        width: "100%",
                        fontSize: 20,
                      }}
                    >
                      Request
                      {showSending && (
                        <span className="sendingIcon">
                          <SpinningCircles scale={22} />
                        </span>
                      )}
                    </Button>
                    <FormHelperText>
                      {sentSuccessfully ? "Request Sent Successfully" : ""}
                    </FormHelperText>
                    <FormHelperText error color="red">
                      {sentError ? "Request Sending error" : ""}
                    </FormHelperText>
                  </Grid>
                  <div className="submitting"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

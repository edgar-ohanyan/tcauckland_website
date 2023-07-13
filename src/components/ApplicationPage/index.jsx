import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  TextField,
  Grid,
  RadioGroup,
  FormControl,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import BpRadio from "../CustomMUI/BpRadio";
import "./applicantForm.css";

const ApplicantForm = () => {
  const [requestBody, setRequestBody] = useState({});
  const onChange = (e) => {
    console.log("e.target: ", e.target);
    setRequestBody((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeBDate = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      bDay: String(e.$d).split(" ").slice(1, 4).join("."),
    }));
  };

  // Dev process
  const myData = {
    addressStr: "Kievyan 7, 13",
    addressStrLine2: "none",
    bDay: "Jul.02.2023",
    birthCountry: "Armenia",
    city: "Yerevan",
    country: "Armenia",
    eduQualifDate: "12/22",
    eduQualifGrade: "some grade",
    eduQualifLevel: "some level",
    eduQualifSubject: "Some subject",
    email: "edgarohanyan1994@gmail.com",
    emergContactAddr: "Za semi moryami",
    emergContactName: "Hrashid",
    emergContactPhone: "+000999888777",
    emergContactRelation: "Axperapay",
    englishLangCertificate: "Best Certificate ",
    englishLangCertificateDate: "11/12",
    englishLangCertificateGrade:
      "You should state what your enquiry is about in details. For example, what are you concerned about? How much are the tuition fees, accommodation costs, life in New Zealand, visa rules and regulations etc.You should state what your enquiry is about in details. For example, what are you concerned about? How much are the tuition fees, accommodation costs, life in New Zealand, visa rules and regulations etc.You should state what your enquiry is about in details. For example, what are you concerned about? How much are the tuition fees, accommodation costs, life in New Zealand, visa rules and regulations etc.You should state what your enquiry is about in details. For example, what are you concerned about? How much are the tuition fees, accommodation costs, life in New Zealand, visa rules and regulations etc.",
    fName: "Edgar",
    gender: "male",
    lName: "Ohanyan",
    mName: "Riich",
    nation: "Armenian",
    phone: "+37443337000",
    postalZipCode: "0012",
    scholarship: "govScholar",
    secondaryEduCountry: "Armenia",
    secondaryEduName: "Hambarcum Galstyan",
    sponsorName: "22/33",
    stateProvince: "Yerevan",
  };

  // Dev process
  const sendEmail = async () => {
    const res = await emailjs.send(
      "service_ndr6xcb",
      "template_d8bnqxl",
      myData,
      "hLkFnRomSneBkqCTP"
    );
    console.log(res);
  };

  useEffect(() => {
    console.log("requestBody: ", requestBody);
  }, [requestBody]);

  return (
    <div className="applicantForm">
      <div className="formContainer">
        <form className="form">
          <h1 className="inputSectionTitle">Applicant Details</h1>
          <div className="inputSection">
            {/* Full Name */}
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">Full Name</p>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4}>
                  <TextField
                    onChange={onChange}
                    name="fName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    size="medium"
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField
                    onChange={onChange}
                    name="mName"
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    size="medium"
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField
                    onChange={onChange}
                    name="lName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    size="medium"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="inputSectionItem">
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4}>
                  <p className="inputSectionItemTitle">Gender</p>
                  <FormControl>
                    <RadioGroup
                      defaultValue="female"
                      aria-labelledby="demo-customized-radios"
                      name="gender"
                      onChange={onChange}
                      id="gender"
                    >
                      <FormControlLabel
                        value="female"
                        control={<BpRadio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<BpRadio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <p className="inputSectionItemTitle">Date Of Birth</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker name="bDay" onChange={onChangeBDate} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField
                    onChange={onChange}
                    name="nation"
                    label="Nationality"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "20px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="birthCountry"
                    label="Country Of Birth"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">Home Address</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="addressStr"
                    label="Street Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="addressStrLine2"
                    label="Street Address Line 2"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="city"
                    label="City"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="stateProvince"
                    label="State / Province"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="postalZipCode"
                    label="Postal / Zip Code"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">Contact Informaition</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="emergContactName"
                    label="Emergency Contact Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="emergContactPhone"
                    label="Emergency Contact Phone Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="emergContactRelation"
                    label="Emergency Contact Relation"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                  <TextField
                    onChange={onChange}
                    name="emergContactAddr"
                    label="Emergency Contact Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    style={{ margin: "10px 0" }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="separateLine" />
          <h1 className="inputSectionTitle">University Application Details</h1>
          <p className="inputSectionTitleText">
            As part of the university application, you must state the name of
            the degree you wish to study and how you intend to pay the tuition
            fees.
          </p>
          <div className="inputSection">
            <div className="inputSectionItem">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <p className="inputSectionItemTitle">
                    Degree you wish to study in New Zealand:
                  </p>
                  <TextField
                    onChange={onChange}
                    name="fName"
                    label="What is the intended degree?"
                    variant="outlined"
                    fullWidth
                    helperText="e.g. Medicine, Science, English Program, etc."
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <p className="inputSectionItemTitle">
                    Name of sponsoring body:
                  </p>
                  <TextField
                    onChange={onChange}
                    name="sponsorName"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <p className="inputSectionItemTitle">Proposed start date</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="startDay"
                      size="small"
                      onChange={onChangeBDate}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sm={8}>
                  <FormControl>
                    <p className="inputSectionItemTitle">
                      How do you intend to pay your tuition fees?
                    </p>
                    <RadioGroup
                      aria-labelledby="demo-customized-radios"
                      name="scholarship"
                      onChange={onChange}
                      id="scholarship"
                      row
                    >
                      <FormControlLabel
                        value="govScholar"
                        control={<BpRadio />}
                        label="Government Scholarship"
                      />
                      <FormControlLabel
                        value="privateScholar"
                        control={<BpRadio />}
                        label="Private Scholarship"
                      />
                      <FormControlLabel
                        value="self"
                        control={<BpRadio />}
                        label="Self-Funded"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="separateLine" />
          <h1 className="inputSectionTitle">Education Details</h1>
          <p className="inputSectionTitleText">
            Please give details of all the Schools, Colleges, Universities you
            attended.
          </p>
          <div className="inputSection">
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">
                Secondary, Higher Education:
              </p>
              <Grid container spacing={0}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="secondaryEduName"
                    label="Name of secondary School/College/University"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <TextField
                    onChange={onChange}
                    name="secondaryEduCountry"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField
                    onChange={onChange}
                    label="Dates Attended From-To (mm/yy)"
                    name="sponsorName"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="inputSection">
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">
                Educational Qualifications:
              </p>
              <Grid container spacing={0}>
                <Grid item xs={2} sm={2}>
                  <TextField
                    onChange={onChange}
                    name="eduQualifSubject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    onChange={onChange}
                    name="eduQualifLevel"
                    label="Level"
                    helperText="eg. IGCSE, IB, BA, MSc"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <TextField
                    onChange={onChange}
                    label="Grade"
                    name="eduQualifGrade"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <TextField
                    onChange={onChange}
                    label="Date (mm/yy)"
                    name="eduQualifDate"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="inputSection">
            <div className="inputSectionItem">
              <p className="inputSectionItemTitle">
                English Language Proficiency :
              </p>
              <Grid container spacing={0}>
                <Grid item xs={6} sm={5}>
                  <TextField
                    onChange={onChange}
                    name="englishLangCertificate"
                    label="Name of certificate"
                    helperText="e.g IELTS, TOEFL IBT, PTE, Cambridge English, None"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={2} sm={5}>
                  <TextField
                    onChange={onChange}
                    name="englishLangCertificateGrade"
                    label="English Language Proficiency Grade"
                    helperText="Including scores for individual skills if applicable"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} sm={2}>
                  <TextField
                    onChange={onChange}
                    label="Date (mm/yy)"
                    name="englishLangCertificateDate"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="separateLine" />
          <h1 className="inputSectionTitle">
            Statement In Support Of Application
          </h1>
          <p className="inputSectionTitleText">
            You should state what your enquiry is about in details. For example,
            what are you concerned about? How much are the tuition fees,
            accommodation costs, life in New Zealand, visa rules and regulations
            etc.
          </p>
          <div className="inputSection">
            <div className="inputSectionItem">
              <Grid container spacing={0}>
                <TextField
                  onChange={onChange}
                  name="englishLangCertificateGrade"
                  label="Type your answer here ..."
                  variant="outlined"
                  fullWidth
                  size="large"
                  multiline
                  maxRows={5}
                />
              </Grid>
            </div>
          </div>
          <div className="separateLine" />
          <h1 className="inputSectionTitle">Declaration</h1>
          <div className="inputSection">
            <div className="inputSectionItem">
              <div className="policyCheckbox">
                <Checkbox onChange={onChange} />
                <p
                  className="inputSectionTitleText"
                  style={{ textAlign: "start" }}
                >
                  I confirm that I give the authority to Scholar Students Ltd to
                  discuss my application, receive correspondence and apply to
                  universities and institutes in New Zealand on my behalf.
                </p>
              </div>
              <div className="policyCheckbox">
                <Checkbox onChange={onChange} />
                <p
                  className="inputSectionTitleText"
                  style={{ textAlign: "start" }}
                >
                  I certify that, to the best of my knowledge, the information I
                  have provided is complete and true.
                </p>
              </div>
            </div>
          </div>
          <div className="apply-study-button-box">
            <Link to="/student-application" className="card-nav-link">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;

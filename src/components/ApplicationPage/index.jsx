import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { SpinningCircles } from "react-loading-icons";
import {
  TextField,
  Grid,
  RadioGroup,
  FormControl,
  Checkbox,
  Button,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import BpRadio from "../CustomMUI/BpRadio";

import "./applicantForm.css";

const ApplicantForm = () => {
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [showSending, setShowSending] = useState(false);
  const [requestBody, setRequestBody] = useState({
    fName: "",
    lName: "",
    mName: "",
    gender: "",
    bDay: "",
    nation: "",
    birthCountry: "",
    addressStr: "",
    addressStrLine2: "",
    city: "",
    stateProvince: "",
    postalZipCode: "",
    country: "",
    phone: "",
    email: "",
    emergContactName: "",
    emergContactRelation: "",
    emergContactAddr: "",
    emergContactPhone: "",
    intendedDegree: "",
    sponsorName: "",
    proposedStartDate: "",
    scholarship: "",
    secondaryEduName: "",
    secondaryEduCountry: "",
    secondaryEduDates: "",
    eduQualifSubject: "",
    eduQualifLevel: "",
    eduQualifGrade: "",
    eduQualifDate: "",
    englishLangCertificate: "",
    englishLangCertificateGrade: "",
    englishLangCertificateDate: "",
    applicationSupportStatement: "",
    confirmationCheckbox: false,
    certificationCheckbox: false,
  });

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending(prev => !prev)
    }
  }, [sentSuccessfully, sentError]);

  const onChange = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onCheckboxChange = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }));
  };

  const onChangeBDate = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      bDay: String(e.$d).split(" ").slice(1, 4).join("."),
    }));
  };
  const onChangeStartDate = (e) => {
    setRequestBody((prev) => ({
      ...prev,
      proposedStartDate: String(e.$d).split(" ").slice(1, 4).join("."),
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
    for (const key in requestBody) {
      formData.append(key, requestBody[key]);
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/student-application`,
        formData
      );
      setSentSuccessfully(true);
      setRequestBody({
        fName: "",
        lName: "",
        mName: "",
        gender: "",
        bDay: "",
        nation: "",
        birthCountry: "",
        addressStr: "",
        addressStrLine2: "",
        city: "",
        stateProvince: "",
        postalZipCode: "",
        country: "",
        phone: "",
        email: "",
        emergContactName: "",
        emergContactRelation: "",
        emergContactAddr: "",
        emergContactPhone: "",
        intendedDegree: "",
        sponsorName: "",
        proposedStartDate: "",
        scholarship: "",
        secondaryEduName: "",
        secondaryEduCountry: "",
        secondaryEduDates: "",
        eduQualifSubject: "",
        eduQualifLevel: "",
        eduQualifGrade: "",
        eduQualifDate: "",
        englishLangCertificate: "",
        englishLangCertificateGrade: "",
        englishLangCertificateDate: "",
        applicationSupportStatement: "",
        confirmationCheckbox: false,
        certificationCheckbox: false,
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
    }
  };

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
                    name="intendedDegree"
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
                      onChange={onChangeStartDate}
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
                    name="secondaryEduDates"
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
                  name="applicationSupportStatement"
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
                <Checkbox
                  onChange={onCheckboxChange}
                  name="confirmationCheckbox"
                />
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
                <Checkbox
                  onChange={onCheckboxChange}
                  name="certificationCheckbox"
                />
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
            <Grid item xs={4} sm={4}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
                onClick={submitForm}
              >
                Submit
                {showSending && (
                  <span className="sendingIcon">
                    <SpinningCircles scale={22} />
                  </span>
                )}
              </Button>
              <FormHelperText>
                {sentSuccessfully ? "Your Application Sent Successfully" : ""}
              </FormHelperText>
              <FormHelperText error color="red">
                {sentError ? "Application Sending error" : ""}
              </FormHelperText>
            </Grid>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantForm;

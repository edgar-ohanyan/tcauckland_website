import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  Grid,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";
import { SpinningCircles } from "react-loading-icons";
import Joi from "joi-browser";
import axios from "axios";

import MobilePhone from "../MobilePhone";
import passportNationality from "../../assets/formData/passport-nationality";
import countriesOfResidence from "../../assets/formData/countries-of-residence";
import maritalStatus from "../../assets/formData/marital-status";
import dependentChildren from "../../assets/formData/dependent-children";
import teachingRegions from "../../assets/formData/teaching-regions";
import applicationSubject from "../../assets/formData/application-subject";
import home_bg from "../../assets/pictures/bg_home.jpg";

import "./style.css";

export default function SubmitCV() {
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [showSending, setShowSending] = useState(false);
  const [errors, setErrors] = useState({});

  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: 0,
    dob: "",
    nationality: "",
    countryOfResidence: "",
    maritalStatus: "",
    dependentChildren: "",
    teachingRegions: "",
    applicationSubject: "",
    qualifiedSubject: "",
    qualifiedSubject2: "",
    file: "",
  });

  const schema = {
    name: Joi.string().min(1).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(4).required(),
    dob: Joi.string().required(),
    nationality: Joi.string().required(),
    countryOfResidence: Joi.string().required(),
    maritalStatus: Joi.string().required(),
    dependentChildren: Joi.string().required(),
    teachingRegions: Joi.string().required(),
    applicationSubject: Joi.string().required(),
    qualifiedSubject: Joi.string().min(1).max(30).required(),
    qualifiedSubject2: Joi.string().min(1).max(30).required(),
    file: Joi.object().required(),
  };

  const validateForm = () => {
    const result = Joi.validate(application, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        errorData[name] = item.message;
      }
      setErrors(errorData);
      return errorData;
    }
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let applicationData = { ...application };
    applicationData[name] = value;
    setApplication(applicationData);
    setErrors(errorData);
  };

  const uploadFile = (event) => {
    let file = event.target.files[0];

    if (file) {
      let applicationData = { ...application };
      applicationData["file"] = file;
      console.log("errors: ", errors);
      setErrors(prev => ({
        ...prev,
        file: "",
      }))
      setApplication(applicationData);
    }
  };

  const submitForm = async () => {
    setShowSending((prev) => !prev);
    setSentError(false);
    setSentSuccessfully(false);
    const err = validateForm();
    if (err) {
      console.log(err);
      setShowSending((prev) => !prev);

      return;
    }
    setErrors({});
    await sendEmail();
  };

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending((prev) => !prev);
    }
  }, [sentSuccessfully, sentError]);

  const sendEmail = async () => {
    const formData = new FormData();
    for (const key in application) {
      formData.append(key, application[key]);
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/submit-cv`, formData);
      setSentSuccessfully(true);
      setApplication({
        name: "",
        email: "",
        phone: 0,
        dob: "",
        nationality: "",
        countryOfResidence: "",
        maritalStatus: "",
        dependentChildren: "",
        teachingRegions: "",
        applicationSubject: "",
        qualifiedSubject: "",
        qualifiedSubject2: "",
        file: "",
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
    }
  };

  return (
    <div>
      <div className="main-picture-box">
        <div className="img-overlay"></div>
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="applicantForm">
        <div className="formContainer">
          <form className="form">
            <h1 className="inputSectionTitle">Submit Your CV</h1>
            <div className="inputSection">
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* First Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Full Name"
                      name="name"
                      type="text"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      required
                      value={application.name}
                      error={!!errors.name}
                      helperText={errors.name ? "Too long or empty name" : ""}
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="medium"
                      type="email"
                      fullWidth
                      value={application.email}
                      error={!!errors.email}
                      helperText={errors.email ? "Invalid email" : ""}
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <FormControl error={!!errors.dob} style={{ width: "100%" }}>
                      <DatePicker
                        label="Date Of Birth"
                        name="dob"
                        onChange={(e) => {
                          const dateStr = isNaN(e.$d)
                            ? ""
                            : `${e.$D}/${e.$M}/${e.$y}`;
                          handleSave({
                            target: {
                              name: "dob",
                              value: dateStr,
                            },
                          });
                        }}
                      />
                      <FormHelperText>
                        {!!errors.dob ? "Select a date" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Second Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <MobilePhone
                      name="phone"
                      onChange={(e) => {
                        handleSave({
                          target: {
                            name: "phone",
                            value: e,
                          },
                        });
                      }}
                      type="text"
                      isValid={() => !errors.phone}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.nationality}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        label="Passport / Nationlity"
                        id="passport-nationality"
                        value={application.nationality}
                        select
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "nationality",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {passportNationality.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.nationality ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.countryOfResidence}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        id="country-of-residence"
                        select
                        label="Country of Residence"
                        value={application.countryOfResidence}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "countryOfResidence",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {countriesOfResidence.map((e, index) => (
                          <MenuItem key={index} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.countryOfResidence ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Third Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.dependentChildren}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        select
                        label="Dependent Children"
                        id="dependent-children"
                        value={application.dependentChildren}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "dependentChildren",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {dependentChildren.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.dependentChildren ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.teachingRegions}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        select
                        label="Which region/s do you wish to teach in"
                        id="teaching-regions"
                        value={application.teachingRegions}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "teachingRegions",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {teachingRegions.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.teachingRegions ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.applicationSubject}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        select
                        label="I am applying for"
                        id="application-subject"
                        value={application.applicationSubject}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "applicationSubject",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {applicationSubject.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.applicationSubject ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Fourth Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.maritalStatus}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        select
                        label="Marital Status"
                        id="marital-status"
                        value={application.maritalStatus}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "maritalStatus",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {maritalStatus.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                      <FormHelperText>
                        {!!errors.maritalStatus ? "Select a value" : ""}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      type="text"
                      label="Qualified Teaching Subject"
                      name="qualifiedSubject"
                      style={{ width: "100%" }}
                      value={application.qualifiedSubject}
                      onChange={handleSave}
                      error={!!errors.qualifiedSubject}
                      helperText={
                        errors.qualifiedSubject
                          ? "Invalid qualified subject"
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      type="text"
                      label="Qualified Teaching Subject 2"
                      name="qualifiedSubject2"
                      style={{ width: "100%" }}
                      value={application.qualifiedSubject2}
                      onChange={handleSave}
                      error={!!errors.qualifiedSubject2}
                      helperText={
                        errors.qualifiedSubject2
                          ? "Invalid qualified subject"
                          : ""
                      }
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem">
                {/* Buttons Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <input
                      accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                      text/plain, application/pdf, image/*"
                      className="test"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      type="file"
                      onChange={uploadFile}
                    />
                    <label htmlFor="raised-button-file">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#4daeda",
                          width: "100%",
                          fontSize: 20,
                        }}
                        component="span"
                        className="test"
                        fullWidth
                      >
                        Upload CV
                      </Button>
                    </label>
                    {application.file ? application.file.name : ""}
                    <FormHelperText error color="red">
                      {!!errors.file ? "Upload a file" : ""}
                    </FormHelperText>
                  </Grid>
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
                      Submit
                      {showSending && (
                        <span className="sendingIcon">
                          <SpinningCircles scale={22} />
                        </span>
                      )}
                    </Button>
                    <FormHelperText>
                      {sentSuccessfully ? "Email Sent Successfully" : ""}
                    </FormHelperText>
                    <FormHelperText error color="red">
                      {sentError ? "Email Sending error" : ""}
                    </FormHelperText>
                  </Grid>
                </Grid>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

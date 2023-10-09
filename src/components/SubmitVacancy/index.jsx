import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  TextField,
  FormControl,
  MenuItem,
  Grid,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Button,
} from "@mui/material";
import axios from "axios";
import { SpinningCircles } from "react-loading-icons";
import curriculum from "../../assets/formData/curriculum";
import home_bg from "../../assets/background/submitVacancy.jpg";

export default function SubmitVacancy() {
  const [errors, setErrors] = useState({});
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [showSending, setShowSending] = useState(false);
  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: "",
    compName: "",
    schoolName: "",
    jobTitle: "",
    website: "",
    city: "",
    country: "",
    curriculum: "",
    ey: false,
    primary: false,
    secondary: false,
    wholeSchool: false,
    noOfVaccanies: "",
  });

  useEffect(() => {
    console.log("application: ", application);
  }, [application]);

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending((prev) => !prev);
    }
  }, [sentSuccessfully, sentError]);

  const schema = {
    name: Joi.string().min(2).required(),
    compName: Joi.string().min(2).required(),
    schoolName: Joi.string().min(2).required(),
    jobTitle: Joi.string().min(2).required(),
    website: Joi.string()
      .regex(
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})? /
      )
      .required(),
    city: Joi.string().min(2).required(),
    country: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
      .required(),
    curriculum: Joi.string().required(),
    ey: Joi.boolean(),
    primary: Joi.boolean(),
    secondary: Joi.boolean(),
    wholeSchool: Joi.boolean(),
    noOfVaccanies: Joi.string().required(),
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

  const sendEmail = async () => {
    const formData = new FormData();
    for (const key in application) {
      formData.append(key, application[key]);
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/sumit-vacancy`,
        formData
      );
      setSentSuccessfully(true);
      setApplication({
        name: "",
        email: "",
        phone: "",
        compName: "",
        schoolName: "",
        jobTitle: "",
        website: "",
        city: "",
        country: "",
        curriculum: "",
        ey: false,
        primary: false,
        secondary: false,
        wholeSchool: false,
        noOfVaccanies: "",
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
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

  return (
    <div>
      <div className="main-picture-box">
        <div className="img-overlay"></div>
        <LazyLoadImage src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="applicantForm">
        <div className="formContainer">
          <form className="form">
            <h1 className="inputSectionTitle">Submit Vacancy</h1>
            <div className="inputSection">
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* First Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Name"
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
                      required
                      value={application.email}
                      error={!!errors.email}
                      helperText={errors.email ? "Email is invalide" : ""}
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Phone Number"
                      name="phone"
                      variant="outlined"
                      size="medium"
                      type="phone"
                      fullWidth
                      required
                      value={application.phone}
                      error={!!errors.phone}
                      helperText={
                        errors.phone ? "Phone Number in invalide" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Second Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="School Name"
                      name="schoolName"
                      type="text"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      required
                      value={application.schoolName}
                      error={!!errors.schoolName}
                      helperText={
                        errors.schoolName ? "School Name can't be empty" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Job Title"
                      name="jobTitle"
                      variant="outlined"
                      size="medium"
                      type="text"
                      fullWidth
                      required
                      value={application.jobTitle}
                      error={!!errors.jobTitle}
                      helperText={
                        errors.jobTitle ? "Job Title can't be empty" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Company Name"
                      name="compName"
                      variant="outlined"
                      size="medium"
                      type="text"
                      fullWidth
                      required
                      value={application.compName}
                      error={!!errors.compName}
                      helperText={
                        errors.compName ? "Company Name can't be empty" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Third Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="City"
                      name="city"
                      type="text"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      required
                      value={application.city}
                      error={!!errors.city}
                      helperText={errors.city ? "City Name can't be empty" : ""}
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Country"
                      name="country"
                      variant="outlined"
                      size="medium"
                      type="text"
                      fullWidth
                      required
                      value={application.country}
                      error={!!errors.country}
                      helperText={
                        errors.country ? "Country can't be empty" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextField
                      label="Website"
                      name="website"
                      variant="outlined"
                      size="medium"
                      type="website"
                      fullWidth
                      required
                      value={application.website}
                      error={!!errors.website}
                      helperText={
                        errors.website ? "Website can't be empty" : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Fourth Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={4}>
                    <FormControl
                      error={!!errors.curriculum}
                      style={{ width: "100%" }}
                    >
                      <TextField
                        select
                        label="Curriculum"
                        id="teaching-regions"
                        value={application.curriculum}
                        onChange={(e) => {
                          handleSave({
                            target: {
                              name: "curriculum",
                              value: e.target.value,
                            },
                          });
                        }}
                      >
                        {curriculum.map((e, i) => (
                          <MenuItem key={i} value={e}>
                            {e}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={28} sm={8}>
                    <FormGroup
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                      onChange={(e) => {
                        handleSave({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        name="ey"
                        label="EY"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Primary"
                        name="primary"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Secondary"
                        name="secondary"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Whole School"
                        name="wholeSchool"
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
              <div className="inputSectionItem" style={{ marginBottom: 40 }}>
                {/* Fourth Row */}
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={12}>
                    <TextField
                      label="No of Vacancies"
                      name="noOfVaccanies"
                      variant="outlined"
                      size="medium"
                      type="text"
                      fullWidth
                      required
                      multiline
                      maxRows={5}
                      value={application.noOfVaccanies}
                      error={!!errors.noOfVaccanies}
                      helperText={
                        errors.noOfVaccanies
                          ? "No of Vacancies can't be empty"
                          : ""
                      }
                      onChange={handleSave}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 40,
                  }}
                >
                  <Button
                    onClick={submitForm}
                    variant="contained"
                    sx={{
                      backgroundColor: "#4daeda",
                      width: 300,
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
                    {sentSuccessfully ? "Submitted Successfully" : ""}
                  </FormHelperText>
                  <FormHelperText error color="red">
                    {sentError ? "Submitting error" : ""}
                  </FormHelperText>
                </Grid>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

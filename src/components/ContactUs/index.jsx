import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { SpinningCircles } from "react-loading-icons";
import { TextField, Grid, Button, FormHelperText } from "@mui/material";

import "./ContactUs.css";

export default function ContactUs() {
  const [errors, setErrors] = useState({});
  const [showSending, setShowSending] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  const [application, setApplication] = useState({
    name: "",
    email: "",
    phone: "+",
    message: "",
  });

  const schema = {
    name: Joi.string()
      .regex(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)
      .required(),
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    message: Joi.string().min(40).required(),
  };

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending((prev) => !prev);
    }
  }, [sentSuccessfully, sentError]);

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

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
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
      await axios.post(`${process.env.REACT_APP_API_URL}/contact-us`, formData);
      setSentSuccessfully(true);
      setApplication({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
    }
  };

  return (
    <div className="contactUsContainer">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <p
          className="page-content-text-primary"
          style={{ fontSize: 22, marginBottom: 35 }}
        >
          Please contact us using the information listed bellow and we will be
          more than happy with any enquiries that you may have.
        </p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={6}>
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
            helperText={
              errors.name ? "Full name must contain First and Last name" : ""
            }
            onChange={handleSave}
          />
        </Grid>
        <Grid item xs={4} sm={6}>
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
            helperText={errors.email ? "Invalid email" : ""}
            onChange={handleSave}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={4} sm={12}>
          <TextField
            label="Phone Number (optional)"
            name="phone"
            variant="outlined"
            size="medium"
            type="phone"
            fullWidth
            value={application.phone}
            error={!!errors.phone}
            helperText={errors.phone ? "Invalid phone number" : ""}
            onChange={handleSave}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={4} sm={12}>
          <TextField
            label="Your Message"
            name="message"
            variant="outlined"
            size="medium"
            type="text"
            fullWidth
            multiline
            rows={5}
            value={application.message}
            error={!!errors.message}
            helperText={
              errors.message
                ? "Your message must contain at least 40 digits."
                : ""
            }
            onChange={handleSave}
          />
        </Grid>
      </Grid>
      <div className="apply-study-button-box">
        <Grid item xs={4} sm={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4daeda",
              width: 300,
              fontSize: 20,
              marginTop: 5,
            }}
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
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { FormHelperText, Dialog, Grid, Button } from "@mui/material";
import { SpinningCircles } from "react-loading-icons";

import "./findAJob.css";

export const ReadMoreDialog = (props) => {
  const { onClose, selectedValue, open, content } = props;
  const [sentError, setSentError] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSending, setShowSending] = useState(false);

  const [application, setApplication] = useState({
    title: "",
    startDate: "",
    file: "",
  });

  const schema = {
    title: Joi.string().required(),
    startDate: Joi.string().required(),
    file: Joi.object().required(),
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

  useEffect(() => {
    if (sentSuccessfully || sentError) {
      setShowSending((prev) => !prev);
    }
  }, [sentSuccessfully, sentError]);

  useEffect(() => {
    console.log("content: ", content);
    setApplication(prev => ({
      ...prev,
      title: content.title,
      startDate: content.startDate,
    }))
  }, [content])

  const handleClose = () => {
    onClose(selectedValue);
  };

  const validFileTypes = [
    "application/pdf",
    "application/doc",
    "application/docx",
    "application/rtf",
    "application/txt",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "text/rtf",
    "text/plain",
  ];

  const uploadFile = (event) => {
    let file = event.target.files[0];

    if (file && validFileTypes.includes(file.type)) {
      let applicationData = { ...application };
      applicationData["file"] = file;
      console.log("errors: ", errors);
      setErrors((prev) => ({
        ...prev,
        file: "",
      }));
      setApplication(applicationData);
    }
  };

  const sendEmail = async () => {
    const formData = new FormData();
    for (const key in application) {
      formData.append(key, application[key]);
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/apply-job`, formData);
      setSentSuccessfully(true);
      setApplication({
        title: "",
        startDate: "",
        file: "",
      });
    } catch (error) {
      console.log(error);
      setSentError(true);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open} className="dialog">
      <div className="jobDescriptionDialog">
        <div>
          <h1 className="jobDescriptionTitle">{props.content.title}</h1>
        </div>
        <div className="jobDescriptionDialogText">
          <div className="jobFieldsBox">
            <div className="jobField">
              <p className="jobFieldTitle">Location:&nbsp;</p>
              <p className="jobFieldText">{content.location}</p>
            </div>
            <div className="jobField">
              <p className="jobFieldTitle">Category:&nbsp;</p>
              <p className="jobFieldText">{content.jobCategory}</p>
            </div>
            <div className="jobField">
              <p className="jobFieldTitle">Type:&nbsp;</p>
              <p className="jobFieldText">{content.type}</p>
            </div>
            {content.experience && (
              <div className="jobField">
                <p className="jobFieldTitle">Experience:&nbsp;</p>
                <p className="jobFieldText">{content.experience}</p>
              </div>
            )}
            {content.experience && (
              <div className="jobField">
                <p className="jobFieldTitle">Salary:&nbsp;</p>
                <p className="jobFieldText">{content.salary}</p>
              </div>
            )}
            {content.experience && (
              <div className="jobField">
                <p className="jobFieldTitle">Curriculum:&nbsp;</p>
                <p className="jobFieldText">{content.schoolCurriculum}</p>
              </div>
            )}
            {content.experience && (
              <div className="jobField">
                <p className="jobFieldTitle">Start Date:&nbsp;</p>
                <p className="jobFieldText">{content.startDate}</p>
              </div>
            )}
            <div className="inputSectionItem">
              {/* Buttons Row */}
              <Grid container spacing={2}>
                <Grid item xs={1} sm={2}>
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
                      variant="outlined"
                      sx={{
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
                    {!!errors.file ? "Upload your CV" : ""}
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
            {content.descriptionChapter.map((ch, i) => (
              <div key={i} className="jobDescription">
                <p className="jobDescriptionChTitle">{ch.fields.title}&nbsp;</p>
                <div className="jobDescriptionChText">
                  {ch.fields.text1 && <p>{ch.fields.text1}</p>}
                  {ch.fields.list1 && (
                    <ul>
                      {ch.fields.list1.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {ch.fields.text2 && <p>{ch.fields.text2}</p>}
                  {ch.fields.list2 && (
                    <ul>
                      {ch.fields.list2.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

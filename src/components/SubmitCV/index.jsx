import React, { useState } from "react";
import "./style.css";
import home_bg from "../../assets/pictures/bg_home.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker/DatePicker';

import MobilePhone from "../MobilePhone";
import emailjs from '@emailjs/browser';
import Joi from "joi-browser";

import passportNationality from "../../assets/formData/passport-nationality";
import countriesOfResidence from "../../assets/formData/countries-of-residence";
import maritalStatus from "../../assets/formData/marital-status";
import dependentChildren from "../../assets/formData/dependent-children";
import teachingRegions from "../../assets/formData/teaching-regions";
import applicationSubject from "../../assets/formData/application-subject";

export default function SubmitCV() {
  const [file, setFile] = useState();

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
    filename: "",
  });

  const [errors, setErrors] = useState({});
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
    filename: Joi.string().required(),
  };

  const validateForm = () => {
    const result = Joi.validate(application, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        console.log("item", item);
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
  }

  const uploadFile = (event) => {
    let file = event.target.files[0];

    if (file) {
      setFile(file);
      let applicationData = { ...application };
      applicationData["filename"] = file.name;
      setApplication(applicationData);
      let data = new FormData();
      data.append('file', file);
    }
  };

  const submitForm = async () => {
    const err = validateForm();
    if (err) {
      console.log(err);
      return;
    }
    setErrors({});
    await sendEmail();
  }

  const sendEmail = async () => {
    const res = await emailjs.send('service_6t9d6i8', 'template_jbopcma', application, 'r9vcvEN8-TTCAFsPX');
    console.log(res);
  };

  return (
    <div>
      <div className="main-picture-box">
        <div className="img-overlay"></div>
        <img src={home_bg} className="main-picture" alt="home_bg"/>
        <h3 className="submit-text">Submit Your CV</h3>
      </div>

      <div className="form-container">
        <FormControl>
          <TextField
            type="text"
            label="Full Name"
            name="name"
            onChange={handleSave}
            error={!!errors.name}
            helperText={errors.name ? "Too long or empty name" : ''}
          />
          <TextField
            type="email"
            label="Email"
            name="email"
            error={!!errors.email}
            helperText={errors.email ? "Invalid email" : ''}
            onChange={handleSave}
          />

          <FormControl error={errors.dob}>
            <DatePicker
              label="Date Of Birth"
              name="dob"
              onChange={(e) => {
                const dateStr = isNaN(e.$d) ? '' : `${e.$D}/${e.$M}/${e.$y}`;
                handleSave({
                  target: {
                    name: "dob",
                    value: dateStr,
                  }
                });
              }}
            />
            <FormHelperText>{!!errors.dob ? "Select a date" : ""}</FormHelperText>
          </FormControl>

          <MobilePhone
            name="phone"
            onChange={(e) => {
              handleSave({
                target: {
                  name: "phone",
                  value: e
                }
              });
            }}
            type="text"
            isValid={() => !errors.phone}
          />

          <FormControl error={!!errors.nationality}>
            <InputLabel id="passport-nationality-label">Passport / Nationlity</InputLabel>
            <Select
              labelId="passport-nationality-label"
              id="passport-nationality"
              defaultValue=""
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "nationality",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                passportNationality.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <FormControl error={!!errors.countryOfResidence}>
            <InputLabel id="country-of-residence-label">Country of Residence</InputLabel>
            <Select
              labelId="country-of-residence-label"
              id="country-of-residence"
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "countryOfResidence",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                countriesOfResidence.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <FormControl error={!!errors.maritalStatus}>
            <InputLabel id="marital-status-label">Marital Status</InputLabel>
            <Select
              labelId="marital-status-label"
              id="marital-status"
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "maritalStatus",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                maritalStatus.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <FormControl error={!!errors.dependentChildren}>
            <InputLabel id="dependent-children-label">Dependent Children</InputLabel>
            <Select
              labelId="dependent-children-label"
              id="dependent-children"
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "dependentChildren",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                dependentChildren.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <FormControl error={errors.teachingRegions}>
            <InputLabel id="teaching-regions-label">Which region/s do you wish to teach in</InputLabel>
            <Select
              labelId="teaching-regions-label"
              id="teaching-regions"
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "teachingRegions",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                teachingRegions.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <FormControl error={errors.applicationSubject}>
            <InputLabel id="application-subject-label">I am applying for</InputLabel>
            <Select
              labelId="application-subject-label"
              id="application-subject"
              onChange={(e) => {
                handleSave({
                  target: {
                    name: "applicationSubject",
                    value: e.target.value,
                  }
                })
              }}
            >
              {
                applicationSubject.map(e => <MenuItem value={e}>{e}</MenuItem>)
              }
            </Select>
            <FormHelperText>{!!errors.nationality ? "Select a value" : ""}</FormHelperText>
          </FormControl>

          <TextField
            type="text"
            label="Qualified Teaching Subject"
            name="qualifiedSubject"
            onChange={handleSave}
            error={!!errors.qualifiedSubject}
            helperText={errors.qualifiedSubject ? "Invalid qualified subject" : ''}
          />
          <TextField
            type="text"
            label="Qualified Teaching Subject 2"
            name="qualifiedSubject2"
            onChange={handleSave}
            error={!!errors.qualifiedSubject2}
            helperText={errors.qualifiedSubject2 ? "Invalid qualified subject" : ''}
          />

          <input
            accept="image/*"
            className="test"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={uploadFile}
          />
          {file ? file.name : ""}
          <label htmlFor="raised-button-file">
            <Button variant="raised" component="span" className="test" fullWidth>
              Upload CV
            </Button>
          </label>

          <FormHelperText error color="red">{!!errors.filename ? "Upload a file" : ""}</FormHelperText>
          <Button onClick={submitForm}>Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

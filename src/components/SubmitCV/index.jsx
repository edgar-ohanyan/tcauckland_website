import React, { useState } from "react";
import "./style.css";
import home_bg from "../../assets/pictures/bg_home.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker/DatePicker';
import MobilePhone from "../MobilePhone";

import passportNationality from "../../assets/formData/passport-nationality";
import countriesOfResidence from "../../assets/formData/countries-of-residence";
import maritalStatus from "../../assets/formData/marital-status";
import dependentChildren from "../../assets/formData/dependent-children";
import teachingRegions from "../../assets/formData/teaching-regions";

export default function SubmitCV() {
  const [file, setFile] = useState();

  const uploadFile = (event) => {
    let file = event.target.files[0];
    console.log(file);

    if (file) {
      setFile(file);
      let data = new FormData();
      data.append('file', file);
      console.log(data);
    }
  }

  return (
    <div>
      <div className="main-picture-box">
        <div className="img-overlay"></div>
        <img src={home_bg} className="main-picture" alt="home_bg"/>
        <h3 className="submit-text">Submit Your CV</h3>
      </div>

      <div className="form-container">
        <FormControl>
          <TextField type="text" label="Full Name"/>
          <TextField type="email" label="Email"/>
          <TextField type="phone" label="Phone"/>
          <DatePicker label="Date Of Birth"/>
          <MobilePhone type="text"/>

          <FormControl>
            <InputLabel id="passport-nationality-label">Passport / Nationlity</InputLabel>
            <Select
              labelId="passport-nationality-label"
              id="passport-nationality"
              defaultValue=""
              onChange={() => {
              }}
            >
              {
                Object.entries(passportNationality)
                  .map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="country-of-residence-label">Country of Residence</InputLabel>
            <Select
              labelId="country-of-residence-label"
              id="country-of-residence"
              onChange={() => {
              }}
            >
              {
                Object.entries(countriesOfResidence)
                  .map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="marital-status-label">Marital Status</InputLabel>
            <Select
              labelId="marital-status-label"
              id="marital-status"
              onChange={() => {
              }}
            >
              {
                Object.entries(maritalStatus)
                  .map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="dependent-children-label">Dependent Children</InputLabel>
            <Select
              labelId="dependent-children-label"
              id="dependent-children"
              onChange={() => {
              }}
            >
              {
                Object.entries(dependentChildren)
                  .map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="teaching-regions-label">Which region/s do you wish to teach in</InputLabel>
            <Select
              labelId="teaching-regions-label"
              id="teaching-regions"
              onChange={() => {
              }}
            >
              {
                Object.entries(teachingRegions)
                  .map(e => <MenuItem value={e[0]}>{e[1]}</MenuItem>)
              }
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="application-subject-label">I am applying for</InputLabel>
            <Select
              labelId="application-subject-label"
              id="application-subject"
              onChange={() => {
              }}
            >
              <MenuItem value={0}>Arabic</MenuItem>
              <MenuItem value={1}>Art </MenuItem>
              <MenuItem value={2}>Biology</MenuItem>
              <MenuItem value={3}>Business Studies</MenuItem>
              <MenuItem value={4}>Chemistry</MenuItem>
              <MenuItem value={5}>Design Technology</MenuItem>
              <MenuItem value={6}>Drama</MenuItem>
              <MenuItem value={7}>Early Years</MenuItem>
              <MenuItem value={8}>Economics </MenuItem>
              <MenuItem value={9}>Elementary/Primary</MenuItem>
              <MenuItem value={10}>English Language/Literature</MenuItem>
              <MenuItem value={11}>English as Second Language</MenuItem>
              <MenuItem value={12}>Food Technology</MenuItem>
              <MenuItem value={13}>French</MenuItem>
              <MenuItem value={14}>General Science</MenuItem>
              <MenuItem value={15}>Geography</MenuItem>
              <MenuItem value={16}>German</MenuItem>
              <MenuItem value={17}>Global Perspectives</MenuItem>
              <MenuItem value={18}>Headteacher/Principal</MenuItem>
              <MenuItem value={19}>History</MenuItem>
              <MenuItem value={20}>Humanities</MenuItem>
              <MenuItem value={21}>IB Coordinator</MenuItem>
              <MenuItem value={22}>ICT Information Technology</MenuItem>
              <MenuItem value={23}>Learning Support</MenuItem>
              <MenuItem value={24}>Librarian</MenuItem>
              <MenuItem value={25}>Mandarin</MenuItem>
              <MenuItem value={26}>Mathematics</MenuItem>
              <MenuItem value={27}>Media Studies</MenuItem>
              <MenuItem value={28}>Middle Management/Coordinator</MenuItem>
              <MenuItem value={29}>Music</MenuItem>
              <MenuItem value={30}>MYP Coordiantor</MenuItem>
              <MenuItem value={31}>Other</MenuItem>
            </Select>
          </FormControl>

          <TextField type="text" name="qualified-subject" label="Qualified Teaching Subject"/>
          <TextField type="text" name="qualified-subject-2" label="Qualified Teaching Subject 2"/>
          <TextField type="text" name="qualified-subject-2" label="Current Job Title"/>

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

          <Button>Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

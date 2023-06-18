import React from "react";
import "./style.css";
import home_bg from "../../assets/pictures/bg_home.jpg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker/DatePicker';
import MobilePhone from "../MobilePhone";

export default function SubmitCV() {
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
          <Button>Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

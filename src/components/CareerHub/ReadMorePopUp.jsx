
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, Input } from "@mui/material";

import "./findAJob.css";

export const ReadMorePopUp = (props) => {
  const { onClose, selectedValue, open } = props;
  const [file, setFile] = useState();

  const handleClose = () => {
    onClose(selectedValue);
  }; 

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="jobDescriptionDialog">
        <div>
          <h1 className="jobDescriptionTitle">{props.content.title}</h1>
        </div>
        <div className="jobDescriptionDialogText">
          <p>{props.content.description}</p>
        </div>
        <div className="submitBox">
          <div>
            <Input
              accept=".pdf,.doc,.docx,.rtf,.txt"
              className="test"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={uploadFile}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="outlined"
                component="span"
                className="test"
                sx={{ fontSize: 20 }}
                fullWidth
              >
                Upload CV
              </Button>
            </label>
          </div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
          >
            Submit
          </Button>
        </div>
        {file ? file.name : ""}
      </div>
    </Dialog>
  );
};

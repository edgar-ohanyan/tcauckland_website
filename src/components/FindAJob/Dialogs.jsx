import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Dialog, Input } from "@mui/material";

import "./findAJob.css";

export const ReadMoreDialog = (props) => {
  const { onClose, selectedValue, open } = props;
  const [file, setFile] = useState();

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
    const file = event.target.files[0];
    if (file && validFileTypes.includes(file.type)) {
      // File is of a valid type, continue with processing
      // Your logic here
      setFile(file);
    } else {
      // Invalid file type, handle error or display a message
      // Your logic here
    }
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

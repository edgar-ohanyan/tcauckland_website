import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import {
  FormControl,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Button, FormHelperText } from "@mui/material";
import { ReadMoreDialog } from "./Dialogs";
import home_bg from "../../assets/pictures/bg_home.jpg";
import { red } from "@mui/material/colors";
import "./findAJob.css";

// Dev Process
const space = "x0xr0mya0y9b";
const environment = "master"; // defaults to 'master' if not set
const accessToken = "8V5fYyXeV91c3FbAWLqpi2HzvJM4ObAT3E1sb9qrF2s";

const client = createClient({
  space,
  environment,
  accessToken,
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    color: red,
    minWidth: 240,
    marginBottom: theme.spacing(2),
  },
  select: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
  },
  inputLabel: {
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

// Dev Process
const countries = [
  "All Locations",
  "UAE",
  "Dubai",
  "Kuwait",
  "Qatar",
  "Saudi Arabia",
  "Bahrain",
  "Oman",
  "United Kingdom",
  "New Zealand",
];

const entriesPerPage = 6; // Number of entries to show per page

export default function FindAJob() {
  const classes = useStyles();

  const [entries, setEntries] = useState([]);
  const [entriesToShow, setEntriesToShow] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All Locations");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCountrySelection = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleClickOpen = (entry) => {
    setSelectedEntry(entry);
  };

  const handleClose = () => {
    setSelectedEntry(null);
  };
  
  const handlePageChange = (change) => {
    setCurrentPage((prevPage) => prevPage + change);
  };
  
  useEffect(() => {
    (async () => {
      try {
        const response = await client.getEntries();
        setEntries(response.items);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedCountry !== "All Locations") {
      setEntriesToShow(
        entries.filter((e) => e.fields.location === selectedCountry)
      );
    } else {
      setEntriesToShow(entries);
    }
    setCurrentPage(1); // Reset to the first page when the country selection changes
  }, [entries, selectedCountry]);


  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = entriesToShow.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Render pagination buttons
  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(entriesToShow.length / entriesPerPage);

    return (
      <div className="pagination">
        <Button
          variant="contained"
          className="paginationButton"
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          className="paginationButton"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    );
  };

  return (
    <div>
      <div className="main-picture-box">
        <img src={home_bg} className="main-picture" alt="home_bg" />
      </div>
      <div className="locationSelectTop">
        <h1 className="page-title">Find A Job</h1>
        <div className="locationSelect">
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedCountry}
              label="Location"
              onChange={handleCountrySelection}
            >
              {countries.map((country) => (
                <MenuItem
                  key={country}
                  value={country}
                  className="jobFieldTitle"
                >
                  {country}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Choose Country</FormHelperText>
          </FormControl>
          <div className="locationSelectText">
            <p className="jobCounter">{entriesToShow.length} Jobs Found</p>
          </div>
        </div>
      </div>
      <div className="job-list">
        {currentEntries.map((entry, index) => (
          <div className="job" key={index}>
            <div className="jobTitleBox">
              <h4 className="jobTitle">{entry.fields.title}</h4>
            </div>
            <div className="jobFieldsBox">
              <div className="jobField">
                <p className="jobFieldTitle">Location:&nbsp;</p>
                <p className="jobFieldText">{entry.fields.location}</p>
              </div>
              <div className="jobField">
                <p className="jobFieldTitle">Category:&nbsp;</p>
                <p className="jobFieldText">{entry.fields.category}</p>
              </div>
              <div className="jobField">
                <p className="jobFieldTitle">Type:&nbsp;</p>
                <p className="jobFieldText">{entry.fields.type}</p>
              </div>
              <div className="jobDescription">
                <p className="jobDescriptionText">
                  <span className="jobFieldTitle">Description:&nbsp;</span>
                  {entry.fields.description}
                </p>
              </div>
            </div>
            <div className="applyForJobButtonBox">
              <Button
                onClick={() => handleClickOpen(entry)}
                variant="contained"
                sx={{ backgroundColor: "#4daeda", width: 300, fontSize: 20 }}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
        <div>{renderPaginationButtons()}</div>
      </div>
      {/* Render pagination buttons */}
      {selectedEntry && (
        <ReadMoreDialog
          open={true}
          onClose={handleClose}
          content={selectedEntry.fields}
        />
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import {
  Button,
  FormHelperText,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { ReadMoreDialog } from "./Dialogs";
import { titleCase } from "../../assets/helperFunction/TitleCase";
import findAJob from "../../assets/background/Find a Job.jpg";

import "./findAJob.css";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Dev Process
const countries = [
  "All Locations",
  "UAE",
  "Dubai",
  "Abu Dhabi",
  "Kuwait",
  "Qatar",
  "Saudi Arabia",
  "Bahrain",
  "Oman",
  "United Kingdom",
  "New Zealand",
];

const entriesPerPage = 5; // Number of entries to show per page

export default function FindAJob() {
  const [entries, setEntries] = useState([]);
  const [entriesToShow, setEntriesToShow] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("All Locations");
  const [currentPage, setCurrentPage] = useState(1);

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
        const filteredResponce = response.items.filter(
          (item) => "type" in item.fields
        );
        setEntries(filteredResponce);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedCountry !== "All Locations") {
      setEntriesToShow(
        entries.filter(
          (e) =>
            e.fields.location.toLowerCase() === selectedCountry.toLowerCase()
        )
      );
    } else {
      setEntriesToShow(entries);
    }
    setCurrentPage(1); // Reset to the first page when the country selection changes
  }, [entries, selectedCountry]);

  return (
    <div>
      <div className="main-picture-box">
        <img src={findAJob} className="main-picture" alt="home_bg" />
      </div>
      <div className="locationSelectTop">
        <div className="locationSelect">
          <div className="inputSectionItem">
            <FormControl className="formControl">
              <Select
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}
                variant="outlined"
                size="medium"
                id="demo-simple-select-helper"
                value={selectedCountry}
                onChange={handleCountrySelection}
              >
                {countries.map((country) => (
                  <MenuItem
                    key={country}
                    value={country}
                    className="jobSelectItem"
                  >
                    <span className="jobSelectItem">{country}</span>
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Choose Country</FormHelperText>
            </FormControl>
          </div>
          <div className="locationSelectText">
            <p className="jobCounter">{entriesToShow.length}</p>
            <p className="jobCounterText">Jobs Found</p>
          </div>
        </div>
      </div>
      <div className="job-list">
        {currentEntries.map((entry, index) => (
          <div className="job" key={index}>
            <div className="jobTitleBox">
              <h5 className="jobTitle">{titleCase(entry.fields.title)}</h5>
            </div>
            <div className="jobFieldsBox">
              <div className="jobDescription">
                <p className="jobDescriptionText">
                  <span className="jobFieldTitle">Description:&nbsp;</span>
                  {entry.fields.shortDescription}
                </p>
              </div>
              <div className="jobField">
                <p className="jobFieldTitle">Salary:&nbsp;</p>
                <p className="jobFieldText">{entry.fields.salary}</p>
              </div>
              <div className="jobField">
                <p className="jobFieldTitle">Location:&nbsp;</p>
                <p className="jobFieldText">
                  {titleCase(entry.fields.location)}
                </p>
              </div>
              <div className="jobField">
                <p className="jobFieldTitle">Type:&nbsp;</p>
                <p className="jobFieldText">{titleCase(entry.fields.type)}</p>
              </div>
            </div>
            <div className="applyForJobButtonBox">
              <Button
                onClick={() => handleClickOpen(entry)}
                variant="contained"
                sx={{ backgroundColor: "#4daeda", width: 250, fontSize: 16 }}
              >
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="paginationButtons">{renderPaginationButtons()}</div>
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

import React, { Fragment, useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import "./MyResume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ResumeSvg from "../../svg/ResumeSvg";

const MyResume = () => {
  const [disable, setDisabled] = useState(false);

  const downloadHandler = async (e) => {
    e.preventDefault();
    setDisabled(true);

    await axios.get("/api/v1/download/resume").then((res) => {
      FileDownload(res.data, "resume.pdf");
    });

    setDisabled(false);
  };
  return (
    <Fragment>
      <div className="my-resume">
        <div className="resume-left">
          <h6>My Resume</h6>
        </div>
        <div className="right-resume">
          <ResumeSvg className="resume-svg" />
        </div>
      </div>
      <div className="download">
        <button
          disabled={disable}
          className="blue-c-btn"
          onClick={(e) => {
            downloadHandler(e);
          }}
        >
          <FontAwesomeIcon className="download-icon" icon={faDownload} />{" "}
          Download Resume
        </button>
        {/* <Link to="/resume.pdf" target="_blank" download>
          Download
        </Link> */}
      </div>
    </Fragment>
  );
};

export default MyResume;

import React from "react";
import Card from "./UI/Card";
import "./SubmissionPage.css";

const SubmissionPage = (props) => {
  return (
    <div className="submissionContainer">
      <Card>
        <div className="cardContent">
          <h2>
            Country Selected: <i>{props.country}</i>
          </h2>

          <h2>
            State Selected: <i>{props.state}</i>
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default SubmissionPage;

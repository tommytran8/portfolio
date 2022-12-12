import React from "react";
import resume from "../../assets/Antra-Resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <object data={resume} type="application/pdf">
        <p>
          <a href="https://docs.google.com/document/d/1fHHdbMsqb9p97ejSR5YBzWYQuaYSiULklFck2jmT4XI/edit?usp=sharing">
            Resume Link
          </a>
        </p>
      </object>
    </div>
  );
};

export default Resume;

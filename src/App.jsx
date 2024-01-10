import React from "react";
import generatePDF from "react-to-pdf";
import Navbar from "./Navbar";
import ResumeBuilder from "./ResumeBuilder";
import InfoState from "./Context/InfoState";

export default function App() {
  const getTargetElement = () => document.getElementById("resume");

  const convertResumeToPdf = () => {
    const options = {
      filename: "resume.pdf",
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    generatePDF(getTargetElement, options);
  };

  return (
    <div>
      <Navbar convertResumeToPdf={convertResumeToPdf} />
      <InfoState>
        <ResumeBuilder />
      </InfoState>
    </div>
  );
}

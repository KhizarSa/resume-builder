import React, { useRef } from "react";
import generatePDF from "react-to-pdf";
import Navbar from "./Navbar";
import ResumeBuilder from "./ResumeBuilder";
import Resume from "./templates/test/Resume";

export default function App() {
  const targetRef = useRef();

  const convertResumeToPdf = () => {
    const options = {
      filename: "resume.pdf",
      html2canvas: { scale: 100 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    generatePDF(targetRef, options);
  };

  return (
    <div>
      <Navbar convertResumeToPdf={convertResumeToPdf} />
      <ResumeBuilder>
        <div ref={targetRef}>
          <Resume />
        </div>
      </ResumeBuilder>
    </div>
  );
}

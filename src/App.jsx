import React, { useRef } from "react";
// import generatePDF from "react-to-pdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "./Navbar";
import ResumeBuilder from "./ResumeBuilder";
import InfoState from "./Context/InfoState";
import Resume from "./templates/test/Resume";

export default function App() {
  const resumeRef = useRef(null);

  const convertResumeToPdf = async () => {
    const targetElement = resumeRef.current;

    if (!targetElement) {
      console.error("Resume element not found");
      return;
    }

    // Convert React component to canvas
    const canvas = await html2canvas(targetElement, { scale: 1.5 }); // Adjust scale for smaller image

    // Convert canvas to PDF
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const targetWidth = 210; // A4 width in mm
    const targetHeight = 297; // A4 height in mm

    // Calculate the aspect ratio to maintain proportions
    const aspectRatio = targetWidth / targetHeight;
    const adjustedWidth = targetWidth;
    const adjustedHeight = targetWidth / aspectRatio;

    const verticalMargin = (targetHeight - adjustedHeight) / 2;

    // Check if the adjusted height fits within the A4 height

    pdf.addImage(
      imgData,
      "PNG",
      0,
      verticalMargin,
      adjustedWidth,
      adjustedHeight
    );

    pdf.save("resume.pdf");
  };

  return (
    <div>
      <Navbar convertResumeToPdf={convertResumeToPdf} />
      <InfoState>
        <ResumeBuilder>
          <div ref={resumeRef}>
            <Resume />
          </div>
        </ResumeBuilder>
      </InfoState>
    </div>
  );
}

// const getTargetElement = () => document.getElementById("resume");

// const convertResumeToPdf = () => {
//   const options = {
//     filename: "resume.pdf",
//     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//   };
//   generatePDF(getTargetElement, options);
// };

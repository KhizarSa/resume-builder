import styles from "./Resume.module.css";
import util from "./Breakword.module.css";
import Box from "./components/Box";
import UserDetails from "./components/UserDetails";
import LayoutList from "./components/LayoutList";
import { useContext, useEffect, useState } from "react";
import infoContext from "../../Context/InfoContext";

export default function Resume() {
  const [educationInfo, setEducationInfo] = useState([
    ["Duration", "Degree Name", "University Name"],
  ]);

  const [contactInfo, setContactInfo] = useState([["Title", "Summary"]]);
  const [summaryInfo, setSummaryInfo] = useState("Enter your summary here....");
  const [experienceInfo, setExperienceInfo] = useState([
    ["Duration", "Company Name", "Job Role", "Enter the job description"],
  ]);

  const {
    education,
    contact,
    experience,
    summary,
    setEducation,
    setContact,
    setExperience,
    areAllValuesEmpty,
  } = useContext(infoContext);

  useEffect(
    function () {
      if (education === null || areAllValuesEmpty(education)) {
        setEducationInfo([["Duration", "Degree Name", "University Name"]]);
      }

      if (contact === null || areAllValuesEmpty(contact)) {
        setContactInfo([["Title", "Summary"]]);
      }

      if (experience === null || areAllValuesEmpty(experience)) {
        setExperienceInfo([
          ["Duration", "Company Name", "Job Role", "Enter the job description"],
        ]);
      }

      if (summary === null || summary === "") {
        setSummaryInfo("Enter your summary here....");
      }
    },
    [
      education,
      contact,
      experience,
      summary,
      setEducation,
      setContact,
      setExperience,
      areAllValuesEmpty,
    ]
  );

  useEffect(
    function () {
      if (education !== null && !areAllValuesEmpty(education)) {
        setEducationInfo(education);
      }

      if (contact !== null && !areAllValuesEmpty(contact)) {
        setContactInfo(contact);
      }

      if (experience !== null && !areAllValuesEmpty(experience)) {
        setExperienceInfo(experience);
      }

      if (summary !== null && summary !== "") {
        setSummaryInfo(summary);
      }
    },
    [education, contact, experience, summary, areAllValuesEmpty]
  );

  return (
    <div id="resume" className={`${styles.resume} ${util.breakWord}`}>
      <div className={styles.imgContainer}>
        <div className={styles.userImg} alt="Person"></div>
      </div>
      <UserDetails firstName="David" lastName="St. Peter" job="UX Designer" />
      <div className={`${styles.containerLeft} ${util.breakWord}`}>
        {educationInfo && (
          <Box title="Education">
            <LayoutList informations={educationInfo} />
          </Box>
        )}
        {contactInfo && (
          <Box title="Contact">
            <LayoutList informations={contactInfo} />
          </Box>
        )}
      </div>
      <div className={`${styles.containerRight} ${util.breakWord}`}>
        <Box title="Profile">
          <p className={styles.summary}>{summaryInfo}</p>
        </Box>

        <Box title="Experience">
          <div className={`${styles.experienceContainer} ${util.breakWord}`}>
            {experienceInfo.map((info, i) => {
              return (
                <div
                  className={`${styles.experience} ${util.breakWord}`}
                  key={i}
                >
                  <p className={styles.expInfo}>{info[i]}</p>
                  <h3 className={styles.role}>{info[i + 2]}</h3>
                  <p className={styles.expInfo}>{info[i + 1]}</p>
                  <p className={styles.infoText}>{info[i + 3]}</p>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    </div>
  );
}

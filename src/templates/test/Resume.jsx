import styles from "./Resume.module.css";
import Box from "./components/Box";
import UserDetails from "./components/UserDetails";
import LayoutList from "./components/LayoutList";
import InfoBox from "./components/InfoBox";
import { useContext, useEffect, useState } from "react";
import infoContext from "../../Context/InfoContext";

export default function Resume() {
  const [educationInfo, setEducationInfo] = useState([
    ["Duration", "Degree Name", "University Name"],
  ]);
  const [contactInfo, setContactInfo] = useState([["Title", "Summary"]]);

  const { education, contact } = useContext(infoContext);

  useEffect(
    function () {
      if (education.length !== 0) {
        setEducationInfo(education);
      }
    },
    [education]
  );

  useEffect(
    function () {
      if (contact.length !== 0) {
        setContactInfo(contact);
      }
    },
    [contact]
  );

  // const educationInfo = [
  //   ["2014-2019", "Degree Name", "University Name"],
  //   ["2010-2013", "Degree Name", "University Name"],
  // ];

  // const contactInfo = [["Phone", "+923308362123"]];

  const expInfo = [
    {
      duration: "2020-Present",
      companyName: "Company Name",
      role: "Senior UX Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciuntarchitecto, numquam dolores iusto velit",
    },
    {
      duration: "2018-2020",
      companyName: "Company Name",
      role: "Junior UI Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciuntarchitecto, numquam dolores iusto velit",
    },
  ];

  return (
    <div id="resume" className={`${styles.resume}`}>
      <img src="./img/person.jpg" className={styles.userImg} alt="Person" />
      <UserDetails firstName="David" lastName="St. Peter" job="UX Designer" />
      <div className={`${styles.containerLeft}`}>
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
      <div className={styles.containerRight}>
        <Box title="Profile">
          <p className={styles.summary}>
            For more Sales, Leads, Customer Engagement. Become an Author, Create
            Information Products. All done quickly and easily. No design or
            technical skills necessary.
          </p>
        </Box>

        <Box title="Experience">
          <div className={styles.experienceContainer}>
            {expInfo.map((info, i) => {
              return (
                <div className={styles.experience} key={i}>
                  <InfoBox>
                    <p className={styles.infoText}>{info.duration}</p>
                    <p className={styles.infoText}>{info.companyName}</p>
                  </InfoBox>
                  <InfoBox>
                    <h3 className={styles.role}>{info.role}</h3>
                    <p className={styles.infoText}>{info.description}</p>
                  </InfoBox>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    </div>
  );
}

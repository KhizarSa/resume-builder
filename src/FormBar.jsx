import { useState } from "react";
import styles from "./styles/FormBar.module.css";
import BarBtn from "./BarBtn";
import Form from "./Form";

export default function FormBar() {
  const [btnCreateIsActive, setBtnCreateIsActive] = useState(true);
  const [btnTemplateIsActive, setBtnTemplateIsActive] = useState(false);

  const toggleBtn1State = function () {
    setBtnCreateIsActive(true);
    setBtnTemplateIsActive(false);
  };

  const toggleBtn2State = function () {
    setBtnCreateIsActive(false);
    setBtnTemplateIsActive(true);
  };

  return (
    <div className={`${styles.bar}`}>
      <div className={styles.firstContainer}>
        <div className={styles.barBtnContainer}>
          <BarBtn toggleBtn={toggleBtn1State} isActive={btnCreateIsActive}>
            Create
          </BarBtn>
          <BarBtn toggleBtn={toggleBtn2State} isActive={btnTemplateIsActive}>
            Template
          </BarBtn>
        </div>
      </div>
      <div className={styles.secondContainer}>
        {btnCreateIsActive ? (
          <>
            <Form
              label="Personal Information"
              fields={[
                { type: "text", placeholder: "First Name" },
                { type: "text", placeholder: "Last Name" },
                { type: "text", placeholder: "Profession" },
              ]}
            />
            <Form
              label="Professional Summary"
              fields={[
                { type: "text", placeholder: "Title" },
                { type: "text", placeholder: "Profile Summary" },
              ]}
            />
            <Form
              label="Employment History"
              fields={[
                { type: "text", placeholder: "Job Title" },
                { type: "text", placeholder: "Employer" },
                { type: "text", placeholder: "City" },
              ]}
            />
          </>
        ) : (
          <div>Templates</div>
        )}
      </div>
    </div>
  );
}

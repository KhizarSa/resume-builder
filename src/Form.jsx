import { useContext, useEffect, useState } from "react";
import styles from "./styles/Form.module.css";
import FormLabel from "./FormLabel";
import Btn from "./Btn";
import infoContext from "./Context/InfoContext";
import FormField from "./FormField";

export default function Form({ label, fields }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fieldCount, setFieldCount] = useState(1);
  const [editable, setEditable] = useState(true);

  const { education, contact, setEducation, setContact } =
    useContext(infoContext);

  useEffect(
    function () {
      if (
        label.split(" ")[0].toLowerCase() === "education" &&
        education === null
      ) {
        setEducation([fields.map(() => "")]);
      }

      if (label.split(" ")[0].toLowerCase() === "contact" && contact === null) {
        setContact([fields.map(() => "")]);
      }
    },
    [education, contact, setEducation, setContact, fields, label]
  );

  function handleLabelClick() {
    setIsOpen((val) => !val);
  }

  function handleInputChange(groupIndex, index, value) {
    if (label.split(" ")[0].toLowerCase() === "education") {
      setEducation((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo[groupIndex] = newInfo[groupIndex].map((item, i) =>
          i === index ? value : item
        );
        return newInfo;
      });
    }

    if (label.split(" ")[0].toLowerCase() === "contact") {
      setContact((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo[groupIndex] = newInfo[groupIndex].map((item, i) =>
          i === index ? value : item
        );
        return newInfo;
      });
    }
  }

  function addMoreField() {
    setFieldCount((count) => count + 1);

    if (label.split(" ")[0].toLowerCase() === "education") {
      setEducation((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo.push(fields.map(() => ""));
        return newInfo;
      });
    }

    if (label.split(" ")[0].toLowerCase() === "contact") {
      setContact((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo.push(fields.map(() => ""));
        return newInfo;
      });
    }
  }

  function submitInfo() {
    setEditable(false);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.formContainer}>
      <FormLabel isOpen={isOpen} handleLabelClick={handleLabelClick}>
        {label}
      </FormLabel>
      {isOpen && (
        <div className={styles.formFieldsContainer}>
          {Array.from({ length: fieldCount }).map((_, i) => {
            return (
              <div key={i} className={styles.formFieldsGroup}>
                {fields?.map((field, j) => (
                  <FormField
                    key={j}
                    groupIndex={i}
                    index={j}
                    editable={editable}
                    type={field.type}
                    placeholder={field.placeholder}
                    onHandleInputChange={handleInputChange}
                  />
                ))}
              </div>
            );
          })}
          {editable && (
            <span onClick={addMoreField} className={styles.addMoreBtn}>
              Add more +
            </span>
          )}
          <div className={styles.btnContainer}>
            {editable ? (
              <>
                <Btn onClick={submitInfo} btnType="btn--primary">
                  Save
                </Btn>
                <Btn
                  onClick={() => setEditable(false)}
                  btnType="btn--secondary"
                >
                  Cancel
                </Btn>
              </>
            ) : (
              <Btn onClick={() => setEditable(true)} btnType="btn--primary">
                Edit
              </Btn>
            )}
          </div>
        </div>
      )}
    </form>
  );
}

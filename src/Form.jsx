import { useContext, useEffect, useState } from "react";
import styles from "./styles/Form.module.css";
import FormLabel from "./FormLabel";
import Btn from "./Btn";
import infoContext from "./Context/InfoContext";
import FormField from "./FormField";

export default function Form({ label, fields, rows, cols, addMore = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fieldCount, setFieldCount] = useState(1);
  const [editable, setEditable] = useState(false);

  const {
    education,
    contact,
    experience,
    setEducation,
    setContact,
    setExperience,
    setSummary,
    checkLabel,
  } = useContext(infoContext);

  useEffect(
    function () {
      if (checkLabel(label, "education") && education === null) {
        setEducation([fields.map(() => "")]);
      }

      if (checkLabel(label, "contact") && contact === null) {
        setContact([fields.map(() => "")]);
      }

      if (checkLabel(label, "employment") && experience === null) {
        setExperience([fields.map(() => "")]);
      }
    },
    [
      education,
      contact,
      experience,
      setEducation,
      setContact,
      setExperience,
      fields,
      label,
      checkLabel,
    ]
  );

  function handleLabelClick() {
    setIsOpen((val) => !val);
  }

  function handleInputChange(groupIndex, index, value) {
    if (checkLabel(label, "education")) {
      setEducation((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo[groupIndex] = newInfo[groupIndex].map((item, i) =>
          i === index ? value : item
        );
        return newInfo;
      });
    }

    if (checkLabel(label, "contact")) {
      setContact((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo[groupIndex] = newInfo[groupIndex].map((item, i) =>
          i === index ? value : item
        );
        return newInfo;
      });
    }

    if (checkLabel(label, "employment")) {
      setExperience((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo[groupIndex] = newInfo[groupIndex].map((item, i) =>
          i === index ? value : item
        );
        return newInfo;
      });
    }

    if (checkLabel(label, "summary")) {
      setSummary(value);
    }
  }

  function addMoreField() {
    if (checkLabel(label, "summary")) return;

    setFieldCount((count) => count + 1);

    if (checkLabel(label, "education")) {
      setEducation((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo.push(fields.map(() => ""));
        return newInfo;
      });
    }

    if (checkLabel(label, "contact")) {
      setContact((prevInfo) => {
        const newInfo = [...prevInfo];
        newInfo.push(fields.map(() => ""));
        return newInfo;
      });
    }

    if (checkLabel(label, "employment")) {
      setEducation((prevInfo) => {
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
                    label={label}
                    type={field.type}
                    rows={rows || null}
                    cols={cols || null}
                    placeholder={field.placeholder}
                    onHandleInputChange={handleInputChange}
                  />
                ))}
              </div>
            );
          })}
          {editable && addMore && (
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

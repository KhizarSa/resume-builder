import { useContext, useEffect, useState } from "react";
import styles from "./styles/FormField.module.css";
import infoContext from "./Context/InfoContext";

export default function FormField({
  groupIndex,
  index,
  type,
  editable,
  label,
  placeholder,
  onHandleInputChange,
  rows,
  cols,
}) {
  const { education, contact, experience, checkLabel, areAllValuesEmpty } =
    useContext(infoContext);
  const [infoValue, setInfoValue] = useState(null);

  useEffect(() => {
    if (
      checkLabel(label, "education") ||
      (!education && areAllValuesEmpty(education))
    ) {
      setInfoValue(null);
    }

    if (
      checkLabel(label, "contact") ||
      (!contact && areAllValuesEmpty(contact))
    ) {
      setInfoValue(null);
    }

    if (
      checkLabel(label, "employment") &&
      (!experience || areAllValuesEmpty(experience))
    ) {
      setInfoValue(null);
    }
  }, [education, contact, experience, label, checkLabel, areAllValuesEmpty]);

  useEffect(() => {
    if (
      checkLabel(label, "education") &&
      education &&
      !areAllValuesEmpty(education)
    ) {
      setInfoValue(education[groupIndex][index]);
    }

    if (
      checkLabel(label, "contact") &&
      contact &&
      !areAllValuesEmpty(contact)
    ) {
      setInfoValue(contact[groupIndex][index]);
    }

    if (
      checkLabel(label, "employment") &&
      experience &&
      !areAllValuesEmpty(experience)
    ) {
      setInfoValue(experience[groupIndex][index]);
    }
  }, [
    education,
    contact,
    experience,
    groupIndex,
    index,
    label,
    checkLabel,
    areAllValuesEmpty,
  ]);

  return (
    <>
      {editable ? (
        rows && cols && type === "textarea" ? (
          <textarea
            className={styles.formField}
            name="message"
            rows={rows}
            cols={cols}
            placeholder={infoValue ? infoValue : placeholder}
            onChange={(e) =>
              onHandleInputChange(groupIndex, index, e.target.value)
            }
          ></textarea>
        ) : (
          <input
            className={styles.formField}
            type={type}
            placeholder={infoValue ? infoValue : placeholder}
            onChange={(e) =>
              onHandleInputChange(groupIndex, index, e.target.value)
            }
          />
        )
      ) : (
        <div className={styles.nonEditableField}>
          {infoValue && infoValue !== "" ? infoValue : placeholder}
        </div>
      )}
    </>
  );
}

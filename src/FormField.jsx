import { useState } from "react";
import styles from "./styles/FormField.module.css";

export default function FormField({
  groupIndex,
  index,
  type,
  editable,
  val,
  placeholder,
  onHandleInputChange,
}) {
  return (
    <>
      {editable ? (
        <input
          className={styles.formField}
          type={type}
          placeholder={placeholder}
          value={val}
          onChange={(e) =>
            onHandleInputChange(groupIndex, index, e.target.value)
          }
        />
      ) : (
        <div className={styles.nonEditableField}>{val || placeholder}</div>
      )}
    </>
  );
}

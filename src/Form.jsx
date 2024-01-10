import { useState } from "react";
import styles from "./styles/Form.module.css";
import FormField from "./FormField";
import FormLabel from "./FormLabel";
import Btn from "./Btn";

export default function Form({ label, fields }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleLabelClick() {
    setIsOpen((val) => !val);
  }

  return (
    <form className={styles.formContainer}>
      <FormLabel isOpen={isOpen} handleLabelClick={handleLabelClick}>
        {label}
      </FormLabel>
      {isOpen && (
        <div className={styles.formFieldsContainer}>
          {fields.map((field, i) => (
            <FormField
              key={i}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
          <div className={styles.btnContainer}>
            <Btn btnType="btn--primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                className={styles.icon}
              >
                <path
                  fill="currentColor"
                  d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"
                />
              </svg>
              Edit
            </Btn>
          </div>
        </div>
      )}
    </form>
  );
}
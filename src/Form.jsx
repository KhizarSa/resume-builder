import { useContext, useState } from "react";
import styles from "./styles/Form.module.css";
import FormLabel from "./FormLabel";
import Btn from "./Btn";
import infoContext from "./Context/InfoContext";

export default function Form({ label, fields }) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(fields.map(() => ""));
  const { setEducation, setContact } = useContext(infoContext);

  function handleLabelClick() {
    setIsOpen((val) => !val);
  }

  function handleInputChange(index, value) {
    setInfo((prevInfo) => {
      const newInfo = [...prevInfo];
      newInfo[index] = value;
      return newInfo;
    });
  }

  function onSubmitInfo(e) {
    e.preventDefault();

    if (label.toLowerCase() === "education information")
      setEducation((prev) => [...prev, info]);

    if (label.toLowerCase() === "contact information")
      setContact((prev) => [...prev, info]);
  }

  return (
    <form onSubmit={onSubmitInfo} className={styles.formContainer}>
      <FormLabel isOpen={isOpen} handleLabelClick={handleLabelClick}>
        {label}
      </FormLabel>
      {isOpen && (
        <div className={styles.formFieldsContainer}>
          {fields.map((field, i) => (
            <input
              key={i}
              className={styles.formField}
              type={field.type}
              placeholder={field.placeholder}
              value={info[i]}
              onChange={(e) => handleInputChange(i, e.target.value)}
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

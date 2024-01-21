import { useState } from "react";
import infoContext from "./InfoContext";

export default function InfoState(props) {
  const [education, setEducation] = useState(null);
  const [contact, setContact] = useState(null);
  const [experience, setExperience] = useState(null);
  const [summary, setSummary] = useState(null);

  function checkLabel(label, compValue) {
    return label.split(" ")[0].toLowerCase() === compValue;
  }

  function areAllValuesEmpty(info) {
    const checkArr = info.map((arr) => arr.every((value) => value === ""));

    return checkArr.every((val) => val === true);
  }

  return (
    <infoContext.Provider
      value={{
        education,
        contact,
        experience,
        summary,
        setEducation,
        setContact,
        setExperience,
        setSummary,
        checkLabel,
        areAllValuesEmpty,
      }}
    >
      {props.children}
    </infoContext.Provider>
  );
}

import { useState } from "react";
import infoContext from "./InfoContext";

export default function InfoState(props) {
  const [education, setEducation] = useState([]);
  const [contact, setContact] = useState([]);

  return (
    <infoContext.Provider
      value={{ education, contact, setEducation, setContact }}
    >
      {props.children}
    </infoContext.Provider>
  );
}

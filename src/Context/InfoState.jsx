import { useState } from "react";
import infoContext from "./InfoContext";

export default function InfoState(props) {
  const [education, setEducation] = useState(null);
  const [contact, setContact] = useState(null);

  return (
    <infoContext.Provider
      value={{
        education,
        contact,
        setEducation,
        setContact,
      }}
    >
      {props.children}
    </infoContext.Provider>
  );
}

import Title from "./Title";
import styles from "../Breakword.module.css";

export default function Box({ title, children }) {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    gap: "1.5rem",
  };

  return (
    <div style={boxStyle} className={styles.breakWord}>
      <Title>{title}</Title>
      {children}
    </div>
  );
}

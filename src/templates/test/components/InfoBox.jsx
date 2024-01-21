import styles from "../Breakword.module.css";

export default function InfoBox({ color = "#212121", children }) {
  const InfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    color: color,
    width: "100%",
    height: "100%",
  };

  return (
    <div style={InfoStyle} className={styles.breakWord}>
      {children}
    </div>
  );
}

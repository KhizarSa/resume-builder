import InfoBox from "./InfoBox";
import styles from "../Breakword.module.css";

export default function LayoutList({ informations }) {
  const layoutListStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };

  const infoTextStyle = {};

  return (
    <ul style={layoutListStyle} className={styles.breakWord}>
      {informations.map((info, i) => {
        return (
          <InfoBox key={i}>
            {info.map((infoText, i) => (
              <p key={i} style={infoTextStyle}>
                {infoText}
              </p>
            ))}
          </InfoBox>
        );
      })}
    </ul>
  );
}

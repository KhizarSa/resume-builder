import InfoBox from "./InfoBox";

export default function LayoutList({ informations }) {
  const layoutListStyle = {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  };

  const infoTextStyle = {};

  return (
    <ul style={layoutListStyle}>
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

export default function InfoBox({ children }) {
  const InfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    color: "#212121",
  };

  return <div style={InfoStyle}>{children}</div>;
}

import Title from "./Title";

export default function Box({ title, children }) {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  };

  return (
    <div style={boxStyle}>
      <Title>{title}</Title>
      {children}
    </div>
  );
}

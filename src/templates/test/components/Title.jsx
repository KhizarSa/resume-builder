export default function Title({ children }) {
  const titleStyle = {
    position: "relative",
    marginBottom: "3rem",
    color: "#000",
  };

  const afterStyle = {
    content: " ",
    display: "block",
    backgroundColor: "var(--color-primary)",
    width: "4rem",
    height: "0.4rem",
    borderRadius: "30rem",
    marginTop: "1rem",
    position: "absolute",
    left: "0",
  };

  return (
    <h2 style={titleStyle}>
      {children}
      <span style={afterStyle}></span>
    </h2>
  );
}

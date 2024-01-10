export default function Title({ children }) {
  const titleStyle = {
    position: "relative",
    marginBottom: "3rem",
  };

  const afterStyle = {
    content: " ",
    display: "block",
    backgroundColor: "var(--color-primary)",
    width: "3rem",
    height: "0.3rem",
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

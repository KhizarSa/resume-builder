export default function UserDetails({ firstName, lastName, job }) {
  const userDetailsContainer = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifySelf: "start",
    lineHeight: "1.2",
    gap: "1.2rem",
  };

  const nameContainer = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifySelf: "start",
    gap: "0.5rem",
  };

  const nameStyle = {
    fontSize: "3.8rem",
    fontWeight: 600,
    color: "#000",
  };

  const jobStyle = {
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "var(--color-dark-gray)",
  };

  return (
    <div style={userDetailsContainer}>
      <div style={nameContainer}>
        <span style={nameStyle}>{firstName}</span>
        <span style={nameStyle}>{lastName}</span>
      </div>
      <span style={jobStyle}>{job}</span>
    </div>
  );
}

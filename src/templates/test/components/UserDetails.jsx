export default function UserDetails({ firstName, lastName, job }) {
  const userDetailsContainer = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifySelf: "start",
    lineHeight: "1.2",
  };

  const nameStyle = {
    fontSize: "3.2rem",
    fontWeight: 600,
  };

  const jobStyle = {
    fontSize: "1.4rem",
    fontWeight: 500,
    color: "var(--color-dark-gray)",
  };

  return (
    <div style={userDetailsContainer}>
      <span style={nameStyle}>{firstName}</span>
      <span style={nameStyle}>{lastName}</span>
      <span style={jobStyle}>{job}</span>
    </div>
  );
}

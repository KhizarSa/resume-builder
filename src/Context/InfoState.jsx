import infoContext from "./InfoContext";

export default function InfoState(props) {
  return <infoContext.Provider>{props.children}</infoContext.Provider>;
}

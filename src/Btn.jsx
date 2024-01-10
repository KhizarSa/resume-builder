import styles from "./styles/Btn.module.css";

export default function Btn({
  btnType,
  children,
  onClick = () => {
    return;
  },
}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[btnType]}`}>
      {children}
    </button>
  );
}

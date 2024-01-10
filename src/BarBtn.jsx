import styles from "./styles/BarBtn.module.css";

export default function BarBtn({ toggleBtn, isActive, children }) {
  return (
    <button
      onClick={toggleBtn}
      className={`${styles.barBtn} ${isActive && styles.btnActive}`}
    >
      {children}
    </button>
  );
}

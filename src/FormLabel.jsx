import styles from "./styles/FormLabel.module.css";

export default function FormLabel({ children, isOpen, handleLabelClick }) {
  return (
    <div className={styles.formLabel} onClick={handleLabelClick}>
      <span>{children}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
  );
}

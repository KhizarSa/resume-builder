import styles from "./styles/FormField.module.css";

export default function FormField({ type, placeholder, val }) {
  return (
    <input
      className={styles.formField}
      type={type}
      placeholder={placeholder}
      value={val}
      onChange={(e) => handleInputChange(i, e.target.value)}
    />
  );
}

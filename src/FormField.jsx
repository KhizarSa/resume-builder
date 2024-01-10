import styles from "./styles/FormField.module.css";

export default function FormField({ type, placeholder }) {
  return (
    <input className={styles.formField} type={type} placeholder={placeholder} />
  );
}

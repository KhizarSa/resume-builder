import styles from "./styles/ResumeBuilder.module.css";
import FormBar from "./FormBar";
import Resume from "./templates/test/Resume";
import EditBar from "./EditBar";

export default function ResumeBuilder({ children }) {
  return (
    <section className={`${styles.resumeBuilder}`}>
      <FormBar />
      <div className={`${styles.resumeContainer}`}>{children}</div>
      <EditBar />
    </section>
  );
}

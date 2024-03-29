import Btn from "./Btn";
import Logo from "./Logo";
import styles from "./styles/Navbar.module.css";

export default function Navbar({ convertResumeToPdf }) {
  const handleDownloadClick = () => {
    convertResumeToPdf();
  };

  return (
    <header className={styles.navbar}>
      <Logo />
      <div className={styles.btnContainer}>
        <Btn onClick={handleDownloadClick} btnType="btn--secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0m-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z"
            />
          </svg>
          Download
        </Btn>
        <Btn btnType="btn--primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19z"
            />
          </svg>
          Share
        </Btn>
      </div>
    </header>
  );
}

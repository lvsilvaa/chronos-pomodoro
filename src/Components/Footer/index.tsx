import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footerLink}>
        Entenda como funciona a técnica pomodoro
      </a>
      <a
        href="https://github.com/lvsilvaa"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Leonardo
        Silva
      </a>
    </footer>
  );
}

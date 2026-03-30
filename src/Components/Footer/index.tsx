import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro" className={styles.footerLink}>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Leonardo
      Silva
      <div className={styles.icons}>
        <a
          href="https://github.com/lvsilvaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../imagens/github.png"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/leonardosilva-826083231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../imagens/logolinkedin.png"></img>
        </a>
      </div>
    </footer>
  );
}

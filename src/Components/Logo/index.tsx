import styles from "./styles.module.css";
import "../../style/global.css";
import "../../style/theme.css";
import { TimerIcon } from "lucide-react";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        {" "}
        <TimerIcon size={70} />
        <span>Chronos</span>
      </a>
    </div>
  );
}

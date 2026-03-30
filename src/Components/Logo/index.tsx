import styles from "./styles.module.css";
import "../../style/global.css";
import "../../style/theme.css";
import { TimerIcon } from "lucide-react";
import { RouterLink } from "../RouterLink";

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href="/">
        {" "}
        <TimerIcon size={70} />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}

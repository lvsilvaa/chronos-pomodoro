import styles from "./styles.module.css";
import "../../style/global.css";
import "../../style/theme.css";

export function CountDown() {
  return <div className={styles.count}>00:00</div>;
}

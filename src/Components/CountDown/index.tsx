import styles from "./styles.module.css";
// import type { HomeProps } from "../../pages/Home";
import "../../style/global.css";
import "../../style/theme.css";
import { useTaskContext } from "../../Contexts/useTaskContext";

export function CountDown(/*{ state }: HomeProps*/) {
  const { state } = useTaskContext();
  return <div className={styles.count}>{state.formattedSecondsRemaining}</div>;
}

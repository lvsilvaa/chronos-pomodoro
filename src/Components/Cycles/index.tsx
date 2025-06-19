import styles from "./styles.module.css";

export function Cyrcles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.working}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.working}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.working}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.working}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longBrakTime}`}></span>
      </div>
    </div>
  );
}

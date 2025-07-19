import { CopyCheck } from "lucide-react";
import { useTaskContext } from "../../Contexts/useTaskContext";
import { getNextCycle } from "../../util/getNextCycle";
import { getNextCycleType } from "../../util/getNextCycleType";
import styles from "./styles.module.css";

export function Cyrcles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              arial-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

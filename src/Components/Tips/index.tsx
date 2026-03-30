import { useTaskContext } from "../../Contexts/useTaskContext";
import { getNextCycle } from "../../util/getNextCycle";
import { getNextCycleType } from "../../util/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsNoActiveTask = {
    workTime: <span> Proximo ciclo é de {state.config.workTime}min </span>,
    longBreakTime: (
      <span> Proximo ciclo é de {state.config.longBreakTime}min</span>
    ),
    shortBreakTime: (
      <span> Proximo ciclo é de {state.config.shortBreakTime}min</span>
    ),
  };

  const tipsActiveTask = {
    workTime: (
      <span>
        {" "}
        Proximo ciclo descanso curto {state.config.shortBreakTime}min
      </span>
    ),
    longBreakTime: <span> Descanso longo</span>,
    shortBreakTime: (
      <span> Matenha-se em foco por {state.config.workTime}min</span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsNoActiveTask[nextCycleType]}
    </>
  );
}

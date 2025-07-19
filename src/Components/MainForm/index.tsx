import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cyrcles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import "../../style/global.css";
import { useTaskContext } from "../../Contexts/useTaskContext";
import { useRef /*useState*/ } from "react";
import { getNextCycle } from "../../util/getNextCycle";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycleType } from "../../util/getNextCycleType";
import { formatSecondsToMinutes } from "../../util/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  /* const [taskName, setTaskName] = useState(""); Forma Controlada */
  const taskInputName = useRef<HTMLInputElement>(null); // Nao controlada Salva em referencia

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); //Não seue o link

    if (taskInputName.current === null) return;

    const taskName = taskInputName.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task:"
          id="meuInput"
          type="text"
          placeholder="Ex. Estudar para prova"
          ref={taskInputName}
          disabled={!!state.activeTask}

          /*value={taskName}
          onChange={(e) => setTaskName(e.target.value)}*/
        />
      </div>
      <div className="formRow">
        <p>Mantenha-se em foco por {state.config.workTime} min</p>
      </div>
      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cyrcles />
        </div>
      )}
      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            aria-label="Iniciar nova Tarefa"
            title="Iniciar nova Tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="submit button"
          />
        ) : (
          <DefaultButton
            aria-label="Parar Tarefa"
            title="Parar Tarefa"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="Not send form"
          />
        )}
      </div>
    </form>
  );
}

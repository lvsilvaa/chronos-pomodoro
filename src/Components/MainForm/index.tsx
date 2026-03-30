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
import { TaskActionTypes } from "../../Contexts/TaskContex/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/showMessage";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  /* const [taskName, setTaskName] = useState(""); Forma Controlada */
  const taskInputName = useRef<HTMLInputElement>(null); // Nao controlada Salva em referencia
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); //Não seue o link
    showMessage.dismiss();

    if (taskInputName.current === null) return;

    const taskName = taskInputName.current.value.trim();

    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa!!");
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }
  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
          defaultValue={lastTaskName}

          /*value={taskName}
          onChange={(e) => setTaskName(e.target.value)}*/
        />
      </div>
      <div className="formRow">
        <Tips />
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

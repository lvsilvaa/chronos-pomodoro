import { PlayCircleIcon } from "lucide-react";
import { Cyrcles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import "../../style/global.css";
import { useTaskContext } from "../../Contexts/useTaskContext";
import { useRef /*useState*/ } from "react";
import type { taskModel } from "../../models/taskModel";

export function MainForm() {
  const { setState } = useTaskContext();
  /* const [taskName, setTaskName] = useState(""); Forma Controlada */
  const taskInputName = useRef<HTMLInputElement>(null); // Nao controlada Salva em referencia

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); //Não seue o link

    if (taskInputName.current === null) return;

    const taskName = taskInputName.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask: taskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completDate: null,
      interruptDate: null,
      duration: 1,
      type: "working",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, // conferir depois
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  const { state } = useTaskContext();
  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task:"
          id="meuInput"
          type="text"
          placeholder="Ex. Estudar para prova"
          ref={taskInputName}

          /*value={taskName}
          onChange={(e) => setTaskName(e.target.value)}*/
        />
      </div>
      <div className="formRow">
        <p>Mantenha-se em foco por {state.config.working} min</p>
      </div>
      <div className="formRow">
        <Cyrcles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}

import { PlayCircleIcon } from "lucide-react";
import { Cyrcles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
/*import type { HomeProps } from "../../pages/Home";*/

import "../../style/global.css";
import { useTaskContext } from "../../Contexts/useTaskContext";

export function MainForm(/*{ state }: HomeProps*/) {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); //Não seue o link
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

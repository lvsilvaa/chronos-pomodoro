import { PlayCircleIcon } from "lucide-react";
import { Cyrcles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Task:"
          id="meuInput"
          type="text"
          placeholder="Test"
        />
      </div>
      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
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

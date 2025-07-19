import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContexProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};
export const TaskContext = createContext<TaskContexProps>(initialContextValue);

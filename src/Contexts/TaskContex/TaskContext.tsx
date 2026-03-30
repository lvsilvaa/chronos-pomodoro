import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContexProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};
export const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};
export const TaskContext = createContext<TaskContexProps>(initialContextValue);

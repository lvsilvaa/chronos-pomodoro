import { useContext } from "react";
import { TaskContext } from "./TaskContex/TaskContext";

export function useTaskContext() {
  return useContext(TaskContext);
}

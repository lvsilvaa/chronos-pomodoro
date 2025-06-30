import type { TaskStateModel } from "./taskStateModel";

export type taskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completDate: number | null;
  interruptDate: number | null;
  type: keyof TaskStateModel["config"];
};

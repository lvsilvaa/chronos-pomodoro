import type { taskModel } from "./taskModel";

export type TaskStateModel = {
  tasks: taskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: taskModel | null;
  currentCycle: number;
  config: {
    working: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

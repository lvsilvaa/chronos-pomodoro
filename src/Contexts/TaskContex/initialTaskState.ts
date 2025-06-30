import type { TaskStateModel } from "../../models/taskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    working: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

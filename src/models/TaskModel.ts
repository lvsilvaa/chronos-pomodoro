import type { CycleType } from "../util/getNextCycleType";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completDate: number | null;
  interruptDate: number | null;
  type: CycleType;
};

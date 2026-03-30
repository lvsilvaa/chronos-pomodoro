import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimeWorkerMananger | null = null;

export class TimeWorkerMananger {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timeWorker.js", import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimeWorkerMananger();
    }
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}

import {Injectable} from "angular2/core";
// import {Http} from "angular2/http";
import {Task} from "./task.model";

@Injectable()
export class TasksDataService {

  private _tasks: Array<Task>;

  constructor() {
    this._tasks = [
      new Task("Dishes"),
      new Task("Cleaning the garage"),
      new Task("Mow the grass")
    ];
  }

  get tasks(): Array<Task> {
    return this._tasks;
  }
}

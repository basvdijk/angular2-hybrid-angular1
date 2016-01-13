import {Injectable} from "angular2/core";
// import {Http} from "angular2/http";
import {TaskModel} from "./tasks.model";

@Injectable()
export class TasksDataService {

  private _tasks: Array<TaskModel>;

  constructor() {
    this._tasks = [
      new TaskModel("Dishes"),
      new TaskModel("Cleaning the garage"),
      new TaskModel("Mow the grass")
    ];
  }

  get tasks(): Array<TaskModel> {
    return this._tasks;
  }
}

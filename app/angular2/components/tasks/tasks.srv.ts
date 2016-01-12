//import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {TaskModel} from "./tasks.model"

//@Injectable()
export class TasksDataService {

  tasks:Array<any>;

  constructor(http:Http) {
    this.tasks = [
      new TaskModel("Dishes"),
      new TaskModel("Cleaning the garage"),
      new TaskModel("Mow the grass")
    ];
  }

  getTasks() {
    return this.tasks;
  }
}
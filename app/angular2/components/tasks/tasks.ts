import {Component, View} from "angular2/core";
//import {TasksDataService} from "./tasks.srv";

@Component({
    selector: "tasks"
})

@View({
    templateUrl: "../app/angular2/components/tasks/tasks.html",
})

export class Tasks {

  tasksVariable:Array<any>;

  //constructor(public tasksDataService: TasksDataService) {}

  constructor() {
    this.tasksVariable = [
      "task 1",
      "task 2",
      "task 3"
    ];
  }

}

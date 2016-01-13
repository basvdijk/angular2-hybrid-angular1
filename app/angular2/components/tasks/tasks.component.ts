import {Component, View} from "angular2/core";
import {Injectable} from "angular2/core";

@Component({
    selector: "tasks",
})

@View({
    templateUrl: "../app/angular2/components/tasks/tasks.html",
})

@Injectable()
export class Tasks {

  tasksVariable: Array<any>;
  tasksServiceData: Array<any>;

  constructor() {

    this.tasksVariable = [
      "task 1",
      "task 2",
      "task 3"
    ];


  }

}
